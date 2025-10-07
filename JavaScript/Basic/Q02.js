var unit = 310;
var charge;

if (unit <=100 && unit >=0){
    charge =unit*5;
    console.log("Total Charge is $"+charge);}
else if (unit >100 && unit <=300){
    charge =(unit-100)*7+500;
    console.log("Total Charge is $"+charge);}
else if (unit >300){
    charge =(unit-300)*10+1900;
    console.log("Total Charge is $"+charge);}
else {console.log("Invalid Input");}
