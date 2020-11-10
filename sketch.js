
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5,ground;
var rope1;

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1  = new Bob(200,450,40)
	bob2  = new Bob(240,450,40)
	bob3  = new Bob(280,450,40)
	bob4  = new Bob(320,450,40)
	bob5  = new Bob(360,450,40)
	ground = new Ground(300,100,width,20);
	rope1= new Rope(bob1.body,ground,body,-bobDaimeter*2,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,227,230);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground.display();
  rope1.display();

  drawSprites();
 
}



