class Chain{
    constructor(bodyA,pointB){
        var option={bodyA:bodyA,
                    pointB:pointB,
                    stiffness:0.002,
                    lenght:10}

        this.sling=Constraint.create(option);
        this.pointB=pointB;
        World.add(world,this.sling);
    }

    display(){
        if(this.sling.bodyA){
        push();    
        strokeWeight(2);
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y);
        pop();
        }
    }

    fly(){
        this.sling.bodyA=null;
    }

    attach(){
        this.sling.bodyA=ball.body;
    }
}