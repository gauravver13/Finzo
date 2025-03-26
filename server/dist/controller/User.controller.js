"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.signIn = exports.signUp = void 0;
const User_model_1 = __importDefault(require("../models/User.model"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const generateAccessAndRefreshTokens = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_model_1.default.findById(userId);
    const accessToken = user.generateAccessToken(userId);
    const refreshToken = user.generateRefreshToken(userId);
    return { accessToken, refreshToken };
});
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, username, email, password } = req.body;
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const user = yield User_model_1.default.findOne({
            $or: [{ email }, { username }]
        });
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        console.log(hashedPassword);
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const newUser = yield User_model_1.default.create({
            firstName,
            lastName,
            username,
            email,
            password: hashedPassword
        });
        console.log("New user created: ", newUser);
        return res.status(200).json({ message: "User created successfully", newUser });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.signUp = signUp;
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password, } = req.body;
        // Improve this logic with username and emails
        if (!email || !password) {
            return res.status(400).json({ message: "Password and credentials are required" });
        }
        const user = yield User_model_1.default.findOne({
            $or: [{ email }, { username }]
        });
        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }
        const isPasswordValid = yield bcryptjs_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid password" });
        }
        const { accessToken, refreshToken } = yield generateAccessAndRefreshTokens(user._id.toString());
        return res.status(200)
            .cookie("accessToken", accessToken)
            .cookie("refreshToken", refreshToken)
            .json({ accessToken, refreshToken, "User": user });
    }
    catch (error) {
        return res.send(400, { message: error.message });
    }
});
exports.signIn = signIn;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // app.patch("/user:id", (req, res) => {
    //     const { firstName, lastName, username, email, password } = req.body;
    //     // Check if the user exists
    //     // Update the user
    //     // Return the updated user
    // });
    try {
        const { username, email, password } = req.body;
        const { id } = req.params;
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.updateUser = updateUser;
