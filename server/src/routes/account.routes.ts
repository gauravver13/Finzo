import { Request, Response, Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { balance, transferMoney } from "../controller/Account.controller";


const router = Router();

router.route("/balance").get(authMiddleware, balance);
router.route("/transfer").post(authMiddleware, transferMoney);


export default router;