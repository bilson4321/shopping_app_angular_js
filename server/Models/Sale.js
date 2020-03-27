var mongoose=require('mongoose');

mongoose.Promise=global.Promise;

const salesSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    quantity:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true,
    }
})
module.exports=mongoose.model('Sale',salesSchema);