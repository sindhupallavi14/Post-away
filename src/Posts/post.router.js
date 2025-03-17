import express from "express";

import PostController from "./post.Controller.js";
import { uploadFile } from "../Middlewares/fileUpload.middleware.js";

const postRouter=express.Router();
const postController=new PostController();

postRouter.get("/all",postController.getAllPosts);
postRouter.get("/:id",postController.getPostbyId);
postRouter.get("/",postController.getPostsbyUserId);
postRouter.post("/",uploadFile.single("imageUrl"),postController.addNewPost);
postRouter.delete("/:id",postController.deletePost);
// put for update 
postRouter.put("/:id",uploadFile.single("imageUrl"),postController.updatePost);
export default postRouter;