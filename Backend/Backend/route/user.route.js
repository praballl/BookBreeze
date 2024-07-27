import express from "express";
import { signup, login,verifyToken,requestPasswordReset } from "../controller/user.controller.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/password-reset-request", requestPasswordReset);
router.get("/:id/verify/:token", verifyToken);

export default router;