var mongoose=require('mongoose');

var Sale=require('./../Models/Sale');
var Product=require('./../Models/Product');
var User=require('./../Models/User');

var saleController={
    createSale:function(req,res)
    {
        const sale=new Sale({
            _id:mongoose.Types.ObjectId(),
            user: req.body.user,
            product: req.body.product,
            quantity: req.body.quantity,
            date: '2020/03/26'
        })
        sale.save()
            .then((newSales)=>{
                return res.status(201).json({
                    success:true,
                    message:"New Sales Added",
                    sale:newSales
                })
            })
            .catch((error)=>{
                res.status(500).json({
                    success:false,
                    message:"server error,Please try again",
                    error:error.message
                })
            });
    },
    getAllSales:function(req,res)
    {
        Sale.find()
            .select(' _id user product quantity date')
            .populate('user')
            .populate('product')
            .then((allSales)=>{
                return res.status(200).json({
                    success:true,
                    message:"List of all sales",
                    sales:allSales
                }) 
            })
            .catch((err)=>{
                res.status(500).json({
                    success:false,
                    message:"server error, please try again",
                    error:err.message
                })
            })
    },
    getSalesById:function(req,res)
    {
        const id=req.params.salesID;
        Sale.findById(id)
            .populate('user')
            .populate('product')
            .then((sale)=>{
                res.status(200).json({
                    success:true,
                    message:"sales of id",
                    Sale:sale
                })
            })
            .catch((err)=>{
                res.status(500).json({
                    success:false,
                    message:"Sale doesn;t exist",
                    error:err.message
                })
            })
    }
}
module.exports=saleController;