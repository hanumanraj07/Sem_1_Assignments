 #include <stdio.h>
 int main(){

    int n=5;
    int m=7;
 
 for (int i=1; i<=n;i++){
        for (int j=1; j<=m;j++)
        if(i==1 || j== 1 || i==n || j==m)
        printf("%d",j);
        else
        printf(" ");
        printf("\n");
    }

    return 0;
}