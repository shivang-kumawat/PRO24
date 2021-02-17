class Hammer{
constructor(x,y){
var options = {
    'restitution':0.3,
    'friction':5,
    'density':1
}
this.body = Bodies.rectangle(x,y,80,30,options);
this.width = 80;
this.height = 30;

World.add(world,this.body);
}

display(){

var pos = this.body.position;
pos.x=mouseX;
pos.y=mouseY;
var angle = this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
fill("brown");
rect(0,0,this.width,this.height);
pop();

}





}