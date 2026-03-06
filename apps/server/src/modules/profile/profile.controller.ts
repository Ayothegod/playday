import { ApiResponse } from "@/core/middlewares/ApiResponse";
import { Request, Response } from "express";

class ProfileController {
  static async onboard(req: Request, res: Response) {
    // const { email, password } = req.body;
    console.log({ body: req.body });

    res.status(201).json(new ApiResponse(201, {}, "User onboard success"));
  }

  // static async login(req: Request, res: Response) {
  //   const { email, password } = req.body;
  //   await AuthService.login(res, email, password);
  //   res.status(200).json(new ApiResponse(200, {}, "User log-in successful."));
  // }
}

export default ProfileController;
