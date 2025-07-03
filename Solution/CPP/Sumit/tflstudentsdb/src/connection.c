#include"../include/header.h"


// Function to initialize and connect
MYSQL* initDB() {
    MYSQL *conn;
    conn= mysql_init(NULL);
    if (conn == NULL) {
        fprintf(stderr, "mysql_init() failed\n");
        exit(EXIT_FAILURE);
    }

    if (mysql_real_connect(conn, "localhost", "root", "root123", "tflstudentdb", 0, NULL, 0) == NULL) {
        fprintf(stderr, "mysql_real_connect() failed\n");
        mysql_close(conn);
        exit(EXIT_FAILURE);
    }

    printf("Connected successfully!\n");
    return conn;
}

// Function to clean up
void closeDB(MYSQL *conn) {
    mysql_close(conn);
}
