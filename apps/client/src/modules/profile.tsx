"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { TopBar } from "@/components/top-bar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getUserFromStorage } from "@/lib/mock-data";
import { Edit2, LogOut, Star } from "lucide-react";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "Passionate basketball and tennis player. Love competitive games!",
    sports: ["basketball", "tennis"],
    skillLevel: "intermediate",
    rating: 4.5,
  });

  useEffect(() => {
    const userData = getUserFromStorage();
    if (!userData) {
      router.push("/signin");
      return;
    }
    setUser(userData);
    setFormData({
      ...formData,
      name: userData.name,
      email: userData.email,
    });
    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/");
  };

  const handleSave = () => {
    localStorage.setItem(
      "user",
      JSON.stringify({ name: formData.name, email: formData.email }),
    );
    setUser({ name: formData.name, email: formData.email });
    setIsEditing(false);
  };

  if (loading) {
    return (
      <main className="bg-background min-h-screen">
        <TopBar title="Loading..." showBack onBackClick={() => router.back()} />
      </main>
    );
  }

  const allSports = [
    "basketball",
    "tennis",
    "football",
    "volleyball",
    "badminton",
    "ping-pong",
    "soccer",
  ];

  return (
    <main className="bg-background min-h-screen pb-8">
      {/* Top Bar */}
      <TopBar
        title="Profile"
        showBack
        onBackClick={() => router.push("/dashboard")}
      />

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 py-6 md:py-8 space-y-6">
        {/* Profile Card */}
        <Card className="bg-card border-border/50 p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16">
                <AvatarFallback className="bg-primary/20 text-primary text-lg">
                  {formData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                {isEditing ? (
                  <div className="space-y-2">
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-input border-border text-foreground"
                    />
                  </div>
                ) : (
                  <div>
                    <h1 className="text-2xl font-bold text-foreground">
                      {formData.name}
                    </h1>
                    <p className="text-muted-foreground">{formData.email}</p>
                  </div>
                )}
              </div>
            </div>
            {!isEditing && (
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsEditing(true)}
              >
                <Edit2 size={18} />
              </Button>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={
                    i < Math.floor(formData.rating)
                      ? "fill-warning text-warning"
                      : "text-muted"
                  }
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">
              {formData.rating}
            </span>
            <span className="text-xs text-muted-foreground">(23 reviews)</span>
          </div>
        </Card>

        {/* Edit Mode */}
        {isEditing && (
          <Card className="bg-card border-border/50 p-6 space-y-4">
            <div>
              <Label className="text-foreground font-medium mb-2 block">
                Email
              </Label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="bg-input border-border text-foreground"
              />
            </div>

            <div>
              <Label className="text-foreground font-medium mb-2 block">
                Bio
              </Label>
              <Textarea
                value={formData.bio}
                onChange={(e) =>
                  setFormData({ ...formData, bio: e.target.value })
                }
                className="bg-input border-border text-foreground min-h-20"
              />
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setIsEditing(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button onClick={handleSave} className="flex-1">
                Save Changes
              </Button>
            </div>
          </Card>
        )}

        {/* Bio Section */}
        {!isEditing && (
          <Card className="bg-card border-border/50 p-6">
            <h3 className="text-lg font-bold text-foreground mb-3">About</h3>
            <p className="text-muted-foreground">{formData.bio}</p>
          </Card>
        )}

        {/* Skills */}
        <Card className="bg-card border-border/50 p-6">
          <h3 className="text-lg font-bold text-foreground mb-3">Sports</h3>
          <div className="flex flex-wrap gap-2">
            {formData.sports.map((sport) => (
              <Badge key={sport} className="capitalize">
                {sport.replace("-", " ")}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Skill Level */}
        <Card className="bg-card border-border/50 p-6">
          <h3 className="text-lg font-bold text-foreground mb-3">
            Overall Skill Level
          </h3>
          <Badge className="capitalize text-sm px-4 py-2">
            {formData.skillLevel}
          </Badge>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="bg-card border-border/50 p-4 text-center">
            <div className="text-2xl font-bold text-primary mb-1">12</div>
            <p className="text-xs text-muted-foreground">Games Played</p>
          </Card>
          <Card className="bg-card border-border/50 p-4 text-center">
            <div className="text-2xl font-bold text-primary mb-1">8</div>
            <p className="text-xs text-muted-foreground">Won</p>
          </Card>
          <Card className="bg-card border-border/50 p-4 text-center">
            <div className="text-2xl font-bold text-primary mb-1">4</div>
            <p className="text-xs text-muted-foreground">Lost</p>
          </Card>
        </div>

        {/* Preferences */}
        <Card className="bg-card border-border/50 p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">
            Sport Preferences
          </h3>
          <div className="space-y-2">
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                Choose your favorite sports:
              </p>
              <div className="flex flex-wrap gap-2">
                {allSports.map((sport) => (
                  <Badge
                    key={sport}
                    variant={
                      formData.sports.includes(sport) ? "default" : "outline"
                    }
                    className="cursor-pointer capitalize"
                  >
                    {sport.replace("-", " ")}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Danger Zone */}
        <Card className="bg-destructive/10 border-destructive/30 p-6">
          <h3 className="text-lg font-bold text-destructive mb-3">Account</h3>
          <Button
            variant="outline"
            onClick={handleLogout}
            className="w-full gap-2 border-destructive/30 text-destructive hover:bg-destructive/10"
          >
            <LogOut size={18} />
            Sign Out
          </Button>
        </Card>
      </div>
    </main>
  );
}
