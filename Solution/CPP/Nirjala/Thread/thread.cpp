#include <iostream>
#include <thread>
using namespace std;

void thread1()
{
    cout<<"Thread ID:" << this_thread::get_id()<<endl;
}
void thread2()
{
    cout << "Thread ID:" <<this_thread::get_id()<<endl;
}

int main()
{
    thread t1(thread1);
    t1.join();
    thread t2(thread2);
    t2.join();
    cout <<"Main thread id:" << this_thread::get_id() <<endl;
    return 0;
}