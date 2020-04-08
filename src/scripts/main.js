import angular from 'angular';
import 'angular-resource';
import '@uirouter/angularjs';
import 'angular-jwt'

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


import ImageUploadDirective from './Directives/ImageUploadDirective';
import userRegisterComponent from './Components/UserRegisterComponent';
import UserRegisterController from './Controllers/UserRegisterController';
import shopByCategoryComponent from './Components/ShopByCategoryComponent';
import ShopByCategoryController from './Controllers/ShopByCategoryController';



var app=angular.module("myApp",[
                                'ui.router',
                                'ngResource',
                                'angular-jwt'
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
            url:'/editProduct?productID',
            template:"<sidebar></sidebar><div class='content'><edit-product></edit-product></div></div></div></div>",
            authenticate:true,
            role:'admin',
            params:{
                productID:'value'
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
            url:'/editCategory?categoryID',
            template:"<sidebar></sidebar><div class='content'><edit-category></edit-category></div></div></div></div>",
            authenticate:true,
            role:'admin',
            params:{
                categoryID:'value'
            }
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
        });
        
    $urlRouterProvider.otherwise('/home');
}]);

app.service("ProductService",['$http',ProductService])
    .service("CategoryService",[`$http`,CategoryService])
    .service("OrderService",['$http',OrderService])
    .service("AuthService",['jwtHelper',AuthService])
    .service("UserService",['$http',UserService]);

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
    .controller("HomePageController",['$scope','ProductService','CategoryService',HomePageController])
    .controller("CardController",['$scope',CardController])
    .controller("ProductDetailController",['$scope','$stateParams','ProductService',ProductDetailController])
    .controller("SearchPageController",['$scope','$stateParams','ProductService',SearchPageController])
    .controller("LoginController",["$scope","$http","$state","jwtHelper",LoginController])
    .controller("AdminDashboardController",["$scope",AdminDashboardController])
    .controller("AddProductController",['$scope','ProductService','CategoryService',AddProductController])
    .controller("ViewProductController",['$scope','ProductService',ViewProductController])
    .controller("EditProductController",['$scope','$stateParams','ProductService','CategoryService',EditProductController])
    .controller("AddCategoryController",["$scope","CategoryService",AddCategoryController])
    .controller("ViewCategoryController",['$scope','CategoryService',ViewCategoryController])
    .controller("EditCategoryController",['$scope','$stateParams','CategoryService',EditCategoryController])
    .controller("OrderProductController",['$scope','$stateParams','ProductService',"AuthService","OrderService",OrderProductController])
    .controller("CustomerOrderController",["$scope",'OrderService','AuthService',CustomerOrderController])
    .controller("EditCustomerProfileController",["$scope","AuthService","UserService",EditCustomerProfileController])
    .controller("UserRegisterController",["$scope","UserService",UserRegisterController])
    .controller("ShopByCategoryController",["$scope","$stateParams","CategoryService",ShopByCategoryController]);

app.directive("imageUpload",['$parse',ImageUploadDirective]);

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
    .component("shopByCategory",shopByCategoryComponent);