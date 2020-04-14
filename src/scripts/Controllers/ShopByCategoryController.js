export default function($scope,$stateParams,CategoryService)
{
    $scope.id=$stateParams.categoryID;
    $scope.products=[];
    console.log("Id category",$scope.id);
    CategoryService.findByID($scope.id).then((res)=>{
        $scope.categoryName=res.data.Category.name;
        $scope.products=res.data.Category.items;
    })
}