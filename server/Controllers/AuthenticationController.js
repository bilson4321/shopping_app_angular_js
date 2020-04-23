var mongoose=require('mongoose');

var User=require('./../Models/User');

var bcryptService=require('../Services/Bcrypt');
var jwt=require('jsonwebtoken');

require('dotenv').config();

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
                    var token=jwt.sign(payload,process.env.secret)
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
    },
    getQuestion:function(req,res)
    {
        var userEmail=req.body.email;
        var query={email:userEmail};
        User.find(query)
        .then((data)=>{
            return res.status(201).json({
                success:true,
                message:"email found",
                "question":data[0].securityQuestion1
            });  
        })
        .catch((err)=>{
            res.status(406).json({
                success:false,
                message:"User not found",
                error:err.message
            })
        })
    },
    getTempToken:function(req,res)
    {
        var userEmail=req.body.email;
        var question=req.body.question;
        var answer=req.body.answer;
        var query={email:userEmail};
        User.find(query)
        .then((data)=>{
            if(data[0].securityQuestion1===question&&data[0].securityAnswer1==answer)
                {
                    payload={
                        "id":data[0]._id,
                        "name":"temp token"
                    }
                    var token=jwt.sign(payload,process.env.secret)
                    return res.status(201).json({
                        success:true,
                        message:"Temp token",
                        Token:token
                    });
                }
                else
                {
                    res.status(302).json({
                        success:false,
                        message:"Wrong Answer, Please try again"
                    })
                }
           
        })
        .catch((err)=>{
            res.status(406).json({
                success:false,
                message:"User not found",
                error:err.message
            })
        })
    },
    changePassword:function(req,res)
    {
        var id=req.body.id;
        bcryptService.hashPassword(req.body.password).then((hashedPassword)=>{
            User.update({_id:id},{$set:{
                "password":hashedPassword
            }})
                .exec()
                .then(()=>{
                    res.status(200).json({
                        success:true,
                        message:"Password changed",
                    })
                })
                .catch((err)=>{
                    res.status(500).json({
                        success:false,
                        message:"Server error,Please try again",
                        error:err.message
                    });
                });
        });
    }
};

module.exports=authenticationController;