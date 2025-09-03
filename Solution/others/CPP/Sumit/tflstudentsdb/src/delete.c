#include "..\include\header.h"

// Function to delete a record from the 'student' table
int deleterecord(int id, MYSQL *conn) {
    char query[256];
    sprintf(query, "DELETE FROM students WHERE id = %d", id);

    // Execute the delete query
    if (mysql_query(conn, query)) {
        fprintf(stderr, "DELETE FROM students failed. Error: %s\n", mysql_error(conn));
        return -1; // Return -1 on failure
    }

    printf("Record with ID %d deleted successfully.\n", id);
    return 0 ; // Return 0 on success
}