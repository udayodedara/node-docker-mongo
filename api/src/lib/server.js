import express from "express";
import config from "./config.js";

export const startServer = () => {
  const httpServer = express();
  const port = config.port;

  // .use for handling all incoming requests
  httpServer.use((req, res, next) => {
    console.log(`1 - first express middleware func`);
    next();
  });

  // .use for handling any requests that starts with api
  httpServer.use("/api", (res, req, next) => {
    console.log(`2 - second express middleware func`);
    next();
  });

  httpServer.get("/api/ping", (req, res) => {
    console.log(`ping route: ${req.url} ${Date.now()}`);
    res.status(200).json({
      message: "pong: edit test successful",
    });
  });

  httpServer.all("*", (req, res, next) => {
    console.log("4 - catch all...");
    res.status(404).json({
      message: `${req.url} not found`,
    });
  });

  try {
    httpServer.listen(port, () => {
      console.log(`edit server runninnng on port ${port}`);
    });
  } catch (error) {
    throw new Error(error);
  }
};
