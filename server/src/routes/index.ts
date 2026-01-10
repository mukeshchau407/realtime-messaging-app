import { Router } from "express";
import authRouter from "./auth.route";
import chatRoutes from "./chat.route";
import userRoutes from "./user.route";

const router = Router();
router.use("/auth", authRouter);
router.use("/chat", chatRoutes);
router.use("/user", userRoutes);

export default router;
