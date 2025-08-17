#include <stdio.h>
int main ()
{
    //Q2Write a program to input a float representing the pH value (0 to 14) and 
  //categorize it: acidic if <7, neutral if ==7, basic if >7 but <=10, strongly 
  //basic if >10. Use if-else-if.

   int a;
   scanf("%d",&a);
   if (a>=0 && a<=14)
   {
   if (a>=0 && a<7){
    printf("acidic");
   }
   else if (a==7){
    printf("neutral");
   }
   else if (a>7 && a<=10)
   {
    printf("basic");
   }
   else {
    printf("strongly basic");
   }
   }
   else {
    printf ("invalid");
   }
return 0;

}