import express from "express";
import userRouter from "./src/user/user.router.js";
import postRouter from "./src/Posts/post.router.js";
import jwtAuth from "./src/Middlewares/jwtAuth.middleware.js";
import AppLevelErrHandling from "./src/ErrorHandling/appLevelErrHandling.middleware.js";
import cmtRouter from "./src/Comments/comments.router.js";
import likesRouter from "./src/Likes/likes.router.js";
import loggerMiddleware from "./src/Middlewares/logger.middleware.js";
import swagger from "swagger-ui-express";
import apiDocs from "./swagger.json" assert{type:"json"};

const server = express();
server.use(express.json());

server.use(loggerMiddleware);

server.use("/api", userRouter);
server.use("/api/posts", jwtAuth, postRouter);
server.use("/api/comments", jwtAuth, cmtRouter);
server.use("/api/likes", jwtAuth,likesRouter);
server.use("/api-docs",swagger.serve,swagger.setup(apiDocs));


server.get("/", (req, res) => {
  res.send("Welcome");
});


server.use((err, req, res, next) => {
  if (err instanceof AppLevelErrHandling) {
    return res.status(err.statusCode).send(err.message);
  }
  // server error
  return res.status(500).send("Something went wrong");
});

server.listen(3200, () => {
  console.log("Listening at 3200");
});
