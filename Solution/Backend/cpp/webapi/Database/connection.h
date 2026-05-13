#ifndef CONNECTION_H
#define CONNECTION_H
#include <iostream>
// #define _HAS_STD_BYTE 0   
// #include <mysql.h>
#define byte win_byte_override
#include <mysql.h>
#undef byte
#include <string>

class dbmanager {
    private:
        MYSQL* conn;
    public : 
    dbmanager() {
        conn = mysql_init(NULL);
        if (conn==NULL){
            cerr<<"mysql_init() failed "<<endl ;
            exit(EXIT_FAILURE);
        }

        if (mysql_real_connect(conn, "localhost","root", "root123","Employee",0,NULL,0 )==NULL){
        cerr<<"mysql real connect failed\n";
        mysql_close(conn);
        exit(EXIT_FAILURE);
    }
}
    MYSQL* getConnection(){
        return conn;
    }
     ~dbmanager() {
        mysql_close(conn);
    }
    
};
#endif
        
