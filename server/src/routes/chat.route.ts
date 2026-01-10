import { Router } from "express";
import { passportAuthenticationJwt } from "../config/password.config";
import {
  createChatsController,
  getSingleChatsController,
  getUserChatsController,
} from "../controllers/chat.controller";

const chatRoutes = Router()
  .use(passportAuthenticationJwt)
  .post("/create", createChatsController)
  .get("/all", getUserChatsController)
  .get("/:id", getSingleChatsController);

export default chatRoutes;
