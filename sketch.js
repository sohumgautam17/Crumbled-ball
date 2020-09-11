
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, dustbin, dustbin2, dustbin3, paperBall, packageBody;


function setup() {
	createCanvas(800, 700);
  

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);
	
    dustbin = new Dustbin(450, 630, 20, 120);
	  dustbin2 = new Dustbin(530, 680, 180, 20);
	dustbin3 = new Dustbin(610, 620, 20, 100);
  paperBall = new Paper(100, 550, 12, 12);
  
 
 


	Engine.run(engine);
  
}


function draw() {


  rectMode(CENTER);
  background("white");
  
  ground.display();
 // dustbin.display();
 // dustbin2.display();
  dustbin3.display();
  paperBall.display();
  
dustbin.shapeColor = ("white")
 
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
  
    Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x:20, y:-20});
  }
  
  
  }

