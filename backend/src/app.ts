import express, { Request, Response, NextFunction } from "express";
import bodyParser from 'body-parser';
import cors from "cors";
import helmet from "helmet";
import cookieParser from 'cookie-parser';
import "dotenv/config";

import healthRoutes from "./routes/health.routes.js";
import { authSession } from "./middleware/auth-session.js";
import { doubleCsrfProtection, invalidCsrfTokenError } from "./middleware/csrf-protection.js";

const app = express();

// 1. Security Headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      frameAncestors: ["'self'"],
    },
  },
}));

// 2. CORS
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:4200",
  credentials: true
}));

// 3. Body & Cookie Parsing
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// 4. Session Management
app.use(authSession);

// 5. CSRF Protection
app.use(doubleCsrfProtection);

const port = process.env.PORT || 3000;
app.use(express.static('public')); // Simplified static path for reliability in ESM

// Routes
app.use("/api/v1/health", healthRoutes);

// 404 Handler
app.use((_req, res) => {
  res.status(404).json({
    error: {
      code: "NOT_FOUND",
      message: "The requested resource was not found."
    }
  });
});

// Global Error Handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  // Handle CSRF errors specifically
  if (err === invalidCsrfTokenError) {
    return res.status(403).json({
      error: {
        code: "INVALID_CSRF_TOKEN",
        message: "CSRF token validation failed."
      }
    });
  }

  console.error(err);
  res.status(err.status || 500).json({
    error: {
      code: err.code || "INTERNAL_SERVER_ERROR",
      message: err.message || "An unexpected error occurred."
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});