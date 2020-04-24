var express=require('express');
var router=express.Router();
var multer=require('multer');
var upload=multer({dest:"./build/upload/"})

var auth=require('../Services/Auth');

var categoryController=require('../Controllers/CategoryController');
var productController=require('./../Controllers/ProductController');
var relatedProuctController=require('./../Controllers/RelatedProductController');
var userController=require('./../Controllers/UserController');
var orderController=require('./../Controllers/OrderController');
var authenticationController=require('./../Controllers/AuthenticationController');
var homePageController=require('./../Controllers/HomePageController');

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

router.post('/related',auth,relatedProuctController.addRelated);
router.get('/related/:productID',relatedProuctController.getRelatedProduct);

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
router.post('/getQuestion',authenticationController.getQuestion);
router.post('/getTempToken',authenticationController.getTempToken);
router.post('/changePassword',authenticationController.changePassword);

router.get('/homePage',homePageController.getHomePageData);
router.post('/homePage',homePageController.initHomePageData);
router.post('/addBannerImage',upload.single('image'),homePageController.addBannerImage);
router.post('/deleteBannerImage',homePageController.deleteBannerImage);
router.post('/addFeaturedProduct',homePageController.addFeaturedProduct);
router.post('/removeFeaturedProduct',homePageController.removeFeaturedProduct);

module.exports=router;