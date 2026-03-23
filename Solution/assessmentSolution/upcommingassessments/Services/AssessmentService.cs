using upcommingassessments.Models;
using upcommingassessments.Repositories;

namespace upcommingassessments.Services;

public class AssessmentService
{
    private readonly AssessmentRepository _assessmentRepository;

    public AssessmentService(AssessmentRepository assessmentRepository)
    {
        _assessmentRepository = assessmentRepository;
    }

    public async Task<List<StudentAssessment>> GetUpcomingAssessmentsAsync(int studentId)
    {
        if (studentId <= 0)
        {
            throw new ArgumentException("Invalid student ID", nameof(studentId));
        }

        var assessments = await _assessmentRepository.GetUpcomingAssessmentsAsync(studentId);

        // Business logic: filter and sort upcoming assessments
        return assessments
            .Where(a => a.DueDate > DateTime.Now)
            .OrderBy(a => a.DueDate)
            .ToList();
    }

    public async Task<StudentAssessment?> GetAssessmentDetailsAsync(int studentId, int assessmentId)
    {
        if (studentId <= 0)
        {
            throw new ArgumentException("Invalid student ID", nameof(studentId));
        }

        if (assessmentId <= 0)
        {
            throw new ArgumentException("Invalid assessment ID", nameof(assessmentId));
        }

        return await _assessmentRepository.GetAssessmentByIdAsync(studentId, assessmentId);
    }
}


//Enterprise Application Architecture: (n -tier architecture)
//Web Bases Application Architecture:
//1. Presentation Layer (UI): Handles user interactions and displays data.
//1.1 ( Mobile, Web, Desktop) - Different platforms for user interface
//1.1.1 Mobile: Android, iOS, React Native, Flutter
//1.1.2 Web: ASP.NET Core MVC, Angular, React, Vue.js
//1.1.3 Desktop: WPF, WinForms, Electron
//connectivity using RESTful APIs, GraphQL, gRPC, WebSockets, etc. for communication between client and server.

//Server-Side Application Architecture:  (C#  and .NET ecosystem)
//asp.net core web api, mvc architecture, service layer, repository pattern, 
// Design Principle:  
//SOLID principles:
//S - Single Responsibility Principle: A class should have only one reason to change, meaning it should have only one responsibility or job.
//O - Open/Closed Principle: Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification, allowing new functionality to be added without changing existing code.
//L - Liskov Substitution Principle: Objects of a superclass should be replaceable with
//I - Interface Segregation Principle: Clients should not be forced to depend on interfaces they do not use, meaning that interfaces should be specific to the needs of the client.
//D - Dependency Inversion Principle: High-level modules should not depend on low-level modules;

//DRY (Don't Repeat Yourself), 
//KISS (Keep It Simple, Stupid), 
//YAGNI (You Aren't Gonna Need It), etc. 
//dependency injection, etc.
//2. Web API: Exposes endpoints for client applications to interact with the server, typically
//3. MVC (Model-View-Controller) Architecture: Separates application into three main components - Model (data), View (UI), and Controller (business logic).
//3.1 Controller: Handles user input, processes requests, and interacts with the model to retrieve or update data.
//3.2 View: (JSON)Responsible for rendering output in JSON format.
//3.3 Model: Represents the data and business logic of the application, interacts with the
//3. Service Layer: Contains business logic and rules, processes data from the presentation layer, and interacts with the data access layer.
//4. Business Logic Layer (BLL): Contains business rules and logic, processes data from the presentation layer, and interacts with the data access layer.
//5. Data Access Layer (DAL): Manages data storage and retrieval, interacts with databases or other data sources, and provides data to the business logic layer.
//6. Database Layer: The actual database where data is stored, such as SQL Server, MySQL, etc.