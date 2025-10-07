var s1=90;
var s2=91;
var s3=75;
var s4=74;
var s5=39;

var total=s1+s2+s3+s4+s5;
var pers=total/5;

if (pers>=90)
console.log("Grade A");
else if (pers>=80 && pers<=89)
console.log("Grade B");
else if (pers>=70 && pers<=79)
console.log("Grade C");
else if (pers>=60 && pers<=69)
console.log("Grade D");
else 
console.log("Fail");
console.log("Total marks",total);
console.log("Persentage",pers);