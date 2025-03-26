import jwt from 'jsonwebtoken';

export const authMiddleware = (req: any, res: any, next: any) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.split(" ")[1];
        if(!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);
        req.user = decoded;
        next();
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
}