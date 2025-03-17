import AppLevelErrHandling from "../ErrorHandling/appLevelErrHandling.middleware.js";
import LikesModel from "./likes.model.js";

export default class LikesController {
  getAllLikes(req, res) {
    const postId = req.params.postId;
    try {
      const likes = LikesModel.getAllLikes(postId);
      res.status(200).json({ status: "Likes of this post", likes: likes });
    } catch (err) {
      throw new AppLevelErrHandling(err.message, 400);
    }
  }

  toggleLikes(req, res) {
    const userId = req.userId;
    const postId = req.params.postId;
    try {
      const likeStatus = LikesModel.toggleLike(userId, postId);
      res
        .status(200)
        .json({ status: likeStatus ? "Like added" : "Like removed" });
    } catch (err) {
      throw new AppLevelErrHandling(err.message, 400);
    }
  }
}
