import AppLevelErrHandling from "../ErrorHandling/appLevelErrHandling.middleware.js";

export default class CommentsModel{
    constructor(id,userId,postId,commentContent){
         this.id=id
         this.userId=userId
         this.postId=postId
         this.commentContent=commentContent
    }

    static getCmntsbypostId(postId)
    {
        return comments.filter((c) => c.postId == postId);
    }

    static addCmt(userId,postId,commentContent)
    {
        const newCmt=new CommentsModel((comments.length+1).toString(),userId,postId,commentContent);
        console.log("sindu",newCmt);
        comments.push(newCmt);

        return newCmt;
    }

    static deleteCmt(cmntid)
    {
        const cmntIdx=comments.findIndex((p)=>p.id==cmntid);
        if(cmntIdx==-1)
        {
            throw new AppLevelErrHandling("Comment not found",400)
        }
        else{
            return comments.splice(cmntIdx,1);
        }
    }

    static updateCmt(id,userId,postId,commentContent)
    {
        const cmntIdx=comments.findIndex((p)=>p.id==id);

        if(cmntIdx==-1)
        {
            throw new AppLevelErrHandling("Comment not found",400)
        }
        if(commentContent)
        {
            comments[cmntIdx].commentContent=commentContent
        }
       return comments[cmntIdx];
    }

}

var comments=[]

CommentsModel.addCmt("1","1","super!!")
CommentsModel.addCmt("1","2","Nice!!")
CommentsModel.addCmt("2","1","Great...")
CommentsModel.addCmt("2","1","Good...")