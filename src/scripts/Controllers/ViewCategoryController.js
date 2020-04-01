export default function($scope,CategoryService)
{
    $scope.categories=[];
    CategoryService.getAllCategory().then((response)=>{
        $scope.categories=response.data.categories;
    })

    $scope.deleteCategory=function(id)
    {
        CategoryService.deleteCategory(id).then((response)=>{
            console.log(response);
            CategoryService.getAllCategory().then((response)=>{
                $scope.categories=response.data.categories;
            })
        })
        .catch(err=>{
            console.log("Error",err);
        });
    }
}