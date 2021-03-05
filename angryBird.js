class AngryBird{
    constructor(x,y){
        var option={
            restitution : 0.8,
            friction : 0.3,
            density : 1.0,
        };
        this.body=Bodies.rectangle(x,y,50,50,option);
        World.add(world,this.body);
        this.width=50;
        this.height=50;

    }
    display(){
        var pos=this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        strokeWeight(4);
        stroke("white")
        fill("red");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}