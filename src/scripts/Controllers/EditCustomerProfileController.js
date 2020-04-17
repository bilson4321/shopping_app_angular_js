export default function($scope,AuthService,UserService,toastr)
{
    $scope.userID=AuthService.getUserId();
    UserService.findbyID($scope.userID).then((res)=>{
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
            toastr.success("Successfully data Updated","Data Updated");
        })
        .catch(err=>{
            if(err.data===null)
            {
            toastr.error("Cannot connect to server","Server Error");
            }
            else{
                toastr.error(""+err.data.error,"Error Updating Data");
            }
        });
    }
}