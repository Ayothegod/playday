import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const steps = [
  "welcome",
  "sports",
  "skill",
  "availability",
  "complete",
] as const;

export const sports = [
  { id: "football", name: "Football", emoji: "🏈" },
  { id: "basketball", name: "Basketball", emoji: "🏀" },
  { id: "boxing", name: "Boxing", emoji: "🥊" },
  { id: "kickboxing", name: "Kickboxing", emoji: "🥋" },
  { id: "running", name: "Running", emoji: "🏃" },
  { id: "fitness", name: "General Fitness", emoji: "💪" },
  { id: "governors-walk", name: "Governor's Progressive Walk", emoji: "🚶" },
];

export const skillLevels = [
  { id: "beginner", label: "Beginner", description: "Just starting out" },
  { id: "intermediate", label: "Intermediate", description: "Some experience" },
  { id: "advanced", label: "Advanced", description: "Very experienced" },
  { id: "pro", label: "Pro", description: "Competition level" },
];

export const availability = [
  { id: "weekends", label: "Weekends", emoji: "📅" },
  { id: "weekdays-morning", label: "Weekday Mornings", emoji: "🌅" },
  { id: "weekdays-evening", label: "Weekday Evenings", emoji: "🌆" },
  { id: "flexible", label: "Flexible", emoji: "⏰" },
];

interface WelcomeState {
  selectedSports: string[];
  setSelectedSports: (sportId: string) => void;
  selectedAvailability: string[];
  setSelectedAvailability: () => void;
  selectedSkillLevel: Record<string, string>;
  setSelectedSkillLevel: () => void;

  loading: boolean;
  setLoading: () => void;
}

export const useWelcomeState = create<WelcomeState>()(
  persist(
    (set, get) => ({
      loading: false,
      selectedSports: [],
      selectedAvailability: [],
      selectedSkillLevel: {},
      setLoading: () => set((state) => ({ loading: !state.loading })),
      setSelectedSports: (sportId) => {
        const sports = get().selectedSports;
        const updateSports = sports.includes(sportId)
          ? sports.filter((s) => s !== sportId)
          : [...sports, sportId];
        set({ selectedSports: updateSports });
      },
      setSelectedAvailability: () => set({}),
      setSelectedSkillLevel: () => set({}),
    }),
    { name: "t7est", storage: createJSONStorage(() => localStorage) },
  ),
);
