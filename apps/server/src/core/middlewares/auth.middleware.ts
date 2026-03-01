// import {
//   verifyAccessToken,
//   verifyRefreshToken,
// } from "@/shared/utils/services.js";
// import { NextFunction, Request, Response } from "express";
// import { ApiError } from "../errors/ApiError.js";
// import { asyncHandler } from "./asyncHandler.js";

// export const checkRefreshCookie = asyncHandler(
//   async (req: Request, res: Response, next: NextFunction) => {
//     const refreshToken = req.cookies?.["refresh-token"];

//     if (!refreshToken) {
//       throw new ApiError(401, "Refresh token is required.");
//     }

//     try {
//       const decoded = verifyRefreshToken(refreshToken);
//       // console.log({ refreshToken });

//       req.decoded = decoded;
//       req.refreshToken = refreshToken;
//       next();
//     } catch (error) {
//       // console.log({ error });
//       throw new ApiError(401, "Invalid or expired refresh token.");
//     }
//   }
// );
