import { FloatingActionButton } from "@/shared/components/FloatingButton";
import { TopBar } from "@/shared/components/TopBar";
import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";
import { mockFriends } from "@/shared/lib/mockData";
import { Check } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const mockSessionDetails = {
  sport: "basketball",
  title: "Sunday Pickup Basketball",
  date: "Mar 2, 2024",
  time: "2:00 PM - 4:00 PM",
  location: "Central Park Court A",
  attendees: mockFriends.slice(0, 6),
};

export default function RateSessionPage() {
  // const params = useParams()
  const router = useNavigate();
  // const sessionId = params.sessionId as string
  const [submitted, setSubmitted] = useState(false);
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [sessionRating, setSessionRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handlePlayerRating = (id: string, rating: number) => {
    setRatings((prev) => ({
      ...prev,
      [id]: rating,
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      router("/my-sessions");
    }, 2000);
  };

  if (submitted) {
    return (
      <main className="bg-background min-h-screen">
        <TopBar title="rate event" />
        <div className="max-w-2xl mx-auto px-4 py-12 md:px-6">
          <Card className="bg-linear-to-br from-primary/20 to-primary/5 border-primary/30 p-12 text-center">
            <div className="text-6xl mb-4">✨</div>
            <h1 className="text-3xl font-bold mb-2">Thanks for Rating!</h1>
            <p className="text-foreground/70 mb-6">
              Your feedback helps improve the Playday community. You earned 100
              XP!
            </p>
            <div className="flex gap-3 justify-center">
              <Link to="/my-sessions">
                <Button>View Your Sessions</Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="outline">Browse More Games</Button>
              </Link>
            </div>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-background min-h-screen">
      <TopBar title="Hello, rater" />

      <div className="max-w-2xl mx-auto px-4 py-6 md:px-6 pb-24">
        {/* Header */}
        <Link to="/my-sessions">
          <Button variant="ghost" size="sm" className="mb-6">
            Skip for now
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">How was the game?</h1>
          <p className="text-foreground/70">
            Help us improve by rating the session and other players
          </p>
        </div>

        {/* Session Summary Card */}
        <Card className="bg-card p-8 border-border mb-8">
          <h2 className="text-2xl font-bold mb-4">
            {mockSessionDetails.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-foreground/70">
            <div>
              <div className="font-bold text-foreground mb-1">Date & Time</div>
              <div>{mockSessionDetails.date}</div>
              <div>{mockSessionDetails.time}</div>
            </div>
            <div>
              <div className="font-bold text-foreground mb-1">Location</div>
              <div>{mockSessionDetails.location}</div>
            </div>
          </div>
        </Card>

        {/* Session Rating */}
        <Card className="bg-card p-8 border-border mb-8">
          <h3 className="text-xl font-bold mb-4">Rate the Session</h3>
          <div className="mb-6">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => setSessionRating(rating)}
                    className="text-3xl transition-transform hover:scale-110"
                  >
                    <span
                      className={
                        sessionRating >= rating
                          ? "text-primary"
                          : "text-foreground/30"
                      }
                    >
                      ★
                    </span>
                  </button>
                ))}
              </div>
              {sessionRating > 0 && (
                <span className="text-lg font-bold text-primary">
                  {sessionRating} stars
                </span>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">
              What could be improved?
            </label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Court condition, organization, skill level matching..."
              className="w-full px-4 py-3 bg-secondary rounded-lg border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary/50 resize-none h-24"
            />
          </div>
        </Card>

        {/* Rate Players */}
        <Card className="bg-card p-8 border-border mb-8">
          <h3 className="text-xl font-bold mb-6">Rate Your Teammates</h3>
          <div className="space-y-6">
            {mockSessionDetails.attendees.map((player) => (
              <div
                key={player.id}
                className="flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="text-4xl">{player.avatar}</div>
                  <div>
                    <div className="font-bold">{player.name}</div>
                    <div className="text-sm text-foreground/60">
                      Level {player.level}
                    </div>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => handlePlayerRating(player.id, rating)}
                      className="text-2xl transition-transform hover:scale-110"
                    >
                      <span
                        className={
                          ratings[player.id] && ratings[player.id] >= rating
                            ? "text-primary"
                            : "text-foreground/30"
                        }
                      >
                        ★
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Add Optional Skills Feedback */}
        <Card className="bg-card p-8 border-border mb-8">
          <h3 className="text-xl font-bold mb-4">Skill Feedback (Optional)</h3>
          <p className="text-foreground/70 text-sm mb-4">
            Help players improve by giving specific feedback on their play
          </p>
          <textarea
            placeholder="Example: Great ball handling, work on your 3-point shot..."
            className="w-full px-4 py-3 bg-secondary rounded-lg border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary/50 resize-none h-20"
          />
        </Card>

        {/* Submit Button */}
        <div className="flex gap-3">
          <Link to="/my-sessions" className="flex-1">
            <Button variant="outline" className="w-full">
              Skip
            </Button>
          </Link>
          <Button onClick={handleSubmit} className="flex-1 gap-2">
            <Check size={18} />
            Submit Ratings
          </Button>
        </div>
      </div>

      <FloatingActionButton />
    </main>
  );
}
