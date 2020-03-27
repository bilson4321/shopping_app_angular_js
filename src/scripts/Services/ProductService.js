export default function($http)
{
    this.getAllProduct=function()
    {
        return $http.get('/api/product/');
    }
}