import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Response } from "express";
import { ApiResponse } from "./core/middlewares/ApiResponse.js";
import { asyncHandler } from "./core/middlewares/asyncHandler.js";
import { errorHandler } from "./core/middlewares/error.middleware.js";
import auth from "./modules/auth/auth.routes.js";

const app = express();
// app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

// job.start()
app.use(express.json({ limit: "1mb" }));

app.get(
  "/api/v1/test",
  asyncHandler(async (res: Response) => {
    return res
      .status(200)
      .json(new ApiResponse(200, "OK", "/ route working successfully"));
  }),
);

app.use("/api/v1/auth", auth);

app.use(errorHandler as any);

export default app;
