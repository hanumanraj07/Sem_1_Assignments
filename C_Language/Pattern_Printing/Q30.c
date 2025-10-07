#include <stdio.h>

int main() {
    int n = 5;
    
    for (int i=1; i<2*n; i++){
        int count = 65;
        for(int j=1; j<2*n; j++){
         if(i+j<= n|| i-j>=n||j-i>=n||i+j>=3*n){
         printf(" ");
         }
         else if(j<n){
         printf("%c",count++);
         }
         else{
            printf("%c",count--);
         }
        }
            printf("\n");

         
    
    }
    return 0;
}