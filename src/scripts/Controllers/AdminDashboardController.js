export default function($scope,UserService,OrderService,ProductService)
{
    $scope.labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug",
                      "Sept","Oct","Nov","Dec"];
    $scope.orderdata = [];
    $scope.userdata = [];
    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];
    $scope.options = {
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
          }
        ]
      }
    };
    $scope.users=[];
    UserService.getAllUser().then((res)=>{
      $scope.users=res.data.users;
    })
    $scope.$watch('users',function(){
      if($scope.users.length!=0)
      {
        $scope.userdata=[];
        var initialUser=$scope.users[0];
        var initialDate=new Date(initialUser.createdAt);
        var date=initialDate.getMonth(); 
        var count=0;
        for(var i=0;i<$scope.users.length;i++)
        {
            var user=$scope.users[i];
            var userCreatedAt=new Date(user.createdAt)
            if(date!==userCreatedAt.getMonth())
            {
              $scope.userdata[date]=count;
              date=userCreatedAt.getMonth();
              count=0;
            }
            count++;
        }
        $scope.userdata[date]=count;
      }
    })
    $scope.orders=[];
    OrderService.getAllOrder().then((res)=>{
      $scope.orders=res.data.orders;
    })
    $scope.$watch("orders",function(){
      if($scope.orders.length!=0)
      {
        $scope.orderdata=[];
        var initialOrder=$scope.orders[0];
        var initialDate=new Date(initialOrder.createdAt);
        var date=initialDate.getMonth(); 
        var count=0;
        for(var i=0;i<$scope.orders.length;i++)
        {
            var order=$scope.orders[i];
            var orderCreatedAt=new Date(order.createdAt)
            if(date!==orderCreatedAt.getMonth())
            {
              $scope.orderdata[date]=count;
              date=orderCreatedAt.getMonth();
              count=0;
            }
            count++;
        }
        $scope.orderdata[date]=count;
      }
    })
    $scope.products=[];
    ProductService.getAllProduct().then((res)=>{
      $scope.products=res.data.products;
    })
}