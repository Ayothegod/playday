import { ApiError } from "@/core/errors/ApiError";
import { ApiResponse } from "@/core/middlewares/ApiResponse";
import { Request, Response } from "express";
import ProfileService from "./profile.service";

class EventController {
  static async create(req: Request, res: Response) {
    console.log(req.body);

    res.status(201).json(new ApiResponse(201, {}, "User onboard success"));
  }
}

export default EventController;
