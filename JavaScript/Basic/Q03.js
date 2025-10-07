var income= 2500000;
var tax;

if (income>=0 && income<=250000)
console.log("No Tax");

else if (income>250000 && income <=500000)
console.log("You have to pay 5% tax of your income which is $"+income*0.05);

else if (income>500000 && income <=1000000)
console.log("You have to pay 20% tax of your income which is $"+income*0.2);

else if (income > 1000000)
console.log("You have to pay 30% tax of your income which is $"+income*0.3);

else { console.log("invalid input");}
