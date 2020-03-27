export default function($scope,ProductService)
{
    $scope.product_name='';
    $scope.product_price='';
    $scope.submit=function()
    {
       ProductService.get({productID:'5e7c6b00e9a23f143fc9fdfc'},function(data){
           $scope.product_name=data.Product.name
       })
    }
    
}