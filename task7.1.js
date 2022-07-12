class movie {
    constructor(title,studio,rating){
    this.title= title;
    this.studio=studio;
    this.rating=rating;
                      }}
var movie1 = new movie("xxx","eeeeee","pg")
console.log(movie1.title,movie1.studio,movie1.rating='pg13')

class movie2 {
    constructor(title,studio,rating){
    this.title= title;
    this.studio=studio;
    this.rating=rating;
                      }}
var movie02= new movie2("uuuu","ooooo","pg");
console.log(movie02.title,movie02.studio,movie02.rating)

class Movie3{
    constructor(title,studio,rating){
        this.title= title;
        this.studio=studio;
        this.rating=rating;
                          }
    rated(){
        for (let i = 0; i < this.rating.length; i++) {
            if (this.rating[i]=="pg")
            {console.log(this.title[i],this.studio[i],this.rating[i]);     
            }
            if (this.rating[i]=="pg-13")
            {console.log(this.title[i],this.studio[i],this.rating[i]);     
            }
        }
    }
}
let movie3= new Movie3(["kathi","vikram","singam"],["dream","rajkamal","studio green"],["pg","pg-13","pg"]);
movie3.rated();




