namespace upcommingassessments.Models;


//Model
//Entity class
//POCO class - Plain Old CLR Object
//bean: class with properties, getters, setters, and no business logic
public class Assessment
{

    // variables
    // properties
    // auto-implemented properties

    public int TestId { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Technology { get; set; } = string.Empty;
    public int TotalMarks { get; set; }
    public int Duration { get; set; } // in minutes
    public DateTime DueDate { get; set; }
    public string Status { get; set; } = string.Empty;
}

public class StudentAssessment
{
    public int AssessmentAssignmentId { get; set; }
    public int StudentId { get; set; }
    public Assessment Test { get; set; } = new();
    public DateTime AssignedAt { get; set; }
    public DateTime DueDate { get; set; }
    public string Status { get; set; } = string.Empty; // Assigned, Started, Completed
}


//Java project after compilation -> .class files
//C# project after compilation -> .dll file (assembly)


//class relationships
//1. Association: A relationship where one class uses another class. (e.g., Student
//2. Inheritance: A relationship where one class inherits from another class. (e.g., Employee and Manager)





//Persistence: Saving data to a database or file
//Serialization: Converting an object to a format that can be easily stored or transmitted (e.g., JSON, XML)
//Deserialization: Converting serialized data back into an object
//Data Access Layer (DAL): A layer of code that interacts with the database to perform CRUD operations (Create, Read, Update, Delete)


//Clean Code
//1. Meaningful Names: 
//Use descriptive names for variables, methods, and classes to improve readability.
//2. Single Responsibility Principle:
// Each class or method should have only one responsibility or reason to change.
//3. DRY Principle (Don't Repeat Yourself): Avoid code duplication by reusing code through



//Repository Pattern: A design pattern that 
// the data access layer,
// providing a clean interface for the business logic to interact with the data.
// It helps in decoupling the business logic from the data access logic,
// making the code more maintainable and testable.