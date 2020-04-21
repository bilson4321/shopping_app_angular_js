export default function($scope,UserService,toastr,$state)
{
    $scope.email="";
    $scope.question="";
    $scope.answer="t";
    $scope.userFound=false;
    $scope.submit=function(){
        UserService.getQuestion($scope.email).then(res=>{
            $scope.question= res.data.question;
            $scope.userFound=true;
        },
        (err)=>{
            if(err.data===null)
            {
                toastr.error("Cannot connect to server","Server Error");
            }
            else{
                toastr.error(""+err.data.error,"Error fetching Data");
            }
        }
        )
    }
    $scope.submitAnswer=function(){
        var data={
            "email":$scope.email,
            "question":$scope.question,
            "answer":$scope.answer
        }
        console.log(data);
        UserService.submitAnswer(data).then(res=>{
            localStorage.setItem('Token',res.data.Token);
            $state.go('changePassword');
        },
        (err)=>{
            if(err.data===null)
            {
                toastr.error("Cannot connect to server","Server Error");
            }
            else{
                toastr.error(""+err.data.message,"Error fetching Data");
            }
        }
        )
    }
}