var mongoose=require('mongoose');

var HomePage=require('./../Models/HomePage');

var homePageController={
    initHomePageData:function(req,res)
    {
        const homePage=new HomePage({
            _id:mongoose.Types.ObjectId(),
            image:[],
            featuredProduct:[]
        })
        return homePage.save()
                .then((data)=>{
                    return res.status(200).json({
                        success:true,
                        message:'Home Page Data',
                        homePageData:data
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
    getHomePageData:function(req,res)
    {
        HomePage.find()
                .populate('featuredProduct')
                .then((data)=>{
                    return res.status(200).json({
                        success:true,
                        message:'Home Page Data',
                        homePageData:data
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
    addBannerImage:function(req,res){
        const id=req.body.id;
        const image='/upload/'+req.file.filename;
        
        HomePage.findById(id,(err,page)=>{
            if(page)
            {
                page.image.push(image);
                page.save();
                res.status(201).json({
                    success:true,
                    message:"related updated",
                    images:image
                });
            }
            else{
                res.status(500).json({"erorr":err});
            }
        })
    },
    deleteBannerImage:function(req,res)
    {
        const id=req.body.id;
        const deleteimage=req.body.image;
        console.log(req.body);
        HomePage.update({ _id : id },{ $pull : {image:deleteimage}})
                .exec()
                .then(()=>{
                    res.status(200).json({
                        success:true,
                        message:"Page updated",
                        deletedImage:deleteimage
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
    addFeaturedProduct:function(req,res)
    {
        const id=req.body.id;
        const productId=req.body.productId;
        HomePage.findById(id,(err,page)=>{
            if(page)
            {
                page.featuredProduct.push(productId);
                page.save();
                res.status(201).json({
                    success:true,
                    message:"featured updated",
                    product:productId
                });
            }
            else{
                res.status(500).json({"erorr":err});
            }
        })
    },
    removeFeaturedProduct:function(req,res)
    {
        const id=req.body.id;
        const deleteProduct=req.body.productId;
        HomePage.update({ _id : id },{ $pull : {featuredProduct:deleteProduct}})
        .exec()
        .then(()=>{
            res.status(200).json({
                success:true,
                message:"Page updated",
                deletedProduct:deleteProduct
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
    updateHomePage:function(req,res)
    {
        const id=req.params.categoryID;
        const updateObject=req.body;
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
    }
}

module.exports=homePageController;