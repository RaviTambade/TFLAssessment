#include <iostream>
#include <thread>
using namespace std;

void thread1()
{
    cout<<"Thread1 ID:" <<this_thread::get_id() <<endl;
}    
void thread2()
{
    cout<<"Thread2 ID:" <<this_thread::get_id() <<endl;
}
int main(){
    thread t1(thread1);
    thread t2(thread2);
    
    t1.join();
    t2.join();
    cout << "Main thread id:" << this_thread::get_id() <<endl;
    return 0;
}