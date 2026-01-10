import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler.middleware";
import { HTTPSTATUS } from "../config/http.config";
import { chatIdSchema, createChatSchema } from "../validators/chat.validator";
import {
  createChatsService,
  getSingleChatsService,
  getUserChatsService,
} from "../services/chat.service";

export const createChatsController = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.body?._id;

    const body = createChatSchema.parse(req.body);

    const chat = await createChatsService(userId, body);

    return res.status(HTTPSTATUS.OK).json({
      message: "Chat created successfully",
      chat,
    });
  }
);

export const getUserChatsController = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.body?._id;

    const chats = await getUserChatsService(userId);

    return res.status(HTTPSTATUS.OK).json({
      message: "Chats fetched successfully",
      chats,
    });
  }
);

export const getSingleChatsController = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.body?._id;
    const { id } = chatIdSchema.parse(req.params);

    const { chat, messages } = await getSingleChatsService(userId, id);

    return res.status(HTTPSTATUS.OK).json({
      message: "Chats fetched successfully",
      chat,
      messages,
    });
  }
);
