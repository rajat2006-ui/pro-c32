class Ball{
    constructor(x,y,r){
        var option={density:1.2,
                    friction:0.1,
                    restitution:0.1}

        this.body=Bodies.rectangle(x,y,r,r,option);
        this.r=r;
        this.image=loadImage("hexagon.jpg");
        World.add(world,this.body);
    }

    display(){
        var angle=this.body.angle;

        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle)
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}