import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
    try {
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
}