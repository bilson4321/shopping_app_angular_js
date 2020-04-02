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
    this.addProduct=function(product,file)
    {
        var fd=new FormData();
        fd.append('image',file);
        fd.append('name',product.name);
        fd.append('price',product.price);
        fd.append('description',product.description);
        fd.append('categoryID',product.categoryID);
        return $http.post(`/api/product/`,fd,{
            transformRequest:angular.identity,
            headers:{
                'Content-Type':undefined
            }
        });
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