export default function($scope,$state,AuthService)
{
    $scope.logout=function()
    {
        localStorage.removeItem('Token')
        $state.go('login');
    }
    $scope.isAuthenticated=AuthService.isAuthenticated();
    $scope.userName=AuthService.getUserName();
    $scope.userRole=AuthService.getRole();
}