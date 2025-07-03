#ifndef QUESTIONBANK_H
#define QUESTIONBANK_H
#include <iostream>
#include <vector>
#include "Question.h"
using namespace std;

class QuestionBank {

    

public:

QuestionBank();
    vector<Question> questions; // Assuming List is a custom container class or use std::vector<Question>
    // Add methods for managing questions, such as adding, removing, and displaying questions
    void addQuestion( Question question);
    void removeQuestion(int id);
    void displayQuestions();
    void updateQuestion(int id,  Question updatedQuestion);

    // Other methods as needed

    ~QuestionBank();

};
#endif
