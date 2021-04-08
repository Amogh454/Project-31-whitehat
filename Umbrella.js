class Umbrella{
    constructor(x,y){
        var options = {
            isStatic:true
            

        }
        this.image = loadImage("images/Walking Frame/walking_1.png");
        this.umbrella = Bodies.circle(x,y,100, options)

        this.radius  = 80
        World.add(world, this.umbrella)


    }

  
 display(){

    
    imageMode(CENTER)
    image(this.image,this.umbrella.position.x,this.umbrella.position.y+70,300,300);
    //image(this.umbrella.position.x, this.umbrella.position.y, this.radius, this.radius)


 }




    }


















