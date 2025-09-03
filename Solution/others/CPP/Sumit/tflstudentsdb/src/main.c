#include "..\include\header.h"

int main() {

    int choice = 0;
    int totalstudent;
    MYSQL* conn=  initDB();
   
        while (choice!= 5){
            printf("\nenter your choice ");
            printf("\n1.addrecord ");
            printf("\n2.displayrecord ");
            printf("\n3.update ");
            printf("\n4.delete ");
            printf("\n5.exit ");
            scanf("%d",&choice);

                

            switch (choice)
            {
                case 1 :{
                    printf("total number of student ");
                    scanf("%d",&totalstudent); 

                        struct student data[totalstudent];
                    for (int i = 0; i<totalstudent; i++){
                    addrecord(&data[i],conn);
                    }
                }
                break;

                case 2:
                    displayTopics(conn);
                    break;
                
            /*  case 3 :
                    update (ptrstudent->id, conn);
                    break;*/
                
                case 4: {
                    int id;
                printf(" enter id :");
                scanf("%d", &id);
                
                    deleterecord(id, conn);
                    break;
                }

                case 5 : 
                        return 0 ;
                        break ;
                
                default:
                    break;
            }
        }
    closeDB(conn);
    return 0;
}


/* gcc -Iinclude -c .\src\connection.c -o ./build/connection.o -I "C:\Program Files\MySQL\MySQL Server 8.0\include" -L "C:\Program Files\MySQL\MySQL Server 8.0\lib" -l libmysql
 gcc -Iinclude -c .\src\addrecord.c -o ./build/addrecord.o -I "C:\Program Files\MySQL\MySQL Server 8.0\include" -L "C:\Program Files\MySQL\MySQL Server 8.0\lib" -l libmysql
 gcc -Iinclude -c .\src\delete.c -o ./build/delete.o -I "C:\Program Files\MySQL\MySQL Server 8.0\include" -L "C:\Program Files\MySQL\MySQL Server 8.0\lib" -l libmysql
 gcc -Iinclude -c .\src\display.c -o ./build/display.o -I "C:\Program Files\MySQL\MySQL Server 8.0\include" -L "C:\Program Files\MySQL\MySQL Server 8.0\lib" -l libmysql
 gcc -Iinclude -c .\src\main.c -o ./build/main.o -I "C:\Program Files\MySQL\MySQL Server 8.0\include" -L "C:\Program Files\MySQL\MySQL Server 8.0\lib" -l libmysql
 gcc -Iinclude -c .\src\update.c -o ./build/update.o -I "C:\Program Files\MySQL\MySQL Server 8.0\include" -L "C:\Program Files\MySQL\MySQL Server 8.0\lib" -l libmysql
 gcc addrecord.o connection.o delete.o display.o main.o -o db.exe -I "C:\Program Files\MySQL\MySQL Server 8.0\include" -L "C:\Program Files\MySQL\MySQL Server 8.0\lib" -l libmysql
 */