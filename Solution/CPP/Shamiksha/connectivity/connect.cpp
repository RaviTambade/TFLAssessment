#include <iostream>
#include <mysql.h> 
#include <cstdlib>  

using namespace std;

int main() {
    MYSQL* conn;

    conn = mysql_init(NULL);
    if (conn == NULL) {
        cout << "mysql_init() failed" << endl;
        return 1;
    }

    if (mysql_real_connect(conn, "localhost", "root", "P@ssw0rd", "assessmentdb", 0, NULL, 0) == NULL) {
        cout << "Connection failed: " << mysql_error(conn) << endl;
        mysql_close(conn);
        return 1;
    }

    cout << "Connected to the database successfully!" << endl;

    mysql_close(conn);
    return 0;
}