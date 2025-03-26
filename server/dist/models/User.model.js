"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 20
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    }
});
userSchema.methods.generateAccessToken = function () {
    return jsonwebtoken_1.default.sign({
        _id: this._id,
        email: this.email,
        username: this.username,
        firstName: this.firstName,
        lastName: this.lastName
    }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: parseInt(process.env.ACCESS_TOKEN_EXPIRY, 10)
    });
};
userSchema.methods.generateRefreshToken = function () {
    return jsonwebtoken_1.default.sign({
        _id: this._id,
    }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: parseInt(process.env.REFRESH_TOKEN_EXPIRY, 10)
    });
};
const User = mongoose_1.default.model("User", userSchema);
exports.default = User;
