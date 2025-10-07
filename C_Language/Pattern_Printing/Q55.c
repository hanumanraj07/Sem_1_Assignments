#include <stdio.h>
int main () {
    int n=4;
    for (int i = 1; i < 2*n; i++)
    {
       for (int j = 1; j <= 2*n; j++)
       {
        if(j<=i && i+j>5) printf("*");
        else printf(" ");
       }
       printf("\n");
    }
    

 return 0;
}