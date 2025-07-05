
#include"../include/data.h"

//Pointer is variable which stores address of memory location
//normal variable stored actual value inside

void acceptData( struct Customer *  cust )
{
    // Data input into local variable
    char name[20];
    printf( "\n  Enter Name : ");
    scanf("%s",name);

    char village[20];
    printf( "\n  Enter Village : ");
    scanf("%s",&village);

    int acctno;
    printf( "\n  Enter Account Number : ");
    scanf("%d",&acctno);


    int ifscno;
    printf( "\n  Enter Branch IIFSC Code : ");
    scanf("%d",&ifscno);

    int balance;
    printf( "\n  Enter Initial Balance : ");
    scanf("%d",&balance);

    //copy local variables data into structure element varialbles
    strcpy(cust->name, name);
    strcpy(cust->village, village);
    cust->account_number=acctno; 
    cust->balance=balance;
    cust->ifsc_code=ifscno;
}

void printData(struct Customer *  pcustomer ){
     printf("\n Name:%s   Balance:%d  Village: %s",
             pcustomer->name,  pcustomer->account_number,pcustomer->village);
}
