var mongoose=require('mongoose');

mongoose.Promise=global.Promise;

const orderSchema=new mongoose.Schema({
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
},
{
    timestamps:true
}
)
module.exports=mongoose.model('Order',orderSchema);