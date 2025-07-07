
#include<data.h>
int acceptdata(struct Student * ptrstudent){
    printf("\n\nenter name of student : ");
    scanf("%s",& ptrstudent->name);
    printf("\nenter roll no of student :");
    scanf("%d",&ptrstudent->rollno);
    printf("\nenter age of student : ");
    scanf("%d",&ptrstudent->age);
    printf("\nenter std of student : ");
    scanf("%d",&ptrstudent->std);
    printf("\nenter division of student : ");
    scanf("%s",&ptrstudent->div);
}
