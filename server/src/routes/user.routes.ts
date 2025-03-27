import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { signUp, signIn, updateUser } from "../controller/User.controller";

const router = Router();

router.route("/signup").post(signUp);
router.route("/signin").post(signIn);

// logout!
router.route("/user/:id").patch(authMiddleware, updateUser);


export default router;
