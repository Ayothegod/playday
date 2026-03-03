import { FloatingActionButton } from "@/shared/components/FloatingButton";
import { TopBar } from "@/shared/components/TopBar";
import { Card } from "@/shared/components/ui/card";
import { achievements } from "@/shared/lib/mockData";
import { Lock, Trophy } from "lucide-react";
import { useState } from "react";

const allAchievements = [
  ...achievements,
  {
    id: "streak-10",
    name: "Unstoppable",
    description: "Attended 10 games in a row",
    icon: "🚀",
    unlocked: false,
  },
  {
    id: "multi-sport",
    name: "Renaissance Player",
    description: "Reached intermediate level in 5+ sports",
    icon: "🎯",
    unlocked: false,
  },
  {
    id: "friend-20",
    name: "Connector",
    description: "Made 20 friends",
    icon: "🌐",
    unlocked: false,
  },
  {
    id: "level-25",
    name: "Pro Player",
    description: "Reached level 25",
    icon: "👑",
    unlocked: false,
  },
  {
    id: "organizer",
    name: "Game Master",
    description: "Organized 10 sessions",
    icon: "🎮",
    unlocked: false,
  },
  {
    id: "no-cancel",
    name: "Reliable",
    description: "30 days without cancellations",
    icon: "✅",
    unlocked: false,
  },
];

export default function AchievementsPage() {
  const [selectedTab, setSelectedTab] = useState<"all" | "unlocked">("all");

  const unlockedCount = allAchievements.filter((a) => a.unlocked).length;
  const displayedAchievements =
    selectedTab === "unlocked"
      ? allAchievements.filter((a) => a.unlocked)
      : allAchievements;

  // Calculate total XP based on unlocked achievements
  const totalXP = unlockedCount * 500 + 200; // Base bonus

  return (
    <main className="bg-background min-h-screen">
      <TopBar title="achievement" />

      <div className="max-w-6xl mx-auto px-4 py-6 md:px-6 pb-24">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Achievements & Stats</h1>
          <p className="text-foreground/70">
            Unlock badges, earn XP, and climb the ranks
          </p>
        </div>

        {/* XP & Level Card */}
        <Card className="bg-linear-to-br from-primary/20 to-primary/5 border-primary/30 p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-sm text-foreground/60 mb-2">
                Current Level
              </div>
              <div className="text-5xl font-bold text-primary">12</div>
              <div className="text-xs text-foreground/50 mt-2">
                325 XP to next level
              </div>
            </div>
            <div>
              <div className="text-sm text-foreground/60 mb-2">
                Total XP Earned
              </div>
              <div className="text-5xl font-bold text-primary">{totalXP}</div>
              <div className="text-xs text-foreground/50 mt-2">All time</div>
            </div>
            <div>
              <div className="text-sm text-foreground/60 mb-2">
                Badges Unlocked
              </div>
              <div className="text-5xl font-bold text-primary">
                {unlockedCount}
              </div>
              <div className="text-xs text-foreground/50 mt-2">
                of {allAchievements.length}
              </div>
            </div>
          </div>

          {/* XP Progress Bar */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold">Level 12 Progress</span>
              <span className="text-sm text-foreground/60">
                4,325 / 5,000 XP
              </span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
              <div
                className="bg-linear-to-r from-primary to-primary/60 h-full"
                style={{ width: "86.5%" }}
              ></div>
            </div>
          </div>
        </Card>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-border/30">
          <button
            onClick={() => setSelectedTab("all")}
            className={`pb-4 font-bold transition-colors ${
              selectedTab === "all"
                ? "text-primary border-b-2 border-primary"
                : "text-foreground/60 hover:text-foreground"
            }`}
          >
            <Trophy size={18} className="inline mr-2" />
            All Achievements ({allAchievements.length})
          </button>
          <button
            onClick={() => setSelectedTab("unlocked")}
            className={`pb-4 font-bold transition-colors ${
              selectedTab === "unlocked"
                ? "text-primary border-b-2 border-primary"
                : "text-foreground/60 hover:text-foreground"
            }`}
          >
            Unlocked ({unlockedCount})
          </button>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {displayedAchievements.map((achievement) => (
            <Card
              key={achievement.id}
              className={`p-6 text-center border transition-all hover:scale-105 ${
                achievement.unlocked
                  ? "bg-linear-to-br from-primary/20 to-primary/5 border-primary/30"
                  : "bg-card/50 border-border/30 opacity-50"
              }`}
            >
              <div
                className={`text-5xl mb-3 ${achievement.unlocked ? "" : "filter grayscale"}`}
              >
                {achievement.icon}
              </div>
              {!achievement.unlocked && (
                <Lock size={16} className="mx-auto mb-2 text-foreground/40" />
              )}
              <div className="font-bold text-sm mb-1">{achievement.name}</div>
              <div className="text-xs text-foreground/60">
                {achievement.description}
              </div>
              {achievement.unlocked && (
                <div className="text-xs text-primary mt-3 font-bold">
                  Unlocked
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* How to Earn Section */}
        <Card className="bg-card p-8 border-border">
          <h2 className="text-2xl font-bold mb-6">How to Earn XP</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="font-bold text-lg mb-4 text-primary">
                Game Activities
              </div>
              <ul className="space-y-3 text-sm text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">+100</span>
                  <span>Attend a game session</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">+50</span>
                  <span>Create a new session</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">+200</span>
                  <span>Maintain 5-game streak</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-lg mb-4 text-primary">
                Social Activities
              </div>
              <ul className="space-y-3 text-sm text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">+25</span>
                  <span>Add a friend</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">+50</span>
                  <span>Rate another player</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">+150</span>
                  <span>Reach new skill level</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      <FloatingActionButton />
    </main>
  );
}
