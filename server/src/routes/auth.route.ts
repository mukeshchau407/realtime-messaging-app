import { Router } from "express";
import {
  authStatusController,
  loginController,
  logoutController,
  registerController,
} from "../controllers/auth.controller";
import { passportAuthenticationJwt } from "../config/password.config";

const authRouter = Router()
  .post("/register", registerController)
  .post("/login", loginController)
  .post("/logout", logoutController)
  .get("/status", passportAuthenticationJwt, authStatusController);

export default authRouter;
