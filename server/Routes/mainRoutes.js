var express=require('express');
var router=express.Router();
var multer=require('multer');
var upload=multer({dest:"./build/upload/"})

var auth=require('../Services/Auth');

var categoryController=require('../Controllers/CategoryController');
var productController=require('./../Controllers/ProductController');
var userController=require('./../Controllers/UserController');
var orderController=require('./../Controllers/OrderController');
var authenticationController=require('./../Controllers/AuthenticationController');

router.post('/category',auth,categoryController.createCategory);
router.get('/category',categoryController.getAllCategory);
router.get('/category/:categoryID',categoryController.findCategoryById);
router.patch('/category/:categoryID',auth,categoryController.updateCategory);
router.delete('/category/:categoryID',auth,categoryController.deleteCategory);

router.post('/product',auth,upload.single('image'),productController.createProduct);
router.get('/product',productController.getAllProduct);
router.get('/product/:productID',productController.findById);
router.patch('/product/:productID',auth,productController.updateProduct);
router.delete('/product/:productID',auth,productController.deleteProduct);
router.get('/product/search/:productName',productController.searchProduct);

router.post('/user',userController.createUser);
router.get('/user',auth,userController.getAllUser);
router.get('/user/:userID',auth,userController.getUserById);
router.patch('/user/:userID',auth,userController.updateUser);
router.delete('/user/:userID',auth,userController.deleteUser);

router.post('/order',auth,orderController.createOrder);
router.get('/order',auth,orderController.getAllOrder);
router.get('/order/:orderID',auth,orderController.getOrderById)
router.get('/orderByUser/:userID',auth,orderController.getOrderByUserID);

router.post('/authenticate',authenticationController.authenticate);

module.exports=router;