//SOC:
//Separation of Concerns: The AssessmentRepository class is responsible for handling data access related to assessments. It interacts with the database context to perform CRUD operations on assessment entities, ensuring that the business logic is separated from data access logic.

using upcommingassessments.Models;

namespace upcommingassessments.Repositories;

public class AssessmentRepository
{

    //CRUD operations for Assessment entities
    //Create, Read, Update, Delete
    // In-memory data for demonstration - in real app, this would be database


    //Collection of student assessments
    private static readonly List<StudentAssessment> _studentAssessments = new()
    {
        new StudentAssessment
        {
            AssessmentAssignmentId = 1,
            StudentId = 1,
            Test = new Assessment
            {
                TestId = 1,
                Title = "C# Fundamentals Assessment",
                Technology = "C#",
                TotalMarks = 100,
                Duration = 60,
                Status = "Active"
            },
            AssignedAt = DateTime.Now.AddDays(-1),
            DueDate = DateTime.Now.AddDays(7),
            Status = "Assigned"
        },
        new StudentAssessment
        {
            AssessmentAssignmentId = 2,
            StudentId = 1,
            Test = new Assessment
            {
                TestId = 2,
                Title = "ASP.NET Core Web API",
                Technology = "ASP.NET Core",
                TotalMarks = 100,
                Duration = 90,
                Status = "Active"
            },
            AssignedAt = DateTime.Now.AddDays(-2),
            DueDate = DateTime.Now.AddDays(14),
            Status = "Assigned"
        },
        new StudentAssessment
        {
            AssessmentAssignmentId = 3,
            StudentId = 1,
            Test = new Assessment
            {
                TestId = 3,
                Title = "SQL Database Design",
                Technology = "SQL",
                TotalMarks = 80,
                Duration = 45,
                Status = "Active"
            },
            AssignedAt = DateTime.Now.AddDays(-3),
            DueDate = DateTime.Now.AddDays(3),
            Status = "Assigned"
        }
    };

    public Task<List<StudentAssessment>> GetUpcomingAssessmentsAsync(int studentId)
    {
        //LINQ query to filter and sort assessments based on due date
        var upcomingAssessments = _studentAssessments
            .Where(sa => sa.StudentId == studentId &&
                        sa.DueDate > DateTime.Now &&
                        sa.Status == "Assigned")
            .OrderBy(sa => sa.DueDate)
            .ToList();

        return Task.FromResult(upcomingAssessments);
    }

    public Task<StudentAssessment?> GetAssessmentByIdAsync(int studentId, int assessmentId)
    {
        var assessment = _studentAssessments
            .FirstOrDefault(sa => sa.StudentId == studentId &&
                                 sa.AssessmentAssignmentId == assessmentId);

        return Task.FromResult(assessment);
    }
}

//Functions are of two types:

//synchronous: executes sequentially, blocking the thread until completion
//asynchronous: allows other operations to run concurrently, improving responsiveness and scalability (e.g.,



//Language features:
//1. name spaces: Organize code into logical groups and prevent name collisions (e.g., System, MyApp.Models)
//2. classes and objects: Define blueprints for creating objects that encapsulate data and behavior
//3. properties: Provide a way to access and modify the data of an object (e.g., public string Name { get; set; })
//readonly, const, static, virtual,
//POCO, POJO, entity class, model class, bean class
//assembly: A compiled code library used for deployment, versioning, and security in .NET applications (e.g., MyApp.dll)
//Persistance: Seriaization, Deserialization, Data Access Layer (DAL)
//class relationships: Association, Inheritance, Aggregation, Composition
//is a, has a relationships
//Clean Code:
//Using Design principles
//Using Design patterns
//SOC: Separation of Concerns
//DAL: Data Access Layer - A layer of code that interacts with the database to perform CRUD operations (Create, Read, Update, Delete)
//Repository pattern: A design pattern that abstracts the data access layer, providing a clean API for the business logic to interact with the data source (e.g., AssessmentRepository)
//CRUD operations: Create, Read, Update, Delete - Basic operations performed on data entities (e.g., adding a new assessment, retrieving assessments, updating assessment details, deleting an assessment)
//Collecion Frameworks: LINQ (Language Integrated Query) - A powerful query language integrated into C# for querying collections and databases (e.g., filtering assessments based on due date, sorting assessments by title)
//Collections classes: List<T>, Dictionary<TKey, TValue>, HashSet<T>, Queue<T>, Stack<T> - Data structures provided by .NET for storing and manipulating groups of objects (e.g., List<StudentAssessment> to store multiple assessments)

//Functions:
//1. synchronous: executes sequentially, blocking the thread until completion
//2. asynchronous: allows other operations to run concurrently, improving responsiveness and scalability (e.g

//TPL: Task Parallel Library) - A set of public types and APIs in the System.Threading and System.Threading.Tasks namespaces that support asynchronous and parallel programming (e.g., Task, async/await keywords)

