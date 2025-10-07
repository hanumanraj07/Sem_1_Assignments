#include <stdio.h>
int main()
{
     for(int i=5;i>=1;i--){
        for (int j=5;j>=i;j--)
        printf("  ");
        for(int k=0;k<2*i-1;k++)
        printf("%c ",'A'+k);
        printf("\n");
    }

    return 0;
}