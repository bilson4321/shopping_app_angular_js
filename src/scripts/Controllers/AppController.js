export default function($scope,CategoryService,$state)
{
    $scope.categories='';
    CategoryService.getAllCategory().then(function(response){
        $scope.categories=response.data.categories;
    });  
    $scope.logout=function()
    {
        delete localStorage.Token;
        $state.go('login');
    }
}