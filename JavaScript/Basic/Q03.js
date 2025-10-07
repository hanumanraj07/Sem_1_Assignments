//q3


var income;
income = 1100000;

var tax = 1;

if(income <=250000)
{
    console.log("No Tax");
}
else if(income > 250000 && income <= 500000)
{
    console.log("Pay 5% Tax");
    tax = (income * 0.05);
    console.log("Total Tax to Pay is : "+tax);
}
else if(income > 500000 && income <= 1000000)
{
    console.log("Pay 20% Tax");
    tax = (income * 0.2);
    console.log("Total Tax to Pay is : "+tax);
}
else if(income > 1000000)
{
    console.log("Pay 30% Tax");
    tax = (income * 0.3);
    console.log("Total Tax to Pay is : "+tax);
}