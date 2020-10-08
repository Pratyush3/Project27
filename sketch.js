
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bob1,bob2,bpb3,bob4,bob5;
var roof;
var rope1,rope2,rope3, rope4,rope5;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	roof=new Roof(400,200,200,20);

	bobd=40;

	
	bob1=new Bob(320,675,40);//1
	bob2=new Bob(360,675,40);//2
	bob3=new Bob(400,675,40);//3
	bob4=new Bob(440,675,40);//4
	bob5=new Bob(480,675,40);//5
	
	rope1=new rope(bob1.body,roof.body,-bobd*2, 0)//1
	rope2=new rope(bob2.body,roof.body,-bobd*1, 0)//2
	rope3=new rope(bob3.body,roof.body,0, 0)//3
	rope4=new rope(bob4.body,roof.body,bobd*1, 0)//4
	rope5=new rope(bob5.body,roof.body,bobd*2, 0)//5


	console.log(bob2);
	Engine.run(engine);
  
} 


function draw() {
  rectMode(CENTER);
  background(230);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

	}
}
