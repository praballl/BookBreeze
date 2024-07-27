import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
import Token from '../model/token.js';
import sendEmail from '../utils/sendEmail.js';
import crypto from "crypto";

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists." });
        }
        const hashPassword = await bcryptjs.hash(password, 10);

        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword,
        });
        user = await createdUser.save();

        const cryptoToken = crypto.randomBytes(32).toString("hex");
        const token = await new Token({
            userId: user._id,
            token: cryptoToken
        }).save();

        const url = `${process.env.BASE_URL}user/${user._id}/verify/${token.token}`;
        console.log("user info",user);
        console.log("token info",token);
        console.log("This is url",url);
        await sendEmail(user.email, "Verify Email for BookBreeze", url);


        res.status(201).json({
            message: "An email sent to your account, please verify.",
            user: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email,
            },
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await bcryptjs.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid username or password" });
        }
        if (!user.verified) {
            let token = await Token.findOne({ userId: user._id });
            if (!token) {
                const cryptoToken = crypto.randomBytes(32).toString("hex");
                token = await new Token({
                    userId: user._id,
                    token: cryptoToken
                }).save();

                const url = `${process.env.BASE_URL}user/${user._id}/verify/${token.token}`;
                await sendEmail(user.email, "Verify Email for BookBreeze", url);
            }
            return res.status(400).json({
                message: "An email sent to your account, please verify.",
                user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email,
                },
            });
        }
        res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
            },
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const verifyToken = async (req, res) => {
    try {
        console.log("Verifying token for user:", req.params.id);
        const user = await User.findOne({ _id: req.params.id });
        if (!user) {
            return res.status(400).json({ message: "Invalid link. User not found." });
        }

        console.log("User found:", user.email);

        const token = await Token.findOne({
            userId: user._id,
            token: req.params.token
        });

        if (!token) {
            return res.status(400).json({ message: "Invalid link. Token not found or expired." });
        }

        console.log("Token found:", token);

        await User.updateOne({ _id: req.params.id }, { verified: true });
        await Token.deleteOne({ _id: token._id });

        console.log("User verified and token removed.");

        res.status(200).json({ message: "Email verified successfully" });
    } catch (error) {
        console.log("Error during verification:", error);
        res.status(500).json({ message: "Internal server error", error });
    }
};

export const requestPasswordReset = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User with this email does not exist." });

        let token = await Token.findOne({ userId: user._id });
        if (token) await token.deleteOne();

        const resetToken = crypto.randomBytes(32).toString("hex");
        const hash = await bcryptjs.hash(resetToken, 10);

        await new Token({
            userId: user._id,
            token: hash,
            createdAt: Date.now()
        }).save();

        const resetUrl = `${process.env.BASE_URL}/password-reset/${resetToken}`;
        await sendEmail(user.email, "Password Reset Request", `Click the link to reset your password: ${resetUrl}`);

        res.status(200).json({ message: "Password reset link sent to your email." });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};