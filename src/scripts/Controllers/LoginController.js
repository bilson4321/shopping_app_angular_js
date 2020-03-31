export default function($scope,$http)
{
    
    $scope.login=function()
    {
        var data={
            email:$scope.email,
            password:$scope.password
        };
        console.log("data",data);
        $http.post('/api/authenticate/',data).then((token)=>{
            console.log("Token",token);
        },
        (err)=>{
            console.log("error",err)
        }
        )
    }
}