export default function($http)
{
    const header={'Authorization':''+localStorage.getItem('Token')}
    this.getAllOrder=function()
    {
        return $http.get('/api/order',{headers:header})
    }
    this.getOrderByUserId=function(userid)
    {
        return $http.get(`/api/orderByUser/${userid}`,{headers:header})
    }
    this.createOrder=function(order)
    {
        return $http.post('/api/order',order,{headers:header})
    }
}