class Bob{
  
    constructor(x,y){
        var options={
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
}
this.body = Matter.Bodies.circle(x,y,80);
this.radius=80;

World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill(255,192,203);
        ellipse(0,0,this.radius,this.radius);
        pop();
        
    }
};