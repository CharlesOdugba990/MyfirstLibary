var fixedObject,movedObject,fixedObject2,movedObject2,Heater,ball;

function setup() {
  createCanvas(800,600);
  fixedObject = createSprite(300,200,50,50);
  movedObject = createSprite(500, 200, 50,50);
  fixedObject2 = createSprite(700,400,50,50);
  movedObject2 = createSprite(100,400,50,50);
  Heater = createSprite(200,250,50,50);
  ball = createSprite(230,300,50,50);
  movedObject2.velocityX = 2;
  fixedObject2.velocityX = -2;
  movedObject.shapeColor = "green";
  fixedObject.shapeColor = "green";
  fixedObject.debug = true;
  movedObject.debug = true;
  
}

function draw() {
  background(0);
  BounceOff();
  movedObject.x = World.mouseX;
  movedObject.y = World.mouseY;

   if(collided(movedObject,Heater)){
    movedObject.shapeColor = "red";
    Heater.shapeColor = "red";
   }
   else{
    movedObject.shapeColor = "green";
    Heater.shapeColor = "green"; 
   }
    
  drawSprites();
}

