import express, { Request, Response } from "express";
import bodyParser from 'body-parser';
import path from 'path';
import cors from "cors";
import "dotenv/config";
import healthRoutes from "./routes/health.routes.js";

const app = express();
const port = process.env.PORT || 3000;
var cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));


// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:4200",
  credentials: true
}));
app.use(express.json());

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
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
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