import { type SessionData } from "../components/SessionCard";

export const mockSessions: SessionData[] = [
  {
    id: "1",
    sport: "basketball",
    title: "Sunday Pickup Basketball",
    location: "Central Park Court A",
    date: "Mar 2, 2024",
    time: "2:00 PM",
    skillLevel: "intermediate",
    totalSpots: 10,
    availableSpots: 3,
    attendees: [
      { name: "John Smith" },
      { name: "Sarah Johnson" },
      { name: "Mike Davis" },
      { name: "Emma Wilson" },
      { name: "Alex Chen" },
      { name: "Lisa Park" },
      { name: "Tom Brown" },
    ],
    organizer: "John Smith",
    description: "Friendly basketball game. Mix of skill levels welcome!",
    status: "open",
  },
  {
    id: "2",
    sport: "tennis",
    title: "Mixed Doubles Tennis",
    location: "Riverside Tennis Club",
    date: "Mar 3, 2024",
    time: "6:00 PM",
    skillLevel: "advanced",
    totalSpots: 4,
    availableSpots: 1,
    attendees: [
      { name: "Rachel Green" },
      { name: "Ross Geller" },
      { name: "Monica Geller" },
    ],
    organizer: "Rachel Green",
    description: "Competitive mixed doubles. RSVP required.",
    status: "open",
  },
  {
    id: "3",
    sport: "football",
    title: "Flag Football Game",
    location: "Mission Bay Park",
    date: "Mar 4, 2024",
    time: "7:00 PM",
    skillLevel: "beginner",
    totalSpots: 16,
    availableSpots: 8,
    attendees: [
      { name: "Cooper Wright" },
      { name: "Chandler Muriel" },
      { name: "Phoebe Buffay" },
      { name: "Joey Tribbiani" },
      { name: "Gunther" },
      { name: "Janice Litman" },
      { name: "Ben Geller" },
      { name: "Frank Jr" },
    ],
    organizer: "Cooper Wright",
    description: "Fun flag football tournament. No experience needed!",
    status: "open",
  },
  {
    id: "4",
    sport: "volleyball",
    title: "Casual Beach Volleyball",
    location: "Santa Monica Beach",
    date: "Mar 5, 2024",
    time: "5:00 PM",
    skillLevel: "beginner",
    totalSpots: 12,
    availableSpots: 5,
    attendees: [
      { name: "Amy Winehouse" },
      { name: "Brandon Flowers" },
      { name: "Christina Aguilera" },
      { name: "David Bowie" },
      { name: "Ella Fitzgerald" },
      { name: "Frank Sinatra" },
      { name: "Gwen Stefani" },
    ],
    organizer: "Amy Winehouse",
    description: "Beach volleyball practice session. Beginners welcome!",
    status: "open",
  },
  {
    id: "5",
    sport: "badminton",
    title: "Badminton Doubles",
    location: "Sports Complex Hall B",
    date: "Mar 6, 2024",
    time: "8:00 PM",
    skillLevel: "intermediate",
    totalSpots: 8,
    availableSpots: 2,
    attendees: [
      { name: "Serena Williams" },
      { name: "Venus Williams" },
      { name: "Roger Federer" },
      { name: "Novak Djokovic" },
      { name: "Rafael Nadal" },
      { name: "Andy Murray" },
    ],
    organizer: "Serena Williams",
    description: "Social badminton game. Good skill level required.",
    status: "open",
  },
  {
    id: "6",
    sport: "basketball",
    title: "Full Court Basketball",
    location: "Downtown Sports Arena",
    date: "Mar 7, 2024",
    time: "6:30 PM",
    skillLevel: "advanced",
    totalSpots: 12,
    availableSpots: 0,
    attendees: [
      { name: "LeBron James" },
      { name: "Stephen Curry" },
      { name: "Kyrie Irving" },
      { name: "Kevin Durant" },
      { name: "Giannis Antetokounmpo" },
      { name: "Luka Doncic" },
      { name: "Damian Lillard" },
      { name: "Jayson Tatum" },
      { name: "Joel Embiid" },
      { name: "Kawhi Leonard" },
      { name: "Tyson Chandler" },
      { name: "Chris Paul" },
    ],
    organizer: "LeBron James",
    description: "Competitive full court game. Advanced players only.",
    status: "full",
  },
];

export const userSessions: SessionData[] = [
  mockSessions[0],
  mockSessions[1],
  mockSessions[3],
];

export const achievements = [
  {
    id: "first-game",
    name: "Game On",
    description: "Attended your first game",
    icon: "🎮",
    unlocked: true,
  },
  {
    id: "streak-5",
    name: "On Fire",
    description: "Attended 5 games in a row",
    icon: "🔥",
    unlocked: true,
  },
  {
    id: "social-butterfly",
    name: "Social Butterfly",
    description: "Made 10 friends",
    icon: "🦋",
    unlocked: false,
  },
  {
    id: "level-10",
    name: "Rising Star",
    description: "Reached level 10",
    icon: "⭐",
    unlocked: true,
  },
  {
    id: "perfect-attendance",
    name: "Never Miss",
    description: "Never cancelled or no-showed",
    icon: "✨",
    unlocked: false,
  },
  {
    id: "skill-master",
    name: "Skill Master",
    description: "Reached advanced skill level in 3 sports",
    icon: "🏆",
    unlocked: false,
  },
];

export const mockUsers = {
  "demo@playday.com": {
    id: "user-1",
    email: "demo@playday.com",
    name: "You",
    avatar: "👤",
    level: 12,
    xp: 4200,
    skillLevel: "intermediate",
    sports: ["basketball", "tennis", "badminton"],
    gamesPlayed: 24,
    bio: "Love playing basketball and tennis on weekends!",
    joinDate: "Jan 2024",
    rating: 4.8,
    stats: {
      basketball: { level: "intermediate", gamesPlayed: 15 },
      tennis: { level: "beginner", gamesPlayed: 6 },
      badminton: { level: "intermediate", gamesPlayed: 3 },
    },
    achievements: achievements.slice(0, 4),
  },
};

export const mockFriends = [
  {
    id: "friend-1",
    name: "John Smith",
    avatar: "👨‍🦱",
    level: 15,
    rating: 4.9,
    sports: ["basketball", "football"],
    status: "online",
    lastActive: "2 hours ago",
    isFriend: true,
  },
  {
    id: "friend-2",
    name: "Sarah Johnson",
    avatar: "👩‍🦰",
    level: 11,
    rating: 4.7,
    sports: ["tennis", "volleyball"],
    status: "offline",
    lastActive: "1 day ago",
    isFriend: true,
  },
  {
    id: "friend-3",
    name: "Mike Davis",
    avatar: "👨‍🦱",
    level: 13,
    rating: 4.6,
    sports: ["basketball", "badminton"],
    status: "online",
    lastActive: "now",
    isFriend: true,
  },
];

// export const getUserFromStorage = () => {
//   if (typeof window !== 'undefined') {
//     const user = localStorage.getItem('user')
//     if (user) {
//       const parsedUser = JSON.parse(user)
//       return mockUsers[parsedUser.email] || parsedUser
//     }
//   }
//   return null
// }

export const getUserFromStorage = () => {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }
  return null;
};
