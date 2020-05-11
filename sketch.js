const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var castle1,castle2;

function setup(){
    var canvas = createCanvas(1600,400);
    engine = Engine.create();
    world = engine.world;

    castle1 = new Castle(350,290,350,350);
    castle2 = new Castle(220,129,220,220);
}

function draw(){
    background(0);
    Engine.update(engine);
    castle1.display();
    castle2.display();
   
}