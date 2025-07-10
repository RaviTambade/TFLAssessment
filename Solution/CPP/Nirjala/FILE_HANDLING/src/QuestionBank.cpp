#include "../include/QuestionBank.h"
#include <fstream>
#include <iostream>

void QuestionBank::addQuestion(const Question &question) {
    ofstream out(filename, ios::app);
    if (out.is_open()) {
        out << question.serialize() << endl;
        out.close();
        cout<<"\n------------------------------------------\n";
        cout << "Question added successfully.\n";
    } else {
        cerr << "Failed to open file.\n";
    }
}

vector<Question> QuestionBank::loadFromFile() {
    vector<Question> list;
    ifstream in(filename);
    string line;
    while (getline(in, line)) {
        if (!line.empty())
            list.push_back(Question::deserialize(line));
    }
    return list;
}

void QuestionBank::saveToFile(const vector<Question>& questions) {
    ofstream out(filename);
    for (const auto& q : questions)
        out << q.serialize() << endl;
}

void QuestionBank::displayQuestions() {
    auto questions = loadFromFile();
    for (const auto& q : questions)
        q.display();
}

void QuestionBank::updateQuestion(int id, const Question& updated) {
    auto questions = loadFromFile();
    bool found = false;
    for (auto& q : questions) {
        if (q.getId() == id) {
            q = updated;
            found = true;
            break;
        }
    }
    if (found) {
        saveToFile(questions);
        cout << "Question updated successfully.\n";
    } else {
        cout << "Question with ID " << id << " not found.\n";
    }
}

void QuestionBank::removeQuestion(int id) {
    auto questions = loadFromFile();
    vector<Question> updatedList;
    bool found = false;
    for (const auto& q : questions) {
        if (q.getId() != id)
            updatedList.push_back(q);
        else
            found = true;
    }
    if (found) {
        saveToFile(updatedList);
        cout << "\nQuestion removed successfully.";
    } else {
        cout << "Question with ID " << id << " not found.\n";
    }
}
