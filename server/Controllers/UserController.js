var mongoose=require('mongoose');

var User=require('./../Models/User');

var bcryptService=require('../Services/Bcrypt')

var userController={
    createUser:function(req,res)
    {
        bcryptService.hashPassword(req.body.password).then((hashedPass)=>{
            const user=new User({
                _id:mongoose.Types.ObjectId(),
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                mobile:req.body.mobile,
                email:req.body.email,
                password:hashedPass,
                address:req.body.address,
                role:req.body.role,
                securityQuestion1:req.body.question1,
                securityAnswer1:req.body.answer1
            })
            return user
                    .save()
                    .then((newUser)=>{
                        return res.status(201).json({
                            success:true,
                            message:"New User Added",
                            user:newUser
                        });
                    })
                    .catch((error)=>{
                        res.status(500).json({
                            success:false,
                            message:"Server error,Please try agian",
                            error:error.message
                        })
                    })
        });
        
    },
    getAllUser:function(req,res)
    {
        User.find()
            .select('_id firstName lastName email phone role address')
            .then((allUser)=>{
                return res.status(200).json({
                    success:true,
                    message:'List of all user',
                    users:allUser
                })
            })
            .catch((err)=>{
                res.status(500).json({
                    success:false,
                    message:"server error, pleae try again",
                    error:err.message
                })
            })
    },
    getUserById:function(req,res)
    {
        const id=req.params.userID;
        User.findById(id)
            .then((user)=>{
                res.status(200).json({
                    success:true,
                    message:"User of Id",
                    User:user
                })
            })
            .catch((err)=>{
                res.status(500).json({
                    success:false,
                    message:"User doesn't exist",
                    error:err.message
                })
            })
    },
    updateUser:function(req,res)
    {
        const id=req.params.userID;
        const updateObject=req.body;
        User.update({_id:id},{$set:updateObject})
            .exec()
            .then(()=>{
                res.status(200).json({
                    success:true,
                    message:"User updated",
                    userUpdated:updateObject
                })
            })
            .catch((err)=>{
                res.status(500).json({
                    success:false,
                    message:"Server error,Please try again",
                    error:err.message
                });
            });
    },
    deleteUser:function(req,res)
    {
        const id=req.params.userID;
        User.findByIdAndDelete(id)
            .exec()
            .then(()=>{
                res.status(204).json({
                    success:true,
                    message:"User Deleted"
                })
            })
            .catch((err)=>{
                res.status(500).json({
                    success:false,
                    message:"Please try again",
                    error:err.message
                })
            })
    }
}
module.exports=userController;