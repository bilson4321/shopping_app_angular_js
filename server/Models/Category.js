var mongoose=require('mongoose');

mongoose.Promise=global.Promise;

const categorySchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:false
    },
    items:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product'
    }]
});

module.exports=mongoose.model('Category',categorySchema);