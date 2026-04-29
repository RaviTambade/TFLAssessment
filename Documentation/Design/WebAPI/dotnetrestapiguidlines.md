
# ASP.NET Core Web API Development Guidelines

When writing an **ASP.NET Core Web API**,
follow guidelines that keep the project **clean, scalable, readable, maintainable, and team-friendly**.


# 1. API URL Design Guidelines

### Use RESTful Resource-Based URLs

Use **nouns**, not verbs.

✅ Good

```http
GET    /api/v1/students
GET    /api/v1/students/10
POST   /api/v1/students
PUT    /api/v1/students/10
DELETE /api/v1/students/10
```

❌ Bad

```http
GET    /getStudents
POST   /createStudent
DELETE /deleteStudent/10
```



### Use Plural Resource Names

```http
/students
/orders
/products
```



### Use API Versioning

```http
/api/v1/students
/api/v2/students
```


### Use Lowercase + Hyphens

```http
/product-categories
/student-addresses
```

Avoid:

```http
/ProductCategories
/student_addresses
```


### Use Query Parameters for Filtering / Paging / Sorting
QueryString

```http
GET /students?page=1&pageSize=10
GET /students?department=IT
GET /students?sortBy=name
```

# 2. Controller Naming Conventions

Use:

```csharp
StudentController
OrderController
PaymentController
```

Avoid:

```csharp
StudentAPI
StudentHandler
ManageStudentController
```



# 3. Service Naming Conventions

Use:

```csharp
IStudentService
StudentService
IOrderService
OrderService
```


# 4. Repository Naming Conventions

Use:

```csharp
IStudentRepository
StudentRepository
IOrderRepository
OrderRepository
```

Repository typically uses:

```csharp
DbContext
```

or generic repository abstraction if project standard requires.


# 5. DTO Naming Conventions

Separate Request / Response DTOs.

```csharp
StudentRequestDto
StudentResponseDto
LoginRequestDto
LoginResponseDto
```

Or more explicit:

```csharp
CreateStudentDto
UpdateStudentDto
StudentDetailDto
```

 

# 6. Entity / Model Naming Conventions

Use singular nouns.

```csharp
Student
Order
Payment
```

Database table may still be plural if desired.
 

# 7. Method Naming Conventions

Use meaningful verb-based names.

```csharp
GetStudentByIdAsync()
CreateStudentAsync()
UpdateStudentAsync()
DeleteStudentAsync()
GetStudentsByDepartmentAsync()
```

### Best Practice:

Use **Async suffix** for asynchronous methods.

 

# 8. Recommended Folder Structure (Layered Architecture)

```plaintext
ProjectName/

├── Controllers/
├── Services/
│   ├── Interfaces/
│   └── Implementations/
├── Repositories/
│   ├── Interfaces/
│   └── Implementations/
├── DTOs/
│   ├── Requests/
│   └── Responses/
├── Models/
├── Data/
├── Mappings/
├── Exceptions/
├── Middleware/
├── Configurations/
├── Helpers/
└── Program.cs
```

---

# 9. Better Enterprise Structure (Feature-Based for Large Projects)

For scalable applications:

```plaintext
ProjectName/

├── Features/
│   ├── Student/
│   │   ├── StudentController.cs
│   │   ├── StudentService.cs
│   │   ├── StudentRepository.cs
│   │   ├── Student.cs
│   │   ├── CreateStudentDto.cs
│   │   └── StudentResponseDto.cs
│
│   ├── Payment/
│   ├── Auth/
```

---

### Why Better?

Because:

> **Feature code stays together**

Benefits:

* Easier maintenance
* Better modularity
* Faster navigation
* Cleaner ownership in teams

---

# 10. Standard ASP.NET Core Project Structure

```plaintext
ProjectRoot/

├── Controllers/
├── Properties/
│   └── launchSettings.json
├── appsettings.json
├── appsettings.Development.json
├── Program.cs
├── ProjectName.csproj
```

---

# 11. Exception Handling Structure

Use centralized/global exception handling.

```plaintext
Exceptions/
├── GlobalExceptionMiddleware.cs
├── ResourceNotFoundException.cs
├── ValidationException.cs
├── BusinessRuleException.cs
```

---

# 12. Configuration Naming

Use:

```csharp
SwaggerConfiguration
JwtConfiguration
CorsConfiguration
DatabaseConfiguration
```

Or Extension Method Style:

```csharp
SwaggerServiceExtensions
CorsServiceExtensions
JwtServiceExtensions
```

---

# 13. Constants / Enums

### Constants

```csharp
public const string DefaultRole = "User";
```

---

### Enums

```csharp
OrderStatus
PaymentStatus
UserRole
```

---

# 14. General Code Quality Rules

---

### Use Dependency Injection via Constructor

✅ Good

```csharp
public class StudentService : IStudentService
{
    private readonly IStudentRepository _repository;

    public StudentService(IStudentRepository repository)
    {
        _repository = repository;
    }
}
```

Avoid Service Locator / Static Dependencies.

---

### Never Expose Entity Directly in API

Use DTOs.

---

### Keep Controllers Thin

Controller Responsibilities:

* Accept Request
* Validate Input
* Call Service
* Return Response

---

### Business Logic Belongs in Service Layer

Avoid:

```csharp
Controller → Complex Logic → Repository
```

Prefer:

```plaintext
Controller → Service → Repository
```

---

# 15. Namespace Naming Convention

Use company/project-based namespaces.

```csharp
Transflower.StudentApi
MyCompany.HRMS.API
```

Avoid:

```csharp
Namespace1
MyProject
```

---

# 16. AutoMapper / Mapping Conventions

Use dedicated profiles.

```plaintext
Mappings/
├── StudentProfile.cs
├── OrderProfile.cs
```

Example:

```csharp
public class StudentProfile : Profile
{
    public StudentProfile()
    {
        CreateMap<Student, StudentResponseDto>();
        CreateMap<CreateStudentDto, Student>();
    }
}
```

---

# 17. Middleware Guidelines

Custom middleware should go under:

```plaintext
Middleware/
├── ExceptionHandlingMiddleware.cs
├── RequestLoggingMiddleware.cs
├── JwtMiddleware.cs
```

---

# 18. Validation Guidelines

Use:

* Data Annotations for basic validation
* FluentValidation for enterprise validation

Example:

```csharp
[Required]
[StringLength(100)]
public string Name { get; set; }
```

---

# Final Recommended Real-World Structure

```plaintext
StudentManagement.API/

├── Controllers/
│   └── StudentController.cs
│
├── Services/
│   ├── Interfaces/
│   │   └── IStudentService.cs
│   └── Implementations/
│       └── StudentService.cs
│
├── Repositories/
│   ├── Interfaces/
│   │   └── IStudentRepository.cs
│   └── Implementations/
│       └── StudentRepository.cs
│
├── DTOs/
│   ├── Requests/
│   └── Responses/
│
├── Models/
│
├── Data/
│   └── ApplicationDbContext.cs
│
├── Exceptions/
├── Middleware/
├── Configurations/
├── Mappings/
│
├── Program.cs
└── appsettings.json
```

---

# Mentor Advice

Think of ASP.NET Core API architecture like a **well-managed office system**:

* **URLs** = Reception Counter / Public Entry Points
* **Controller** = Front Desk Staff
* **Service** = Department Handling Business Rules
* **Repository** = File/Database Access Team
* **DTO** = External Forms Shared with Clients
* **Entity/Model** = Internal Records / Database Objects

---

# Why This Structure Matters

A clean API structure ensures:

* Faster onboarding of new developers
* Easier debugging
* Better scalability
* Cleaner code reviews
* Lower technical debt
* Industry-grade maintainability

 