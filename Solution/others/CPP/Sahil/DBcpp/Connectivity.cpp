#include <iostream>
#include <mysql.h>
using namespace std;

class DBManager {
private:
    MYSQL *conn;

public:
    int id;

    DBManager() {
        conn = mysql_init(NULL);
        if (conn == NULL) {
            cerr << "mysql_init() failed\n";
            exit(EXIT_FAILURE);
        }

        if (mysql_real_connect(conn, "localhost", "root", "password", "assessmentdb", 0, NULL, 0) == NULL) {
            cerr << "mysql_real_connect() failed\n";
            mysql_close(conn);
            exit(EXIT_FAILURE);
        }
    }

    ~DBManager() {
        mysql_close(conn);
    }

    void displayTopics() {
        MYSQL_RES *res;
        MYSQL_ROW row;

        if (mysql_query(conn, "SELECT * FROM questionbank")) {
            cerr << "SELECT * FROM questionbank failed. Error: " << mysql_error(conn) << "\n";
            return;
        }

        res = mysql_store_result(conn);
        if (res == NULL) {
            cerr << "mysql_store_result() failed. Error: " << mysql_error(conn) << "\n";
            return;
        }

        while ((row = mysql_fetch_row(res)) != NULL) {
            cout << "ID: " << row[0] << ", \nSUBJECT ID:  " << row[1] << ", \nTITLE: " << row[2]
                 << "\nOPTION A:  " << row[3] << "\nOPTION B:  " << row[4] << "\nOPTION C: " << row[5]
                 << "\nOPTION D:  " << row[6] << "\nANSWER KEY: " << row[7]
                 << "\nEVALUATION ID: " << row[8] << "\n\n";
        }
        mysql_free_result(res);
    }

    void displayQuestion(int id) {
        char query[256];
        snprintf(query, sizeof(query), "SELECT * FROM questionbank WHERE id=%d", id);

        if (mysql_query(conn, query)) {
            cerr << "SELECT * FROM questionbank failed. Error: " << mysql_error(conn) << "\n";
            return;
        }

        MYSQL_RES *result = mysql_store_result(conn);
        if (result == nullptr) {
            cerr << "mysql_store_result() failed.\n";
            return;
        }

        MYSQL_ROW row;
        int num_fields = mysql_num_fields(result);

        while ((row = mysql_fetch_row(result))) {
            for (int i = 0; i < num_fields; i++) {
                printf("%s\t", row[i] ? row[i] : "NULL");
            }
            printf("\n");
        }

        mysql_free_result(result);
    }

    bool insertTopic(int id, const string &subjectid, string &title, const string &a, const string &b,
                     const string &c, const string &d, const string &answerkey, const string &evaluationcriteriaid) {
        char query[512];
        snprintf(query, sizeof(query),
                 "INSERT INTO questionbank (id, subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid) "
                 "VALUES (%d, '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s')",
                 id, subjectid.c_str(), title.c_str(), a.c_str(), b.c_str(), c.c_str(), d.c_str(),
                 answerkey.c_str(), evaluationcriteriaid.c_str());

        if (mysql_query(conn, query)) {
            cerr << "INSERT failed. Error: " << mysql_error(conn) << "\n";
            return false;
        }

        return true;
    }

    bool updateTopic(int id, const string &subjectid, string &title, const string &a, const string &b,
                     const string &c, const string &d, const string &answerkey, const string &evaluationcriteriaid) {
        char query[512];
        snprintf(query, sizeof(query),
                 "UPDATE questionbank SET subjectid='%s', title='%s', a='%s', b='%s', c='%s', d='%s', answerkey='%s', evaluationcriteriaid='%s' WHERE id=%d",
                 subjectid.c_str(), title.c_str(), a.c_str(), b.c_str(), c.c_str(), d.c_str(),
                 answerkey.c_str(), evaluationcriteriaid.c_str(), id);

        if (mysql_query(conn, query)) {
            cerr << "UPDATE questionbank failed. Error: " << mysql_error(conn) << "\n";
            return false;
        }

        if (mysql_affected_rows(conn) == 0) {
            cout << "ID not found. No topic updated.\n";
            return false;
        }

        return true;
    }

    bool deleteTopic(int id) {
        char query[256];
        snprintf(query, sizeof(query), "DELETE FROM questionbank WHERE id=%d", id);

        if (mysql_query(conn, query)) {
            cerr << "DELETE FROM questionbank failed. Error: " << mysql_error(conn) << "\n";
            return false;
        }

        if (mysql_affected_rows(conn) == 0) {
            cout << "ID not found. No topic deleted.\n";
            return false;
        }

        return true;
    }
};

int main() {
    DBManager *ptrDbManager = new DBManager();

    cout << "Menu:\n";
    cout << "1. Display all questions\n";
    cout << "2. Display a specific question\n";
    cout << "3. Insert a new question\n";
    cout << "4. Update a question\n";
    cout << "5. Delete a question\n";
    cout << "6. Exit\n";

    int choice;
    cout << "Enter your choice: ";
    cin >> choice;

    switch (choice) {
    case 1:
        ptrDbManager->displayTopics();
        break;

    case 2: {
        int id;
        cout << "Enter question ID to display: ";
        cin >> id;
        ptrDbManager->displayQuestion(id);
        break;
    }

    case 3: {
        int id;
        string subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid;
        cout << "Enter id: ";
        cin >> id;
        cin.ignore();
        cout << "Enter Subject Id : "; getline(cin, subjectid);
        cout << "Enter title : "; getline(cin, title);
        cout << "Enter Option A : "; getline(cin, a);
        cout << "Enter Option B : "; getline(cin, b);
        cout << "Enter Option C : "; getline(cin, c);
        cout << "Enter Option D : "; getline(cin, d);
        cout << "Enter answer key: "; getline(cin, answerkey);
        cout << "Enter evaluation criteria id: "; getline(cin, evaluationcriteriaid);

        if (ptrDbManager->insertTopic(id, subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid)) {
            cout << "Question inserted successfully.\n";
        } else {
            cout << "Failed to insert topic.\n";
        }
        break;
    }

    case 4: {
        int id;
        string subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid;
        cout << "Enter id: ";
        cin >> id;
        cin.ignore();
        cout << "Enter Subject Id: "; getline(cin, subjectid);
        cout << "Enter title: "; getline(cin, title);
        cout << "Enter a: "; getline(cin, a);
        cout << "Enter b: "; getline(cin, b);
        cout << "Enter c: "; getline(cin, c);
        cout << "Enter d: "; getline(cin, d);
        cout << "Enter answer key: "; getline(cin, answerkey);
        cout << "Enter evaluation criteria id: "; getline(cin, evaluationcriteriaid);

        if (ptrDbManager->updateTopic(id, subjectid, title, a, b, c, d, answerkey, evaluationcriteriaid)) {
            cout << "Topic updated successfully.\n";
        } else {
            cout << "Failed to update topic.\n";
        }
        break;
    }

    case 5: {
        int id;
        cout << "Enter ID to delete: ";
        cin >> id;
        if (ptrDbManager->deleteTopic(id)) {
            cout << "Deleted successfully.\n";
        } else {
            cout << "Failed to delete topic.\n";
        }
        break;
    }

    case 6:
        delete ptrDbManager;
        return 0;

    default:
        cout << "Invalid choice. Please try again.\n";
    }

    return 0;
}