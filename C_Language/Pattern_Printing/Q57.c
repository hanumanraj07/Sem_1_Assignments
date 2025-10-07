#include <stdio.h>
int main () {
    int n=5;
    for (int i = 1; i <= n; i++)
    {
       for (int j = 1; j <= n; j++)
       {
        int top = i-1;
        int left = j-1;
        int right = n-j;
        int bottom = n-i;
        int min = bottom;
        if(top<min) min=top;
        if(left<min) min=left;
        if(right<min) min=right;
        printf("%d",min+1);
       }
       printf("\n");
    }
}