import angular from 'angular';
import 'angular-resource';
import '@uirouter/angularjs';

import ProductService from './Services/ProductService';

import AddProductController from './Controllers/AddProductController';
import HomePageController from './Controllers/HomePageController';
import CardController from './Controllers/CardController';
import ProductDetailController from './Controllers/ProductDetailController';

import appComponent from './Components/AppComponent';
import homePageComponent from './Components/HomePageComponent';
import addProductComponent from './Components/AddProductComponent';
import cardComponent from './Components/CardComponent';
import productDetailComponent from './Components/ProductDetailComponent';



var app=angular.module("myApp",['ui.router',
                                'ngResource'
                                ]);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('home',{
            url:'/home',
            template:"<home></home>"
        })
        .state('add',{
            url:'/add',
            template:"<h1>add</h1><add-product></add-product>"
        })
        .state('about',{
            url:"/about",
            template:"<h2>about</h2>"
        })
        .state('detail',{
            url:'/detail?productID',
            template:"<product-detail></product-detail>",
            params:{
                productID:'value'
            }
        });
        
    $urlRouterProvider.otherwise('/home');
}])

app.service("ProductService",['$http',ProductService])

app.controller("AddProductController",['$scope','ProductService',AddProductController])
    .controller("HomePageController",['$scope','ProductService',HomePageController])
    .controller("CardController",['$scope',CardController])
    .controller("ProductDetailController",['$scope','$stateParams',ProductDetailController]);

app.component("app",appComponent)
    .component("home",homePageComponent)
    .component("card",cardComponent)
    .component("addProduct",addProductComponent)
    .component("productDetail",productDetailComponent);