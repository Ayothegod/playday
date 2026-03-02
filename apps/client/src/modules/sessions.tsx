import { SessionCard, type SessionData } from "@/shared/components/SessionCard";
import { TopBar } from "@/shared/components/TopBar";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/components/ui/tabs";
import { getUserFromStorage, userSessions } from "@/shared/lib/mockData";
import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function MySessionsPage() {
  const router = useNavigate();
  // const [user, setUser] = useState<{ name: string; email: string } | null>(
  //   null,
  // );
  const [loading] = useState(true);
  const [activeTab, setActiveTab] = useState("upcoming");

  useEffect(() => {
    const userData = getUserFromStorage();
    if (!userData) {
      router("/signin");
      return;
    }
    // setUser(userData);
    // setLoading(false);
  }, [router]);

  const upcomingSessions = userSessions.filter(
    (s) => new Date(s.date) > new Date(),
  );
  const pastSessions = userSessions.filter(
    (s) => new Date(s.date) <= new Date(),
  );

  const handleSessionClick = (session: SessionData) => {
    router(`/session/${session.id}`);
  };

  if (loading) {
    return (
      <main className="bg-background min-h-screen">
        <TopBar
          title="Loading..."
          showBack
          // onBackClick={() => router.back()}
        />
      </main>
    );
  }

  return (
    <main className="bg-background min-h-screen pb-8">
      {/* Top Bar */}
      <TopBar
        title="My Sessions"
        subtitle={`${upcomingSessions.length} upcoming games`}
        showBack
        // onBackClick={() => router.push("/dashboard")}
      />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-6 md:py-8">
        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upcoming" className="gap-2">
              <Calendar size={16} />
              <span>Upcoming</span>
              <Badge className="ml-2 bg-primary/20 text-primary border-0">
                {upcomingSessions.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="past" className="gap-2">
              <span>Past</span>
              <Badge className="ml-2 bg-secondary/20 text-muted-foreground border-0">
                {pastSessions.length}
              </Badge>
            </TabsTrigger>
          </TabsList>

          {/* Upcoming Tab */}
          <TabsContent value="upcoming" className="space-y-4 mt-6">
            {upcomingSessions.length > 0 ? (
              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div key={session.id}>
                    <SessionCard
                      session={session}
                      onClick={() => handleSessionClick(session)}
                      compact={false}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <Card className="bg-card/50 border-border/50 p-8 text-center">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  No upcoming games
                </h3>
                <p className="text-muted-foreground mb-6">
                  Find and join sessions to get started playing
                </p>
                <Link to="/dashboard">
                  <Button>Browse Sessions</Button>
                </Link>
              </Card>
            )}
          </TabsContent>

          {/* Past Tab */}
          <TabsContent value="past" className="space-y-4 mt-6">
            {pastSessions.length > 0 ? (
              <div className="space-y-4">
                {pastSessions.map((session) => (
                  <div key={session.id} className="opacity-75">
                    <SessionCard
                      session={session}
                      onClick={() => handleSessionClick(session)}
                      compact={false}
                      showActions={false}
                    />
                    <div className="mt-2 text-sm text-muted-foreground text-center">
                      Completed
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <Card className="bg-card/50 border-border/50 p-8 text-center">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  No past games
                </h3>
                <p className="text-muted-foreground">
                  Your past games will appear here
                </p>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
