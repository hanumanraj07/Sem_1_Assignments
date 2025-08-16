#include <stdio.h>
int main (){
    int b;
    scanf("%d",&b);
    int c=1;

    for (int a=1; a<=b; a++){
         c=a*c;
         printf("%d\n",c);
    }
    
    return 0;
}