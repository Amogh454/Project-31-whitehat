const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;
var walk, walk8, walk2, walk3, walk4, walk5, walk6, walk7
var stand;





var engine, world;
var drops = [];
var rand;

var maxDrops=500;


var thunderCreatedFrame=0;

function preload(){

    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
    walk1 = loadImage("images/Walking Frame/walking_1.png");
    walk1 = loadImage("images/Walking Frame/walking_2.png");
    walk1 = loadImage("images/Walking Frame/walking_3.png");
    walk1 = loadImage("images/Walking Frame/walking_4.png");
    walk1 = loadImage("images/Walking Frame/walking_5.png");
    walk1 = loadImage("images/Walking Frame/walking_6.png");
    walk1 = loadImage("images/Walking Frame/walking_7.png");
    walk1 = loadImage("images/Walking Frame/walking_8.png");

    //Walk = loadAnimation("images/Walking Frame/walking_2.png, images/Walking Frame/walking_3, images/Walking Frame/walking_4, images/Walking Frame/walking_5, images/Walking Frame/walking_6, images/Walking Frame/walking_7,images/Walking Frame/walking_8 ")




    
}

function setup(){

    createCanvas(1400, 650);
    engine = Engine.create();
    world = engine.world;

  
  umbrella = new Umbrella(200,400);


    //creating drops
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(0,400), random(0,400)));
        }

    }
    
}




    
   
    


function draw(){
    background(0)
    Engine.update(engine)
    

    fill("white");
    textSize(25);
    text("A Project By Amogh P Kaushik", 655, 400)


    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(100,1400), random(10,100), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }

        thunder.scale = random(0.3,0.6)

        if(thunderCreatedFrame + 10 ===frameCount && thunder){
            thunder.destroy();
        }
    }

    umbrella.display();

    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }

   
    

    drawSprites();
}   


