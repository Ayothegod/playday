import type { OnboardResponse } from "../lib/types";
import api from "../lib/axios";

export const onboardReq = (
  selectedSports: string[],
  selectedSkillLevel: Record<string, string>,
  selectedAvailability: string[],
) => {
  return api.get<OnboardResponse>("/onboard", {
    data: { selectedSports, selectedSkillLevel, selectedAvailability },
  });
};
