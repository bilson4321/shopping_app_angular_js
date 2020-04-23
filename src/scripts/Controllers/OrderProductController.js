export default function($scope,$stateParams,ProductService,AuthService,OrderService,toastr,$state)
{
    $scope.id=$stateParams.productID;
    $scope.product={};
    ProductService.findbyID($scope.id).then(res=>{
       $scope.product=res.data.Product;
    },
    (err)=>{
        if(err.data===null)
        {
            toastr.error("Cannot connect to server","Server Error");
        }
        else{
            toastr.error(""+err.data.error,"Error fetching Data");
            $state.go("home");
        }
    }
    );

    $scope.order=function(){
        var order={
            "product":$scope.id,
            "user":AuthService.getUserId(),
            "quantity":"1"
        }
        OrderService.createOrder(order).then((res)=>{
            toastr.success("Your order has been placed","Success");
            $state.go("customerOrder");
        },
        (err)=>{
            if(err.data===null)
            {
                toastr.error("Cannot connect to server","Server Error");
            }
            else
            {
                toastr.error(""+err.data.error,"Error Ordering");
            }
        })
    }
}