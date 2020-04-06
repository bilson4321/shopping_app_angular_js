export default function(jwtHelper)
{
    this.authenticated=false;
    this.isAuthenticated=function()
    {
        var token=localStorage.getItem('Token');
        console.log("token in local storage",token);
        if(token!==null)
        {
            console.log("not authenticated")
            return true;
        }
        return false;
    }
    this.decodeToken=function()
    {

    }
    this.getUserId=function()
    {
        var token=localStorage.getItem('Token');
        if(token!==null)
        {
            var payload=jwtHelper.decodeToken(token);
            if(payload.hasOwnProperty('id'))
                return payload.id;
            else
                return "not found"
        }
    }
    this.getUserName=function()
    {
        var token=localStorage.getItem('Token');
        if(token!==null)
        {
            var payload=jwtHelper.decodeToken(token);
            if(payload.hasOwnProperty('name'))
                return payload.name;
            else
                return "not found"
        }
    }
}