export default function($scope,$stateParams,CategoryService)
{
    $scope.id=$stateParams.categoryID;
  
    CategoryService.findByID($scope.id).then(function(response){ 
        $scope.category=response.data.Category;
        $scope.name=$scope.category.name;
        $scope.description=$scope.category.description;
    });  
    $scope.update=function()
    {
        var newCategory={
            "id":$scope.id,
            "name":$scope.name,
            "description":$scope.description
        }
        CategoryService.updateCategory($scope.id,newCategory).then((res)=>{
            console.log(res);
        });
    }
}