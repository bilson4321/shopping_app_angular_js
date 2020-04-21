export default function($scope,AuthService,UserService,toastr,$state)
{
    $scope.password="";
    $scope.submit=function()
    {
        var toChange={
            "id":AuthService.getUserId(),
            "password":$scope.password
            };
        UserService.changePassword(toChange).then(res=>{
            toastr.success("password Changed Successfully","Password Changed");
            localStorage.removeItem('Token');
            $state.go('login');
        },
        (err)=>{
            if(err.data===null)
            {
                toastr.error("Cannot connect to server","Server Error");
            }
            else{
                toastr.error(""+err.data.error,"Error Updating Data");
            }
        }
        )
    }
}