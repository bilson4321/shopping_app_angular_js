export default function($http)
{
    this.getAllCategory=function()
    {
        return $http.get('/api/category/');
    }
}