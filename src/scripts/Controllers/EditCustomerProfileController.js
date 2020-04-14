export default function($scope,AuthService,UserService)
{
    $scope.userID=AuthService.getUserId();
    UserService.findbyID($scope.userID).then((res)=>{
        console.log(res.data.User);
        $scope.firstName=res.data.User.firstName;
        $scope.lastName=res.data.User.lastName;
        $scope.address=res.data.User.address;
        $scope.mobile=res.data.User.mobile;
        $scope.email=res.data.User.email;
    });
    $scope.update=function()
    {
        var newData={
            "id":$scope.userID,
            "firstName":$scope.firstName,
            "lastName":$scope.lastName,
            "address":$scope.address,
            "mobile":$scope.mobile,
            "email":$scope.email
        }
        UserService.updateUser($scope.userID,newData).then((res)=>{
            console.log(res);
        });
    }
}