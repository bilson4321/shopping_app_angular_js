var mongoose=require('mongoose');

mongoose.Promise=global.Promise;

const HomePageSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    image:[{
        type:String,
    }],
    featuredProduct:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product'
    }]
});

module.exports=mongoose.model('HomePage',HomePageSchema);