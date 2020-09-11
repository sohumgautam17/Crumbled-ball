class Dustbin{
constructor(x, y, width, height){
    var options = {
        isStatic: true
    }


        this.x = x;
        this.y = y;
		this.width=width;
		this.height=height;
        this.image = loadImage("sprites/dustbingreen.png");

        
        
        this.body = Bodies.rectangle(x,y, this.width, this.height, options);


World.add(world, this.body);

}
display(){
    var pos =this.body.position;
    push();
    fill("white");
    image(this.image, 460, 550, 150, 140);
    rect(pos.x, pos.y, this.width, this.height);
    imageMode(CENTER);
    pop();
  }
};

