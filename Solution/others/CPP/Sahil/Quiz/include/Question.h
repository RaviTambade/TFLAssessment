#ifndef QUESTION_H
#define QUESTION_H
#include <string>
using namespace std;
 
class Question{

   private :

    int id=0;
    string subject;
    string title;
    string option_a;
    string option_b;   
    string option_c;
    string option_d;
    char answer_key;
    int evaluation_id=0;

    public:

    Question();

    int getId();
    void setId(int id);
    
    string getSubject();
    void setSubject(string subject);

    string getTitle();
    void setTitle(string title);

    string getOptionA();
    void setOptionA(string option_a);

    string getOptionB();
    void setOptionB(string option_b);
    

    string getOptionC();
    void setOptionC(string option_c);

    string getOptionD();
    void setOptionD(string option_d);

    char getAnswerKey();
    void setAnswerKey(char answer_key);


    int getEvaluationId();
    void setEvaluationId(int evaluation_id);

    void display();
   
     ~Question(); // Virtual destructor for proper cleanup of derived classes

};

#endif // QUESTION_H