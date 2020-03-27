var mongoose=require('mongoose');

mongoose.Promise=global.Promise;

const productSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    photo:{
        type:String,
        required:false
    },
    description:{
        type:String,
        required:false
    }
});

module.exports=mongoose.model('Product',productSchema);