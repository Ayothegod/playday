import { validate } from "@/core/middlewares/validateZod.js";
import { Router } from "express";
import { asyncHandler } from "../../core/middlewares/asyncHandler.js";

const router = Router();

router.post(
  "/login",
  () => {},
  // asyncHandler(AuthController.login)
);

export default router;
