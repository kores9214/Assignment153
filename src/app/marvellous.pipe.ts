import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellous'
})
export class MarvellousPipe implements PipeTransform {

  /*transform(value: any, ...args): any 
  {
    let str = value;

    if(args[0] == "Marvellous")
    {
      str += "  Educating for better tomorrow" 
    }
    console.log(args[0]+" "+args[1]);
    return str;
  }*/
  transform(value: any, Param: string): string
  {
    var flag=true;
    var str;
    if(Param == 'Prime')
    {
      for(var i = 2; i <=value/2; i++) {
        if(value%i==0){
          flag=false;
          break;
        }
      }
      if(flag==true){
        console.log("It is prime number");
        str="It is prime number";
      }else{
        console.log("It is not prime number");
        str="It is not prime number";
      }
    }
    if(Param == 'Even')
    {
      // Logic to check whether value is Even or not.
      if(value%2==0){
        console.log(" It is Even number");
        str="It is Even number";
      }
    }
    if(Param == 'Odd')
    {
      // Logic to check whether value is Even or not.
      if(value%2!=0){
        console.log("Odd");
        str="It is Odd number";
      }
    }
    if(Param == 'Perfect')
    {
      var remainder:number;
      var result:number;
      result=0;
      for(var i=1;i<=(value-1);i=i+1){
        remainder = Math.floor(value%i);
        console.log(remainder);
        if(remainder==0){
          result = result+i;
        }
        console.log(result+"  "+value);
      }
      if(result == value){
        str=value + " is an Perfect number.";
        console.log(value + " is an Perfect number.");
      }else{
        str=value + " is not an Perfect number."
        console.log(value + " is not an Perfect number.");
      }
    }
    return str;
  }

}
