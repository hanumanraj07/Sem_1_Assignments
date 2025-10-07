#include <stdio.h>

int main()
{

    int n=6\
    
    ;
     int count=n*(n+1)/2;
    for (int i=1;i<=n;i++){
        
        for(int j=1; j<=i; j++){
        printf("%2d ",count);
        count --;
        }
        printf("\n");
    }
    return 0;
}