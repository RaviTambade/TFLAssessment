#include "../include/Question.h"
#include <iostream>
#include <sstream>

Question::Question()  {
    id = 0;
    title = "";
    subject = "";
    evaluation_id = 0;
    option_a = "";
    option_b = "";
    option_c = "";
    option_d = "";
    answer_key = 'a';   
}

Question::Question(int id, const string& subject, const string& title,
                   const string& optionA, const string& optionB,
                   const string& optionC, const string& optionD,
                   char answerKey, int evaluationId)
{
    this->id = id;
    this->subject = subject;
    this->title = title;
    this->option_a = optionA;   
    this->option_b = optionB;
    this->option_c = optionC;
    this->option_d = optionD;
    this->answer_key = answerKey;
    this->evaluation_id = evaluationId;
}



int Question::getId() const { return id; }
void Question::setId(int id) { this->id = id; }

string Question::getSubject() const { return subject; }
void Question::setSubject(const string& subject) { this->subject = subject; }

string Question::getTitle() const { return title; }
void Question::setTitle(const string& title) { this->title = title; }

string Question::getOptionA() const { return option_a; }
void Question::setOptionA(const string& option) { option_a = option; }

string Question::getOptionB() const { return option_b; }
void Question::setOptionB(const string& option) { option_b = option; }

string Question::getOptionC() const { return option_c; }
void Question::setOptionC(const string& option) { option_c = option; }

string Question::getOptionD() const { return option_d; }
void Question::setOptionD(const string& option) { option_d = option; }

char Question::getAnswerKey() const { return answer_key; }
void Question::setAnswerKey(char key) { answer_key = key; }

int Question::getEvaluationId() const { return evaluation_id; }
void Question::setEvaluationId(int evalId) { evaluation_id = evalId; }

void Question::display() const {
    cout << "ID: " << id << "\nSubject: " << subject
         << "\nTitle: " << title
         << "\nA: " << option_a << "\nB: " << option_b
         << "\nC: " << option_c << "\nD: " << option_d
         << "\nAnswer: " << answer_key << "\nEvaluation ID: " << evaluation_id << "\n\n";
}

string Question::serialize() const {
    return to_string(id) + "|" + subject + "|" + title + "|" + option_a + "|" +
           option_b + "|" + option_c + "|" + option_d + "|" + answer_key + "|" + to_string(evaluation_id);
}

Question Question::deserialize(const string& line) {
    Question q;
    stringstream ss(line);
    string token;
    getline(ss, token, '|'); q.setId(stoi(token));
    getline(ss, token, '|'); q.setSubject(token);
    getline(ss, token, '|'); q.setTitle(token);
    getline(ss, token, '|'); q.setOptionA(token);
    getline(ss, token, '|'); q.setOptionB(token);
    getline(ss, token, '|'); q.setOptionC(token);
    getline(ss, token, '|'); q.setOptionD(token);
    getline(ss, token, '|'); q.setAnswerKey(token[0]);
    getline(ss, token, '|'); q.setEvaluationId(stoi(token));
    return q;
}

Question::~Question() {}