#include "../include/header.h"
// Function to display records from the 'student' table
void displayTopics( MYSQL *conn) {
    MYSQL_RES *res;
    MYSQL_ROW row;

    // Execute SQL query
    if (mysql_query(conn, "SELECT * FROM students")) {
        fprintf(stderr, "SELECT * FROM students failed. Error: %s\n", mysql_error(conn));
        return;
    }

    // Store the result set
    res = mysql_store_result(conn);
    if (res == NULL) {
        fprintf(stderr, "mysql_store_result() failed. Error: %s\n", mysql_error(conn));
        return;
    }

    // Fetch and display each row
    while ((row = mysql_fetch_row(res)) != NULL) {
        printf("ID: %s, First Name: %s, Last Name: %s,Email Id:%s ,Mobile No.: %d\n", row[0], row[1], row[2],row[3], atoi(row[4]));
    }

    // Clean up
    mysql_free_result(res);
}
