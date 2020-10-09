var fixedRect,movingRect;



function setup() {
  createCanvas(600,600);
 fixedRect=createSprite(380,380,50,80);
 movingRect=createSprite(30,30,80,50);
fixedRect.shapeColor="green";
movingRect.shapeColor="green";

}

function draw() {
  background(0,0,0); 
movingRect.x=World.mouseX;
movingRect.y=World.mouseY;
if (movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
  && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
  && movingRect.y-fixedRect.y<movingRect.width/2+fixedRect.width/2
  && fixedRect.y-movingRect.y<movingRect.width/2+fixedRect.width/2
  
  ){
  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";

}
else{
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  
}
  drawSprites();
}