
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var bobDiameter=80;
var bobObject1, rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1=new Bob(160,600);
	bobObject2=new Bob(240,600);
	bobObject3=new Bob(320,600);
	bobObject4=new Bob(400,600);
	bobObject5=new Bob(480,600);

	rooftop=new Roof(400,50,800,20);

	rope1=new rope(bobObject1.body, rooftop.body,-bobDiameter*2, 0);
	rope2=new rope(bobObject2.body, rooftop.body,-bobDiameter*2, 0);
	rope3=new rope(bobObject3.body, rooftop.body,-bobDiameter*2, 0);
	rope4=new rope(bobObject4.body, rooftop.body,-bobDiameter*2, 0);
	rope5=new rope(bobObject5.body, rooftop.body,-bobDiameter*2, 0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rooftop.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



