#ifndef QUESTION_H
#define QUESTION_H

#include <string>
using namespace std;

class Question {
private:
    int id;
    string subject;
    string title;
    string option_a, option_b, option_c, option_d;
    char answer_key;
    int evaluation_id;

public:
    // Default constructor
    Question();
    // Parameterized constructor
    Question(int id, const string& subject, const string& title,
             const string& optionA, const string& optionB,
             const string& optionC, const string& optionD,
             char answerKey, int evaluationId); 

    int getId() const;
    void setId(int id);

    string getSubject() const;
    void setSubject(const string& subject);

    string getTitle() const;
    void setTitle(const string& title);

    string getOptionA() const;
    void setOptionA(const string& option);

    string getOptionB() const;
    void setOptionB(const string& option);

    string getOptionC() const;
    void setOptionC(const string& option);

    string getOptionD() const;
    void setOptionD(const string& option);

    char getAnswerKey() const;
    void setAnswerKey(char key);

    int getEvaluationId() const;
    void setEvaluationId(int evalId);

    void display() const;

    string serialize() const;
    static Question deserialize(const string& line);

    ~Question();
};

#endif
