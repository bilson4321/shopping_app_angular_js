const jwt=require('jsonwebtoken');
require('dotenv').config();

module.exports=function(req,res,next)
{
    try{
        const token=req.headers.authorization;
        console.log("in header",token);
        const decodedToken=jwt.verify(token,process.env.secret);
        const userId=decodedToken.id;
        console.log("Decoded Token",userId);
        if(userId===null)
        {
            res.status(404).json({
                error:new Error("Not authorized")
            })
        }
        else
        {
            next();
        }
    }
    catch
    {
        res.status(401).json({
            error:new Error("Invalid Request")
        })
    }
}