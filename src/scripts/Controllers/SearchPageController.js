export default function($scope,$stateParams,ProductService)
{
    $scope.products=[];
    $scope.name=$stateParams.productName;
    ProductService.findbyName($scope.name).then(function(response){
        console.log(response.data)
        $scope.products=response.data.Products;
    });  

}