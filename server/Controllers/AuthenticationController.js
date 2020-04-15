var mongoose=require('mongoose');

var User=require('./../Models/User');

var bcryptService=require('../Services/Bcrypt');
var jwt=require('jsonwebtoken');

var authenticationController={
    authenticate:function(req,res)
    {
        var userEmail=req.body.email;
        var password=req.body.password;
        var query={email:userEmail};
        User.find(query)
        .then((data)=>{
            bcryptService.comparePassword(password,data[0].password).then((result)=>
            {
                if(result)
                {
                    payload={
                        "id":data[0].id,
                        "name":data[0].firstName+" "+data[0].lastName,
                        "role":data[0].role
                    }
                    var token=jwt.sign(payload,"mysecret")
                    return res.status(201).json({
                        success:true,
                        message:"Credential Verified Welcome",
                        Token:token
                    });
                }
                else
                {
                    res.status(302).json({
                        success:false,
                        message:"Wrong credential, Please try again"
                    })
                }
            })
        })
        .catch((err)=>{
            res.status(406).json({
                success:false,
                message:"User not found",
                error:err.message
            })
        })
    }
};

module.exports=authenticationController;