
#include<stdio.h>
#include <string.h>
#include <stdlib.h>
   
   struct Customer 
    {
        char name[50];
        char village[50];
        int account_number;
        int ifsc_code;
        int balance;
    };
    void coustmer_data();
    void acceptData(struct Customer *   cust);
    void printData(struct Customer *  pcustomer );
    void operation(struct Customer *  pcustomer );
