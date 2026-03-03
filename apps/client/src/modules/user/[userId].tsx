import { FloatingActionButton } from "@/shared/components/FloatingButton";
import { SportsIcon } from "@/shared/components/SportIcon";
import { TopBar } from "@/shared/components/TopBar";
import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";
import { achievements, mockFriends } from "@/shared/lib/mockData";
import { ArrowLeft, MessageSquare, Star, UserPlus, Zap } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function UserProfilePage() {
  const params = useParams();
  const userId = params.id as string;
  const [isFriend, setIsFriend] = useState(false);

  // Get friend profile or fallback
  const user = mockFriends.find((f) => f.id === userId) || {
    id: userId,
    name: "Player",
    avatar: "👤",
    level: 10,
    rating: 4.5,
    sports: ["basketball"],
    status: "offline",
    lastActive: "recently",
    isFriend: false,
  };

  const userAchievements = achievements.slice(0, 4);

  return (
    <main className="bg-background min-h-screen">
      <TopBar title="Hello user Id" />

      <div className="max-w-4xl mx-auto px-4 py-6 md:px-6 pb-24">
        {/* Header */}
        <Link to="/dashboard">
          <Button variant="ghost" size="sm" className="mb-6">
            <ArrowLeft size={18} className="mr-2" />
            Back
          </Button>
        </Link>

        {/* Profile Header Card */}
        <Card className="bg-linear-to-br from-primary/20 to-primary/5 border-primary/30 p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="text-7xl">{user.avatar}</div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {user.name}
              </h1>
              <div className="flex items-center gap-4 mb-4 flex-wrap">
                <div className="flex items-center gap-1 bg-card/50 px-3 py-1 rounded-full">
                  <Zap className="text-primary" size={16} />
                  <span className="font-bold">Level {user.level}</span>
                </div>
                <div className="flex items-center gap-1 bg-card/50 px-3 py-1 rounded-full">
                  <Star className="text-primary" size={16} />
                  <span className="font-bold">{user.rating} rating</span>
                </div>
                <div className="text-sm text-foreground/60">
                  {user.status === "online" ? "🟢 Online" : "⚫ Offline"}
                </div>
              </div>
              <p className="text-foreground/70 mb-4">
                Last active: {user.lastActive}
              </p>

              <div className="flex gap-2 flex-wrap">
                <Button className="gap-2">
                  <MessageSquare size={18} />
                  Message
                </Button>
                {!isFriend && (
                  <Button variant="outline" onClick={() => setIsFriend(true)}>
                    <UserPlus size={18} className="mr-2" />
                    Add Friend
                  </Button>
                )}
                {isFriend && (
                  <div className="px-4 py-2 bg-primary/20 rounded-lg text-sm font-bold text-primary">
                    Friends
                  </div>
                )}
              </div>
            </div>
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-card p-6 border-border">
            <div className="text-sm text-foreground/60 mb-2">Games Played</div>
            <div className="text-3xl font-bold mb-1">24</div>
            <div className="text-xs text-foreground/50">All time</div>
          </Card>
          <Card className="bg-card p-6 border-border">
            <div className="text-sm text-foreground/60 mb-2">Win Rate</div>
            <div className="text-3xl font-bold mb-1">68%</div>
            <div className="text-xs text-foreground/50">Average</div>
          </Card>
          <Card className="bg-card p-6 border-border">
            <div className="text-sm text-foreground/60 mb-2">
              Favorite Sport
            </div>
            <div className="text-3xl font-bold mb-1">Basketball</div>
            <div className="text-xs text-foreground/50">15 games</div>
          </Card>
        </div>

        {/* Sports Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Sports & Skill Levels</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {user.sports.map((sport, idx) => (
              <Card
                key={idx}
                className="bg-card p-6 border-border flex items-center gap-4"
              >
                <div className="text-4xl">
                  <SportsIcon sport={sport} />
                </div>
                <div>
                  <div className="font-bold capitalize">{sport}</div>
                  <div className="text-sm text-foreground/60">
                    Intermediate level
                  </div>
                  <div className="text-xs text-foreground/50 mt-1">
                    12 games played
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {userAchievements.map((achievement, idx) => (
              <Card
                key={idx}
                className="bg-card p-4 border-border text-center hover:border-primary/50 transition-colors"
              >
                <div className="text-4xl mb-2">{achievement.icon}</div>
                <div className="font-bold text-sm">{achievement.name}</div>
                <div className="text-xs text-foreground/60 mt-2">
                  {achievement.description}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* About Section */}
        <Card className="bg-card p-6 border-border">
          <h2 className="text-xl font-bold mb-4">About</h2>
          <p className="text-foreground/80 mb-6">
            Passionate about basketball and meeting new players. Always up for a
            friendly game!
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <div className="text-foreground/60 mb-1">Member Since</div>
              <div className="font-bold">January 2024</div>
            </div>
            <div>
              <div className="text-foreground/60 mb-1">Preferred Time</div>
              <div className="font-bold">Evenings & Weekends</div>
            </div>
            <div>
              <div className="text-foreground/60 mb-1">Location</div>
              <div className="font-bold">San Francisco, CA</div>
            </div>
            <div>
              <div className="text-foreground/60 mb-1">Responsiveness</div>
              <div className="font-bold">Very responsive</div>
            </div>
          </div>
        </Card>
      </div>

      <FloatingActionButton />
    </main>
  );
}
