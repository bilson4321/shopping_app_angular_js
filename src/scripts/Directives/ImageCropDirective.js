export default function($document)
{
    return {
        restrict:'E',
        replace:true,
        template:`
                <span class="clearfix" style="display:inline-block;position:relative;overflow:auto">
                    <canvas id="myCanvas"></canvas>
                    <div class="crop-guide">crop guide</div>
                    <button>Crop</button>
                </span>
                    `,
        scope:{
            imagetocrop:'=',
            croppedimage:'='
        },
        link:function(scope,element,attrs)
        {
            console.log("height",element.height());

            scope.eHeignt=element.height();
            scope.ewidth=element.width();
            scope.imageURI=scope.imagetocrop;
            scope.cropBox=angular.element(element.find("div")[0]);
            scope.cropBox.css({
                height:scope.eHeignt+'px'
            })
            scope.cropButton=angular.element(element.find("button")[0]);
            scope.mouse=0;
            scope.$watch('imagetocrop',function(){
                if(typeof(scope.imagetocrop)!=='undefined')
                {
                    console.log("changed",scope.imagetocrop);
                    var canvas=document.getElementById("myCanvas");
                    var ctx=canvas.getContext("2d");
                    scope.canvasImage=new Image;
                    scope.canvasImage.src=scope.imagetocrop;
                    
                    scope.canvasImage.onload=function(){
                        canvas.height=scope.canvasImage.height;
                        canvas.width=scope.canvasImage.width;
                        scope.eHeignt=element.height();
                        scope.ewidth=element.width();
                        if(scope.eHeignt>scope.ewidth)
                        {
                            scope.cropBox.css({
                                height:scope.ewidth+'px',
                                width:scope.ewidth+'px'
                            })
                        }
                        else
                        {
                            scope.cropBox.css({
                                height:scope.eHeignt+'px',
                                width:scope.eHeignt+'px'
                            })
                        }
                        // var hratio=canvas.width/canvasImage.width;
                        // var vratio=canvas.height/canvasImage.height;
                        // var ratio=Math.min(hratio,vratio);
                        // var centerShift_x=(canvas.width-canvasImage.width*ratio)/2;
                        // var centerShift_y=(canvas.height-canvasImage.height*ratio)/2;
                        // ctx.clearRect(0,0,canvas.width,canvas.height);
                        // ctx.drawImage(canvasImage,0,0,canvasImage.width,canvasImage.height,
                        //     centerShift_x,centerShift_y,canvasImage.width*ratio,canvasImage.height*ratio);
                         ctx.clearRect(0,0,canvas.width,canvas.height);
                         ctx.drawImage(scope.canvasImage,0,0,scope.canvasImage.width,scope.canvasImage.height);
                    
                    }
                }
                
            })
            var startX = 0, startY = 0, x = 0, y = 0;
            // element.css({
            //     position:'relative'
            //   })
            element.on('mousedown', function(event) {
            // Prevent default dragging of selected content
            event.preventDefault();
            
            startX = event.pageX - x;
            startY = event.pageY - y;
            $document.on('mousemove', mousemove);
            $document.on('mouseup', mouseup);
            });

            function mousemove(event) {
            y = event.pageY - startY;
            x = event.pageX - startX;
            
            scope.cropBox.css({
                top: y + 'px',
                left:  x + 'px'
            });
            }

            function mouseup() {
            $document.off('mousemove', mousemove);
            $document.off('mouseup', mouseup);
            }
            function dataURLtoFile(dataurl, filename) {
                var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
                    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
                    while(n--){
                        u8arr[n] = bstr.charCodeAt(n);
                    }
                    return new File([u8arr], filename, {type:mime});
            }
                
            scope.cropButton.on('click',function(){
                var canvas=document.getElementById("myCanvas");
                var ctx=canvas.getContext("2d");
                ctx.clearRect(0,0,canvas.width,canvas.height);
                if(scope.eHeignt>scope.ewidth)
                {
                    canvas.height=scope.canvasImage.width;
                    canvas.width=scope.canvasImage.width;
                }
                else{
                    canvas.height=scope.canvasImage.height;
                    canvas.width=scope.canvasImage.height;
                }
                ctx.drawImage(scope.canvasImage,0,0,scope.canvasImage.width,scope.canvasImage.height);
                var resultURI=canvas.toDataURL('image/jpeg',1.0);
                scope.$apply(function(){
                    scope.croppedimage=dataURLtoFile(resultURI,"image");
                })
            })
        }
    }
}