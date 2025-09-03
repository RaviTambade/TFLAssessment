#include "../include/question.h"
#include "../include/QuestionBank.h"
#include <string>
#include <iostream>
#include <algorithm>
#include <vector>


Question::Question() {
    // Default constructor
}
int Question::getId() {
    return id;
}   
void Question::setId(int id) {
    this->id = id;
}
string Question::getSubject() {
    return subject;
}
void Question::setSubject(string subject) {
    this->subject = subject;
}
string Question::getTitle() {
    return title;
}
void Question::setTitle(string title) {
    this->title = title;
}

string Question::getOptionA() {
    return option_a;
}
void Question::setOptionA(string option_a) {
    this->option_a = option_a;
}
string Question::getOptionB() {
    return option_b;
}
void Question::setOptionB(string option_b) {
    this->option_b = option_b;
}
string Question::getOptionC() {
    return option_c;
}
void Question::setOptionC(string option_c) {
    this->option_c = option_c;
}
string Question::getOptionD() {
    return option_d;
}
void Question::setOptionD(string option_d) {
    this->option_d = option_d;
}
char Question::getAnswerKey() {
    return answer_key;
}
void Question::setAnswerKey(char answer_key) {
    this->answer_key = answer_key;
}
int Question::getEvaluationId() {
    return evaluation_id;
}
void Question::setEvaluationId(int evaluation_id) {
    this->evaluation_id = evaluation_id;
}

void Question::display() {
    cout << "ID: " << id << endl;
    cout << "Subject: " << subject << endl;
    cout << "Title: " << title << endl;
    cout << "Option A: " << option_a << endl;
    cout << "Option B: " << option_b << endl;
    cout << "Option C: " << option_c << endl;
    cout << "Option D: " << option_d << endl;
    cout << "Answer Key: " << answer_key << endl;
    cout << "Evaluation ID: " << evaluation_id << endl;
}
Question::~Question() {
    // Destructor
    // No dynamic memory to clean up, but can be overridden in derived classes if needed
}




