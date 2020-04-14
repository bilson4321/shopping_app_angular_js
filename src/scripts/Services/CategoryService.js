export default function($http)
{
    const header={'Authorization':''+localStorage.getItem('Token')}
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
        return $http.post('/api/category/',category,{headers:header});
    }
    this.deleteCategory=function(id)
    {
        return $http.delete(`/api/category/${id}`,{headers:header});
    }
    this.updateCategory=function(id,category)
    {
        return $http.patch(`/api/category/${id}`,category,{headers:header});
    }
}