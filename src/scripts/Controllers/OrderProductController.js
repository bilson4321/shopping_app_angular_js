export default function($scope,$stateParams,ProductService,AuthService,OrderService)
{
    $scope.id=$stateParams.productID;
    $scope.product={};
    ProductService.findbyID($scope.id).then(res=>{
        $scope.product=res.data.Product;
    });

    $scope.order=function(){
        var order={
            "product":$scope.id,
            "user":AuthService.getUserId(),
            "quantity":"1"
        }
        OrderService.createOrder(order).then((res)=>{
            console.log(res);
        })
    }
}