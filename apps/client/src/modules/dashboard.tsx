import { FloatingActionButton } from "@/shared/components/FloatingButton";
import { AppNavigation } from "@/shared/components/Navigation";
import { SessionCard, type SessionData } from "@/shared/components/SessionCard";
import { TopBar } from "@/shared/components/TopBar";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
// import { getUserFromStorage, mockSessions } from "@/shared/lib/mockData";
import { Filter, Plus } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type SportFilter =
  | "all"
  | "basketball"
  | "tennis"
  | "football"
  | "volleyball"
  | "badminton"
  | "ping-pong"
  | "soccer";

export default function DashboardPage() {
  const navigate = useNavigate();
  // const [user] = useState<{ name: string; email: string } | null>(null);
  const [loading] = useState(false);
  const [selectedSport, setSelectedSport] = useState<SportFilter>("all");
  const [filteredSessions] = useState<SessionData[]>([]);

  // useEffect(() => {
  //   // Check authentication
  //   const userData = getUserFromStorage();
  //   if (!userData) {
  //     router.push("/signin");
  //     return;
  //   }
  //   setUser(userData);
  //   setLoading(false);
  // }, [router]);

  // useEffect(() => {
  //   // Filter sessions based on selected sport
  //   if (selectedSport === "all") {
  //     setFilteredSessions(mockSessions);
  //   } else {
  //     setFilteredSessions(
  //       mockSessions.filter((session) => session.sport === selectedSport),
  //     );
  //   }
  // }, [selectedSport]);

  // const handleLogout = () => {
  //   localStorage.removeItem("user");
  //   navigate("/");
  // };

  const handleSessionClick = (session: SessionData) => {
    navigate(`/session/${session.id}`);
  };

  const sports: { value: SportFilter; label: string }[] = [
    { value: "all", label: "All Sports" },
    { value: "basketball", label: "Basketball" },
    { value: "tennis", label: "Tennis" },
    { value: "football", label: "Football" },
    { value: "volleyball", label: "Volleyball" },
    { value: "badminton", label: "Badminton" },
    { value: "ping-pong", label: "Ping Pong" },
    { value: "soccer", label: "Soccer" },
  ];

  if (loading) {
    return (
      <main className="bg-background min-h-screen">
        <TopBar title="Loading..." />
        <div className="max-w-6xl mx-auto px-4 py-8">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-background min-h-screen pb-20">
      <AppNavigation />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">
        {/* Filter Bar */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-foreground">
            Available Sessions
          </h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <Filter size={16} />
                <span className="hidden sm:inline">Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {sports.map((sport) => (
                <DropdownMenuItem
                  key={sport.value}
                  onClick={() => setSelectedSport(sport.value)}
                  className="cursor-pointer flex items-center justify-between"
                >
                  {sport.label}
                  {selectedSport === sport.value && (
                    <span className="text-primary font-bold">✓</span>
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Active Filter Badge */}
        {selectedSport !== "all" && (
          <div className="mb-4 flex gap-2 items-center">
            <Badge variant="outline">
              {sports.find((s) => s.value === selectedSport)?.label}
              <button
                onClick={() => setSelectedSport("all")}
                className="ml-2 hover:opacity-70"
              >
                ✕
              </button>
            </Badge>
          </div>
        )}

        {/* Sessions Grid */}
        {filteredSessions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSessions.map((session) => (
              <SessionCard
                key={session.id}
                session={session}
                onClick={() => handleSessionClick(session)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">⚽</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No sessions found
            </h3>
            <p className="text-muted-foreground mb-6">
              Try a different filter or create your own session
            </p>
            <Link to="/create-session">
              <Button>
                <Plus size={18} className="mr-2" />
                Create Session
              </Button>
            </Link>
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      <Link to="/create-session">
        <FloatingActionButton
          icon={<Plus size={24} />}
          label="New Game"
          onClick={() => {}}
        />
      </Link>
    </main>
  );
}
