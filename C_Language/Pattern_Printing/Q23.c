#include <stdio.h>

int main()
{
    for (int i=0;i<=5;i++){
        int count=0;
        for(int j=0;j<=5;j++){

        if(j>i){
        printf("%c ",'A'+count);
        count++;}

        else{
        printf("  ");
        }
        }
        printf("\n");
    }
    return 0;
}