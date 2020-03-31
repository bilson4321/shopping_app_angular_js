var mongoose=require('mongoose');

var Order=require('./../Models/Order');
var Product=require('../Models/Product');
var User=require('../Models/User');

var orderController={
    createOrder:function(req,res)
    {
        const order=new Order({
            _id:mongoose.Types.ObjectId(),
            user: req.body.user,
            product: req.body.product,
            quantity: req.body.quantity,
            date: '2020/03/26'
        })
        order.save()
            .then((newOrder)=>{
                return res.status(201).json({
                    success:true,
                    message:"New Order Added",
                    order:newOrder
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
    getAllOrder:function(req,res)
    {
        Order.find()
            .select(' _id user product quantity date')
            .populate('user')
            .populate('product')
            .then((allOrder)=>{
                return res.status(200).json({
                    success:true,
                    message:"List of all Order",
                    orders:allOrder
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
    getOrderById:function(req,res)
    {
        const id=req.params.orderID;
        Order.findById(id)
            .populate('user')
            .populate('product')
            .then((order)=>{
                res.status(200).json({
                    success:true,
                    message:"Order of id",
                    Order:order
                })
            })
            .catch((err)=>{
                res.status(500).json({
                    success:false,
                    message:"Order doesnt exist",
                    error:err.message
                })
            })
    }
}
module.exports=orderController;