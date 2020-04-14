export default function($http)
{
    const header={'Authorization':''+localStorage.getItem('Token')}
    this.findbyID=function(id)
    {
        return $http.get(`/api/user/${id}`,{headers:header});
    }
    this.createUser=function(user)
    {
        return $http.post('/api/user',user);
    }
    this.updateUser=function(id,user)
    {
        return $http.patch(`/api/user/${id}`,user,{headers:header});
    }
}