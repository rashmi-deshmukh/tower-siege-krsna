const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() 
{
    
}

function setup(){
    var canvas = createCanvas(1400,800);
    engine = Engine.create();
    world = engine.world;
    
    ground=new Ground(600,780,1400,20)
    ground1=new Ground(600,500,400,20)
    //create ground 2



    // draw the boxes
    box1= new Box(500, 450,50,50)


    hex = new Hex(135,415);
    sling= new Sling(hex.body, {x:140, y:415});
}

function draw(){
    background("white");
    Engine.update(engine);
    
    ground.display();
    hex.display();
    sling.display();
    ground1.display();

    fill("red")
    box1.display();
}
function keyPressed(){

    if(keyCode===32){
        Matter.Body.setPosition(hex.body, {x:400,y:200})//changed
        sling.attach(hex.body);
    }
}


function mouseDragged()
{
    Matter.Body.setPosition(hex.body, {x:mouseX, y:mouseY} )    
}

function mouseReleased()
{
    sling.fly();
}

