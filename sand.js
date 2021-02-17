class Sand{
    constructor(x,y){
    var options = {
        'restitution':0.9,
        'friction':0.08,
        'density':1
    }
    this.body = Bodies.rectangle(x,y,10,10,options);
    this.width = 5;
    this.height =5;
    World.add(world,this.body);
    }
    
    
    display(){
    
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    
    stroke("red")
    fill("brown");
    ellipse(0 ,0 ,this.width ,this.height);
    pop();
    
    }
  };