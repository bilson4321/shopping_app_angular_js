export default function($http)
{
    const header={'Authorization':''+localStorage.getItem('Token')}
    this.getHomePageData=function()
    {
        return $http.get('/api/homePage/');
    }
    this.init=function()
    {
        return $http.post('/api/homePage/');
    }
    this.addBannerImage=function(id,file)
    {
        var fd=new FormData();
        fd.append('image',file);
        fd.append('id',id);
        return $http.post(`/api/addBannerImage`,fd,{
            transformRequest:angular.identity,
            headers:{
                'Content-Type':undefined,
                'Authorization':''+localStorage.getItem('Token')
            }
        });
    }
    this.removeBannerImage=function(id,file)
    {
        var data={
            "id":id,
            "image":file
        }
        return $http.post('/api/deleteBannerImage',data,{headers:header})
    }
    this.addFeaturedProduct=function(id,productId)
    {
        var data={
            "id":id,
            "productId":productId
        }
        return $http.post('/api/addFeaturedProduct',data,{headers:header})
    }
    this.removeFeaturedProduct=function(id,productId)
    {
        var data={
            "id":id,
            "productId":productId
        }
        return $http.post('/api/removeFeaturedProduct',data,{headers:header})
    }
}