export default function($scope,CategoryService)
{
   
    $scope.submit=function()
    {
        var category={
            "name":$scope.name,
            "description":$scope.description,
        }
        console.log("Category",category);
        CategoryService.addCategory(category).then((response)=>{
            console.log("response received",response);
        })
        .catch(err=>{
            console.log("error message",err);
        });
    }
}