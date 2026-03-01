// middleware/validate.ts
import { ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";
import { ApiResponse } from "./ApiResponse.js";
import { ApiError } from "../errors/ApiError.js";

export const validate =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      const formatted = result.error.flatten();

      const flatMessages = Object.entries(formatted.fieldErrors).flatMap(
        ([field, messages]) => messages?.map((msg) => ({ field, message: msg }))
      );

      // res
      //   .status(400)
      //   .json(
      //     new ApiResponse(404, { errors: flatMessages }, "Validation failed")
      //   );

      throw new ApiError(422, "Validation failed", flatMessages);
    }
    req.body = result.data;
    next();
  };
