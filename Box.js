class Box{
  constructor(x,y,color) {
    var options = {
        //isStatic: true
        density:0.2,
        friction:0.9
    }
    this.body = Bodies.rectangle(x,y,40,50,options);
    this.width = 30;
    this.height = 50;
    this.color=color;
    this.visibility=255;
    World.add(world, this.body);

  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
   // push();
    if(this.body.speed<5){
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
     
      fill(this.color);
      rect(0,0, this.width, this.height);
      pop();
    }
    
    else{
      this.visibility=this.visibility-15;
       World.remove(world,this.body);
    }

  }

    score(){
      if(this.visibility<0&&this.visibility>-155){
        score=score+1;
      }
    }
}