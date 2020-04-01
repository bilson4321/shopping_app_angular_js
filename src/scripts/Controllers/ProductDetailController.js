export default function($scope,$stateParams,ProductService)
{
    $scope.id=$stateParams.productID;
    ProductService.findbyID($scope.id).then(function(response){
        $scope.product=response.data.Product;
    });  

}