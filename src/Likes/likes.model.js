export default class LikesModel{
    constructor(id,userId,postId)
    {
        this.id=id
        this.userId=userId
        this.postId=postId
    }

    static getAllLikes(postId) {
        return Likes.filter((like) => like.postId == postId);
    }

    static addLike(userId,postId)
    {
        const newLike=new LikesModel((Likes.length+1).toString(),userId,postId)
        Likes.push(newLike);
    }

    static removeLike(userId,postId)
    {
        const likeIdx=Likes.findIndex((like)=>like.userId==userId && like.postId==postId)
        if(likeIdx==-1)
        {
            return "Post not Found or Unauthorized";
        }
        else{
            return Likes.splice(likeIdx,1);
        }
    }
    static toggleLike(userId,postId)
    {
        const existingLike=Likes.find((like)=>like.userId==userId && like.postId==postId)
        if(existingLike)
        {
            return this.removeLike(userId,postId);
        }
        else{
            return this.addLike(userId,postId);
        }
    }
}

var Likes=[];