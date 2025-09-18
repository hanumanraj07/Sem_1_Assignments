#include <stdio.h>

int main()
{  
    for(int i=5;i>=1;i--){
        for(int j=5;j>=i;j--)
        printf(" ");
        for(int k=9;k>=2*(5-i)+1;k--)
        printf("*");
        printf("\n");
    }

    return 0;
}