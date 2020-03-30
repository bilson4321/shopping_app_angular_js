export default function($http)
{
    this.getAllProduct=function()
    {
        return $http.get('/api/product/');
    }
    this.findbyID=function(id)
    {
        return $http.get(`/api/product/${id}`);
    }
    this.findbyName=function(name)
    {
        return $http.get(`/api/product/search/${name}`);
    }
}