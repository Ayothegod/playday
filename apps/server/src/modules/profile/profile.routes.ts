import { validate } from "@/core/middlewares/validateZod.js";
import { Router } from "express";
import { asyncHandler } from "../../core/middlewares/asyncHandler.js";
import ProfileController from "./profile.controller.js";

const router = Router();

router.post("/onboard", asyncHandler(ProfileController.onboard));

export default router;
