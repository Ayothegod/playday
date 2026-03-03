import { FloatingActionButton } from "@/shared/components/FloatingButton";
import { TopBar } from "@/shared/components/TopBar";
import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";
import { mockFriends } from "@/shared/lib/mockData";
import { MessageSquare, Star, UserCheck, Users, Zap } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function FriendsPage() {
  const [selectedTab, setSelectedTab] = useState<"friends" | "suggestions">(
    "friends",
  );
  const [friends, setFriends] = useState(mockFriends.filter((f) => f.isFriend));
  const suggestions = mockFriends.filter((f) => !f.isFriend);

  const addFriend = (id: string) => {
    const friend = suggestions.find((f) => f.id === id);
    if (friend) {
      setFriends([...friends, friend]);
    }
  };

  return (
    <main className="bg-background min-h-screen">
      <TopBar title="friends" />

      <div className="max-w-5xl mx-auto px-4 py-6 md:px-6 pb-24">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Friends</h1>
          <p className="text-foreground/70">
            Connect with other players, see their activity, and play together
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-border/30">
          <button
            onClick={() => setSelectedTab("friends")}
            className={`pb-4 font-bold transition-colors ${
              selectedTab === "friends"
                ? "text-primary border-b-2 border-primary"
                : "text-foreground/60 hover:text-foreground"
            }`}
          >
            <Users size={18} className="inline mr-2" />
            Friends ({friends.length})
          </button>
          <button
            onClick={() => setSelectedTab("suggestions")}
            className={`pb-4 font-bold transition-colors ${
              selectedTab === "suggestions"
                ? "text-primary border-b-2 border-primary"
                : "text-foreground/60 hover:text-foreground"
            }`}
          >
            Suggestions ({suggestions.length})
          </button>
        </div>

        {/* Friends List */}
        {selectedTab === "friends" && (
          <div className="space-y-4">
            {friends.length === 0 ? (
              <Card className="bg-card p-8 border-border text-center">
                <div className="text-4xl mb-4">👥</div>
                <p className="text-foreground/70">
                  No friends yet. Find some players to connect with!
                </p>
              </Card>
            ) : (
              friends.map((friend) => (
                <Card
                  key={friend.id}
                  className="bg-card p-6 border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="text-5xl">{friend.avatar}</div>
                      <div>
                        <Link to={`/user/${friend.id}`}>
                          <h3 className="text-xl font-bold hover:text-primary transition-colors">
                            {friend.name}
                          </h3>
                        </Link>
                        <div className="flex items-center gap-3 mt-2 flex-wrap">
                          <div className="flex items-center gap-1 bg-primary/20 px-2 py-1 rounded text-sm">
                            <Zap size={14} className="text-primary" />
                            <span>Level {friend.level}</span>
                          </div>
                          <div className="flex items-center gap-1 bg-primary/20 px-2 py-1 rounded text-sm">
                            <Star size={14} className="text-primary" />
                            <span>{friend.rating}</span>
                          </div>
                          <div
                            className={`text-xs px-2 py-1 rounded ${friend.status === "online" ? "bg-green-500/20 text-green-400" : "bg-muted text-foreground/60"}`}
                          >
                            {friend.status === "online"
                              ? "🟢 Online"
                              : `Last active ${friend.lastActive}`}
                          </div>
                        </div>
                        <div className="text-sm text-foreground/60 mt-2">
                          Plays: {friend.sports.join(", ")}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 w-full md:w-auto">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 md:flex-none gap-2"
                      >
                        <MessageSquare size={16} />
                        Message
                      </Button>
                      <Button size="sm" className="flex-1 md:flex-none gap-2">
                        <UserCheck size={16} />
                        View Profile
                      </Button>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        )}

        {/* Suggestions */}
        {selectedTab === "suggestions" && (
          <div className="space-y-4">
            {suggestions.length === 0 ? (
              <Card className="bg-card p-8 border-border text-center">
                <div className="text-4xl mb-4">✨</div>
                <p className="text-foreground/70">
                  You're already friends with everyone we know!
                </p>
              </Card>
            ) : (
              suggestions.map((suggestion) => (
                <Card
                  key={suggestion.id}
                  className="bg-card p-6 border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="text-5xl">{suggestion.avatar}</div>
                      <div>
                        <h3 className="text-xl font-bold">{suggestion.name}</h3>
                        <div className="flex items-center gap-3 mt-2 flex-wrap">
                          <div className="flex items-center gap-1 bg-primary/20 px-2 py-1 rounded text-sm">
                            <Zap size={14} className="text-primary" />
                            <span>Level {suggestion.level}</span>
                          </div>
                          <div className="flex items-center gap-1 bg-primary/20 px-2 py-1 rounded text-sm">
                            <Star size={14} className="text-primary" />
                            <span>{suggestion.rating}</span>
                          </div>
                        </div>
                        <div className="text-sm text-foreground/60 mt-2">
                          Plays: {suggestion.sports.join(", ")}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 w-full md:w-auto">
                      <Link
                        to={`/user/${suggestion.id}`}
                        className="flex-1 md:flex-none"
                      >
                        <Button variant="outline" size="sm" className="w-full">
                          View Profile
                        </Button>
                      </Link>
                      <Button
                        size="sm"
                        className="flex-1 md:flex-none"
                        onClick={() => addFriend(suggestion.id)}
                      >
                        Add Friend
                      </Button>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        )}
      </div>

      <FloatingActionButton />
    </main>
  );
}
