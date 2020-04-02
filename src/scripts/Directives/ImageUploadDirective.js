export default function($parse)
{
    return {
        restrict:'A',
        link:['scope','element','attrs',function(scope,element,attrs)
        {
            var parsedFile=$parse(attrs.imageUpload);
            var parsedFileSetter=parsedFile.assign;
    
            element.on('change',function(){
                scope.$apply(function(){
                    parsedFileSetter(scope,element[0].files[0]);
                })
                
                // console.log("hello");
                // $parse(attrs.imageUpload).assign(scope,element[0].files)
                // console.log("link",element[0].files)
                // scope.$apply
            })
        }]
    }
}