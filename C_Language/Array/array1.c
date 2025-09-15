#include <stdio.h>

int main()
{ 
    int int_array[] = {10,15,18,34,29};
    int sum;
     for (int i=0; i<5; i++){
        
        if (int_array[i]%2==0){
        sum = sum+int_array[i];}
   
     }
    
    printf("sum of even %d \n",sum);
    return 0;
}