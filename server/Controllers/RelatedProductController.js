var mongoose=require('mongoose');

var Product=require('./../Models/Product');


var RelatedProductController={
    addRelated:function(req,res)
    {
        var baseProduct=req.body.baseProduct;
        var recomendedProduct=req.body.recomendedProduct;

        Product.findById(baseProduct,(err,product)=>{
            if(product)
            {
                product.related.push(recomendedProduct);
                product.save();
                res.status(201).json({
                    success:true,
                    message:"related updated",
                    products:product
                });
            }
            else{
                res.status(500).json({"erorr":err});
            }
            
        })
    },
    getRelatedProduct:function(req,res)
    {
        const id=req.params.productID;
        Product.findById(id)
                .select('related')
                .populate('related')
                .then((allRelated)=>{
                    return res.status(200).json({
                        success:true,
                        message:"List of all Related",
                        products:allRelated
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

module.exports=RelatedProductController;