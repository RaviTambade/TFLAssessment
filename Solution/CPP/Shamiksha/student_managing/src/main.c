
#include"../include/data.h"
int totalstudent;
int main(){
    printf("total number of student ");
    scanf("%d",&totalstudent); 

    struct Student data[totalstudent];
    int option;
    do
    {
        printf("\nwhich operation do you want to perform");
        
        printf("\n1.add record to dataset");
        printf("\n2.display data of student");
        printf("\n3.update and modify the of an existing record");
        printf("\n4.delet : remove a record from dataset");
        printf("\n5.exit \n ");
        scanf("%d", &option); 
       switch (option){
        case 1 :  //add record to dataset
                 for (int i = 0; i < totalstudent; i++){
               acceptdata(&data[i]);
         }
            break;
       
        case 2 :   //display data of student
                int choice;
                printf("enter your choice");
                printf("\n1.display all data");
                printf("\n2.display data of one student");
                scanf("%d",&choice);
                switch (choice){
                    case 1 :
                    for (int i = 0; i < totalstudent; i++){
                        printf("\n\nsr.no:%d",i+1);
                        displaydata(data[i]);
                    }
                    break;
                    
                     case 2 : 
                     int srno;
                     printf("Enter the sr.no number of the student whose data you want to display:");
                     scanf("%d",&srno);
                      printf("\n\nsr.no:%d",srno);
                     displaydata(data[srno-1]);
                     break;
                
                    default:
                    printf("invalid  choice ");
                    break;
                }
        break;
        
        case 3: //update and modify the of an existing record
           int srno;
            printf("Enter the sr.no number of the student whose data you want to change:");
            scanf("%d",&srno);
            acceptdata(&data[srno-1]);
            break;
        case 4 : //4.delet : remove a record from dataset
        
        printf("Enter the sr.no number of the student whose data you want to delete:");
        scanf("%d",&srno);
        for (int i = srno-1; i < totalstudent; i++){
            data[i]=data[i+1];
        }
        totalstudent--;
        printf("data deleted successfully");
        
            break;
        default: 
            break;
        }

    } while (option!=5);
    
 return 0;
}

//g++ -Iinclude -c ./src/acceptdata.c -o ./build/acceptdata.o
//g++ -Iinclude -c ./src/displaydata.c -o ./build/displaydata.o
//g++ -Iinclude -c ./src/main.c -o ./build/main.o
//g++ ./build/main.o ./build/acceptdata.o ./build/displaydata.o -o ./build/output.exe
