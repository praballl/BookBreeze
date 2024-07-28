import express from "express";
import { signup, login,verifyToken,requestPasswordReset,resetPassword } from "../controller/user.controller.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/:id/verify/:token", verifyToken);
router.post("/password-reset-request", requestPasswordReset);
router.post("/password-reset/:token", resetPassword);

export default router;