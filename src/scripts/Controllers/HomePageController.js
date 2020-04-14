export default function($scope,ProductService,CategoryService)
{
    $scope.products='';
    ProductService.getAllProduct().then(function(response){
        $scope.products=response.data.products;
    });    
    $scope.categories='';
    CategoryService.getAllCategory().then(function(response){
        $scope.categories=response.data.categories;
    }); 
}