export default function($scope,ProductService,toastr)
{
    $scope.loading=true;
    $scope.products=[];
    
    ProductService.getAllProduct().then((response)=>{
        $scope.products=response.data.products;
        $scope.loading=false;
    })

    $scope.deleteProduct=function(id)
    {
        console.log('delete');
        ProductService.deleteProduct(id).then((response)=>{
            toastr.success("Successfully data deleted","Data Deletion");
            ProductService.getAllProduct().then((response)=>{
                $scope.products=response.data.products;
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
    $scope.tableHeading=['name','price'];
}