import { Request, Response } from "express"
import Account from "../models/Account.model"

const balance = async(req: Request, res: Response) => {
    const account = await Account.findOne({
        user: req.userId // this is the userId from the authMiddleware
    })

     
}

const transferMoney = async(req: any, res: any) => {
    
}

export {
    balance,
    transferMoney
}