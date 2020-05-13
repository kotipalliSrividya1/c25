class Paper{
    constructor(){
        var opt={
            isStatic:false,
            friction:0.3,
            density:0.3

        }
        this.body=Bodies.circle(100,200,50,opt);
        this.image=loadImage('paper.png')
        World.add(world,this.body)

    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        angleMode(RADIANS);
        rotate(this.body.angle);
        imageMode(CENTER);
        fill("pink")
        image(this.image,0,0,50,50);
        pop();
    }
}