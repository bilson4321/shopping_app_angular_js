export default function($scope,$stateParams,ProductService,CategoryService,RelatedProductService,toastr)
{
    $scope.id=$stateParams.id;
    $scope.selectedRelatedId='';
    $scope.searchResult=[];
    $scope.addRelatedDisable=true;
    ProductService.findbyID($scope.id).then(function(response){
        $scope.product=response.data.Product;
        console.log($scope.product);
        $scope.name=$scope.product.name;
        $scope.price=$scope.product.price;
        $scope.description=$scope.product.description;
        $scope.related=$scope.product.related;
    },
    (err)=>{
        if(err.data===null)
        {
            toastr.error("Cannot connect to server","Server Error");
        }
        else{
            toastr.error(""+err.data.error,"Error fetching Data");
            $state.go('viewProduct');
        }
    }
    );  
    $scope.update=function(isValid)
    {
        if(isValid)
        {
            var newProduct={
                "id":$scope.id,
                "name":$scope.name,
                "price":$scope.price,
                "description":$scope.description
            }
            ProductService.updateProduct($scope.id,newProduct).then((res)=>{
                toastr.success("Data Updated Successfully","Success");
            },
            err=>{
                if(err.data===null)
                {
                    toastr.error("Cannot connect to server","Server Error");
                }
                else
                {
                    toastr.error(""+err.data.error,"Error Updating");
                }
            });
        }
    }
    $scope.fetchProduct=function()
    {
        var searchProduct_len=$scope.productName.trim().length;
        if(searchProduct_len>0)
        ProductService.findbyName($scope.productName).then(function(response){
            console.log(response.data)
            $scope.searchResult=response.data.Products;
        });  
        else
        $scope.searchResult=[];
    }
    $scope.setValue=function(index,$event)
    {
        $scope.productName=$scope.searchResult[index].name;
        $scope.selectedRelatedId=$scope.searchResult[index]._id;
        $scope.searchResult=[];
        $scope.addRelatedDisable=false;
        $event.stopPropagation();
    }
    $scope.searchboxClicked=function($event)
    {
        $event.stopPropagation();
    }
    $scope.addRelated=function($event)
    {
        console.log("related id selected",$scope.selectedRelatedId);
        RelatedProductService.addRelated($scope.id,$scope.selectedRelatedId).then(function(response){
            console.log(response.data);
        })
    }
}