#include <stdio.h>

int main()
{   
    for (int i=1;i<=5;i++){
        int count=0;
        for(int j=1;j<=2*i-1;j++)
        if(j<=i){
        count++;
        printf("%d ",count);
        }
        else{
        count--;
        printf("%d ",count);
        }
        printf("\n");
    }
    
    return 0;
}