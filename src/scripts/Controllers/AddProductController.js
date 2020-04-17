export default function($scope,ProductService,CategoryService,toastr,$state)
{
    $scope.categories=[];
    CategoryService.getAllCategory().then((response)=>{
        $scope.categories=response.data.categories;
    })
    .catch(err=>{
        if(err.data===null)
        {
            toastr.error("error connecting to server, please try again","Connection Error")
        }
        else{
            toastr.error("error fetching data, please try again","Error getting data")
        }
        
    })
   
    $scope.submit=function()
    {
       
        var product={
            "name":$scope.name,
            "price":$scope.price,
            "description":$scope.description,
            "categoryID":$scope.categoryID
        }
        ProductService.addProduct(product,$scope.cimage).then((response)=>{
            toastr.success("Product Added Successfully","Adding Product");
            $state.go('viewProduct');
        })
        .catch(err=>{
            if(err.data===null)
            {
                toastr.error("Couldn't connect to server","Connection Error!!")
            }
            else
            {
                toastr.error(''+err.data.error,'Error Adding Product');
            }  
        });
    }
}