var bullet,wall,thickness;
var speed,weight,ins;


function setup() {
  createCanvas(1200, 400);
bullet=createSprite(50,200,30,10);
bullet.shapeColor = ("gold");
wall=createSprite(800,200,thickness,height/2);
wall.shapeColor = "green";
ins=createSprite(790,200,10,200);



thickness=random(22,83);
speed=random(223,321);
weight=random(30,52);

 
}

function draw() {
  background("black"); 
 
  textSize(50);
  stroke("white");
  text("Press space to shoot", 300, 80);  

  bullet.collide(ins);
  ins.visible = false;

  if (keyDown("space")){
    bullet.velocityX=speed;

  }

  if (hasCollided(bullet,wall)){
      bullet.velocityX=0;
      var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

      if(damage>10){

        wall.shapeColor = color(255,0,0);
      }

      if (damage<10){
        wall.shapeColor = color(0,255,0);
      }
    }

    wall.depth = bullet.depth;
    bullet.depth = bullet.depth + 1;
 
  drawSprites();
}

function hasCollided(lbullet,lwall) {
bulletRightEdge=lbullet.x +lbullet.width;
wallLeftEdge = lwall.x;
if (bulletRightEdge>= wallLeftEdge  ){

    return true;
}  
return false;
}