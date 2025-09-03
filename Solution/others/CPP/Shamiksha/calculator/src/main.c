
#include"../include/header.h"
int main(){
    float num1, num2;
    int option ;
    float result ;
    while (1){
        printf("\nenter your two numbers \n");
        scanf("%f%f",&num1,&num2);
        printf("\nenter which operation do you want to perform\n");
        printf("1.addition \n");
        printf("2.subtraction\n");
        printf("3.multiplication\n");
        printf("4.division\n");
        printf("5.exit \n ");
        printf("your choice : ");
        scanf("%d",&option);
        switch (option)
        {
        case 1 :
            result= addition(num1, num2);
            break;
        case 2 :
            result= subtraction(num1, num2);
            break;
        case 3 :
            result= multiplication(num1, num2);
            break;
        case 4 :
            result= division(num1, num2);
            break;
        case 5 :
            return 0;
            break;
        default:
            printf("\ninvalid option ");
            break;
        }
    printf("\nresult  : %f", result);
    }
}
//gcc main.c addition.c subtraction.c multiplication.c division.c -o main.exe