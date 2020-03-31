import angular from 'angular';
import 'angular-resource';
import '@uirouter/angularjs';

import ProductService from './Services/ProductService';
import CategoryService from './Services/CategoryService';

import AppController from './Controllers/AppController';
import HomePageController from './Controllers/HomePageController';
import CardController from './Controllers/CardController';
import ProductDetailController from './Controllers/ProductDetailController';
import SearchPageController from './Controllers/SearchPageController';
import LoginController from './Controllers/LoginController';

import appComponent from './Components/AppComponent';
import homePageComponent from './Components/HomePageComponent';
import cardComponent from './Components/CardComponent';
import productDetailComponent from './Components/ProductDetailComponent';
import searchPageComponent from './Components/SearchPageComponent';
import loginComponent from './Components/LoginComponent';




var app=angular.module("myApp",[
                                'ui.router',
                                'ngResource'
                                ]);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('home',{
            url:'/home',
            template:"<home></home>"
        })
        .state('category',{
            url:"/category?categoryName",
            template:"<h1>Category</h1>"
        })
        .state('detail',{
            url:'/detail?productID',
            template:"<product-detail></product-detail>",
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
            template:"<login-page><login-page>"
            }
        )
        .state('Auth',{
            url:'/auth',
            template:"<h1>not pasing</h1>",
            authenticate:true
        });
        
    $urlRouterProvider.otherwise('/home');
}]);

app.service("ProductService",['$http',ProductService])
    .service("CategoryService",[`$http`,CategoryService]);

app.run(['$transitions',function($transitions){
    $transitions.onStart({},function(transition){
        if(transition.to().authenticate)
        {
            return transition.router.stateService.target('home');
        }
    })
}]);

app.controller("AppController",['$scope','CategoryService',AppController])
    .controller("HomePageController",['$scope','ProductService',HomePageController])
    .controller("CardController",['$scope',CardController])
    .controller("ProductDetailController",['$scope','$stateParams','ProductService',ProductDetailController])
    .controller("SearchPageController",['$scope','$stateParams','ProductService',SearchPageController])
    .controller("LoginController",["$scope","$http",LoginController]);

app.component("app",appComponent)
    .component("home",homePageComponent)
    .component("card",cardComponent)
    .component("productDetail",productDetailComponent)
    .component("searchPage",searchPageComponent)
    .component("loginPage",loginComponent);