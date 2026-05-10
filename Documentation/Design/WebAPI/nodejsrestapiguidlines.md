# Node.js Express REST API Development Guidelines

When writing a **Node.js Express REST API**,
follow guidelines that keep the project **clean, scalable, readable, maintainable, and team-friendly**.


# 1. API URL Design Guidelines

### Use RESTful Resource-Based URLs

Use **nouns**, not verbs.

✅ Good

```http id="y6eq5s"
GET    /api/v1/students
GET    /api/v1/students/10
POST   /api/v1/students
PUT    /api/v1/students/10
DELETE /api/v1/students/10
```

❌ Bad

```http id="dwwq8y"
GET    /getStudents
POST   /createStudent
DELETE /deleteStudent/10
```



### Use Plural Resource Names

```http id="a04p9l"
/students
/orders
/products
```



### Use API Versioning

```http id="p5o3rr"
/api/v1/students
/api/v2/students
```


### Use Lowercase + Hyphens

```http id="v1xj8v"
/product-categories
/student-addresses
```

Avoid:

```http id="ku8vq8"
/ProductCategories
/student_addresses
```


### Use Query Parameters for Filtering / Paging / Sorting

```http id="e8ejpc"
GET /students?page=1&pageSize=10
GET /students?department=IT
GET /students?sortBy=name
```

 

# 2. Route / Controller Naming Conventions

Use:

```javascript id="u6h40j"
studentController.js
orderController.js
paymentController.js
```

Avoid:

```javascript id="pp4yps"
studentAPI.js
studentHandler.js
manageStudentController.js
```

 

# 3. Service Naming Conventions

Use:

```javascript id="f5fz2z"
studentService.js
orderService.js
paymentService.js
```

 

# 4. Repository / Data Access Naming Conventions

Use:

```javascript id="0md4mj"
studentRepository.js
orderRepository.js
paymentRepository.js
```

# 5. DTO / Schema Naming Conventions

Separate Request / Response Shapes.

```javascript id="f7xq06"
createStudentDto.js
updateStudentDto.js
studentResponseDto.js
loginRequestDto.js
```

In Node.js this may be:

* Plain DTO objects
* Validation schemas
* Serialization transformers

---

# 6. Model Naming Conventions

Use singular nouns.

```javascript id="hnqb0g"
Student.js
Order.js
Payment.js
```

Database collections/tables may still be plural.

---

# 7. Method Naming Conventions

Use meaningful verb-based names.

```javascript id="x8vm1h"
getStudentById()
createStudent()
updateStudent()
deleteStudent()
findStudentsByDepartment()
```

---

# 8. Recommended Folder Structure (Layered Architecture)

```plaintext id="26pq2y"
project-root/

├── controllers/
├── services/
├── repositories/
├── models/
├── dtos/
│   ├── requests/
│   └── responses/
├── routes/
├── middlewares/
├── config/
├── utils/
├── validations/
└── server.js / app.js
```

---

# 9. Better Enterprise Structure (Feature-Based for Large Projects)

For scalable applications:

```plaintext id="a8rjgx"
project-root/

├── features/
│   ├── student/
│   │   ├── student.controller.js
│   │   ├── student.service.js
│   │   ├── student.repository.js
│   │   ├── student.model.js
│   │   ├── student.routes.js
│   │   └── student.dto.js
│
│   ├── payment/
│   ├── auth/
```

---

### Why Better?

Because:

> **Feature code stays together**

Benefits:

* Easier maintenance
* Better modularity
* Faster navigation
* Clearer ownership in teams

---

# 10. Standard Node.js Project Structure

```plaintext id="wl6v9f"
project-root/

├── node_modules/
├── src/
│   ├── controllers/
│   ├── services/
│   ├── repositories/
│   ├── models/
│   ├── routes/
│   └── app.js
│
├── .env
├── package.json
├── package-lock.json
└── server.js
```

---

# 11. Exception Handling Structure

Use centralized/global error handling middleware.

```plaintext id="es2j13"
middlewares/
├── errorHandler.js
├── asyncHandler.js

exceptions/
├── NotFoundError.js
├── ValidationError.js
├── BusinessRuleError.js
```

---

# 12. Configuration Naming

Use:

```javascript id="0z6i4z"
database.config.js
swagger.config.js
cors.config.js
jwt.config.js
```

---

# 13. Constants / Enums

### Constants

```javascript id="k0s7pr"
const DEFAULT_ROLE = "USER";
```

---

### Enums / Status Constants

```javascript id="v31a2m"
const OrderStatus = {
    PENDING: "PENDING",
    COMPLETED: "COMPLETED"
};
```

---

# 14. General Code Quality Rules

---

### Use Dependency Injection / Service Composition Where Appropriate

Inject dependencies rather than tightly coupling modules.

---

### Never Expose Raw DB Models Directly in API

Use DTOs / Serializers / Transformers.

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

```plaintext id="2h7gxw"
Route → Controller → Complex Logic → DB Query
```

Prefer:

```plaintext id="czey04"
Route → Controller → Service → Repository
```

---

# 15. Naming Convention for Variables / Files

Use consistent casing:

### Files

```plaintext id="m1w3g6"
student.controller.js
student.service.js
student.repository.js
```

### Variables / Functions

```javascript id="ez85h4"
const studentService
function getStudentById()
```

---

# 16. Validation Guidelines

Use validation middleware.

Popular options:

* Joi
* express-validator
* Zod

Example:

```javascript id="63ykq1"
body("name").notEmpty()
body("email").isEmail()
```

---

# 17. Middleware Guidelines

Custom middleware should go under:

```plaintext id="ecwz3o"
middlewares/
├── authMiddleware.js
├── errorHandler.js
├── requestLogger.js
├── validationMiddleware.js
```

---

# 18. Route Organization Guidelines

Separate routes by resource.

```plaintext id="8h5qto"
routes/
├── student.routes.js
├── order.routes.js
├── auth.routes.js
```

Example:

```javascript id="6dl39p"
router.get("/", getStudents);
router.get("/:id", getStudentById);
router.post("/", createStudent);
```

---

# Final Recommended Real-World Structure

```plaintext id="rrv1kq"
StudentManagementAPI/

├── src/
│   ├── controllers/
│   │   └── student.controller.js
│   │
│   ├── services/
│   │   └── student.service.js
│   │
│   ├── repositories/
│   │   └── student.repository.js
│   │
│   ├── models/
│   │   └── student.model.js
│   │
│   ├── dtos/
│   │   ├── requests/
│   │   └── responses/
│   │
│   ├── routes/
│   │   └── student.routes.js
│   │
│   ├── middlewares/
│   ├── validations/
│   ├── config/
│   └── app.js
│
├── server.js
├── .env
└── package.json
```

---

# Mentor Advice

Think of Node.js Express API architecture like a **well-organized operations team**:

* **URLs** = Public Entry Gates
* **Routes** = Traffic Directors
* **Controller** = Request Handlers
* **Service** = Business Logic Team
* **Repository** = Database Access Layer
* **DTO** = Safe Data Contracts
* **Model** = Internal Database Structure

---

# Why This Structure Matters

A clean API structure ensures:

* Faster onboarding of developers
* Easier debugging
* Better scalability
* Cleaner code reviews
* Lower technical debt
* Industry-grade maintainability

 