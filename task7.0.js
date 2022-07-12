console.log("Uber Prie Calculation");
class uber{
    constructor(vehiclemodel,km)
    {
    this.km=km;
    this.vehiclemodel=vehiclemodel
    }
}
 class uberprice extends uber
 {
    constructor(vehiclemodel,km){
        super(vehiclemodel,km)
  }
  pricedetail(){
    if (this.vehiclemodel==="suv") 
    {
        if (this.km>=50){
        console.log(`vehicle model is ${this.vehiclemodel}`)
        console.log(`kilometer is ${this.km}km`)
        console.log(`price is ${(this.km*10)}$`)     
        } 
        else 
        {
            console.log(`vehicle model is ${this.vehiclemodel}`)
            console.log(`kilometer is ${this.km}km`)
            console.log(`price is ${(this.km*13)}$`)
        }
    } else { 
        if (this.vehiclemodel==="hatchbag") 
        {
        if (this.km>=50)
        {
        console.log(`vehicle model is ${this.vehiclemodel}`)
        console.log(`kilometer is ${this.km}km`)
        console.log(`price is ${(this.km*7)}$`)  
        return 0; 
      } 
      else 
      {
        console.log(`vehicle model is ${this.vehiclemodel}`)
       console.log(`kilometer is ${this.km}km`)
       console.log(`price is ${(this.km*8)}$`)
       return 0;
      }
    }
     else 
     {
        if (this.vehiclemodel==="serdan")
        {
        if (this.km>=50)
        {
        console.log(`vehicle model is ${this.vehiclemodel}`)
        console.log(`kilometer is ${this.km}km`)
        console.log(`price is ${(this.km*9)}$`)
            
        } 
        else 
        {
        console.log(`vehicle model is ${this.vehiclemodel}`)
        console.log(`kilometer is ${this.km}km`)
        console.log(`price is ${(this.km*10)}$`)
        return 0;
        } 
        
        
    }
     
    
    }
  }
}
}
const r=new uberprice("serdan",50)
r.pricedetail();

