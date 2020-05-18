var wallThickness, wall;
var bullet, bulletWeight, bulletSpeed;

function setup() 
{
  createCanvas(1600,400);

  bullet = createSprite(50,200,20,30);
  bullet.shapeColor = color(255,255,255);

  wallThickness = random(30,80);

  wall = createSprite(1200,200,wallThickness,height/2);
  wall.shapeColor = color(0,0,255);

  bulletSpeed = random(170,220);
  bullet.velocityX = bulletSpeed;

  bulletWeight = random(35,55);
}

function draw() 
{
  background(0,0,0);

  var Collided = hasCollided(wall,bullet);
  if(Collided == true)
  {
    bullet.velocityX = 0;
    var damage = (0.5*bulletWeight*bulletSpeed*bulletSpeed)/(wallThickness*wallThickness*wallThickness);

    if(damage > 10)
    {
      wall.shapeColor = color(255,0,0);
    }
    else if (damage <= 10)
    {
      wall.shapeColor = color(0,255,0);
    }
  }
  
  drawSprites();
}

function hasCollided(Mywall, Mybullet)
{
  var bulletRightEdge = Mybullet.x + Mybullet.width;
  var wallLeftEdge = Mywall.x;

  if(bulletRightEdge >= wallLeftEdge)
  {
    return true;
  }

  return false;
}
