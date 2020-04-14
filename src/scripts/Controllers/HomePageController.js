export default function($scope,ProductService,CategoryService)
{
    $scope.products='';
    ProductService.getAllProduct().then(function(response){
        var arr=response.data.products;
        $scope.products=arr.splice(0,4);
    });    
    $scope.categories='';
    CategoryService.getAllCategory().then(function(response){
        $scope.categories=response.data.categories;
    }); 
}