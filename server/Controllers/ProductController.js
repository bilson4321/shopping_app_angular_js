var mongoose=require('mongoose');

var Product=require('./../Models/Product');
var Category=require('./../Models/Category');


var productController={
    createProduct:function(req,res)
    {
        const product=new Product({
            _id:mongoose.Types.ObjectId(),
            name:req.body.name,
            price:req.body.price,
            photo:'/upload/'+req.file.filename,
            description:req.body.description
        })
        const categoryID=req.body.categoryID;

        if(typeof(categoryID)==="undefined" || categoryID===null)
            res.status(501).json({
                success:false,
                message:"Please provide Category"
            })
         else{
             product.save()
                    .then((result)=>{
                        Category.findById(categoryID,(err,category)=>{
                            if(category)
                            {
                                category.items.push(product);
                                category.save();
                                res.json({"message":result})
                            }
                            console.log(err);
                        })
                    })
                    .catch((err)=>{
                        res.status(500).json({"erorr":err});
                    })
        }  
    },
    getAllProduct:function(req,res)
    {
        Product.find()
                .select('_id name price photo description')
                .then((allProduct)=>{
                    return res.status(200).json({
                        success:true,
                        message:"List of all Product",
                        products:allProduct
                    })
                })
                .catch((err)=>{
                    res.status(500).json({
                        success:false,
                        message:"Server errror,Please try again",
                        error:err.message
                    })
                })
    },
    findById:function(req,res)
    {
        const id=req.params.productID;
        Product.findById(id)
        .then((product)=>{
            res.status(200).json({
                success:true,
                message:"Product of id",
                Product:product
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
    updateProduct:function(req,res)
    {
        const id=req.params.productID;
        const updateObject=req.body;
        Product.update({_id:id},{$set:updateObject})
                .exec()
                .then(()=>{
                    res.status(200).json({
                        success:true,
                        message:"Product updated",
                        updatedProduct:updateObject
                    });
                })
                .catch((err)=>{
                    res.status(500).json({
                        success:false,
                        message:'Server error, Please try again',
                        error:err.message
                    })
                })
    },
    deleteProduct:function(req,res)
    {
        const id=req.params.productID;
        Product.findByIdAndRemove(id)
                .exec()
                .then(()=>{
                    res.status(204).json({
                        success:true,
                        message:"Product Deleted"
                    })
                })
                .catch((err)=>{
                    res.status(500).json({
                        success:false,
                        message:"Please try again",
                        error:err.message
                    })
                })
    },
    searchProduct:function(req,res)
    {
        var productName=req.params.productName;
        var query={"name":{"$regex":productName}};
        Product.find(query)
                .then((products)=>{
                    return res.status(200).json({
                        success:true,
                        message:"Product of query"+productName,
                        Products:products
                    })
                })
                .catch((err)=>{
                    res.status(500).json({
                        success:false,
                        message:"Server errror,Please try again",
                        error:err.message
                    })
                })
    }
}

module.exports=productController;