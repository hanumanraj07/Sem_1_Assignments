#include <stdio.h>
int main ()
{
    int a;
    scanf("%d",&a);
    int b=1;
    int c=1;
    while (b<=a){
        c=c*b;
        b++;

        
    }
    
    printf("%d\n",c);


    return 0;
}