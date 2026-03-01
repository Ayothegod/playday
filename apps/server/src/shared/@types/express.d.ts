import * as express from "express";
import { JwtPayload } from "jsonwebtoken";
import type { TokenPayload } from "./lib";

declare global {
  namespace Express {
    interface Request {
      // user: { id?: string; role?: string };
    }
  }
}

export {};
