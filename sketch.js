var numbers = [15, 22, 48, 37];
var x = 0;
var y = 0;

function setup(){
    createCanvas(600,400);
    background(0);
}

function draw(){
    
    if(mouseIsPressed){
        background(255,20,200);
    }
    
    fill(0, 255, 0);
    x = 200;
    y++;
    rect(x, y, 100, 200);
    
    for(var i = 0; i < 4; i++){
        ellipse((i+1)*100,200,numbers[i], numbers[i]);
    }

}

   
