export default function($scope,$stateParams,ProductService,CategoryService,RelatedProductService)
{
    $scope.id=$stateParams.productID;
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
    });  
    $scope.update=function()
    {
        var newProduct={
            "id":$scope.id,
            "name":$scope.name,
            "price":$scope.price,
            "description":$scope.description
        }
        ProductService.updateProduct($scope.id,newProduct).then((res)=>{
            console.log(res);
        });
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