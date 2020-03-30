var express=require('express');
var router=express.Router();

var categoryController=require('../Controllers/CategoryController');
var productController=require('./../Controllers/ProductController');
var userController=require('./../Controllers/UserController');
var saleController=require('./../Controllers/SalesController');

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

router.post('/sale',saleController.createSale);
router.get('/sale',saleController.getAllSales);
router.get('/sale/:saleID',saleController.getSalesById);

module.exports=router;