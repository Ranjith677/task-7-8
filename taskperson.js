class persondetail{
    constructor(name,age,dob,gender,ph)
    {
        this.name=name
        this.age=age;
        this.dob=dob;
        this.gender=gender;
        this.ph=ph;
        
    }}

    class person1detail extends persondetail{
constructor(name,age,dob,gender,ph){
    super(name,age,dob,gender,ph)
}
    person1(){
        console.log("person1");
        console.log(this.name);
        console.log(this.age);
        console.log(this.dob);
        console.log(this.gender);
        console.log(this.ph);
    }}
class person2detail extends persondetail{
    constructor(name,age,dob,gender,ph){
        super(name,age,dob,gender,ph)
    }
person2(){
    console.log(" ")
        console.log("person2");
        console.log(this.name);
        console.log(this.age);
        console.log(this.dob);
        console.log(this.gender);
        console.log(this.ph);
}
}
const p1 = new person1detail("ranjith","26","23-06-1996","male","9791819342");
const p2 = new person2detail("siva","25","30-05-1994","male","8778166596");
p1.person1();
p2.person2();