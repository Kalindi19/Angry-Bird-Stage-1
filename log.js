class Log{
    constructor(x,y,height,angle){
        var option={
            restitution : 0.8,
            friction : 1.5,
            density : 1.5
        };
        this.body=Bodies.rectangle(x,y,20,height,option);
        Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body);
        this.width=20;
        this.height=height;

    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        strokeWeight(4);
        stroke("white")
        fill(128,10,10);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}