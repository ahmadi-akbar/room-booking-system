if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { initialize } from "./middleware/auth";

import config from "./config";

import authRoute from "./routes/auth";
import roomRoute from "./routes/rooms";
const server = express();

// Middleware
server.use(bodyParser.json());
server.use(cors({ credentials: true }));
server.use(initialize);

// Routes
server.use([authRoute, roomRoute]);

// Error handling
server.use((error, req, res, next) => {
  res.json({
    error: {
      message: error.message
    }
  });
});

// Read port and host from the configuration file
server.listen(config.port, config.host, error => {
  if (error) console.error("Error starting", error);
  else console.info("Express listening on port ", config.port);
});
