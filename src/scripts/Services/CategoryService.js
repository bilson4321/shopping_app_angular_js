export default function($http)
{
    this.getAllCategory=function()
    {
        return $http.get('/api/category/');
    }
    this.findByID=function(id)
    {
        return $http.get(`/api/category/${id}`);
    }
    this.addCategory=function(category)
    {
        return $http.post('/api/category/',category);
    }
    this.deleteCategory=function(id)
    {
        return $http.delete(`/api/category/${id}`);
    }
    this.updateCategory=function(id,category)
    {
        return $http.patch(`/api/category/${id}`,category);
    }
}