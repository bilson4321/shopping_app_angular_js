import angular from 'angular';
import 'angular-resource';
import '@uirouter/angularjs';
import 'angular-jwt'

import ProductService from './Services/ProductService';
import CategoryService from './Services/CategoryService';
import AuthService from './Services/AuthService';
import OrderService from './Services/OrderService';

import AppController from './Controllers/AppController';
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
import CustomerDashboardController from './Controllers/CustomerDashboardController';

import appComponent from './Components/AppComponent';
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
import customerDashboardComponent from './Components/CustomerDashboardComponent';
import orderProductComponent from './Components/OrderProductComponent';





var app=angular.module("myApp",[
                                'ui.router',
                                'ngResource',
                                'angular-jwt'
                                ]);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('home',{
            url:'/home',
            template:"<home></home>",
            authenticate:false
        })
        .state('category',{
            url:"/category?categoryName",
            template:"<h1>Category</h1>",
            authenticate:false
        })
        .state('detail',{
            url:'/detail?productID',
            template:"<product-detail></product-detail>",
            authenticate:false,
            params:{
                productID:'value'
            }
        })
        .state('search',{
            url:'/search?productName',
            template:"<search-page></search-page>",
            params:{
                productName:'value'
            }
        })
        .state('login',{
            url:'/login',
            template:"<login-page></login-page>",
            authenticate:false
            }
        )
        .state('admin',{
            url:'/admin',
            template:"<admin-dashboard></admin-dashboard>",
            authenticate:true,
            role:'admin',
        })
        .state('addProduct',{
            url:'/addProduct',
            template:"<add-product></add-product>",
            authenticate:true,
            role:'admin'
        })
        .state('editProduct',{
            url:'/editProduct?productID',
            template:"<edit-product></edit-product>",
            authenticate:true,
            role:'admin',
            params:{
                productID:'value'
            }
        })
        .state('viewProduct',{
            url:'/viewProduct',
            template:"<view-product></view-product>",
            authenticate:true,
            role:'admin'
        })
        .state('addCategory',{
            url:'/addCategory',
            template:"<add-category></add-category>",
            authenticate:true,
            role:'admin'
        })
        .state('viewCategory',{
            url:'/viewCategory',
            template:"<view-category></view-category>",
            authenticate:true,
            role:'admin'
        })
        .state('editCategory',{
            url:'/editCategory?categoryID',
            template:"<edit-category></edit-category>",
            authenticate:true,
            role:'admin',
            params:{
                categoryID:'value'
            }
        })
        .state('customer',{
            url:'/customer',
            template:"<customer-dashboard></customer-dashboard>",
            authenticate:true,
            role:'customer'
        })
        .state('order',{
            url:'/order?productID',
            template:"<order-product></order-product>",
            role:"customer",
            authenticate:true,
            params:{
                productID:'value'
            }
        });
        
    $urlRouterProvider.otherwise('/home');
}]);

app.service("ProductService",['$http',ProductService])
    .service("CategoryService",[`$http`,CategoryService])
    .service("OrderService",['$http',OrderService])
    .service("AuthService",['jwtHelper',AuthService]);

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

app.controller("AppController",['$scope','CategoryService','$state',AppController])
    .controller("HomePageController",['$scope','ProductService',HomePageController])
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
    .controller("CustomerDashboardController",["$scope",'OrderService','AuthService',CustomerDashboardController]);

app.component("app",appComponent)
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
    .component("customerDashboard",customerDashboardComponent)
    .component("orderProduct",orderProductComponent);