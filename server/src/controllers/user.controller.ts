import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler.middleware";
import { HTTPSTATUS } from "../config/http.config";
import { getUsersService } from "../services/user.service";

export const getUsersController = asyncHandler(
    async (req: Request, res: Response) => {
        const userId = req.body?._id;

        const users = await getUsersService(userId);

        return res.status(HTTPSTATUS.OK).json({
            message: "Users fetched successfully",
            users,
        })
    }
)