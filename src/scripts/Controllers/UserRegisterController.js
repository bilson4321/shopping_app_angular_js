export default function($scope,UserService,toastr,$state)
{
    $scope.submitted=false;
    $scope.register=function(isValid)
    {
        $scope.submitted=true;
        if(isValid)
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
        else
        {
            toastr.error("Input not valid","Error in form")
            console.log("first Name",$scope.userRegister.firstName.$valid,"error",$scope.userRegister.firstName.$valid);
            console.log("last Name",$scope.userRegister.lastName.$valid,"error",$scope.userRegister.lastName.$valid);
            console.log("Adress",$scope.userRegister.address.$valid,"error",$scope.userRegister.address.$valid);
            console.log("mobile",$scope.userRegister.mobile.$valid,"error",$scope.userRegister.mobile.$valid);
            console.log("email",$scope.userRegister.email.$valid,"error",$scope.userRegister.email.$valid);
            console.log("password",$scope.userRegister.password.$valid,"error",$scope.userRegister.password.$valid);
            console.log("question",$scope.userRegister.question.$valid,"error",$scope.userRegister.question.$valid);
            console.log("answer",$scope.userRegister.answer.$valid,"error",$scope.userRegister.answer.$valid);
        }
        
    }
}