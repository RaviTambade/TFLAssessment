#include <iostream>
using namespace std;

class animal {
    public:
    void eat(){
        cout << "Eating food." << endl;
    }    
};

class mammal {
    public:
    void walk(){
        cout << "Walking on land." << endl;
    }
};

class dog : public animal , public mammal {
    public :
    void bark(){
        cout << "barking." << endl ;
    }
};

int main(){
    dog obj ;
    obj.eat();
    obj.walk();
    obj.bark();
    return 0;
}
