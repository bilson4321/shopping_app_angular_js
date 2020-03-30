export default function($scope,$stateParams,ProductService)
{
    $scope.id=$stateParams.productID;
    $scope.image="/upload/jeans.jpeg";
    ProductService.findbyID($scope.id).then(function(response){
        $scope.product=response.data.Product;
    });  

}