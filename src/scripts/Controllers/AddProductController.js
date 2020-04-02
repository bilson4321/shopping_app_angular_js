export default function($scope,ProductService,CategoryService)
{
    $scope.categories=[];
    CategoryService.getAllCategory().then((response)=>{
        $scope.categories=response.data.categories;
    })
    $scope.uploadedFile = function(element) {     
        $scope.$apply(function($scope) {
        $scope.files = element.files;  
    });
    }
    $scope.submit=function()
    {
       
        var product={
            "name":$scope.name,
            "price":$scope.price,
            "description":$scope.description,
            "categoryID":$scope.categoryID
        }
        console.log("product",product);
        console.dir($scope.myImage);
        ProductService.addProduct(product,$scope.files[0]).then((response)=>{
            console.log("response received",response);
        })
        .catch(err=>{
            console.log("error message",err);
        });
    }
}