class Mango {
    constructor(x, y) {
        var options = {
            'isStatic': true,
            'restitution':0.8,
            'friction':1
        }
        this.body = Bodies.circle(x, y, 50, options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("mango.png");
        
        World.add(world, this.body);
    }
    display(){
        //image(this.image,200,20);

        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        circle(0, 0,50);
        pop();
    }
}