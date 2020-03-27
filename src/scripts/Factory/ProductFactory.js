export default function($resource)
{
    return $resource('/api/product/:productID',{
        'query':{method:'GET',isArray:true}
    });
}