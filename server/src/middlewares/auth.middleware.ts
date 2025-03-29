import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

declare global {
    namespace Express {
        interface Request {
            userId: string; // Remove optional marker
        }
    }
}

export const authMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const authHeader = req.cookies?.accessToken || req.header("Authorization");

        if (!authHeader || !authHeader.startsWith("Bearer")) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }

        const token = authHeader.startsWith("Bearer")
            ? authHeader.split(" ")[1]
            : authHeader;

        if (!token) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }

        try {
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!) as jwt.JwtPayload;

            if (!decoded.userId) {
                res.status(401).json({ message: "UserId not found in token" });
                return;
            }

            req.userId = decoded.userId;
            next();
        } catch (error) {
            res.status(401).json({ 
                message: "Invalid token",
                error
            });
            return;
        }
    } catch (error) {
        res.status(500).json({ 
            message: "Internal server error",
            error
        });
        return;
    }
};