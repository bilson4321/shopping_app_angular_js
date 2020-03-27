import angular from 'angular';
import 'angular-resource';
import '@uirouter/angularjs';

import AddProductController from './Controllers/AddProductController';

import appComponent from './Components/AppComponent';
import homePageComponent from './Components/HomePageComponent';
import addProductComponent from './Components/AddProductComponent';

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
        });
        
    $urlRouterProvider.otherwise('/home');
}])


app.factory("Product",['$resource',function($resource){
    return $resource("/api/product");
}])
app.controller("AddProductController",['$scope','Product',AddProductController]);

app.component("app",appComponent)
    .component("home",homePageComponent)
    .component("addProduct",addProductComponent);