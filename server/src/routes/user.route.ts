import { Router } from "express";
import { passportAuthenticationJwt } from "../config/password.config";
import { getUsersController } from "../controllers/user.controller";

const userRoutes = Router()
.use(passportAuthenticationJwt)
.get("/all", getUsersController);

export default userRoutes;