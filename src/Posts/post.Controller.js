import AppLevelErrHandling from "../ErrorHandling/appLevelErrHandling.middleware.js";
import PostModel from "./post.Model.js";

export default class PostController{
    getAllPosts(req,res)
    {
        const posts=PostModel.getPosts()
        res.send(posts);
    }
    getPostbyId(req,res)
    {
        const id=req.params.id;
        const post=PostModel.getPostbyId(id);
        res.status(200).send(post)

    }
    getPostsbyUserId(req,res)
    {
       const userId=req.userId;
       console.log(userId)
       const posts=PostModel.getPostsbyUserId(userId);
       res.send(posts)

    }
    addNewPost(req,res)
    {
       const{caption}=req.body;
       const imageUrl=req.file.filename;
       const userId=req.userId;
       const newPost=PostModel.addPost(userId,caption,imageUrl);
       res.status(201).json({status:"Post Created",newPost:newPost});
    }
    deletePost(req,res)
    {
      const userId=req.userId;
      const id=req.params.id;
      try{
        const deletedPost=PostModel.delete(id,userId);
        res.status(200).json({status:"Post Deleted",deleted:deletedPost});
      }catch(err)
      {
        throw new AppLevelErrHandling(err.message,404);
      }
    }

    updatePost(req,res)
    {
        const userId=req.userId;
        const id=req.params.id;
        const {caption}=req.body;
        const imageUrl=req.file ? req.file.filename : undefined;

        try{
            const updatePost=PostModel.update(id,userId,caption,imageUrl);
            res.status(200).json({status:"Post Updated",update:updatePost});
        }
        catch(err)
        {
            throw new AppLevelErrHandling(err.message,400)
        }
    }
}