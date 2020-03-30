import angular from 'angular';
import 'angular-resource';
import '@uirouter/angularjs';

import ProductService from './Services/ProductService';
import CategoryService from './Services/CategoryService';

import AppController from './Controllers/AppController';
import HomePageController from './Controllers/HomePageController';
import CardController from './Controllers/CardController';
import ProductDetailController from './Controllers/ProductDetailController';
import SearchController from './Controllers/SearchController';
import SearchPageController from './Controllers/SearchPageController';

import appComponent from './Components/AppComponent';
import homePageComponent from './Components/HomePageComponent';
import cardComponent from './Components/CardComponent';
import productDetailComponent from './Components/ProductDetailComponent';
import searchComponent from './Components/SearchComponent';
import searchPageComponent from './Components/SearchPageComponent';



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
        });
        
    $urlRouterProvider.otherwise('/home');
}])

app.service("ProductService",['$http',ProductService])
    .service("CategoryService",[`$http`,CategoryService]);

app.controller("AppController",['$scope','CategoryService',AppController])
    .controller("HomePageController",['$scope','ProductService',HomePageController])
    .controller("CardController",['$scope',CardController])
    .controller("ProductDetailController",['$scope','$stateParams','ProductService',ProductDetailController])
    .controller("SearchController",['$scope',SearchController])
    .controller("SearchPageController",['$scope','$stateParams','ProductService',SearchPageController]);

app.component("app",appComponent)
    .component("home",homePageComponent)
    .component("card",cardComponent)
    .component("productDetail",productDetailComponent)
    .component("searchBar",searchComponent)
    .component("searchPage",searchPageComponent);