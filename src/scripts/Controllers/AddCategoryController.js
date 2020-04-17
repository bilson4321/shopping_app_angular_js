export default function($scope,CategoryService,toastr,$state)
{
   
    $scope.submit=function()
    {
        var category={
            "name":$scope.name,
            "description":$scope.description,
        }
        CategoryService.addCategory(category).then((response)=>{
            toastr.success("Category Added Successfully","Adding Category");
            $state.go('viewCategory');
        })
        .catch(err=>{
            if(err.data===null)
            {
                toastr.error("Couldn't connect to server","Connection Error!!")
            }
            else
            {
                toastr.error(''+err.data.error,'Error Adding Category');
            }  
        });
    }
}