export default function($scope,$stateParams,ProductService)
{
    $scope.id=$stateParams.productID;
    $scope.relatedProducts=[];
    ProductService.findbyID($scope.id).then(function(response){
        $scope.product=response.data.Product;
        $scope.relatedProducts=$scope.product.related.slice(0,4);
    });  
      
}