export default function()
{
    return{
        require:'ngModel',
        link:function(scope,elem,attr,ngModel)
        {
            var ck=CKEDITOR.replace(elem[0]);
            if(!ngModel) return;
            ck.on('change',function(){
                scope.$apply(function(){
                    ngModel.$setViewValue(ck.getData());
                });
            });

            ngModel.$render=function(value)
            {
                ck.setData(ngModel.$viewValue);
            }
        }
    }
}