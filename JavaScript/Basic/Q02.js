


var unit;
unit = 305;
var bill;
var price;

if(unit >= 0 && unit <= 100)
{
    price = 5;
    bill = price * unit;
    console.log("Your Bill is : "+bill);
}
else if(unit > 100 && unit <= 300)
{
    price = 7;
    bill = 7 * (unit-100) + 500;
    console.log("Your Bill is : "+bill);
}
else if(unit >= 300)
{ 
    price = 10;
    bill = price * (unit - 300) + 500 + 1400;
    console.log("Your Bill is : "+bill);
}