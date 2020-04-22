export default function($scope,$http,$state,jwtHelper,toastr)
{
    if(localStorage.hasOwnProperty('Token'))
    {
        $state.go('home');
    }
    $scope.login=function(isValid)
    {
        if(isValid)
        {
            var data={
                email:$scope.email,
                password:$scope.password
            };
            $http.post('/api/authenticate/',data).then((response)=>{
                localStorage.setItem('Token',response.data.Token)
                var payload=jwtHelper.decodeToken(response.data.Token);
                if(payload.role==="admin")
                $state.go("admin");
                else
                $state.go("customerOrder");
            },
            (err)=>{
                if(err.data===null)
                {
                    toastr.error("Couldn't connect to server","Connection Error!!")
                }
                else
                {
                    toastr.error(''+err.data.error,'Error Logging In');
                    $scope.password='';
                }  
            })
        }
        
    }   
}