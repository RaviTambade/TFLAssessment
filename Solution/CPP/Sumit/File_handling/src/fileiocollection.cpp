#include <iostream>
#include <fstream>
#include <string>
#include <vector>
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


class FileIOManager{

    public :
        bool serialize( vector<Person>& allStudents){
            bool status=false;
            ofstream outFile("d:/person.dat");
            if (outFile.is_open()) {
                for(int i=0;i<=allStudents.size();i++) 
                    {
                        allStudents[i].serialize(outFile);
                        status=true;
                    }
                outFile.close();
                std::cout<<"All files are stored in file"<<endl;
            }
            else{
                std::cout<<"something is wrong"<<endl;
            }
            return status;
        }
};


int main(){
    std::cout<<"Hello"<<endl;
    std::cout<<"Thank you for visiting Transflower"<<endl;
    Person p1("Ravi Tambade",49);
    Person p2("Nikshi Navale",19);
    Person p3("Nirjala",20);
    Person p4("Shamiksha",18);
    Person p5("Pankaj Bhor",18);

    vector<Person> students;
    students.push_back(p1);
    students.push_back(p2);
    students.push_back(p3);
    students.push_back(p4);
    students.push_back(p5);

    FileIOManager mgr;
    if(mgr.serialize(students)){
        std::cout<<"All are saved"<<endl;
    }
}