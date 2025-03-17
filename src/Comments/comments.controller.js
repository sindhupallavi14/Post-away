import CommentsModel from "./comments.model.js";

export default class CommentsController {
  getCmtbyPost(req, res) {
    const postId = req.params.id;
    try {
      const cmnts = CommentsModel.getCmntsbypostId(postId);
      res.status(200).send(cmnts);
    } catch (err) {
      throw new AppLevelErrHandling(err.message, 400);
    }
  }
  addNewCmt(req, res) {
    const postId = req.params.id;
    try {
      const { commentContent } = req.body;
      console.log("Req body :",req.body)
      
      const userId = req.userId;
      console.log(userId);

      const newCmt = CommentsModel.addCmt(userId, postId, commentContent);
      console.log(newCmt)
      res.status(200).json({status:"Comment Created",newCmnt:newCmt});
    } catch (err) {
      throw new AppLevelErrHandling(err.message, 400);
    }
  }
  deleteCmt(req, res) {
    const cmntid = req.params.id;
    try {
      const cmnt = CommentsModel.deleteCmt(cmntid);
      res.status(200).json({status:"Comment Deleted Successfully",deleteCmt:cmnt});
    } catch (err) {
      throw new AppLevelErrHandling(err.message, 400);
    }
  }
  updateCmt(req, res) {
    const id = req.params.id;
    const userId = req.userId;
    const { postId, commentContent } = req.body;

    try {
      const upCmnt = CommentsModel.updateCmt(id, userId, postId, commentContent);
      res.status(200).json({status:"Comment Updated Successfully",updateCmt:upCmnt});
    } catch (err) {
      throw new AppLevelErrHandling(err.message, 400);
    }
  }
}
