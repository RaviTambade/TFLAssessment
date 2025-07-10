#include <iostream>
#include <string>
#include <mysql.h>

using namespace std ;

class dbmanager
{
private:
    MYSQL *conn;
public:
    dbmanager(){
    conn = mysql_init(NULL);
    if (conn == NULL)
    {
        cerr<<"mysql_init() failed\n";
        exit(EXIT_FAILURE);
    }
    if (mysql_real_connect(conn, "localhost","root", "root123","assessmentdb",0,NULL,0 )==NULL)
    {
        cerr<<"mysql real connect failed\n";
        mysql_close(conn);
        exit(EXIT_FAILURE);
    }
    
    }
    ~dbmanager()
    {
         mysql_close(conn);
    }

void displayquestions(){
    MYSQL_RES *res ;
    MYSQL_ROW row ;

    if (mysql_query(conn,"SELECT * FROM questionbank"))
        {
            cerr<<" SELECT * FROM assessmentdb.questionbank failed .Error "<< mysql_error(conn)<<"\n";
        }

     res = mysql_store_result(conn);
    if (res == NULL) 
        {
            cerr << "mysql_store_result() failed. Error: " << mysql_error(conn) << "\n";
            return;
        }
    while ((row = mysql_fetch_row(res))!= NULL)
        {
           cout << "ID: " << row[0]
                << ", Subject ID: " << row[1]
                << ", Title: " << row[2]
                << ", A: " << row[3]
                << ", B: " << row[4]
                << ", C: " << row[5]
                << ", D: " << row[6]
                << ", Answer Key: " << row[7]
                << ", Evaluation Criteria ID: " << row[8] << "\n";

        }
     mysql_free_result(res);
    }
bool insertquestions( int id ,int subjectid , string& title, string& a , string& b, string& c, string& d , string& answerkey, int evaluationcriteriaid)
    {
        char query[512];
        sprintf(query, "INSERT INTO questionbank ( id ,subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) VALUES (%d ,%d, '%s', '%s', '%s', '%s', '%s', '%s', %d)",
         id ,subjectid, title.c_str(), a.c_str(), b.c_str(), c.c_str(), d.c_str(), answerkey.c_str(), evaluationcriteriaid);

        if (mysql_query(conn, query))
        {
            cerr << "Insert query failed. Error: " << mysql_error(conn) << "\n";
            return false;
        }
        return true;
}
bool update(int id,
            int subjectid , 
            string& title, 
            string& a , 
            string& b, 
            string& c, 
            string& d , 
            string& answerkey, 
            int evaluationcriteriaid)
    {
      char query[512];
      snprintf(query,sizeof(query), "UPDATE questionbank SET id=%d, subjectid=%d, title='%s', a='%s', b='%s', c='%s', d='%s', answerkey='%s', evaluationcriteriaid=%d WHERE id=%d",
              id, subjectid, title.c_str(), a.c_str(), b.c_str(), c.c_str(), d.c_str(), answerkey.c_str(), evaluationcriteriaid, id);
        if (mysql_query(conn, query))
        {
            cerr << "Update query failed. Error: " << mysql_error(conn) << "\n";
            return false;
        }
        return true;

    }

};

int main()
{
    dbmanager *ptrdbmanager=NULL;
    ptrdbmanager = new dbmanager();
    int choice=0; 
    while(1)
    {
        cout<<"==========================";
        cout<<"enter your choice";
        cout<<"\n1. Insert Question\n";
        cout<<"2. Display Questions\n";
        cout<<"3. Update Question\n";
        cout<<"4. Exit\n";
        cin>>choice;


        switch (choice) 
        {

        case 1:
            {
                int id, subjectid, evaluationcriteriaid;
                string title, a, b, c, d, answerkey;

                cout << "Enter ID: ";
                cin >> id;
                cout << "Enter Subject ID: ";
                cin >> subjectid;
                cout << "Enter Question Title: ";
                cin.ignore();
                getline(cin, title);
                cout << "Enter Option A: ";
                cin.ignore();
                getline(cin, a);
                cout << "Enter Option B: ";
                cin.ignore();
                getline(cin, b);
                cout << "Enter Option C: ";
                cin.ignore();
                getline(cin, c);
                cout << "Enter Option D: ";
                cin.ignore();
                getline(cin, d);
                cout << "Enter Answer Key: ";
                cin.ignore();
                getline(cin, answerkey);
                cout << "Enter Evaluation Criteria ID: ";
                cin >> evaluationcriteriaid;

                ptrdbmanager->insertquestions(id, subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid);
            }
            break;
        case 2:
            ptrdbmanager->displayquestions();
            break;
        case 3:
            {
                int id, subjectid, evaluationcriteriaid;
                string title, a, b, c, d, answerkey;

                cout << "Enter ID of the question to update: ";
                cin >> id;
                cout << "Enter New Subject ID: ";
                cin >> subjectid;
                cout << "Enter New Question Title: ";
                cin.ignore();
                getline(cin, title);
                cout << "Enter New Option A: ";
                cin.ignore();
                getline(cin, a);
                cout << "Enter New Option B: ";
                cin.ignore();
                getline(cin, b);
                cout << "Enter New Option C: ";
                cin.ignore();
                getline(cin, c);
                cout << "Enter New Option D: ";
                cin.ignore();
                getline(cin, d);
                cout << "Enter New Answer Key: ";
                cin.ignore();
                getline(cin, answerkey);
                cout << "Enter New Evaluation Criteria ID: ";
                cin >> evaluationcriteriaid;

                ptrdbmanager->update(id, subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid);
            }
            break;
        case 4:
            delete ptrdbmanager;
            cout << "Exiting the program.\n";
            return 0;
        }
    }
}


//g++ questionbank.cpp -o db.exe -I "C:\Program Files\MySQL\MySQL Server 8.0\include" -L "C:\Program Files\MySQL\MySQL Server 8.0\lib" -lmysql
