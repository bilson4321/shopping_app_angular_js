export default function($scope,Product)
{
    $scope.product_name='';
    $scope.product_price='';
    $scope.submit=function()
    {
        var product = new Product();
            product.name = $scope.product_name;
            product.price=$scope.product_price;
            product.$save();
        console.log("send");
    }
}