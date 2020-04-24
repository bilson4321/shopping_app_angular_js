import angular from 'angular';
import 'angular-resource';
import '@uirouter/angularjs';
import 'angular-jwt';
import 'angular-sanitize';
import 'angular-toastr';
import 'angular-animate';
import 'angular-chart.js/dist/angular-chart';
import 'chart.js/dist/Chart';

import ProductService from './Services/ProductService';
import CategoryService from './Services/CategoryService';
import AuthService from './Services/AuthService';
import OrderService from './Services/OrderService';
import UserService from './Services/UserService';

import NavbarController from './Controllers/NavbarController';
import HomePageController from './Controllers/HomePageController';
import CardController from './Controllers/CardController';
import ProductDetailController from './Controllers/ProductDetailController';
import SearchPageController from './Controllers/SearchPageController';
import LoginController from './Controllers/LoginController';
import AdminDashboardController from './Controllers/AdminDashboardController';
import AddProductController from './Controllers/AddProductController';
import ViewProductController from './Controllers/ViewProductController';
import EditProductController from './Controllers/EditProductController';
import AddCategoryController from './Controllers/AddCategoryController';
import ViewCategoryController from './Controllers/ViewCategoryController';
import EditCategoryController from './Controllers/EditCategoryController';
import OrderProductController from './Controllers/OrderProductController';
import CustomerOrderController from './Controllers/CustomerOrderController';
import EditCustomerProfileController from './Controllers/EditCustomerProfileController';
import ShopByCategoryController from './Controllers/ShopByCategoryController';
import UserRegisterController from './Controllers/UserRegisterController';



import navbarComponent from './Components/NavbarComponent';
import homePageComponent from './Components/HomePageComponent';
import cardComponent from './Components/CardComponent';
import productDetailComponent from './Components/ProductDetailComponent';
import searchPageComponent from './Components/SearchPageComponent';
import loginComponent from './Components/LoginComponent';
import adminDashboardComponent from './Components/AdminDashboardComponent';
import addProductComponent from './Components/AddProductComponent';
import viewProductComponent from './Components/ViewProductComponent';
import editProductComponent from './Components/EditProductComponent';
import addCategoryComponent from './Components/AddCategoryComponent';
import viewCategoryComponent from './Components/ViewCategoryComponent';
import editCategoryComponent from './Components/EditCategoryComponent';
import customerOrderComponent from './Components/CustomerOrderComponent';
import orderProductComponent from './Components/OrderProductComponent';
import appComponent from './Components/AppComponent';
import sidebarComponent from './Components/SidebarComponent';
import editCustomerProfileComponent from './Components/EditCustomerProfileComponent';
import cardGridComponent from './Components/CardGridComponent';
import shopByCategoryComponent from './Components/ShopByCategoryComponent';
import userRegisterComponent from './Components/UserRegisterComponent';
import forgotPasswordComponent from './Components/ForgotPasswordComponent';


import ImageUploadDirective from './Directives/ImageUploadDirective';
import ImageCropDirective from './Directives/ImageCropDirective';
import CardGridController from './Controllers/CardGridController';
import RelatedProductService from './Services/RelatedProductService';
import CKEditorDirective from './Directives/CKEditorDirective';
import tableComponent from './Components/TableComponent';
import ForgotPasswordController from './Controllers/ForgotPasswordController';
import changePasswordComponent from './Components/changePasswordComponent';
import ChangePasswordController from './Controllers/ChangePasswordController';
import viewUserComponent from './Components/ViewUserComponent';
import ViewUserController from './Controllers/ViewUserController';
import HomePageService from './Services/HomePageService';
import HomePageEditController from './Controllers/HomePageEditController';
import homePageEditComponent from './Components/HomePageEditComponent';



var app=angular.module("myApp",[
                                'ui.router',
                                'ngResource',
                                'angular-jwt',
                                'toastr',
                                'ngAnimate',
                                'ngSanitize',
                                'chart.js'
                                ]);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('home',{
            url:'/home',
            template:"<navbar></navbar><home></home>",
            authenticate:false
        })
        .state('category',{
            url:"/category?categoryName",
            template:"<h1>Category</h1>",
            authenticate:false
        })
        .state('detail',{
            url:'/detail?productID',
            template:"<navbar></navbar><product-detail></product-detail>",
            authenticate:false,
            params:{
                productID:'value'
            }
        })
        .state('search',{
            url:'/search?productName',
            template:"<navbar></navbar><search-page></search-page>",
            authenticate:false,
            params:{
                productName:'value'
            }
        })
        .state('login',{
            url:'/login',
            template:"<navbar></navbar><login-page></login-page>",
            authenticate:false
            }
        )
        .state('admin',{
            url:'/admin',
            template:"<sidebar></sidebar><div class='content'><admin-dashboard></admin-dashboard></div></div></div></div>",
            authenticate:true,
            role:'admin',
        })
        .state('addProduct',{
            url:'/addProduct',
            template:"<sidebar></sidebar><div class='content'><add-product></add-product></div></div></div></div>",
            authenticate:true,
            role:'admin'
        })
        .state('editProduct',{
            url:'/editProduct?id',
            template:"<sidebar></sidebar><div class='content'><edit-product></edit-product></div></div></div></div>",
            authenticate:true,
            role:'admin',
            params:{
                id:'value'
            }
        })
        .state('viewProduct',{
            url:'/viewProduct',
            template:"<sidebar></sidebar><div class='content'><view-product></view-product></div></div></div></div>",
            authenticate:true,
            role:'admin'
        })
        .state('addCategory',{
            url:'/addCategory',
            template:"<sidebar></sidebar><div class='content'><add-category></add-category></div></div></div></div>",
            authenticate:true,
            role:'admin'
        })
        .state('viewCategory',{
            url:'/viewCategory',
            template:"<sidebar></sidebar><div class='content'><view-category></view-category></div></div></div></div>",
            authenticate:true,
            role:'admin'
        })
        .state('editCategory',{
            url:'/editCategory?id',
            template:"<sidebar></sidebar><div class='content'><edit-category></edit-category></div></div></div></div>",
            authenticate:true,
            role:'admin',
            params:{
                id:'value'
            }
        })
        .state('viewUser',{
            url:'/viewUser',
            template:"<sidebar></sidebar><div class='content'><view-user></view-user></div></div></div></div>",
            authenticate:true,
            role:'admin'
        })
        .state('editHome',{
            url:'/editHome',
            template:"<sidebar></sidebar><div class='content'><edit-home></edit-home></div></div></div></div>",
            authenticate:true,
            role:'admin'
        })
        .state('customerOrder',{
            url:'/customerOrder',
            template:"<navbar></navbar><customer-order></customer-order>",
            authenticate:true,
            role:'customer'
        })
        .state('order',{
            url:'/order?productID',
            template:"<navbar></navbar><order-product></order-product>",
            role:"customer",
            authenticate:true,
            params:{
                productID:'value'
            }
        })
        .state('customerProfile',{
            url:'/customerProfile',
            template:"<navbar></navbar><edit-customer></edit-customer>",
            role:"customer",
            authenticate:true
        })
        .state('userRegister',{
            url:'/register',
            template:"<navbar></navbar><user-register></user-register>",
            authenticate:false
        })
        .state('shopByCategory',{
            url:'/shopBy?categoryID',
            template:"<navbar></navbar><shop-by-category></shop-by-category>",
            authenticate:false
        })
        .state('forgotPassword',{
            url:'/forgotPassword',
            template:"<navbar></navbar><forgot-password></forgot-password>",
            authenticate:false
        })
        .state('changePassword',{
            url:'/changePassword',
            template:"<change-password></change-password>",
            authenticate:true
        });
        
    $urlRouterProvider.otherwise('/home');
}]);

app.service("ProductService",['$http',ProductService])
    .service("CategoryService",[`$http`,CategoryService])
    .service("OrderService",['$http',OrderService])
    .service("AuthService",['jwtHelper',AuthService])
    .service("UserService",['$http',UserService])
    .service("RelatedProductService",['$http',RelatedProductService])
    .service("HomePageService",["$http",HomePageService]);

app.run(['$transitions','jwtHelper',function($transitions,jwtHelper){
    $transitions.onStart({},function(transition){
        var hasToken=localStorage.hasOwnProperty('Token');
        if(transition.to().authenticate&&!hasToken)
        {
            return transition.router.stateService.target('login');
        }
        else if(hasToken)
        {
            var token=localStorage.getItem('Token');
            var payload=jwtHelper.decodeToken(token);
            if(transition.to().hasOwnProperty('role'))
            {
                if(payload.role!==transition.to().role&&transition.to().authenticate)
                {
                    console.log("not your role");
                    return false;
                }
            }
            
            
        }
    })
}]);

app.controller("NavbarController",['$scope','$state','AuthService',NavbarController])
    .controller("HomePageController",['$scope','ProductService','CategoryService',"HomePageService",HomePageController])
    .controller("CardController",['$scope',CardController])
    .controller("ProductDetailController",['$scope','$stateParams','ProductService',ProductDetailController])
    .controller("SearchPageController",['$scope','$stateParams','ProductService',SearchPageController])
    .controller("LoginController",["$scope","$http","$state","jwtHelper","toastr",LoginController])
    .controller("AdminDashboardController",["$scope","UserService","OrderService","ProductService",AdminDashboardController])
    .controller("AddProductController",['$scope','ProductService','CategoryService','toastr','$state',AddProductController])
    .controller("ViewProductController",['$scope','ProductService','toastr',ViewProductController])
    .controller("EditProductController",['$scope','$stateParams','ProductService','CategoryService','RelatedProductService','toastr',EditProductController])
    .controller("AddCategoryController",["$scope","CategoryService","toastr","$state",AddCategoryController])
    .controller("ViewCategoryController",['$scope','CategoryService','toastr',ViewCategoryController])
    .controller("EditCategoryController",['$scope','$stateParams','CategoryService','toastr','$state',EditCategoryController])
    .controller("OrderProductController",['$scope','$stateParams','ProductService',"AuthService","OrderService","toastr","$state",OrderProductController])
    .controller("CustomerOrderController",["$scope",'OrderService','AuthService',CustomerOrderController])
    .controller("EditCustomerProfileController",["$scope","AuthService","UserService",'toastr',EditCustomerProfileController])
    .controller("UserRegisterController",["$scope","UserService","toastr","$state",UserRegisterController])
    .controller("ShopByCategoryController",["$scope","$stateParams","CategoryService",ShopByCategoryController])
    .controller("CardGridController",['$scope',CardGridController])
    .controller("ForgotPasswordController",['$scope','UserService','toastr','$state',ForgotPasswordController])
    .controller("ChangePasswordController",['$scope','AuthService','UserService','toastr','$state',ChangePasswordController])
    .controller("ViewUserController",['$scope','UserService',ViewUserController])
    .controller("HomePageEditController",["$scope","HomePageService","ProductService",HomePageEditController]);

app.directive("imageUpload",ImageUploadDirective)
    .directive("imageCrop",['$document',ImageCropDirective])
    .directive("ckEditor",CKEditorDirective);

app.component("app",appComponent)
    .component("navbar",navbarComponent)
    .component("home",homePageComponent)
    .component("card",cardComponent)
    .component("productDetail",productDetailComponent)
    .component("searchPage",searchPageComponent)
    .component("loginPage",loginComponent)
    .component("adminDashboard",adminDashboardComponent)
    .component("addProduct",addProductComponent)
    .component("viewProduct",viewProductComponent)
    .component("editProduct",editProductComponent)
    .component("addCategory",addCategoryComponent)
    .component("viewCategory",viewCategoryComponent)
    .component("editCategory",editCategoryComponent)
    .component("customerOrder",customerOrderComponent)
    .component("orderProduct",orderProductComponent)
    .component("sidebar",sidebarComponent)
    .component("editCustomer",editCustomerProfileComponent)
    .component("userRegister",userRegisterComponent)
    .component("shopByCategory",shopByCategoryComponent)
    .component("cardGrid",cardGridComponent)
    .component("tableShopping",tableComponent)
    .component("forgotPassword",forgotPasswordComponent)
    .component("changePassword",changePasswordComponent)
    .component("viewUser",viewUserComponent)
    .component("editHome",homePageEditComponent);