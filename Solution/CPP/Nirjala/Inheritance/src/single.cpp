#include <iostream>
using namespace  std;

class animal{
    public:
    void eat()
    {
        cout <<"The animals is eating" <<endl;
    }
};

class dog:public animal
{
    public:
    void bark()
    {
        cout <<"The dog is barking"<<endl;
    }
};

int main()
{
    dog d;
    d.eat();
    d.bark();
    return 0;
}
