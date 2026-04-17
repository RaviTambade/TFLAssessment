

When writing a **Java Maven Spring Boot REST API**, 
follow guidelines that keep the project **clean, scalable, readable, and team-friendly**.

 

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

REST URL best practices recommend resource nouns and HTTP methods for actions. ([DEV Community][1])



### Use Plural Resource Names

```http
/students
/orders
/products
```


### Use Versioning

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

---

### Use Query Parameters for Filtering/Paging

```http
GET /students?page=1&size=10
GET /students?department=IT
GET /students?sort=name
```

# 2. Controller Naming Conventions

Use:

```java
StudentController
OrderController
PaymentController
```

Avoid:

```java
StudentAPI
StudentHandler
ManageStudentController
```


# 3. Service Naming Conventions

```java
StudentService
StudentServiceImpl
OrderService
```


# 4. Repository Naming Conventions

```java
StudentRepository
OrderRepository
```

Repository typically extends:

```java
JpaRepository<Student, Long>
```

# 5. DTO Naming Conventions

Separate Request/Response DTOs.

```java
StudentRequestDto
StudentResponseDto
LoginRequestDto
LoginResponseDto
```

DTO naming with request/response suffixes is a common clarity pattern. ([javathinking][2])



# 6. Entity Naming Conventions

Use singular nouns.

```java
Student
Order
Payment
```

Database table can still be plural if desired.


# 7. Method Naming Conventions

Use meaningful verb-based names.

```java
getStudentById()
createStudent()
updateStudent()
deleteStudent()
findStudentsByDepartment()
```


# 8. Package / Folder Structure (Recommended Layered)

```plaintext
src/main/java/com/company/project/

├── config/
├── controller/
├── dto/
│   ├── request/
│   └── response/
├── entity/
├── exception/
├── repository/
├── service/
│   ├── impl/
├── mapper/
├── util/
└── ProjectApplication.java
```

Layered Spring Boot package organization is a common recommended structure. ([GeeksforGeeks][3])



# 9. Better Enterprise Structure (Feature-Based for Large Projects)

For scalable apps:

```plaintext
com.company.project

├── student/
│   ├── StudentController.java
│   ├── StudentService.java
│   ├── StudentRepository.java
│   ├── Student.java
│   ├── StudentRequestDto.java
│   └── StudentResponseDto.java

├── payment/
├── auth/
```

### Why Better?

Because feature code stays together.

Large teams increasingly prefer feature-sliced packaging for maintainability. ([Reddit][4])



# 10. Maven Standard Folder Structure

Always follow Maven convention:

```plaintext
project-root/
│
├── src/
│   ├── main/
│   │   ├── java/
│   │   └── resources/
│   │       ├── application.properties
│
│   └── test/
│       └── java/
│
├── pom.xml
```

---

# 11. Exception Handling Structure

Use Global Exception Handler.

```plaintext
exception/
├── GlobalExceptionHandler.java
├── ResourceNotFoundException.java
├── ValidationException.java
```



# 12. Config Naming

```java
SecurityConfig
SwaggerConfig
CorsConfig
DatabaseConfig
```

# 13. Constants / Enums

```java
public static final String DEFAULT_ROLE = "USER";
```

Enums:

```java
OrderStatus
PaymentStatus
UserRole
```


# 14. General Code Quality Rules

### Use Constructor Injection

✅

```java
@RequiredArgsConstructor
@Service
public class StudentService {
    private final StudentRepository repository;
}
```

Avoid Field Injection.



### Never Expose Entity Directly in API

Use DTOs.

### Keep Controller Thin

Controller should only:

* Accept Request
* Validate Input
* Call Service
* Return Response

Business logic belongs in Service Layer.



# 15. Naming Package Convention

Use reverse domain naming.

```java
com.transflower.studentapi
com.mycompany.hrms
```

Avoid default package. Spring scanning works best with package structure rooted under the application package. ([GeeksforGeeks][3])

# Final Recommended Real-World Structure

```plaintext
student-management-api
│
├── controller
│   └── StudentController.java
│
├── service
│   ├── StudentService.java
│   └── impl
│       └── StudentServiceImpl.java
│
├── repository
│   └── StudentRepository.java
│
├── dto
│   ├── request
│   └── response
│
├── entity
│
├── exception
│
├── config
│
└── StudentManagementApplication.java
```


# Mentor Advice

Think of Spring Boot API structure like **software architecture for a building**:

* **URLs** = Public Doors / Entry Points
* **Controller** = Reception Desk
* **Service** = Business Department
* **Repository** = Record Room / Database Gateway
* **DTO** = Visitor Forms
* **Entity** = Internal Database Model

A clean structure ensures:

* Faster onboarding
* Easier debugging
* Better scalability
* Professional code reviews
* Industry-ready maintainability


[1]: https://dev.to/devcorner/rest-api-url-structure-best-practices-with-spring-boot-example-35od?utm_source=chatgpt.com "REST API URL Structure: Best Practices with Spring Boot Example - DEV Community"
[2]: https://www.javathinking.com/blog/java-data-transfer-object-naming-convention/?utm_source=chatgpt.com "Java DTO Naming Conventions: Best Practices to Avoid Transfer Object Name Confusion — javathinking.com"
[3]: https://www.geeksforgeeks.org/java/spring-boot-code-structure/?utm_source=chatgpt.com "Spring Boot - Code Structure - GeeksforGeeks"
[4]: https://www.reddit.com/r/SpringBoot/comments/162kbz1?utm_source=chatgpt.com "Spring boot file structure and naming conventions"
