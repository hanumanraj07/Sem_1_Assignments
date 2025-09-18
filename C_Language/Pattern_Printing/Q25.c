#include <stdio.h>

int main()
{
    for(int i=1;i<=5;i++){
        for(int j=0;j<i;j++)
        printf("%c ",'A'+j);
        int j=0;
        for (j=i-2;j>=0;j--)
        printf("%c ",'A'+j);
        printf("\n");
    }
    
    return 0;
}