var car,wall;
var speed,weight;

function setup() {
  createCanvas(1500,400);
 car = createSprite(250, 200, 50, 50);
  wall = createSprite(1200,200,60,100);

car.velocityX = 5;

speed = random(20,30);
weight = random(400,1500);

}

function draw() {
  background("pink");  

  if(wall.x-car.x < (car.width+wall.width)/2);
  {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
if(deformation>180)
  {
    car.shapeColor = ("yellow");
    wall.shapecolor = ("red");
  }

  if(deformation<180 && deformation>180)
  {
    car.shapeColor = ("green");
    wall.shapeColor = ("red");
  }
if(deformation<100);
{
  car.shapeColor = ("blue")
  wall.shapeColor = ("red")
}
  }
   
  drawSprites();
}