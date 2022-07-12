class circle{
    constructor(radius,color)
    {
    this.radius=radius;
    this.color=color;

    }// justing calculate circle circumference 
    circumference(){
        let c=2*3.14*this.radius
        console.log(`circle circumference is ${c}`);
        console.log(`circle color is ${this.color}`)
    }
}
const c = new circle(23,"black");
c.circumference();