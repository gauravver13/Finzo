import { Router } from "express";
import { balance, transferMoney } from "../controller/Account.controller";


const router = Router();

// we can do this as well 
// router.route("/balance").get(authMiddleware, balance);
// router.route("/transfer").post(authMiddleware, transferMoney);

router.route("/balance").get(balance);
router.route("/transfer").post(transferMoney);


export default router;