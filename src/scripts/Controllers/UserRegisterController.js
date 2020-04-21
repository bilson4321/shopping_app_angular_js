export default function($scope,UserService,toastr,$state)
{
    $scope.register=function()
    {
        var newUser={
            "firstName":$scope.firstName,
            "lastName":$scope.lastName,
            "address":$scope.address,
            "mobile":$scope.mobile,
            "email":$scope.email,
            "password":$scope.password,
            "question1":$scope.question1,
            "answer1":$scope.answer1
        }
        UserService.createUser(newUser).then((res)=>{
            toastr.success(""+res.data.message,"Success");
            $state.go('login');
        },
        (err)=>{
            console.log("errorasd",err);
            if(err.data===null)
            {
                toastr.error("Couldn't connect to server","Connection Error!!")
            }
            else
            {
                toastr.error(""+err.data.error,"Error Registering")
                $scope.email='';
                $scope.password='';
            }

        })
    }
}