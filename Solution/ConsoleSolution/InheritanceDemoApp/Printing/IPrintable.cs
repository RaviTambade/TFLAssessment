namespace Printing;

//able---Capability

//Interfaces are used to define Specification
//Interfaces  are used to define Rules
//Interfaces  are used to define Contract
public interface IPrintable{
    //Declare prototype of Printer
    void Print();
    void Scan();
    void Start();
    void Stop();
}