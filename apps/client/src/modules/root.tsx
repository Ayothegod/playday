import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";
// import { SportsIcon } from '@/shared/components/SportIcon'
import { ArrowRight, Users, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function RootPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* Header/Nav */}
      <nav className="sticky top-0 z-50 bg-card/50 backdrop-blur-md border-b border-border/50">
        <div className="max-w-6xl mx-auto px-4 py-4 md:px-6 md:py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl">🎾</div>
            <span className="font-bold text-lg">Playday</span>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/signin">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
              Find Your Next
              <br />
              <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Game
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
              Coordinate sports sessions with friends. Find courts, manage
              availability, and play together. No more group chats.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link to="/signup">
                <Button size="lg" className="gap-2">
                  Start Playing
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-3 gap-4 mb-12 max-w-md mx-auto">
            <Card className="bg-card/50 border-border/50 p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">2.5k</div>
              <div className="text-xs text-muted-foreground">Players</div>
            </Card>
            <Card className="bg-card/50 border-border/50 p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">1.2k</div>
              <div className="text-xs text-muted-foreground">Games/Mo</div>
            </Card>
            <Card className="bg-card/50 border-border/50 p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">7</div>
              <div className="text-xs text-muted-foreground">Sports</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Old Way</h2>
            <p className="text-muted-foreground text-lg">
              Coordinating games shouldn't be this complicated
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-background border-border/50 p-6">
              <div className="text-3xl mb-3">😵</div>
              <h3 className="font-bold text-lg mb-2">Lost in Group Chats</h3>
              <p className="text-sm text-muted-foreground">
                Important details buried in thousands of messages. Who's
                actually coming?
              </p>
            </Card>

            <Card className="bg-background border-border/50 p-6">
              <div className="text-3xl mb-3">❌</div>
              <h3 className="font-bold text-lg mb-2">
                No-shows & Cancellations
              </h3>
              <p className="text-sm text-muted-foreground">
                No confirmation system means players disappear without notice.
              </p>
            </Card>

            <Card className="bg-background border-border/50 p-6">
              <div className="text-3xl mb-3">🏚️</div>
              <h3 className="font-bold text-lg mb-2">Availability Chaos</h3>
              <p className="text-sm text-muted-foreground">
                Finding a court and time that works for everyone is nearly
                impossible.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Playday Solves It
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to coordinate sports, in one place
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-primary/30 border-2 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={24} className="text-primary" />
                <h3 className="font-bold text-lg">One Place for Everything</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                All your sessions, attendees, and details in a clear, organized
                interface. No more hunting through messages.
              </p>
            </Card>

            <Card className="bg-card border-primary/30 border-2 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users size={24} className="text-primary" />
                <h3 className="font-bold text-lg">Real-Time Updates</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Instant notifications keep everyone in sync. Know exactly who's
                joining and when they'll arrive.
              </p>
            </Card>

            <Card className="bg-card border-primary/30 border-2 p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={24} className="text-primary" />
                <h3 className="font-bold text-lg">Smart Matching</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Find friends, courts, and times that match your skill level and
                schedule preferences instantly.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Key Features
          </h2>

          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-3">
                  Browse & Join Sessions
                </h3>
                <p className="text-muted-foreground mb-4">
                  Explore upcoming games in your area. Filter by sport, skill
                  level, and time. Join with a single tap and start playing.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> 7+ sports supported
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Real-time
                    availability
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Skill-based matching
                  </li>
                </ul>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <div className="bg-secondary rounded-lg p-8 text-center h-48 flex items-center justify-center">
                  <div className="text-4xl">📱</div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="bg-secondary rounded-lg p-8 text-center h-48 flex items-center justify-center">
                  <div className="text-4xl">⏱️</div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">
                  Create Your Own Sessions
                </h3>
                <p className="text-muted-foreground mb-4">
                  Can't find what you want? Create a session and invite friends.
                  Set the sport, time, location, and skill level. Players will
                  find you.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Easy session setup
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Invite friends
                    directly
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Manage attendees
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-3">Build Your Profile</h3>
                <p className="text-muted-foreground mb-4">
                  Showcase your sports interests and skill levels. Other players
                  see your experience and can confidently invite you to their
                  games.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Skill verification
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Your game history
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Ratings & reviews
                  </li>
                </ul>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <div className="bg-secondary rounded-lg p-8 text-center h-48 flex items-center justify-center">
                  <div className="text-4xl">👤</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Play?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join Playday today and never have a boring sports schedule again.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/signup">
              <Button size="lg" className="gap-2">
                Get Started Free
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 border-t border-border/50 py-8">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center text-sm text-muted-foreground">
          <p>© 2024 Playday. Find your next game.</p>
        </div>
      </footer>
    </main>
  );
}
