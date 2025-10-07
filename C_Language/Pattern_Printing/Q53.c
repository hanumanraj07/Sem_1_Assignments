#include <stdio.h>

int main() {
    int n = 4;
    int num = 1; 

    for (int i = 1; i <= n; i++) { 
        
        for (int j = 1; j <= n - i; j++) {
            printf("   "); 
        }

        
        for (int j = 1; j <= 2 * i - 1; j++) {
            printf("%3d ", num++);
        }

        printf("\n");
    }

    return 0;
}
