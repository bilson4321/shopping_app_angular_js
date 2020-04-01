export default function($scope,ProductService,CategoryService)
{
    $scope.categories=[];
    CategoryService.getAllCategory().then((response)=>{
        $scope.categories=response.data.categories;
    })
    $scope.submit=function()
    {
        var product={
            "name":$scope.name,
            "price":$scope.price,
            "description":$scope.description,
            "categoryID":$scope.categoryID
        }
        console.log("product",product);
        ProductService.addProduct(product).then((response)=>{
            console.log("response received",response);
        })
        .catch(err=>{
            console.log("error message",err);
        });
    }
}