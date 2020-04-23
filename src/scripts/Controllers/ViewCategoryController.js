export default function($scope,CategoryService,toastr)
{
    $scope.categories=[];
    CategoryService.getAllCategory().then((response)=>{
        $scope.categories=response.data.categories;
    })
    .catch(err=>{
        if(err.data===null)
        {
        toastr.error("Cannot connect to server","Server Error");
        }
        else{
            toastr.error(""+err.data.error,"Error Getting Data");
        }
    });

    $scope.deleteCategory=function(id)
    {
        console.log("delete");
        CategoryService.deleteCategory(id).then((response)=>{
            console.log(response);
            CategoryService.getAllCategory().then((response)=>{
                $scope.categories=response.data.categories;
                toastr.success("Successfully data deleted","Data Deletion");
            })
        })
        .catch(err=>{
            if(err.data===null)
            {
            toastr.error("Cannot connect to server","Server Error");
            }
            else{
                toastr.error(""+err.data.error,"Error Deleting Data");
            }
        });
    }

    $scope.tableHeading=['name']
}