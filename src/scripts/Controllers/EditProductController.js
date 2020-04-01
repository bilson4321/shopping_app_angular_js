export default function($scope,$stateParams,ProductService,CategoryService)
{
    $scope.id=$stateParams.productID;
  
    ProductService.findbyID($scope.id).then(function(response){
            
        $scope.product=response.data.Product;
        console.log($scope.product);
        $scope.name=$scope.product.name;
        $scope.price=$scope.product.price;
        $scope.description=$scope.product.description;
    });  
    $scope.update=function()
    {
        var newProduct={
            "id":$scope.id,
            "name":$scope.name,
            "price":$scope.price,
            "description":$scope.description
        }
        ProductService.updateProduct($scope.id,newProduct).then((res)=>{
            console.log(res);
        });
    }
}