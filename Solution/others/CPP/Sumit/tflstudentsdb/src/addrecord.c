#include "../include/header.h"

int addrecord(struct student *ptrstudent, MYSQL *conn) {
    printf("Enter your ID:\n");
    scanf("%d", &ptrstudent->id);

    printf("Enter your first name:\n");
    scanf("%s", ptrstudent->firstname);

    printf("Enter your last name:\n");
    scanf("%9s", ptrstudent->lastname);

    printf("Enter your email:\n");
    scanf("%s", ptrstudent->emailID);

    printf("Enter your mobile number:\n");
    scanf("%s", ptrstudent->mobileno);

    char query[512];
    snprintf(query, sizeof(query),
        "INSERT INTO students (id, firstname, lastname, Email, mobile) "
        "VALUES (%d, '%s', '%s', '%s', '%s')",
        ptrstudent->id,
        ptrstudent->firstname,
        ptrstudent->lastname,
        ptrstudent->emailID,
        ptrstudent->mobileno
    );

    if (mysql_query(conn, query)) {
        printf("Insert failed. Error: %s\n", mysql_error(conn));
        return 0; // Failure
    }

    printf("Record added successfully.\n");
    return 1; // Success
}