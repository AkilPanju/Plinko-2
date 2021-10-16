class Particle
{
    constructor(x,y,radius) 
    {
        var options = {
            isStatic: false,
            restitution:0.1
        }
        this.body = Bodies.circle(x,y,radius/2,options);
        this.color = color(random(0,225),random(0,225),random(0,225));
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle);
        fill(this.color);
        circle(pos.x,pos.y,this.radius);
        pop();

        
    }

   drop()
    {
        if(keyCode ==  32) {
            isStatic: false;
        }
    }


}