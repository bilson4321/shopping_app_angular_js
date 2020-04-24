export default function($scope,HomePageService,ProductService)
{
    $scope.homePageData="";
    $scope.image=null;
    var getdata=function()
    {
        HomePageService.getHomePageData().then(res=>{
            $scope.homePageData=res.data.homePageData[0];
            console.log($scope.homePageData);
            if(res.data.homePageData.length===0)
            {
                HomePageService.init().then(res=>{
                    $scope.homePageData=res.data.homePageData;
                })
                .catch((err)=>{
                    
                })
            }
        })
        .catch(err=>{
    
        })
    }
    getdata();
    $scope.uploadedFile = function(element) {     
 
        $scope.$apply(function($scope) {
          $scope.files = element.files;  
        });
        
       }
    $scope.addImage=function()
    {
        if($scope.imageToUpload!=="")
        {
            HomePageService.addBannerImage($scope.homePageData._id,$scope.files[0]).then((res)=>{
                $scope.homePageData.image.push(res.data.images);
            })
            .catch(err=>{
                console.log("error",err);
            })
        }
    }
    $scope.deleteFile=function(image)
    {
        HomePageService.removeBannerImage($scope.homePageData._id,image).then(res=>{
            var value=res.data.deletedImage;
            $scope.homePageData.image=$scope.homePageData.image.filter(item => item !== value)
        })
        .catch(err=>{
            console.log(err)
        })
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
        $scope.selectedProductId=$scope.searchResult[index]._id;
        $scope.searchResult=[];
        $scope.addRelatedDisable=false;
        $event.stopPropagation();
    }
    $scope.searchboxClicked=function($event)
    {
        $event.stopPropagation();
    }
    $scope.addFeatured=function()
    {
        console.log("related id selected",$scope.selectedProductId);
        HomePageService.addFeaturedProduct($scope.homePageData._id,$scope.selectedProductId).then((res)=>{
            console.log(res)
            getdata()
        })
    }
    $scope.removeFeatured=function(product)
    {
        console.log(product);
        HomePageService.removeFeaturedProduct($scope.homePageData._id,product).then((res)=>{
            console.log(res);
            getdata();
        })
    }
}