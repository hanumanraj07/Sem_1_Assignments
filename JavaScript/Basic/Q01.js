//q1

var sub1;
sub1 = 82;
var sub2;
sub2 = 100;
var sub3;
sub3 = 90;
var sub4;
sub4 = 90;
var sub5;
sub5 = 94;

var percentage;

percentage = (sub1 + sub2 + sub3 + sub4 + sub5)/5;
console.log("Your percentage is "+percentage);



if(percentage >= 90)
{
    console.log("Grade A");
}
else if(percentage >80 && percentage<90)
{
    console.log("Grade B");
}
else if(percentage >=70 && percentage<80)
{
    console.log("Grade C");
}
else if(percentage >60 && percentage<70)
{
    console.log("Grade D");
}
else if(percentage <= 60)
{
    console.log("Fail");
}