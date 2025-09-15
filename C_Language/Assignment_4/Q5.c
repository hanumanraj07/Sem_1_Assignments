#include <stdio.h>
int main ()
{
   /* Write a program to input two floats representing coordinates (x, y) and determine the distance from origin:

Distance <= 5: print "Close"
Distance between 5 and 15: print "Medium"
Else: print "Far" Use if–else–if (use sqrt() if available, or approximate with conditions).*/
     float a;
     float b;
     scanf("%f %f",&a,&b);
     float d=((a*a)+(b*b));
     if (d<=5){
printf("close");
     }
     else if (d>5 && d<=15){
        printf("medium");
     }
     else {
        printf("far %f",d);
     }




    return 0;
}