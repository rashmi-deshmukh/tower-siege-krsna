const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var base1;
var block1;



function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	base1 = new Ground(550,530,400,5);
	block1 = new Block(550,525,100,5);

	Engine.run(engine);

}

function draw() {
	background(230);

	base1.display();
	block1.display();

}

function mouseDragged(){

}

function mouseReleased(){
	
}

function keyPressed(){
	if(keyCode==32){
		
	}
}
