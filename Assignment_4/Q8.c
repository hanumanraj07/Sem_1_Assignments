#include <stdio.h>
int main ()
{  /*Write a program to input five integers representing test scores (0–100 each), calculate average, then:

Average >= 90: print "Outstanding"
Average >= 70 and all scores > 50: print "Consistent"
Average >= 50: print "Passable"
Else: print "Needs Improvement"*/

int a,b,c,d,e,A;
scanf("%d %d %d %d %d",&a,&b,&c,&d,&e);
A=(a+b+c+d+e)/5;
if (A>=90){
    printf("outstanding");
}
else if (A>=70 && A>50){
    printf("consistent");
}
else if (A>=50){
    printf("passable");
}
else{
    printf("needs Improvement");
}




    return 0;
}
