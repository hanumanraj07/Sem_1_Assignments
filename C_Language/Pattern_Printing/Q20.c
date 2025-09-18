#include <stdio.h>

int main()
{
    int count = 0;
    for (int i = 1; i <= 6; i++)
    {
        for (int j = 0; j < i; j++)
        {

            printf("%c ", 'A' + count);
            count++;
        }

        printf("\n");
    }
    return 0;
}