import { Router } from "express";
import authRouter from "./auth.route";

const router = Router();
router.use("/auth", authRouter);

//Chat
//user

export default router;
