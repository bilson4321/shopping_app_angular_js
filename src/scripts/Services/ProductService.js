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
    this.addProduct=function(product)
    {
        return $http.post(`/api/product/`,product);
    }
    this.updateProduct=function(id,product)
    {
        return $http.patch(`/api/product/${id}`,product);
    }
    this.deleteProduct=function(id)
    {
        return $http.delete(`/api/product/${id}`);
    }
}