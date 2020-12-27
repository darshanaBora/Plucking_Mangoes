class Boy {
  constructor(x, y) {
      var options = {
          'restitution': 0.5,
          'friction':1.0,
          'density':1.5
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      this.image = loadImage("boy.png");
      
      World.add(world, this.body);
  }
  display(){
      image(this.image,150,300);

      var pos =this.body.position;
      var angle = this.body.angle;
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
  }
}
  