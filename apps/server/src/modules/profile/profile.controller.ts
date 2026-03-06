import { ApiError } from "@/core/errors/ApiError";
import { ApiResponse } from "@/core/middlewares/ApiResponse";
import { Request, Response } from "express";
import ProfileService from "./profile.service";

class ProfileController {
  static async onboard(req: Request, res: Response) {
    const { selectedSports, selectedSkillLevel, selectedAvailability } =
      req.body;
    console.log(req.body);
    // await ProfileService.onboard(res, email, password);

    res.status(201).json(new ApiResponse(201, {}, "User onboard success"));
  }
}

export default ProfileController;
