export default function($scope,$http,$state,jwtHelper)
{
    if(localStorage.hasOwnProperty('Token'))
    {
        $state.go('admin');
    }
    $scope.login=function()
    {
        var data={
            email:$scope.email,
            password:$scope.password
        };
        console.log("data",data);
        $http.post('/api/authenticate/',data).then((response)=>{
            localStorage.setItem('Token',response.data.Token)
            var payload=jwtHelper.decodeToken(response.data.Token);
            if(payload.role==="admin")
            $state.go("admin");
            else
            $state.go("customerOrder");
        },
        (err)=>{
            console.log("error",err)
            console.log("not verified")
        }
        )
    }   
}