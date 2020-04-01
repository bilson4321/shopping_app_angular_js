var express=require('express');
var router=express.Router();

var categoryController=require('../Controllers/CategoryController');
var productController=require('./../Controllers/ProductController');
var userController=require('./../Controllers/UserController');
var orderController=require('./../Controllers/OrderController');
var authenticationController=require('./../Controllers/AuthenticationController');

router.post('/category',categoryController.createCategory);
router.get('/category',categoryController.getAllCategory);
router.get('/category/:categoryID',categoryController.findCategoryById);
router.patch('/category/:categoryID',categoryController.updateCategory);
router.delete('/category/:categoryID',categoryController.deleteCategory);

router.post('/product',productController.createProduct);
router.get('/product',productController.getAllProduct);
router.get('/product/:productID',productController.findById);
router.patch('/product/:productID',productController.updateProduct);
router.delete('/product/:productID',productController.deleteProduct);
router.get('/product/search/:productName',productController.searchProduct);

router.post('/user',userController.createUser);
router.get('/user',userController.getAllUser);
router.get('/user/:userID',userController.getUserById);
router.patch('/user/:userID',userController.updateUser);
router.delete('/user/:userID',userController.deleteUser);

router.post('/order',orderController.createOrder);
router.get('/order',orderController.getAllOrder);
router.get('/order/:orderID',orderController.getOrderById);

router.post('/authenticate',authenticationController.authenticate);

module.exports=router;