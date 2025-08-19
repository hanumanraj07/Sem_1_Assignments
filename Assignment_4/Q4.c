#include <stdio.h>

int main()
{
    //Q4 Write a program to input an integer (assumed between 100 and 999) and check 
    //if the sum of its digits is divisible by the product of its digits. Handle 
    //zero digits carefully to avoid division by zero.

   int a;
   int d1,d2,d3,sum,pro;
   scanf("%d",&a);
   d1=a/100;
   d2=(a/10)%10;
   d3=a%10;
   sum=d1+d2+d3;
   pro=d1*d2*d3;
   if(a>=100 && a<1000)
   {if (sum%pro==0)
   {
       printf("yes");
   }else {
       printf("no");
   }
       
   }
   else {
       printf("invalid");
   }

    return 0;
}