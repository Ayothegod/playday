import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
  PORT: z.string(),
  CORS_ORIGIN: z.string().url(),
  DATABASE_URL: z.string().url(),
  CLIENT_URL: z.string(),
  // CLOUDINARY_NAME: z.string(),
  // CLOUDINARY_APIKEY: z.string(),
  // CLOUDINARY_APISECRET: z.string(),
});

const parsedEnv = envSchema.parse(process.env);

export default parsedEnv;
