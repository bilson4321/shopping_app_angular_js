export default function($scope,UserService)
{
    $scope.users=[];

    UserService.getAllUser().then((response)=>{
        $scope.users=response.data.users;
    })
}