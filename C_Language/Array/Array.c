#include <stdio.h>

int main()
{ 
    char array[] = {'a','b','c'};
    int int_array[] = {1,2,3};
    float float_array [] = {123.1,123.2,342.3};


    for (int i=0; i<3; i++){
    printf("array[%d] : %c \n",i,array[i]);
    }

     for (int i=0; i<3; i++){
    printf("int_array[%d] : %d \n",i,int_array[i]);
    }

     for (int i=0; i<3; i++){
    printf("float_array[%d] : %.1f \n",i,float_array[i]);
    }

    return 0;
}