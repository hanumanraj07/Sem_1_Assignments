#include <stdio.h>

int main()
{
    int int_array[10] = {10,15,18,34,29};

    int num1 =10;
    int num2 =20;
    int_array[5]=30;
    int_array[6]=40;


    printf("%d \n",&int_array[0]);
    printf("%d \n",&int_array[1]);
    printf("%d \n",&int_array[2]);
    printf("%d \n",&int_array[3]);
    printf("%d \n",&int_array[4]);
    printf("%d \n",&int_array[5]);
    printf("%d \n",&int_array[6]);
    printf("%d \n",&num1);
    printf("%d \n",&num2);

    
    return 0;
}    