import express from "express";

import { uploadFile } from "../Middlewares/fileUpload.middleware.js";
import CommentsController from "./comments.controller.js";

const cmtRouter=express.Router();
const cmtController=new CommentsController();

cmtRouter.get("/:id",cmtController.getCmtbyPost);
cmtRouter.post("/:id",cmtController.addNewCmt);
cmtRouter.delete("/:id",cmtController.deleteCmt);
cmtRouter.put("/:id",cmtController.updateCmt);

export default cmtRouter;