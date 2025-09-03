#include <iostream>
#include <fstream>
#include <string>

using namespace std;

class Person {

public:
        string name;
        int age;
    //constructor overloading
    Person(){
            this->name="Sumit";
           this->age=19;
    }
    // Parameterized Constructor
    Person( string n, int a) {
        this->name=n;
        this->age=a;
    }

    // Serialize the object into an output stream (file or memory)
    void serialize( ofstream& fout) {
        fout << name << endl;
        fout << age << endl;
    }

    void deSerialize(ifstream& fin){
        getline(fin, name);  // Read the name (with spaces if any)
        fin >> age;           // Read the age
    }

};

int main(){
    cout<<"Hello"<<endl;
    cout<<"Thank you for visiting Transflower"<<endl;
    Person thePerson("Nirjala Naik",21);
    ofstream outFile("person.txt");
    if (outFile.is_open()) {
        thePerson.serialize(outFile);
        outFile.close();
        cout << "Object serialized to person.txt" <<endl;
    }


    ifstream inFile("person.txt");
    Person secondPerson;
    cout<<secondPerson.name<< " " <<secondPerson.age;
    secondPerson.deSerialize(inFile);
    cout<<"After DeSerialization"<<endl;
     cout<<secondPerson.name<< " " <<secondPerson.age;
    inFile.close();

}