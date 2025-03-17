import jwt from "jsonwebtoken";
import AppLevelErrHandling from "../ErrorHandling/appLevelErrHandling.middleware.js";

const jwtAuth=(req,res,next)=>{
    // read the token
    const token=req.headers["authorization"];
    // if not token , return the error
    if(!token)
    {
        
        throw new AppLevelErrHandling("Unauthorized",401);
    }

    // if token check it is valid or not
    try{
        const payload=jwt.verify(token,"hGubWprdGtEogPJP616dn9NiIRso6fQn");
        console.log(payload)
        req.userId=payload.userId;

    }catch(err)
    {
        throw new AppLevelErrHandling("Unauthorized",401);
    }

    next();
}

export default jwtAuth;