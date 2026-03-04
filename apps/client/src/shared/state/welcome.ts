import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface WelcomeState {}

export const useWelcomeState = create<WelcomeState>()(
  persist(
    (set) => ({
      user: null,
    }),
    { name: "t7est", storage: createJSONStorage(() => localStorage) },
  ),
);
