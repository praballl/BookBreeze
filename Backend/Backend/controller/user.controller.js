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

        const url = `${process.env.BASE_URL}/user/${user._id}/verify/${token.token}`;
        console.log("user info",user);
        console.log("token info",token);
        console.log("This is url",url);
        const message = `
            <h1>Email Verification</h1>
             <p>Thank you for signing up! Please verify your email address by clicking the button below:</p>
            <a href="${url}">${url}</a>
            <p>If you did not create an account, please ignore this email.</p>
            <p>Thank you,<br>BookBreeze</p>
        `;
        await sendEmail(user.email, " BookBreeze", message);


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

                const url = `${process.env.BASE_URL}/user/${user._id}/verify/${token.token}`;
                const message = `
            <h1>Email Verification</h1>
             <p>Trying to log in? Please verify your email address first by clicking the button below:</p>
            <a href="${url}">${url}</a>
            <p>If you did not create an account, please ignore this email.</p>
            <p>Thank you,<br>BookBreeze</p>
        `;
        await sendEmail(user.email, " BookBreeze", message);
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
        // const hash = await bcryptjs.hash(resetToken, 10);

        await new Token({
            userId: user._id,
            token: resetToken,
            createdAt: Date.now()
        }).save();
        console.log("This is token send for reset password",resetToken);
        const resetUrl = `${process.env.BASE_URL}/password-reset/${resetToken}`;

        const message = `
            <h1>Password Reset Request for BookBreeze</h1>
            <p>You requested to reset your password. Please click the link below to reset your password:</p>
            <a href="${resetUrl}">${resetUrl}</a>
            <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>
            <p>Thank you,<br>BookBreeze</p>
        `;

        await sendEmail(user.email, "BookBreeze", message);

        res.status(200).json({ message: "Password reset link sent to your email." });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};

export const resetPassword = async (req, res) => {
    try {
        const { password } = req.body;
        const { token } = req.params;
        console.log("This is params token",token);
        const tokenDoc = await Token.findOne({ token });
        if (!tokenDoc) return res.status(400).json({ message: "Invalid or expired password reset token." });

        const user = await User.findById(tokenDoc.userId);
        if (!user) return res.status(400).json({ message: "User not found." });

        user.password = await bcryptjs.hash(password, 10);
        await user.save();
        await tokenDoc.deleteOne();

        res.status(200).json({ message: "Password reset successfully." });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};