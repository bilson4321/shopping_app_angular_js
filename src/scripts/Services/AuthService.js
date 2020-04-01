//import * as decode from 'jwt-decode';
export default function()
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
}