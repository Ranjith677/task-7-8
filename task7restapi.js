var request= new XMLHttpRequest();
request.open("GET",'https://restcountries.com/v3.1/all');
request.send();
request.onload=function(){

    var countrydata = JSON.parse(this.responseText)
    countrydata=countrydata.filter(function (n)
   {

            return n.region==="Asia";

        })
        console.log(countrydata);

    }
    
var request1=new XMLHttpRequest();
request1.open('GET', 'https://restcountries.com/v3.1/all');
request1.send();
request1.onload= function print() {
    var countryData=JSON.parse(this.responseText);
    var filterdArray=countryData.filter((ele)=>{
        return ele.population < 200000
    })
    console.log(filterdArray)

    
}
//print the lesser population using filter function 
var request1=new XMLHttpRequest();
request1.open('GET', 'https://restcountries.com/v3.1/all');
request1.send();
request1.onload= function print() {
    var countryData=JSON.parse(this.responseText);
    var filterdArray=countryData.forEach(element => {
          console.log(element.name);
          console.log(element.capital);
         console.log(element.flag);
    });
    
}

// Print the total population of countries using reduce function
var request1=new XMLHttpRequest();
request1.open('GET', 'https://restcountries.com/v3.1/all');
request1.send();
request1.onload= function print() {
    var countryData=JSON.parse(this.responseText);
    var filterdArray=countryData.reduce((population,element)=>{
               return population+element.population
    },0)
     console.log(filterdArray);   
    
}
// q5)Print the country which uses US Dollars as currency.
var request1=new XMLHttpRequest();
request1.open('GET', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');
request1.send();
request1.onload= function print() {
    var countryData=JSON.parse(this.responseText);
    var filterdArray=countryData.filter((ele)=>{
        return ele.currencies[0].code==="USD";
    })
    console.log(filterdArray);
 
}

