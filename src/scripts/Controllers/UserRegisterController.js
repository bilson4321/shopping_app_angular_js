export default function($scope,UserService)
{
    $scope.register=function()
    {
        var newUser={
            "firstName":$scope.firstName,
            "lastName":$scope.lastName,
            "address":$scope.address,
            "mobile":$scope.mobile,
            "email":$scope.email,
            "password":$scope.password
        }
        UserService.createUser(newUser).then((res)=>{
            console.log(res);
        })
    }
}