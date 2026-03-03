import { FloatingActionButton } from "@/shared/components/FloatingButton";
import { SportsIcon } from "@/shared/components/SportIcon";
import { TopBar } from "@/shared/components/TopBar";
import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";
import { Clock, Filter, MapPin, Search, Users } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const mockCourts = [
  {
    id: "1",
    name: "Central Park Basketball Court A",
    location: "Central Park, NYC",
    sport: "basketball",
    address: "123 Park Ave",
    rating: 4.8,
    reviews: 156,
    amenities: ["Parking", "Lights", "Restrooms"],
    availability: "Open 6am-10pm",
    sessions: 12,
    image: "🏀",
  },
  {
    id: "2",
    name: "Riverside Tennis Club",
    location: "Riverside, CA",
    sport: "tennis",
    address: "456 River St",
    rating: 4.9,
    reviews: 234,
    amenities: ["Parking", "Pro Shop", "Cafe"],
    availability: "Open 7am-9pm",
    sessions: 8,
    image: "🎾",
  },
  {
    id: "3",
    name: "Mission Bay Soccer Complex",
    location: "San Francisco, CA",
    sport: "soccer",
    address: "789 Bay Rd",
    rating: 4.6,
    reviews: 98,
    amenities: ["Parking", "Lights", "Food"],
    availability: "Open 6am-11pm",
    sessions: 15,
    image: "⚽",
  },
  {
    id: "4",
    name: "Santa Monica Beach Volleyball",
    location: "Santa Monica, CA",
    sport: "volleyball",
    address: "Beach Blvd",
    rating: 4.7,
    reviews: 187,
    amenities: ["Parking", "Showers", "Beach Bar"],
    availability: "Open 8am-sunset",
    sessions: 10,
    image: "🏐",
  },
  {
    id: "5",
    name: "Sports Complex Hall B",
    location: "Downtown, LA",
    sport: "badminton",
    address: "321 Sports Way",
    rating: 4.5,
    reviews: 76,
    amenities: ["Parking", "AC", "Locker Rooms"],
    availability: "Open 9am-10pm",
    sessions: 6,
    image: "🏸",
  },
  {
    id: "6",
    name: "Sunset Beach Volleyball Courts",
    location: "Malibu, CA",
    sport: "volleyball",
    address: "PCH & Sunset",
    rating: 4.9,
    reviews: 145,
    amenities: ["Free Parking", "Showers", "Lifeguards"],
    availability: "Open 7am-dusk",
    sessions: 9,
    image: "🏐",
  },
];

export default function CourtsPage() {
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourts = mockCourts.filter((court) => {
    const matchesSport = !selectedSport || court.sport === selectedSport;
    const matchesSearch =
      court.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      court.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSport && matchesSearch;
  });

  const sports = Array.from(new Set(mockCourts.map((c) => c.sport)));

  return (
    <main className="bg-background min-h-screen">
      <TopBar title="courts" />

      <div className="max-w-6xl mx-auto px-4 py-6 md:px-6 pb-24">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Courts & Venues</h1>
          <p className="text-foreground/70">
            Discover the best places to play near you
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/40"
            />
            <input
              type="text"
              placeholder="Search courts, venues, locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-card rounded-lg border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary/50"
            />
          </div>

          {/* Sport Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            <button
              onClick={() => setSelectedSport(null)}
              className={`px-4 py-2 rounded-lg font-bold whitespace-nowrap transition-colors ${
                selectedSport === null
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border hover:border-primary/50"
              }`}
            >
              <Filter size={16} className="inline mr-2" />
              All Sports
            </button>
            {sports.map((sport) => (
              <button
                key={sport}
                onClick={() => setSelectedSport(sport)}
                className={`px-4 py-2 rounded-lg font-bold whitespace-nowrap transition-colors flex items-center gap-2 ${
                  selectedSport === sport
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border hover:border-primary/50"
                }`}
              >
                <SportsIcon sport={sport} />
                {sport.charAt(0).toUpperCase() + sport.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-4 text-sm text-foreground/60">
          Showing {filteredCourts.length} court
          {filteredCourts.length !== 1 ? "s" : ""}
        </div>

        {/* Courts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourts.map((court) => (
            <Card
              key={court.id}
              className="bg-card border-border overflow-hidden hover:border-primary/50 transition-colors"
            >
              {/* Court Image */}
              <div className="bg-linear-to-br from-primary/20 to-primary/5 p-8 text-center h-40 flex items-center justify-center border-b border-border">
                <div className="text-6xl">{court.image}</div>
              </div>

              {/* Court Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{court.name}</h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < Math.floor(court.rating)
                            ? "text-primary"
                            : "text-foreground/30"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="font-bold text-sm">{court.rating}</span>
                  <span className="text-xs text-foreground/60">
                    ({court.reviews})
                  </span>
                </div>

                {/* Location */}
                <div className="flex items-start gap-2 mb-2 text-sm text-foreground/70">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <p className="font-bold">{court.location}</p>
                    <p className="text-xs">{court.address}</p>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-2 mb-3 text-sm text-foreground/70">
                  <Clock size={16} className="text-primary" />
                  <span>{court.availability}</span>
                </div>

                {/* Sessions */}
                <div className="flex items-center gap-2 mb-4 text-sm text-foreground/70">
                  <Users size={16} className="text-primary" />
                  <span>{court.sessions} upcoming sessions</span>
                </div>

                {/* Amenities */}
                <div className="mb-4">
                  <p className="text-xs text-foreground/60 mb-2">Amenities</p>
                  <div className="flex flex-wrap gap-1">
                    {court.amenities.map((amenity, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-secondary px-2 py-1 rounded"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Link to="/dashboard" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      View Sessions
                    </Button>
                  </Link>
                  <Button size="sm" className="flex-1">
                    Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredCourts.length === 0 && (
          <Card className="bg-card p-12 border-border text-center">
            <div className="text-4xl mb-4">🔍</div>
            <p className="text-foreground/70">
              No courts found matching your search. Try a different location or
              sport.
            </p>
          </Card>
        )}
      </div>

      <FloatingActionButton />
    </main>
  );
}
