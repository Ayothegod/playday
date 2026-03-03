import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";
import { ArrowRight, Users, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function RootPage() {
  const year = new Date().getFullYear();

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
            <Link to="/auth/login">
              <Button variant="ghost" size="sm" className="cursor-pointer">
                Sign In
              </Button>
            </Link>
            <Link to="/auth/register">
              <Button size="sm" className="cursor-pointer">
                Get Started
              </Button>
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
              <Link to="/auth/register">
                <Button size="lg" className="gap-2 cursor-pointer">
                  Start Playing
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="cursor-pointer">
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
            <Link to="/auth/register">
              <Button size="lg" className="gap-2 cursor-pointer">
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
          <p>© {year} Playday. Find your next game.</p>
        </div>
      </footer>
    </main>
  );
}

// import React, { useState } from 'react'
// import { Button } from '@/components/ui/button'
// import { Card } from '@/components/ui/card'
// import { ArrowRight, Users, MapPin, Clock, Trophy, Zap, Heart } from 'lucide-react'

// const testimonials = [
//   {
//     name: 'Alex Chen',
//     role: 'Basketball Enthusiast',
//     text: 'Playday made finding pickup games so easy. I went from playing once a week to 3 times a week!',
//     avatar: '👨‍💼',
//   },
//   {
//     name: 'Maria Gonzalez',
//     role: 'Tennis Player',
//     text: 'Finally, an app that actually gets how to organize sports. No more endless group chats!',
//     avatar: '👩‍💼',
//   },
//   {
//     name: 'Jordan Smith',
//     role: 'Multi-sport Player',
//     text: 'The skill-based matching is insane. I always get paired with the right people at my level.',
//     avatar: '👨‍🦱',
//   },
// ]

// export default function LandingPage() {
//   return (
//     <main className="bg-background text-foreground min-h-screen">
//       {/* Header/Nav */}
//       <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
//         <div className="max-w-7xl mx-auto px-4 py-4 md:px-6 md:py-5 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
//               PLAYDAY
//             </div>
//           </div>
//           <div className="flex items-center gap-3">
//             <Link href="/signin">
//               <Button variant="ghost" size="sm">
//                 Sign In
//               </Button>
//             </Link>
//             <Link href="/signup">
//               <Button size="sm" className="bg-primary hover:bg-primary/90">
//                 Get Started
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section with Image */}
//       <section className="relative overflow-hidden pt-8 pb-16 md:py-0 md:min-h-screen flex items-center">
//         <div className="absolute inset-0">
//           <Image
//             src="/hero-sports.jpg"
//             alt="Sports action"
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 md:px-6 w-full py-16 md:py-0">
//           <div className="max-w-2xl">
//             <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
//               Your Next Game
//               <br />
//               <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
//                 Starts Here
//               </span>
//             </h1>
//             <p className="text-lg md:text-xl text-foreground/90 mb-8 max-w-xl text-balance">
//               Find players, coordinate sessions, build your sports community. No more group chats. No more chaos.
//               Just basketball, tennis, soccer—whatever you love.
//             </p>
//             <div className="flex gap-4 flex-wrap">
//               <Link href="/signup">
//                 <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
//                   Start Playing Free
//                   <ArrowRight size={20} />
//                 </Button>
//               </Link>
//               <Button size="lg" variant="outline" className="border-foreground/30">
//                 See It In Action
//               </Button>
//             </div>

//             {/* Stats Bar */}
//             <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
//               <div>
//                 <div className="text-3xl font-bold text-primary">5.2k</div>
//                 <div className="text-sm text-foreground/70">Active Players</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-primary">2.8k</div>
//                 <div className="text-sm text-foreground/70">Games/Month</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-primary">7</div>
//                 <div className="text-sm text-foreground/70">Sports</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Grid Section */}
//       <section className="py-20 md:py-28 bg-secondary/50">
//         <div className="max-w-7xl mx-auto px-4 md:px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Players Love Playday</h2>
//             <p className="text-foreground/70 text-lg">Everything you need to find, create, and manage sports sessions</p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Feature 1 */}
//             <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
//               <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
//                 <Image
//                   src="/feature-discover.jpg"
//                   alt="Discover sessions"
//                   fill
//                   className="object-cover hover:scale-105 transition-transform duration-300"
//                 />
//               </div>
//               <div className="p-6">
//                 <div className="flex items-center gap-3 mb-3">
//                   <div className="p-2 bg-primary/20 rounded-lg">
//                     <MapPin className="text-primary" size={20} />
//                   </div>
//                   <h3 className="text-xl font-bold">Discover Sessions</h3>
//                 </div>
//                 <p className="text-foreground/70 mb-4">
//                   Browse nearby games filtered by sport, skill level, and schedule. Find your perfect match instantly.
//                 </p>
//                 <ul className="space-y-2 text-sm">
//                   <li className="flex items-center gap-2">
//                     <span className="text-primary">✓</span> Smart filtering
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="text-primary">✓</span> Real-time updates
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="text-primary">✓</span> Ratings included
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             {/* Feature 2 */}
//             <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
//               <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
//                 <Image
//                   src="/feature-community.jpg"
//                   alt="Build community"
//                   fill
//                   className="object-cover hover:scale-105 transition-transform duration-300"
//                 />
//               </div>
//               <div className="p-6">
//                 <div className="flex items-center gap-3 mb-3">
//                   <div className="p-2 bg-primary/20 rounded-lg">
//                     <Users className="text-primary" size={20} />
//                   </div>
//                   <h3 className="text-xl font-bold">Build Community</h3>
//                 </div>
//                 <p className="text-foreground/70 mb-4">
//                   Connect with players, see their stats and reviews. Build relationships that last beyond one game.
//                 </p>
//                 <ul className="space-y-2 text-sm">
//                   <li className="flex items-center gap-2">
//                     <span className="text-primary">✓</span> Friend profiles
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="text-primary">✓</span> Player ratings
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="text-primary">✓</span> Activity feed
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             {/* Feature 3 */}
//             <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
//               <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
//                 <Image
//                   src="/feature-manage.jpg"
//                   alt="Manage sessions"
//                   fill
//                   className="object-cover hover:scale-105 transition-transform duration-300"
//                 />
//               </div>
//               <div className="p-6">
//                 <div className="flex items-center gap-3 mb-3">
//                   <div className="p-2 bg-primary/20 rounded-lg">
//                     <Clock className="text-primary" size={20} />
//                   </div>
//                   <h3 className="text-xl font-bold">Manage Everything</h3>
//                 </div>
//                 <p className="text-foreground/70 mb-4">
//                   Create sessions, manage spots, invite friends, track attendance. All in one place.
//                 </p>
//                 <ul className="space-y-2 text-sm">
//                   <li className="flex items-center gap-2">
//                     <span className="text-primary">✓</span> Easy creation
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="text-primary">✓</span> Spot management
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="text-primary">✓</span> Direct invites
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Social Features Section */}
//       <section className="py-20 md:py-28">
//         <div className="max-w-7xl mx-auto px-4 md:px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">More Than Just Booking</h2>
//             <p className="text-foreground/70 text-lg">Playday is a full sports community platform</p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8 mb-12">
//             <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8">
//               <div className="flex items-center gap-3 mb-4">
//                 <Trophy className="text-primary" size={28} />
//                 <h3 className="text-2xl font-bold">Gamification & Stats</h3>
//               </div>
//               <p className="text-foreground/80 mb-6">
//                 Earn XP, climb the leaderboard, unlock badges, and track your stats across all sports. Watch yourself
//                 improve and compete with friends.
//               </p>
//               <ul className="space-y-3">
//                 <li className="flex items-center gap-2">
//                   <span className="text-primary font-bold">→</span> Level system (1-50)
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <span className="text-primary font-bold">→</span> 10+ unlockable badges
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <span className="text-primary font-bold">→</span> Global & sport leaderboards
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8">
//               <div className="flex items-center gap-3 mb-4">
//                 <Zap className="text-primary" size={28} />
//                 <h3 className="text-2xl font-bold">Skill-Based Matching</h3>
//               </div>
//               <p className="text-foreground/80 mb-6">
//                 The app learns your skill level and pairs you with players at the right challenge level. Better games,
//                 better connections.
//               </p>
//               <ul className="space-y-3">
//                 <li className="flex items-center gap-2">
//                   <span className="text-primary font-bold">→</span> Smart player matching
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <span className="text-primary font-bold">→</span> Skill progression tracking
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <span className="text-primary font-bold">→</span> Rating system
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="bg-card border border-primary/20 rounded-xl p-8">
//             <div className="flex items-center gap-3 mb-4">
//               <Heart className="text-primary" size={28} />
//               <h3 className="text-2xl font-bold">Court Discovery & Reviews</h3>
//             </div>
//             <p className="text-foreground/80 mb-6">
//               Explore venues near you, read reviews, check amenities, and book courts directly through Playday. Find
//               the perfect place to play.
//             </p>
//             <div className="grid md:grid-cols-3 gap-6 text-sm">
//               <div>
//                 <div className="font-bold text-primary mb-2">500+</div>
//                 <div className="text-foreground/70">Courts & venues</div>
//               </div>
//               <div>
//                 <div className="font-bold text-primary mb-2">Real-time</div>
//                 <div className="text-foreground/70">Availability tracking</div>
//               </div>
//               <div>
//                 <div className="font-bold text-primary mb-2">Community</div>
//                 <div className="text-foreground/70">Reviews & ratings</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-20 md:py-28 bg-secondary/50">
//         <div className="max-w-7xl mx-auto px-4 md:px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">Loved by Players Worldwide</h2>
//             <p className="text-foreground/70 text-lg">See what our community has to say</p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, idx) => (
//               <Card key={idx} className="bg-card border-border p-8">
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="text-4xl">{testimonial.avatar}</div>
//                   <div>
//                     <div className="font-bold">{testimonial.name}</div>
//                     <div className="text-sm text-foreground/60">{testimonial.role}</div>
//                   </div>
//                 </div>
//                 <p className="text-foreground/80">"{testimonial.text}"</p>
//                 <div className="flex gap-1 mt-4">
//                   {[...Array(5)].map((_, i) => (
//                     <span key={i} className="text-primary">
//                       ★
//                     </span>
//                   ))}
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 to-primary/10">
//         <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Level Up Your Game?</h2>
//           <p className="text-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
//             Join thousands of players finding their next game on Playday. No subscriptions. No commitment. Just pure
//             sports.
//           </p>
//           <div className="flex gap-4 justify-center flex-wrap">
//             <Link href="/signup">
//               <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8">
//                 Get Started Free
//                 <ArrowRight size={20} />
//               </Button>
//             </Link>
//             <Link href="/dashboard">
//               <Button size="lg" variant="outline" className="border-foreground/30 px-8">
//                 Browse Sessions
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-card/30 border-t border-border/30 py-12">
//         <div className="max-w-7xl mx-auto px-4 md:px-6">
//           <div className="grid md:grid-cols-4 gap-8 mb-8">
//             <div>
//               <div className="font-bold text-lg mb-4">PLAYDAY</div>
//               <p className="text-foreground/60 text-sm">Find your next game.</p>
//             </div>
//             <div>
//               <div className="font-bold mb-4">Product</div>
//               <ul className="space-y-2 text-sm text-foreground/60">
//                 <li>
//                   <Link href="/" className="hover:text-primary">
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/dashboard" className="hover:text-primary">
//                     Browse Games
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <div className="font-bold mb-4">Community</div>
//               <ul className="space-y-2 text-sm text-foreground/60">
//                 <li>
//                   <Link href="/" className="hover:text-primary">
//                     About
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/" className="hover:text-primary">
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <div className="font-bold mb-4">Legal</div>
//               <ul className="space-y-2 text-sm text-foreground/60">
//                 <li>
//                   <Link href="/" className="hover:text-primary">
//                     Privacy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/" className="hover:text-primary">
//                     Terms
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-border/30 pt-8 text-center text-sm text-foreground/60">
//             <p>© 2024 Playday. All rights reserved. Find your next game.</p>
//           </div>
//         </div>
//       </footer>
//     </main>
//   )
// }
