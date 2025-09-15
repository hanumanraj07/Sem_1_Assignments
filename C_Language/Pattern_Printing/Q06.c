#include <stdio.h>

int main()
{   
    for(int i=1;i<=4;i++){
        for(int j=0;j<4;j++){
            printf("%c ",'A'+j);
        }
        printf("\n");
    }
    return 0;
}