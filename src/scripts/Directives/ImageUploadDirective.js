export default function()
{
    return {
        restrict:'E',
        replace:true,
        template:'<input type="file" class="form-control">',
        scope:{
            outputuri:'='
        },
        link:function(scope,element,attrs)
        {
            var reader=new FileReader();
           
            element.on('change',function(){
                reader.readAsDataURL(element[0].files[0]);
                reader.onload=function(e){
                    var result=e.target.result;
                    scope.$apply(function(){
                        scope.outputuri=result;
                    });
                }
            })
        }
    }
}