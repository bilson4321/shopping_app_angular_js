var mongoose=require('mongoose');

mongoose.Promise=global.Promise;

const userSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        default:"customer"
    }
});

module.exports=mongoose.model('User',userSchema);