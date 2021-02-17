
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var hammer,stone,rubber,box;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer=new Hammer(400,400);
	plane= new Plane(400,680,800,10);
  stone1 = new Stone(400,350);
  sand1 = new Sand(350,650);
  sand2= new Sand(300,670);
  sand3=new Sand(250,670);
  sand4=new Sand(275,670);
  sand5=new Sand(50,670);
  sand6=new Sand(500,670);
  rubber=new Rubber(700,500);

  
}


function draw() {
  
  background("skyblue");
  Engine.update(engine);

  hammer.display();
  plane.display();
  stone1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  rubber.display();

}



