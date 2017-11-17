$(window).on('load resize', function(){
  var grid = function(){
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext("2d");
    
    var filld = document.getElementsByClassName('grid')[0];
    var gridW =filld.offsetWidth;
    var gridH =filld.offsetHeight;

    canvas.style.width=gridW-37+"px";
    canvas.style.height=gridH-37+"px";
    var x=parseInt(canvas.style.width);
    var y=parseInt(canvas.style.height);
    
    for(var a=3;a<x;a+=80){
      for(var b=3;b<x;b+=90){
        context.beginPath();
        context.arc(a, b, 2, 0, Math.PI*2, false); 
        context.closePath();
        context.fillStyle = "#889091"
        context.fill();
      }
    }   
  };
  grid();
});


