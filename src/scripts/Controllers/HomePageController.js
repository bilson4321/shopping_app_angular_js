export default function($scope,ProductService)
{
    $scope.products='';
    ProductService.getAllProduct().then(function(response){
        $scope.products=response.data.products;
    });    
}