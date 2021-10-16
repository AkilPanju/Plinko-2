class Plinko
{
    constructor(x,y,radius)
    {
        var options = 
        {
            isStatic:true
        }
        
        this.body = Bodies.circle(x,y,radius/2,options);
        this.height = height;
        this.width = width;
        this.radius = radius;
        World.add(world,this.body);
    }
    display() 
    {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("red");
        circle(pos.x,pos.y,this.radius);
        pop();
    }
}