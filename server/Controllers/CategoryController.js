var mongoose=require('mongoose');

var Category=require('./../Models/Category');

var categroyController={
    createCategory:function(req,res)
    {
        const category=new Category({
            _id:mongoose.Types.ObjectId(),
            name:req.body.name,
            description:req.body.description,
            items:[]
        })

        return category
                .save()
                .then((newCategory)=>{
                    return res.status(201).json({
                        success:true,
                        message:"New Category Added successfully",
                        category:newCategory
                    });
                })
                .catch((error)=>{
                    res.status(500).json({
                        success:false,
                        message:"server error, Please try again",
                        error:error.message
                    });
                });
    },
    getAllCategory:function(req,res)
    {
        Category.find()
                .populate('items')
                .select('_id name description items')
                .then((allCategory)=>{
                    return res.status(200).json({
                        success:true,
                        message:'List of all Category',
                        categories:allCategory
                    })
                })
                .catch((err)=>{
                    res.status(500).json({
                        success:false,
                        message:"Server error, Please try again",
                        error:err.message
                    })
                })
    },
    findCategoryById:function(req,res)
    {
        const id=req.params.categoryID;
        Category.findById(id)
        .populate('items')
        .then((category)=>{
            res.status(200).json({
                success:true,
                message:"Category of id",
                Category:category
            })
        })
        .catch((err)=>{
            res.status(500).json({
                success:false,
                messsage:'This cause does not exist',
                error:err.message
            })
        })
    },
    updateCategory:function(req,res)
    {
        const id=req.params.categoryID;
        const updateObject=req.body;
        Category.update({_id:id},{$set:updateObject})
                .exec()
                .then(()=>{
                    res.status(200).json({
                        sucess:true,
                        message:"Category updated",
                        updateCategory:updateObject
                    });
                })
                .catch((err)=>{
                    res.status(500).json({
                        success:false,
                        message:'Server error, Please Try Again.',
                        error:err.message
                    });
                });
    },
    deleteCategory:function(req,res)
    {
        const id=req.params.categoryID;
        Category.findByIdAndRemove(id)
            .exec()
            .then(()=>res.status(204).json({
                success:true,
                message:"Category deleted"
            }))
            .catch((err)=>{
                res.status(500).json({
                    success:false,
                    message:"Please try again",
                    error:err.message
                })
            });
    }
}

module.exports=categroyController;