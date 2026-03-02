import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.string().default("development"),
  VITE_API_URL: z.string().url(),
  VITE_FRONTEND_URL: z.string().url(),
});

const clientEnv = envSchema.parse(import.meta.env);

export default clientEnv;
