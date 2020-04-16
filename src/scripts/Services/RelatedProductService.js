export default function($http)
{
    const header={'Authorization':''+localStorage.getItem('Token')}
    this.addRelated=function(baseID,relatedID)
    {
        var relation={
            "baseProduct":baseID,
	        "recomendedProduct":relatedID
        }
        return $http.post('/api/related',relation,{headers:header});
    }
}