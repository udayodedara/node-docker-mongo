import express from "express";
import config from "./config.js";
import { setupRoutes } from "./setupRoutes.js";

export const startServer = () => {
  const httpServer = express();
  const port = config.port;

  setupRoutes(httpServer);

  try {
    httpServer.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
  } catch (error) {
    throw new Error(error);
  }
};
