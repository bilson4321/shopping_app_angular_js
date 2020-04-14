export default function($scope)
{
    $scope.currentPage=1;
    $scope.itemsPerPage=6;
    $scope.noOfPage=[1];
    $scope.items=[];
    $scope.filteredItems=[];
    
    function getNoOfPages()
    {
        return Math.ceil($scope.items.length/$scope.itemsPerPage);
    }
    $scope.changeCurrentPage=function(page)
    {
        $scope.currentPage=page;
    }
    $scope.$watch('currentPage+itemPerPage',function(){
        var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
            end = begin + $scope.itemsPerPage;

        $scope.filteredItems =$scope.items.slice(begin, end);
    })
    this.$onChanges=(changes)=>{
        if(changes.displaylist)
        {
            $scope.items=changes.displaylist.currentValue;
            $scope.noOfPage.length=0;
            for(var i=0;i<getNoOfPages();i++)
                $scope.noOfPage.push(i+1);
            console.log("array",$scope.noOfPage);
            var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
            end = begin + $scope.itemsPerPage;

        $scope.filteredItems =$scope.items.slice(begin, end);
        }
    }
}