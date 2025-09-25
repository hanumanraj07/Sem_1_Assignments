#include <stdio.h>

int main()
{
    for (int i=0;i<5;i++){
        for(int j=0;j<2*5-1;j++)
        if(j<5 && i<=j)
        printf("*");
        else if(j>=5 && (i+j)<2*5-1)
        printf("*");
        else
        printf(" ");
        printf("\n");
    }
    return 0;
}