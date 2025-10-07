#include <stdio.h>

int main() {
    int n=5;
    

    for (int i = 1; i <= n; i++) {                 
        for (int s = 1; s <= n - i; s++) {         
            printf(" ");
        }
        for (int k = 1; k <= 2 * i - 1; k++) {     
            if (k == 1 || k == 2 * i - 1 || i == n)
                printf("*");
            else
                printf(" ");
        }
        printf("\n");
    }

    return 0;
}
