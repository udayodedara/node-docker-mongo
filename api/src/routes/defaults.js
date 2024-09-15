import express from "express";

const defaultRouter = express.Router();

export const defaultRoutes = (router) => {
  router.use("/", defaultRouter);

  defaultRouter.get("/ping", (req, res) => {
    console.log(`hitting ping handler ${req.url} ${Date.now()}`);

    res.status(200).json({
      code: 200,
      message: `Pong: test successful`,
    });
  });

  defaultRouter.all("/ping", (req, res) => {
    const code = 405;
    res.status(code).json({
      code: code,
      message: `${req.method} is not allowed for this route ${req.url}`,
    });
  });

  defaultRouter.all("*", (req, res) => {
    const code = 404;
    res.status(code).json({
      code: code,
      message: `${req.url} is not found`,
    });
  });
};
