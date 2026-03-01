"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TopBar } from "@/components/top-bar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SportsIcon } from "@/components/sports-icon";
import { getUserFromStorage } from "@/lib/mock-data";
import { ChevronDown } from "lucide-react";

type Sport =
  | "basketball"
  | "tennis"
  | "football"
  | "volleyball"
  | "badminton"
  | "ping-pong"
  | "soccer";
type SkillLevel = "beginner" | "intermediate" | "advanced";

const sports: Sport[] = [
  "basketball",
  "tennis",
  "football",
  "volleyball",
  "badminton",
  "ping-pong",
  "soccer",
];
const skillLevels: SkillLevel[] = ["beginner", "intermediate", "advanced"];

export default function CreateSessionPage() {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null,
  );
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    sport: "basketball" as Sport,
    title: "",
    location: "",
    date: "",
    time: "",
    skillLevel: "intermediate" as SkillLevel,
    totalSpots: 10,
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const userData = getUserFromStorage();
    if (!userData) {
      router.push("/signin");
      return;
    }
    setUser(userData);
    setLoading(false);
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate
    if (
      !formData.title ||
      !formData.location ||
      !formData.date ||
      !formData.time
    ) {
      alert("Please fill in all required fields");
      return;
    }

    // Simulate submission
    setSubmitted(true);
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Redirect to dashboard
    router.push("/dashboard");
  };

  if (loading) {
    return (
      <main className="bg-background min-h-screen">
        <TopBar title="Loading..." showBack onBackClick={() => router.back()} />
      </main>
    );
  }

  return (
    <main className="bg-background min-h-screen pb-8">
      {/* Top Bar */}
      <TopBar
        title="Create Game"
        subtitle="Share your game with the community"
        showBack
        onBackClick={() => router.back()}
      />

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 py-6 md:py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Sport Selection */}
          <Card className="bg-card border-border/50 p-6">
            <Label className="text-base font-bold text-foreground mb-4 block">
              Sport
            </Label>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {sports.map((sport) => (
                <button
                  key={sport}
                  type="button"
                  onClick={() => setFormData({ ...formData, sport })}
                  className={`flex flex-col items-center justify-center gap-2 p-4 rounded-lg border-2 transition-all ${
                    formData.sport === sport
                      ? "border-primary bg-primary/10"
                      : "border-border bg-secondary/30 hover:border-primary/50"
                  }`}
                >
                  <SportsIcon sport={sport} size="lg" />
                  <span className="text-xs capitalize text-foreground">
                    {sport.replace("-", " ")}
                  </span>
                </button>
              ))}
            </div>
          </Card>

          {/* Basic Info */}
          <Card className="bg-card border-border/50 p-6 space-y-4">
            <div>
              <Label className="text-foreground font-medium mb-2 block">
                Game Title *
              </Label>
              <Input
                type="text"
                placeholder="e.g., Sunday Pickup Basketball"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                disabled={submitted}
              />
            </div>

            <div>
              <Label className="text-foreground font-medium mb-2 block">
                Location *
              </Label>
              <Input
                type="text"
                placeholder="e.g., Central Park Court A"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                disabled={submitted}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-foreground font-medium mb-2 block">
                  Date *
                </Label>
                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                  disabled={submitted}
                />
              </div>

              <div>
                <Label className="text-foreground font-medium mb-2 block">
                  Time *
                </Label>
                <Input
                  type="time"
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                  disabled={submitted}
                />
              </div>
            </div>
          </Card>

          {/* Skill Level */}
          <Card className="bg-card border-border/50 p-6">
            <Label className="text-base font-bold text-foreground mb-4 block">
              Skill Level
            </Label>
            <div className="grid grid-cols-3 gap-3">
              {skillLevels.map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, skillLevel: level })
                  }
                  className={`py-3 px-4 rounded-lg border-2 transition-all font-medium capitalize ${
                    formData.skillLevel === level
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-secondary/30 text-foreground hover:border-primary/50"
                  }`}
                  disabled={submitted}
                >
                  {level}
                </button>
              ))}
            </div>
          </Card>

          {/* Spots */}
          <Card className="bg-card border-border/50 p-6">
            <Label className="text-foreground font-medium mb-2 block">
              Total Spots
            </Label>
            <Input
              type="number"
              min="1"
              max="50"
              value={formData.totalSpots}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  totalSpots: parseInt(e.target.value),
                })
              }
              className="bg-input border-border text-foreground"
              disabled={submitted}
            />
          </Card>

          {/* Description */}
          <Card className="bg-card border-border/50 p-6">
            <Label className="text-foreground font-medium mb-2 block">
              Description
            </Label>
            <Textarea
              placeholder="Tell players what to expect... (optional)"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="bg-input border-border text-foreground placeholder:text-muted-foreground min-h-24"
              disabled={submitted}
            />
          </Card>

          {/* Submit Buttons */}
          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
              className="flex-1"
              disabled={submitted}
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1" disabled={submitted}>
              {submitted ? "Creating..." : "Create Game"}
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
