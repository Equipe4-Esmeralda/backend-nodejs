var jsonwebtoken = require("@types/jsonwebtoken")
import { Request, Response, NextFunction } from 'express';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

interface UserPayload {
  userId: string;
}

// Declare a custom Request type that extends the default Express Request
interface AuthenticatedRequest extends Request {
  user?: UserPayload; // Optional user property
}

export const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jsonwebtoken.verify(token, JWT_SECRET, (err: any, user: UserPayload) => {
    if (err) return res.sendStatus(403);
    req.user = user; // Now req.user is correctly typed
    next();
  });
};