let FDot = {
    x1:undefined,
    y1:undefined
}
let x 
let y 
let SDot = {
    x2:undefined,
    y2:undefined
}
var ctx 

let c = document.getElementById("myCanvas");
ctx = c.getContext("2d");

let Xcords = document.getElementById("myCanvas");
let xc = Xcords.getContext("2d");
    xc = c.getContext("2d")
    xc.moveTo(0,250);
    xc.lineTo(500,250);
    xc.stroke(); 
    

let Ycords = document.getElementById("myCanvas");
let yc = Ycords.getContext("2d");
    yc = c.getContext("2d")
    yc.moveTo(250,0);
    yc.lineTo(250,500);
    yc.stroke(); 

function Compare(){
    let y4c = event.clientX -10
    let x4c = event.clientY -10 
    if(248<=y4c && y4c<252 ){
        console.log("y4c")
    }
    if(248<=x4c && x4c<252){
        console.log("x4c")
    }
    let xx = -x4c/50 + 5
    let yy = y4c/50 - 5
    document.getElementById("xAndy").innerHTML = yy.toFixed(1) +";"+ xx.toFixed(1)
}

function FirstClick(){
    let x = event.clientX 
    let y = event.clientY
    FDot.x1 = x - 10
    FDot.y1 = y - 10
    
}
function secondClick(){

    let x = event.clientX 
    let y = event.clientY
    SDot.x2 = x - 10
    SDot.y2 = y - 10
    ctx.moveTo(FDot.x1,FDot.y1);
    ctx.lineTo(SDot.x2,SDot.y2);
    ctx.stroke(); 
   
    let form = Math.sqrt(Math.pow(FDot.x1-SDot.x2, 2) + Math.pow(FDot.y1 - SDot.y2, 2))/50
    document.getElementById("q").innerHTML = form.toFixed(1)
}
function DeleteXY(){  
    location.reload()
}

