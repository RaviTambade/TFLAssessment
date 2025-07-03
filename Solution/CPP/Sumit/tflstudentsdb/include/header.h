#ifndef HEADER_H
#define HEADER_H

#include<stdio.h>
#include<stdlib.h>
#include <string.h>
#include<mysql.h>



struct student
{
    int id ;
    char firstname[10] ;
    char lastname[10] ;
    char emailID[50];
    char mobileno[10] ;
};

int addrecord(struct student *ptrstudent, MYSQL *conn);
MYSQL* initDB();
void displayTopics( MYSQL *conn) ;
void closeDB(MYSQL *conn) ;
int deleterecord(int id, MYSQL *conn);
#endif