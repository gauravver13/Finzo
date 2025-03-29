import { Request, Response } from "express"
import Account from "../models/Account.model"
import mongoose from "mongoose"

const balance = async(req: Request, res: Response) => {
    const account = await Account.findOne({
        user: req.userId // this is the userId from the authMiddleware
    })

    res.status(200).json({
        balance: account?.balance,
    })
}

const transferMoney = async(req: any, res: any) => {
    const session = await mongoose.startSession();

    session.startTransaction();
    try {
        const { amount, to } = req.body;

        const account = await Account.findOne({ userId: req.userId }).session(session);

        if (!account || account.balance < amount) {
            await session.abortTransaction();
            session.endSession();
            return res.status(400).json({ message: "Insufficient balance" });
        }

        const toAccount = await Account.findOne({ userId: to }).session(session);
        if (!toAccount) {
            await session.abortTransaction();
            session.endSession();
            return res.status(400).json({ message: "Recipient account not found" });
        }

        // Perform the transfer
        await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
        await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

        // commit the transaction
        await session.commitTransaction();
        session.endSession();

        return res.status(200).json({ message: "Transfer successful" });
        // const toAccount = await Account.findOneAndUpdate(
        //     { user: to },
        //     { $inc: { balance: amount } },
        //     { new: true, session }
        // );
        // if (!fromAccount || !toAccount) {
        //     throw new Error("Account not found");
        // }
}

export {
    balance,
    transferMoney
} 