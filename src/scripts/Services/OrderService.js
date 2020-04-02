export default function($http)
{
    this.getAllOrder=function()
    {
        return $http.get('/api/order')
    }
    this.getOrderByUserId=function(userid)
    {
        return $http.get(`/api/orderByUser/${userid}`)
    }
    this.createOrder=function(order)
    {
        return $http.post('/api/order',order)
    }
}