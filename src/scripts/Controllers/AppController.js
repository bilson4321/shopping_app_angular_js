export default function($scope,CategoryService)
{
    $scope.categories='';
    CategoryService.getAllCategory().then(function(response){
        $scope.categories=response.data.categories;
    });  
}