"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const User_controller_1 = require("../controller/User.controller");
const router = (0, express_1.Router)();
router.route("/signup").post(User_controller_1.signUp);
router.route("/signin").post(User_controller_1.signIn);
// logout!
router.route("/user/:id").patch(auth_middleware_1.authMiddleware, User_controller_1.updateUser);
exports.default = router;
