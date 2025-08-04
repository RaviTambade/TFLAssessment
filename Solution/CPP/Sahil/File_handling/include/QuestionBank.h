#ifndef QUESTIONBANK_H
#define QUESTIONBANK_H

#include <vector>
#include "Question.h"

class QuestionBank {
private:
    const string filename = "new.txt";

public:
    void addQuestion(const Question& question);
    void displayQuestions();
    void updateQuestion(int id, const Question& updated);
    void removeQuestion(int id);

    vector<Question> loadFromFile();
    void saveToFile(const vector<Question> &questions);
};

#endif