var bola;




function setup() {
  createCanvas(400,400);
  bola = createSprite(200,200,20,20);
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){ 
  bola.position.x = bola.position.x +3;
  } 
  if(keyIsDown(LEFT_ARROW)){
   bola.position.x = bola.position.x -3; 
  }
  if(keyIsDown(UP_ARROW)){
   bola.position.y = bola.position.y -3; 
  }
  if(keyIsDown(DOWN_ARROW)){
    bola.position.y = bola.position.y +3;
  }
  
  
  drawSprites();
  
}




