class Rubber{
    constructor(x,y){
    var options = {
        'restitution':1,
        'friction':0.08,
        'density':1
    }
    this.body = Bodies.rectangle(x,y,50,50 ,options);
    this.width = 70;
    this.height =70;
    World.add(world,this.body);
    }
    
    
    display(){
    
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    
    stroke("black")
    fill("blue");
    ellipse(0 ,0 ,this.width ,this.height);
    pop();
    
    }
  };