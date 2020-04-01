export default function($scope,ProductService)
{
    $scope.products=[];
    ProductService.getAllProduct().then((response)=>{
        $scope.products=response.data.products;
    })

    $scope.deleteProduct=function(id)
    {
        console.log(id);
        ProductService.deleteProduct(id).then((response)=>{
            console.log(response);
            ProductService.getAllProduct().then((response)=>{
                $scope.products=response.data.products;
            })
        })
        .catch(err=>{
            console.log("Error",err);
        });
    }
}