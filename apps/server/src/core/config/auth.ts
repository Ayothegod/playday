import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "../database/prisma";
import parsedEnv from "./parsedEnv";

const trustedOrigins = [parsedEnv.CLIENT_URL, "http://localhost:5173"];

const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "sqlite",
  }),
  socialProviders: {
    google: {
      prompt: "select_account",
      clientId: parsedEnv.GOOGLE_CLIENT_ID,
      clientSecret: parsedEnv.GOOGLE_CLIENT_SECRET,
    },
  },
  trustedOrigins,
});

export default auth;
