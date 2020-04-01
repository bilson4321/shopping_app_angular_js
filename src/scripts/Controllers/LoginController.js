export default function($scope,$http,$state)
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
            console.log("Token",response.data.Token);
            $state.go("admin");
        },
        (err)=>{
            console.log("error",err)
            console.log("not verified")
        }
        )
    }   
}