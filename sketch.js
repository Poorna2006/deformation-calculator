var car;
var wall;
var weight,speed;
var deformation
function setup() {
  createCanvas(800,400);
  car = createSprite(400, 200, 30, 30);
  car.shapeColor="white";
  wall = createSprite(750,200,20,height/2);
  wall.shapeColor="black";
  speed=random(55,90);
  weight=random(400,1500);
  
}

function draw() {
  background(0,25,255);  
  car.velocityX=speed;
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0
    var deformation=0.5*weight*speed*speed/22500
    if(deformation<100){
      car.shapeColor=("green");
    }
    if(deformation>100||deformation<180){
      car.shapeColor=("yellow");
    }
    if(deformation>180){
      car.shapeColor=("red");
    }
  }
  wall.collide(car);
  drawSprites();
}