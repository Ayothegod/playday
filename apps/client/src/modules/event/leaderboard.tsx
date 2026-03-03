import { FloatingActionButton } from "@/shared/components/FloatingButton";
import { SportsIcon } from "@/shared/components/SportIcon";
import { TopBar } from "@/shared/components/TopBar";
import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";
import { Star, Trophy, Zap } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const globalLeaderboard = [
  {
    rank: 1,
    name: "Alex Chen",
    avatar: "👨‍💼",
    level: 28,
    xp: 18500,
    rating: 4.9,
    gamesPlayed: 112,
  },
  {
    rank: 2,
    name: "Jordan Smith",
    avatar: "👨‍🦱",
    level: 25,
    xp: 15200,
    rating: 4.8,
    gamesPlayed: 98,
  },
  {
    rank: 3,
    name: "Sarah Johnson",
    avatar: "👩‍🦰",
    level: 24,
    xp: 14800,
    rating: 4.7,
    gamesPlayed: 94,
  },
  {
    rank: 4,
    name: "Mike Davis",
    avatar: "👨‍🦱",
    level: 22,
    xp: 13200,
    rating: 4.6,
    gamesPlayed: 87,
  },
  {
    rank: 5,
    name: "Emma Wilson",
    avatar: "👩‍🦰",
    level: 20,
    xp: 11500,
    rating: 4.5,
    gamesPlayed: 78,
  },
  {
    rank: 6,
    name: "You",
    avatar: "👤",
    level: 12,
    xp: 4200,
    rating: 4.8,
    gamesPlayed: 24,
    isYou: true,
  },
  {
    rank: 7,
    name: "Lisa Park",
    avatar: "👩‍🦱",
    level: 18,
    xp: 9800,
    rating: 4.4,
    gamesPlayed: 72,
  },
  {
    rank: 8,
    name: "Tom Brown",
    avatar: "👨‍🦱",
    level: 16,
    xp: 8200,
    rating: 4.3,
    gamesPlayed: 65,
  },
];

const sportsLeaderboards = {
  basketball: [
    { rank: 1, name: "LeBron James", avatar: "👑", level: 32, wins: 156 },
    { rank: 2, name: "Steph Curry", avatar: "⭐", level: 30, wins: 142 },
    { rank: 3, name: "You", avatar: "👤", level: 12, wins: 18, isYou: true },
  ],
  tennis: [
    { rank: 1, name: "Serena Williams", avatar: "🎾", level: 29, wins: 134 },
    { rank: 2, name: "Roger Federer", avatar: "👨‍🎓", level: 28, wins: 128 },
    { rank: 3, name: "You", avatar: "👤", level: 8, wins: 5, isYou: true },
  ],
  soccer: [
    { rank: 1, name: "Cristiano Ronaldo", avatar: "⚽", level: 31, wins: 148 },
    { rank: 2, name: "Lionel Messi", avatar: "🌟", level: 30, wins: 141 },
    { rank: 3, name: "You", avatar: "👤", level: 6, wins: 2, isYou: true },
  ],
};

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState<
    "global" | keyof typeof sportsLeaderboards
  >("global");

  const isGlobal = activeTab === "global";
  const leaderboardData = isGlobal
    ? globalLeaderboard
    : sportsLeaderboards[activeTab];

  return (
    <main className="bg-background min-h-screen">
      <TopBar title="leaderbaord" />

      <div className="max-w-5xl mx-auto px-4 py-6 md:px-6 pb-24">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Leaderboards</h1>
          <p className="text-foreground/70">
            See how you stack up against other players
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 border-b border-border/30">
          <button
            onClick={() => setActiveTab("global")}
            className={`px-4 py-2 font-bold whitespace-nowrap transition-colors rounded-t-lg ${
              activeTab === "global"
                ? "text-primary border-b-2 border-primary"
                : "text-foreground/60 hover:text-foreground"
            }`}
          >
            <Trophy size={18} className="inline mr-2" />
            Global
          </button>
          {Object.keys(sportsLeaderboards).map((sport) => (
            <button
              key={sport}
              onClick={() =>
                setActiveTab(sport as keyof typeof sportsLeaderboards)
              }
              className={`px-4 py-2 font-bold whitespace-nowrap transition-colors rounded-t-lg capitalize ${
                activeTab === sport
                  ? "text-primary border-b-2 border-primary"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              <span className="inline mr-2">
                <SportsIcon sport={sport} />
              </span>
              {sport}
            </button>
          ))}
        </div>

        {/* Leaderboard Table */}
        <Card className="bg-card border-border overflow-hidden">
          {/* Headers */}
          <div className="grid grid-cols-12 gap-4 p-6 bg-secondary/50 border-b border-border font-bold text-sm text-foreground/70">
            <div className="col-span-1">Rank</div>
            <div className="col-span-5">Player</div>
            {isGlobal ? (
              <>
                <div className="col-span-2 text-right">Level</div>
                <div className="col-span-2 text-right">Rating</div>
                <div className="col-span-2 text-right">Games</div>
              </>
            ) : (
              <>
                <div className="col-span-2 text-right">Level</div>
                <div className="col-span-2 text-right">Wins</div>
                <div className="col-span-2 text-right"></div>
              </>
            )}
          </div>

          {/* Rows */}
          <div className="divide-y divide-border/30">
            {leaderboardData.map((player) => (
              <Link
                key={`${player.rank}-${player.name}`}
                to={player.isYou ? "/profile" : `/user/${player.rank}`}
              >
                <div
                  className={`grid grid-cols-12 gap-4 p-6 items-center hover:bg-primary/10 transition-colors ${
                    player.isYou ? "bg-primary/10" : ""
                  }`}
                >
                  <div className="col-span-1">
                    <div className="flex items-center justify-center">
                      {player.rank === 1 && (
                        <span className="text-2xl">🥇</span>
                      )}
                      {player.rank === 2 && (
                        <span className="text-2xl">🥈</span>
                      )}
                      {player.rank === 3 && (
                        <span className="text-2xl">🥉</span>
                      )}
                      {player.rank > 3 && (
                        <span className="font-bold text-lg">{player.rank}</span>
                      )}
                    </div>
                  </div>
                  <div className="col-span-5 flex items-center gap-3">
                    <div className="text-3xl">{player.avatar}</div>
                    <div>
                      <div className="font-bold">{player.name}</div>
                      {player.isYou && (
                        <div className="text-xs text-primary font-bold">
                          That's you!
                        </div>
                      )}
                    </div>
                  </div>
                  {isGlobal ? (
                    <>
                      <div className="col-span-2 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Zap size={16} className="text-primary" />
                          <span className="font-bold">Lvl {player.level}</span>
                        </div>
                      </div>
                      <div className="col-span-2 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Star size={16} className="text-primary" />
                          {/* <span className="font-bold">{player.rating}</span> */}
                        </div>
                      </div>
                      {/* <div className="col-span-2 text-right text-foreground/70">{player.gamesPlayed}</div> */}
                    </>
                  ) : (
                    <>
                      <div className="col-span-2 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Zap size={16} className="text-primary" />
                          <span className="font-bold">Lvl {player.level}</span>
                        </div>
                      </div>
                      {/* <div className="col-span-2 text-right text-foreground/70">{player.wins}</div> */}
                      <div className="col-span-2 text-right">
                        <Button size="sm" variant="outline">
                          View
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </Card>

        {/* Stats Info Card */}
        <Card className="bg-card/50 border-border p-8 mt-8">
          <h2 className="text-xl font-bold mb-4">How Rankings Work</h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-foreground/80">
            <div>
              <div className="font-bold text-primary mb-3">Global Ranking</div>
              <p>
                Ranked by your level, XP, and rating. Win games, earn XP, and
                climb the global ranks to become a Playday legend.
              </p>
            </div>
            <div>
              <div className="font-bold text-primary mb-3">
                Sport-Specific Rankings
              </div>
              <p>
                Each sport has its own leaderboard. Become a master of multiple
                sports and dominate across the platform.
              </p>
            </div>
          </div>
        </Card>
      </div>

      <FloatingActionButton />
    </main>
  );
}
