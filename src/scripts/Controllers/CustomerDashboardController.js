export default function($scope,OrderService,AuthService)
{
    $scope.orders=[];
    $scope.userID=AuthService.getUserId();
    OrderService.getOrderByUserId($scope.userID).then((res)=>{
        $scope.orders=res.data.orders;
    })
}