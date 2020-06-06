class Fall {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 10 , 10, options);
      this.width = width;
      this.height = height;
  
      World.add(world, this.body);
    }
    display(){
        rectMode(CENTER);
    fill(255,25,25);
    rect(this.body.position.x,this.body.position.y, 10,10);
    
  }
};