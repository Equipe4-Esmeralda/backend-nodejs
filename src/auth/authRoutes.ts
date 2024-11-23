import express, { Request, Response } from 'express';
import { register, login } from './authService'; // Assuming authService.ts exports register and login

const router = express.Router();

// Define interfaces for request bodies
interface RegisterRequest {
  email: string;
  password: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

router.post('/register', async (req: Request<{}, {}, RegisterRequest>, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await register(email, password);
    res.status(201).json(user);
  } catch (error: any) { // Use any or a more specific error type if available
    res.status(400).json({ error: error.message });
  }
});

router.post('/login', async (req: Request<{}, {}, LoginRequest>, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await login(email, password);
    res.json({ token });
  } catch (error: any) { // Use any or a more specific error type if available
    res.status(401).json({ error: error.message });
  }
});

export default router;