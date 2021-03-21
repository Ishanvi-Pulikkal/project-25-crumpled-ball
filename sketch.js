
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,dustbin;
var bin,binImg;

function preload()
{
binImg=loadImage("dustbingreen.png")	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	bin = createSprite(1200,550);
	bin.addImage(binImg)
	bin.scale = 0.9
	//Create the Bodies Here.
	ground = new Ground(width/2,650,width,15);
	dustbin = new Dustbin(1200,650)
	paper = new Paper(200,450,80)
	paper.scale = 0.2

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(120);
  
  
  paper.display();
  ground.display();
  dustbin.display();
 

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:365,y:-365})
	}
}



