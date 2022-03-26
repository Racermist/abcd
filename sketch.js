
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ball;
var ground;
var object1,object2;

function preload()	{}

function setup() {
	createCanvas(800, 300);
	engine = Engine.create()
    world = engine.world

	var ball_options={
		isStatic:false,
		restitution:1,
        friction:0,
		density:1.2,
	}
	var ground_options={
		isStatic:true,
	}
	

	//Create the Bodies Here.
	ball=Bodies.circle(150,10,10,ball_options);
	World.add(world,ball);
	ground=Bodies.rectangle(200,390,400,20,ground_options);
	World.add(world,ground);
	//ball.mouseClicked(vforce);
	object1=new Object(width/2,670,width,20);
	object2=new Object(1100,600,20,120);
    
	

	Engine.run(engine)
  
}


function draw() {
	background(51);
 Engine.update(engine);
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,30,30);
 rectMode(CENTER);
 rect(ground.x,ground.y,400,20)
 object1.display();
 object2.display();
	drawSprites();
}