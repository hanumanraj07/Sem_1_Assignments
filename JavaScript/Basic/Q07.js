//q7


var percentage;

var sub1;
sub1 = 70;
var sub2;
sub2 = 90;
var sub3;
sub3 = 85;
var sub4;
sub4 = 100;
var sub5;
sub5 = 83;

percentage = (sub1+sub2+sub3+sub4+sub5)/5;
console.log(percentage);

var income;
income = 299999;

if(percentage >= 85 && income <300000)
{
    console.log("Full Scholarship");
}
else if(percentage >=70 && income<500000)
{
    console.log("Half Scholarship");
}
else
{
    console.log("Not Eligible For Scholarship");
}