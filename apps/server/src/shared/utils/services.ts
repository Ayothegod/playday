import crypto from "crypto";
import parsedEnv from "../../core/config/parsedEnv.js";

const REFRESH_TOKEN_HASH_SECRET = parsedEnv.REFRESH_TOKEN_HASH_SECRET;

export const hashToken = (token: string) => {
  return crypto
    .createHmac("sha256", REFRESH_TOKEN_HASH_SECRET)
    .update(token)
    .digest("hex");
};
