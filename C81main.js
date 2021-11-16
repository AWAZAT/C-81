canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color="blue";

function circle(x,y){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(x,y,50,0, 2*Math.PI);
ctx.stroke();
 }

 circle(250,100);
color="black";
circle(400,100);
color="red";
circle(550,100);
color="yellow";
circle(475,155);
color="green";
circle(325,155);