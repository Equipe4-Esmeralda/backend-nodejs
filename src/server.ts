import dotenv from 'dotenv';
import express from "express";
import routes from "./routes";
import cors from 'cors'; 
import path from 'path';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Enhanced body parser configuration
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// CORS configuration
const corsOptions = {
    origin: true, // Reflects the request origin
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'Authorization',
        'Access-Control-Allow-Origin',
        'Access-Control-Allow-Credentials'
    ],
    exposedHeaders: ['Content-Range', 'X-Content-Range']
};

// Apply CORS to all routes
app.use(cors(corsOptions));

// Preflight handler for all routes
app.options('*', cors(corsOptions));

// API routes should come before static files
app.use('/api', routes);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Handle client-side routing - should be last
app.all('*', (req, res) => {
    // Only serve index.html for GET requests that don't start with /api
    if (!req.url.startsWith('/api')) {
        if (req.method === 'GET') {
            res.sendFile(path.join(__dirname, 'public', 'index.html'));
        } else {
            // For non-GET requests that aren't API calls, return 404
            res.status(404).json({ message: 'Not Found' });
        }
    } else {
        // For unmatched API routes, return 404
        res.status(404).json({ message: 'API endpoint not found' });
    }
});

// Global error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error('Error:', err);
    res.status(500).json({
        message: 'Internal Server Error',
        error: err.message
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});