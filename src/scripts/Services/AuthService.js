export default function(jwtHelper)
{
    this.authenticated=false;
    this.isAuthenticated=function()
    {
        var token=localStorage.getItem('Token');
        console.log("token in local storage",token);
        console.log("type of",typeof(token));
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
        var payload=jwtHelper.decodeToken(token);
        if(payload.hasOwnProperty('id'))
            return payload.id;
        else
            return "not found"
    }
}