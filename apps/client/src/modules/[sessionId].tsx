import { type SessionData } from "@/shared/components/SessionCard";
import { SportsIcon } from "@/shared/components/SportIcon";
import { SpotIndicator } from "@/shared/components/SpotIndicator";
import { TopBar } from "@/shared/components/TopBar";
import { Avatar, AvatarFallback } from "@/shared/components/ui/avatar";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";
import { getUserFromStorage, mockSessions } from "@/shared/lib/mockData";
import { Clock, MapPin, MessageCircle, Share2, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function SessionDetailPage() {
  const navigate = useNavigate();
  const params = useParams();
  const sessionId = params.id as string;
  const [session, setSession] = useState<SessionData | null>(null);
  const [loading] = useState(true);
  const [isJoined, setIsJoined] = useState(false);
  const [user] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    const userData = getUserFromStorage();
    if (!userData) {
      navigate("/signin");
      return;
    }
    // setUser(userData);

    // Find session
    const foundSession = mockSessions.find((s) => s.id === sessionId);
    if (foundSession) {
      // setSession(foundSession);
      // setIsJoined(Math.random() > 0.5); // Random for demo
    }
    // setLoading(false);
  }, [sessionId, navigate]);

  const handleJoin = () => {
    if (session) {
      setIsJoined(true);
      setSession({
        ...session,
        availableSpots: Math.max(0, session.availableSpots - 1),
        attendees: [...session.attendees, { name: user?.name || "You" }],
      });
    }
  };

  const handleLeave = () => {
    if (session) {
      setIsJoined(false);
      setSession({
        ...session,
        availableSpots: session.availableSpots + 1,
        attendees: session.attendees.slice(0, -1),
      });
    }
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

  if (!session) {
    return (
      <main className="bg-background min-h-screen">
        <TopBar
          title="Session Not Found"
          showBack
          // onBackClick={() => router.back()}
        />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Card className="bg-card border-border/50 p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Session not found
            </h2>
            <Link to="/dashboard">
              <Button>Back to Dashboard</Button>
            </Link>
          </Card>
        </div>
      </main>
    );
  }

  const isFull = session.availableSpots === 0;

  return (
    <main className="bg-background min-h-screen pb-24">
      {/* Top Bar */}
      <TopBar
        title={session.title}
        showBack
        // onBackClick={() => router.back()}
      />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
        {/* Session Header Card */}
        <Card className="bg-card border-border/50 p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-start gap-4">
              <SportsIcon sport={session.sport} size="lg" />
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="text-xs">
                    {session.skillLevel.charAt(0).toUpperCase() +
                      session.skillLevel.slice(1)}
                  </Badge>
                  {isFull && (
                    <Badge variant="destructive" className="text-xs">
                      FULL
                    </Badge>
                  )}
                </div>
                <h1 className="text-2xl font-bold text-foreground">
                  {session.title}
                </h1>
              </div>
            </div>
            <Button variant="outline" size="icon">
              <Share2 size={18} />
            </Button>
          </div>

          {/* Key Details */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4 border-t border-border/30">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Date & Time</p>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-primary" />
                <span className="font-semibold text-foreground">
                  {session.date}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {session.time}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Location</p>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span className="font-semibold text-foreground">
                  {session.location}
                </span>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">
                Spots Available
              </p>
              <span className="font-bold text-lg text-foreground">
                {session.availableSpots}/{session.totalSpots}
              </span>
            </div>
          </div>
        </Card>

        {/* Availability */}
        <Card className="bg-card border-border/50 p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">
            Availability
          </h3>
          <SpotIndicator
            available={session.availableSpots}
            total={session.totalSpots}
            showLabel={true}
          />
        </Card>

        {/* Description */}
        {session.description && (
          <Card className="bg-card border-border/50 p-6">
            <h3 className="text-lg font-bold text-foreground mb-3">About</h3>
            <p className="text-muted-foreground">{session.description}</p>
          </Card>
        )}

        {/* Attendees */}
        <Card className="bg-card border-border/50 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <Users size={20} />
              Going ({session.attendees.length})
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {session.attendees.map((attendee, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-primary/20 text-primary text-xs">
                    {attendee.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm text-foreground">{attendee.name}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Organizer */}
        <Card className="bg-card border-border/50 p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">
            Organized by
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="w-12 h-12">
                <AvatarFallback className="bg-primary/20 text-primary">
                  {session.organizer
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-foreground">
                  {session.organizer}
                </p>
                <p className="text-xs text-muted-foreground">
                  {session.attendees.length} friends going
                </p>
              </div>
            </div>
            <Button variant="outline" size="icon">
              <MessageCircle size={18} />
            </Button>
          </div>
        </Card>

        {/* CTA Buttons */}
        <div className="flex gap-3">
          {isJoined ? (
            <>
              <Button
                variant="outline"
                onClick={handleLeave}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button className="flex-1">Send Message</Button>
            </>
          ) : (
            <>
              <Button
                variant="outline"
                // onClick={() => router.push("/dashboard")}
                className="flex-1"
              >
                Back
              </Button>
              {!isFull && (
                <Button onClick={handleJoin} className="flex-1">
                  Join Game
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
}
