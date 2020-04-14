export default function($http)
{
    this.findbyID=function(id)
    {
        return $http.get(`/api/user/${id}`);
    }
    this.createUser=function(user)
    {
        return $http.post('/api/user',user);
    }
    this.updateUser=function(id,user)
    {
        return $http.patch(`/api/user/${id}`,user);
    }
}