import { createAuthClient } from "better-auth/react";
import clientEnv from "./clientEnv";

export const authClient = createAuthClient({
  baseURL: clientEnv.VITE_API_URL,
});
