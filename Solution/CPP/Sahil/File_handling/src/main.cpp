#include <iostream>
#include <fstream>
#include "../include/QuestionBank.h"

using namespace std;


void showMenu() {
    cout << "\n1. Add Question\n";
    cout << "2. Display Questions\n";
    cout << "3. Update Question\n";
    cout << "4. Delete Question\n";
    cout << "5. Exit\n";
    cout << "6. Backup Questions to File\n";
    cout << "7. Read Questions from File\n";
    cout << "8. Write Questions to File\n";
}


int getChoice() {
    int choice;
    cout << "Enter your choice: ";
    cin >> choice;
    return choice;
}

void acceptQuestion(Question& question) {
    int id, eval;
    string subject, title, option_a, option_b, option_c, option_d;
    char key;
    
    cout << "\nEnter ID: "; 
    cin>>id;
    cout << "Enter Subject: "; 
    cin>>subject;
    cin.ignore(); // Clear leftover newline before getline
    cout << "Enter your Question: "; 
    getline(cin, title);
    cout <<"\nEnter your Option A: "; 
    getline(cin, option_a);
    cout << "\nEnter your Option B: "; 
    getline(cin, option_b);
    cout << "\nEnter your Option C: "; 
    getline(cin, option_c) ;
    cout << "\nEnter your Option D: "; 
    getline(cin, option_d); 
    cout << "Choose Correct Answer (A/B/C/D): "; 
    cin >> key;
    cout << "Evaluation Criteria ID: "; 
    cin >> eval;

    question = Question(id, subject, title, option_a, option_b, option_c, option_d, key, eval);
}

int main() {
    QuestionBank questionBank;
    int choice=1;
    do {
        showMenu();
        choice = getChoice();

        switch(choice) {
            case 1:{ 
                cout<<"\n------------------------------------------";
                cout << "\nAdding a new question...";
                cout<<"\n------------------------------------------";
                Question newQuestion;
                acceptQuestion(newQuestion);
                questionBank.addQuestion(newQuestion);
                cout<<"\n------------------------------------------";
            }
            break;

            case 2:{
                cout<<"\n------------------------------------------";
                cout << "\nDisplaying all questions...";
                cout<<"\n------------------------------------------\n";
                questionBank.displayQuestions();
                cout<<"\n------------------------------------------";
            }
            break;
            
            case 3:{
                cout<<"\n------------------------------------------";
                cout << "\nUpdating a question...";
                cout<<"\n------------------------------------------";
                int id;
                cout<<"\n------------------------------------------";
                cout << "\nEnter ID to update: ";
                cout<<"\n------------------------------------------";
                cin >> id; cin.ignore();
                Question updatedQuestion;
                acceptQuestion(updatedQuestion);
                updatedQuestion.setId(id);
                questionBank.updateQuestion(id, updatedQuestion);
                cout<<"\n------------------------------------------";
                cout << "\nQuestion updated successfully.";
                cout<<"\n------------------------------------------";
                break;

            } 

            case 4:{
                cout<<"------------------------------------------\n";
                cout << "Deleting a question...\n";
                cout<<"------------------------------------------\n";
                int id;
                cout << "Enter ID to delete: \n";
                cout<<"------------------------------------------\n";
                cin >> id; 
                cin.ignore();
                questionBank.removeQuestion(id);
                cout<<"------------------------------------------\n";
                cout << "Question deleted successfully.\n";
                cout<<"------------------------------------------\n";
            }
            break;

            case 5:{
                cout<<"------------------------------------------\n";
                 cout << "Exiting the program...\n";
                 cout<<"------------------------------------------\n";
                return 0;
            }
            break;
            case 6:
                cout << "Backing up questions to file...\n";

            break;
            case 7:
                cout << "Reading questions from file...\n";
            break;

            case 8:
                cout << "Writing questions to file...\n";
            break;

            default:
                cout << "Invalid choice. Please try again.\n";
        }

    }   
    while (choice != 5);
    cout<<"\n------------------------------------------";
    cout << "Thank you for using the Question Bank System!\n";
    cout<<"\n------------------------------------------";
    return 0;
}   
