
#include"../include/data.h"
#include <stdbool.h>
 
void showMenu(){
        printf("\n\n1.check balance");
        printf("\n 2.whithdraw amount");
        printf("\n 3.fast cash");
        printf("\n 4.change pin");
        printf("\n 5.current balance");
        printf("\n 6.exit");
}

bool validate(int pinNumber){
    bool status=false;
    if(pinNumber ==1234){
        status=true; 
    }
      return status;
}

void operation(struct Customer *pcustomer){
    printf("\nWelcome to HDFC Bank\n");
    printf("\n Enter your pin for banking");
    int pinNumber;
    scanf( "%d",&pinNumber);
    bool status=validate(pinNumber);
    if(status){
        printf("\n login successful \n ");
        showMenu();
        int choice;
        printf("\nEnter your choice for Banking operation :");
        scanf("%d", &choice);
        while(choice < 6){
            switch(choice){
                case 1: // case for showing balance
                {   
                    printf("\n your balance:%d",pcustomer->balance);
                }
                break;

                case 2:  //case for withdraw 
                {
                    printf("\nenter your withdrawing amount");
                    int amount;
                    scanf("%d",&amount);
                    if (pcustomer->balance>=amount){
                            printf("\n Withdrawing process start");
                            pcustomer->balance=(pcustomer->balance)-amount;
                              printf("\n Amount is successfully withdrawn\n");
                    }
                    else{
                            printf("\n Insufficient balance");
                    }
                } 
                break;

                case 3: //fast cash withdrawal
                {  
                    int amount;
                    printf("\t100 \t\t 500\n\n\t200 \t\t1000\n\t2000 \t\t5000 ");
                    printf("\n Select your withdrawing money");
                    scanf("%d",&amount);
                    printf("\n rupees %d is withdrawing from account", amount);
                    pcustomer->balance=pcustomer->balance-amount;
                    printf( "Current Balance is now : %d", pcustomer->balance);
                }    
                break;

                case 4:  //Change Pin
                {   
                    printf("\nenter your previous passward");
                    int pinNumber;
                    scanf("%d",&pinNumber);
                    if(pinNumber==1234)
                    {
                        printf("\nenter your new passward");
                        scanf("%d",&pinNumber);
                        printf("your passward update successfully");
                    }
                    else
                    {
                        printf("\nwrong passward");
                    }
                }
                
                break;

                case 5: //current balance"
                {
                    int amount;
                    //int current_balance;
                  // pcustomer->balance=pcustomer->balance-amount;
                    printf("\ncurrent balance:%d", pcustomer->balance);
                }    
                break;

                default:
                printf("invalid input");
                break;
            }
            printf("\nEnter your choice :");
            scanf("%d", &choice);
        }
    }
    else {
        printf("\n invalid user");
    }
}
 
