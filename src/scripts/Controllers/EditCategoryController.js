export default function($scope,$stateParams,CategoryService,toastr,$state)
{
    $scope.id=$stateParams.id;
  
    CategoryService.findByID($scope.id).then(function(response){ 
        $scope.category=response.data.Category;
        $scope.name=$scope.category.name;
        $scope.description=$scope.category.description;
    },
    (err)=>{
        if(err.data===null)
        {
            toastr.error("Cannot connect to server","Server Error");
        }
        else{
            toastr.error(""+err.data.error,"Error fetching Data");
            $state.go('viewCategory');
        }
    }
    );  
    
    $scope.update=function()
    {
        var newCategory={
            "id":$scope.id,
            "name":$scope.name,
            "description":$scope.description
        }
        CategoryService.updateCategory($scope.id,newCategory).then((res)=>{
            toastr.success("Data Updated Successfully","Success");
            $state.go('viewCategory');
        },
        err=>{
            if(err.data===null)
            {
                toastr.error("Cannot connect to server","Server Error");
            }
            else
            {
                toastr.error(""+err.data.error,"Error Updating");
            }
        }
        );
    }
}