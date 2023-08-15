import Express from 'express';

import jwt from 'jsonwebtoken';

export const authenticateToken = (req:Express.Request, res: Express.Response, next: Express.NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];

    if(!token) {
        return res.status(401).json({message: "Not Authorized"})
    }

    jwt.verify (token as string, process.env.JWT_SECRET as string, (error: jwt.VerifyErrors | null) => {
        if (error) {
            return res.status(403).json(error);
        }

        next();
    })
}