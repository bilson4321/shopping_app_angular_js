export default function($http)
{
    const header={'Authorization':''+localStorage.getItem('Token')}
    this.findbyID=function(id)
    {
        return $http.get(`/api/user/${id}`,{headers:header});
    }
    this.getAllUser=function()
    {
        return $http.get(`/api/user/`,{headers:header});
    }
    this.createUser=function(user)
    {
        return $http.post('/api/user',user);
    }
    this.updateUser=function(id,user)
    {
        return $http.patch(`/api/user/${id}`,user,{headers:header});
    }
    this.getQuestion=function(email)
    {
        var request={
            "email":email
        };
        return $http.post(`/api/getQuestion`,request);
    }
    this.submitAnswer=function(answer)
    {   
        return $http.post(`/api/getTempToken`,answer,{headers:header});
    }
    this.changePassword=function(toChange)
    {
        return $http.post(`/api/changePassword`,toChange,{headers:header});
    }
}