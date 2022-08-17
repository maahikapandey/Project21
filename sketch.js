
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	var balls_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
	}
	//Create the Bodies Here.
	groundObj=new Ground(width/2,670,width,20)
	leftSide=new Ground(1100,600,20,120)
	rightSide=new Ground(1350,600,20,120)
	ball = Bodies.circle(200,50,20,balls_options)
	World.add(world, ball);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display()
  leftSide.display()
  rightSide.display()
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}

