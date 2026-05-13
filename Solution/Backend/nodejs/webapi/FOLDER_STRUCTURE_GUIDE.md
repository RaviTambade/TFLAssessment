# Backend Folder Structure Guide - Professional Standards & Business Needs

## 📁 Current Project Structure

```
src/
├── app.js                          # Express app configuration
├── connectivity/                   # Database connection setup
│   └── db.js                       # MySQL connection initialization
├── controllers/                    # HTTP request handlers
├── services/                       # Business logic layer
├── repositories/                   # Database access layer (Data Access Object)
├── routers/                        # Route definitions (endpoints)
├── middlewares/                    # Custom middleware functions
├── dtos/                          # Data Transfer Objects
│   ├── requests/                  # Request payload validation
│   └── responses/                 # Response formatting
├── models/                        # Database models/schemas
└── entities/                      # Domain models
```

---

## 🏗️ Layered Architecture Overview (3-Tier Pattern)

```
┌─────────────────────────────────────────────────────────────┐
│                    CLIENT (Postman/Frontend)                 │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│              PRESENTATION LAYER (Controllers)                │
│  • Receives HTTP requests                                    │
│  • Validates input via middleware                            │
│  • Calls Service layer                                       │
│  • Formats & returns HTTP response                           │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│              BUSINESS LOGIC LAYER (Services)                 │
│  • Core business rules & calculations                        │
│  • Data validation & transformation                          │
│  • Calls Repository for data                                 │
│  • Handles business logic errors                             │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│            DATA ACCESS LAYER (Repositories)                  │
│  • Communicates with Database                                │
│  • Executes SQL queries                                      │
│  • Maps database rows to objects                             │
│  • Returns raw data to Service                               │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                   DATABASE (MySQL)                           │
└─────────────────────────────────────────────────────────────┘
```

---

## 📊 Complete Request-Response Flow

```
Browser/Postman Request
        ↓
    ROUTER (routers/)
    Matches URL pattern
        ↓
    CONTROLLER (controllers/)
    1. Receives request object
    2. Extracts parameters (req.params, req.body)
    3. Input validation via middleware
        ↓
    SERVICE (services/)
    1. Applies business rules
    2. Data validation
    3. Complex calculations
    4. Calls Repository
        ↓
    REPOSITORY (repositories/)
    1. Builds SQL query
    2. Queries Database
    3. Maps results to objects
        ↓
    DATABASE (MySQL)
    Executes SQL, returns data
        ↓
    Repository returns result
        ↓
    Service processes result
        ↓
    Controller formats response
        ↓
    Router returns HTTP response
        ↓
    Browser/Postman displays response
```

---

## 📋 Detailed Folder Breakdown

### 1. **connectivity/** - Database Connection Layer
**Purpose:** Centralized database connection management

**Current Contents:**
- `db.js` - MySQL connection pool initialization

**What it should contain:**
```
connectivity/
├── db.js                 # Main DB connection (current)
├── constants.js          # DB constants (host, port, etc.)
├── poolConfig.js         # Connection pool configuration
└── connectionManager.js   # Connection lifecycle management (optional)
```

**Example:**
```javascript
// connectivity/db.js
const mysql = require('mysql2');

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = connection;
```

**Business Need:** Ensures reliable, pooled database connections for high-performance applications.

---

### 2. **routers/** - Route Definitions
**Purpose:** Define all API endpoints and map to controllers

**Current Contents:**
- Multiple route files (authroutes.js, userProfile.routes.js, etc.)

**What it should contain:**
```
routers/
├── v1/                           # Version 1 API endpoints
│   ├── auth.routes.js            # Authentication endpoints
│   ├── user-profiles.routes.js   # User profile endpoints
│   ├── roles.routes.js           # Role management
│   └── index.js                  # Consolidated route exports
├── v2/                           # Version 2 API (for future upgrades)
└── healthcheck.routes.js         # Service health endpoints
```

**Professional Structure Example:**
```javascript
// routers/v1/user-profiles.routes.js
const express = require("express");
const asyncHandler = require("../../middlewares/asyncHandler");
const authMiddleware = require("../../middlewares/authMiddleware");

module.exports = (controller) => {
  const router = express.Router();

  // All routes follow RESTful conventions
  router.get("/:id", authMiddleware, asyncHandler(
    (req, res, next) => controller.getUserProfile(req, res, next)
  ));

  router.post("/", authMiddleware, asyncHandler(
    (req, res, next) => controller.createUserProfile(req, res, next)
  ));

  router.put("/:id", authMiddleware, asyncHandler(
    (req, res, next) => controller.updateUserProfile(req, res, next)
  ));

  router.delete("/:id", authMiddleware, asyncHandler(
    (req, res, next) => controller.deleteUserProfile(req, res, next)
  ));

  return router;
};
```

**REST API Convention:**
```
GET    /api/v1/user-profiles        → Get all profiles (list)
GET    /api/v1/user-profiles/:id    → Get single profile (read)
POST   /api/v1/user-profiles        → Create profile (create)
PUT    /api/v1/user-profiles/:id    → Update profile (update)
DELETE /api/v1/user-profiles/:id    → Delete profile (delete)
```

**Business Need:** Clean URL structure, versioning support, easy maintenance.

---

### 3. **controllers/** - HTTP Request Handlers
**Purpose:** Handle HTTP requests/responses and orchestrate business logic

**Current Contents:**
- Multiple controller files (userProfile.controller.js, etc.)

**What it should contain:**
```
controllers/
├── v1/
│   ├── user-profiles.controller.js
│   ├── auth.controller.js
│   ├── roles.controller.js
│   └── index.js              # Export all controllers
├── base.controller.js         # Abstract base class for common logic
└── healthcheck.controller.js  # Service health check
```

**Professional Controller Example:**
```javascript
// controllers/v1/user-profiles.controller.js
/**
 * User Profile Controller
 * Handles HTTP requests related to user profiles
 * SOLID: Single Responsibility - Only handles HTTP I/O
 */
class UserProfileController {
  constructor(service) {
    this.service = service;
  }

  async getUserProfile(req, res, next) {
    try {
      const userId = req.params.id;

      // 1. Validate input
      if (!userId || isNaN(userId)) {
        return res.status(400).json({
          success: false,
          message: "Invalid user ID",
          statusCode: 400
        });
      }

      // 2. Call service
      const result = await this.service.getUserProfileById(userId);

      // 3. Handle response
      if (!result.success) {
        return res.status(result.statusCode).json(result);
      }

      // 4. Return success
      return res.status(200).json(result);
    } catch (error) {
      next(error); // Pass to error handler
    }
  }
}

module.exports = UserProfileController;
```

**Controller Responsibilities:**
- ✅ Extract request data
- ✅ Validate input parameters
- ✅ Call Service layer methods
- ✅ Format response
- ✅ Handle HTTP status codes
- ❌ Database queries (use Service)
- ❌ Complex business logic (use Service)

**Business Need:** Separates HTTP concerns from business logic, enables easy testing.

---

### 4. **services/** - Business Logic Layer
**Purpose:** Implement core business rules and orchestrate data operations

**Current Contents:**
- Multiple service files (userProfile.service.js, etc.)

**What it should contain:**
```
services/
├── v1/
│   ├── user-profiles.service.js
│   ├── auth.service.js
│   ├── roles.service.js
│   └── index.js
├── base.service.js            # Abstract base service
└── utils/                      # Shared utility services
    ├── email.service.js        # Email sending
    ├── notification.service.js # Push notifications
    └── logger.service.js       # Logging service
```

**Professional Service Example:**
```javascript
// services/v1/user-profiles.service.js
/**
 * User Profile Service
 * Contains business logic for user profiles
 * SOLID: Single Responsibility - Business logic only
 */
class UserProfileService {
  constructor(repository) {
    this.repository = repository;
  }

  async getUserProfileById(userId) {
    // 1. Validate input
    if (!userId || isNaN(userId)) {
      return {
        success: false,
        message: "Invalid user ID provided",
        statusCode: 400
      };
    }

    try {
      // 2. Call repository for data
      const result = await this.repository.getUserProfileById(userId);

      // 3. Check if found
      if (!result) {
        return {
          success: false,
          message: "User profile not found",
          statusCode: 404
        };
      }

      // 4. Apply business transformations
      const transformedData = this.transformUserProfile(result);

      // 5. Return formatted response
      return {
        success: true,
        message: "User profile retrieved successfully",
        data: transformedData
      };
    } catch (error) {
      return {
        success: false,
        message: "Error retrieving user profile",
        statusCode: 500,
        error: error.message
      };
    }
  }

  transformUserProfile(dbRow) {
    // Business logic: map DB fields to DTO
    return {
      id: dbRow.user_id,
      firstName: dbRow.first_name,
      lastName: dbRow.last_name,
      email: dbRow.email,
      contact: dbRow.contact,
      // ... more transformations
    };
  }
}

module.exports = UserProfileService;
```

**Service Responsibilities:**
- ✅ Business rule validation
- ✅ Data transformation
- ✅ Complex calculations
- ✅ Call Repository methods
- ✅ Handle business errors
- ✅ Coordinate multiple operations
- ❌ HTTP requests
- ❌ Database queries directly

**Business Need:** Core business logic centralized, reusable across controllers, easy to test.

---

### 5. **repositories/** - Data Access Layer (DAO Pattern)
**Purpose:** Abstract database operations and queries

**Current Contents:**
- Multiple repository files (userProfile.repository.js, etc.)

**What it should contain:**
```
repositories/
├── v1/
│   ├── user-profiles.repository.js
│   ├── auth.repository.js
│   ├── roles.repository.js
│   └── index.js
├── base.repository.js         # Abstract base repository
└── mappers/
    ├── user-profile.mapper.js # Map DB rows to domain objects
    └── auth.mapper.js
```

**Professional Repository Example:**
```javascript
// repositories/v1/user-profiles.repository.js
/**
 * User Profile Repository
 * Handles all database operations for user profiles
 * SOLID: Single Responsibility - Database access only
 */
class UserProfileRepository {
  constructor(connection) {
    this.connection = connection;
  }

  async getUserProfileById(userId) {
    const query = `
      SELECT 
        u.id AS user_id,
        u.contact,
        u.status,
        p.first_name,
        p.last_name,
        p.gender,
        p.date_of_birth,
        p.email,
        a.enrollment_year,
        a.passing_year,
        a.percentage,
        a.college_name,
        prof.skills
      FROM users u
      LEFT JOIN personal_informations p ON u.id = p.user_id
      LEFT JOIN academic_informations a ON u.id = a.user_id
      LEFT JOIN professional_informations prof ON u.id = prof.user_id
      WHERE u.id = ?
    `;
    
    const [rows] = await this.connection.promise().query(query, [userId]);
    return rows[0] || null;
  }

  async getAllUserProfiles(limit = 10, offset = 0) {
    const query = `
      SELECT * FROM users
      LIMIT ? OFFSET ?
    `;
    
    const [rows] = await this.connection.promise().query(query, [limit, offset]);
    return rows;
  }

  async createUserProfile(userData) {
    const query = `
      INSERT INTO users (contact, status)
      VALUES (?, ?)
    `;
    
    const [result] = await this.connection.promise().query(query, 
      [userData.contact, userData.status]
    );
    
    return result.insertId;
  }
}

module.exports = UserProfileRepository;
```

**Repository Responsibilities:**
- ✅ Execute SQL queries
- ✅ Map database rows to objects
- ✅ Handle query parameters
- ✅ Return raw database data
- ✅ Connection management
- ❌ Business logic
- ❌ Data validation
- ❌ HTTP operations

**Business Need:** Database abstraction, easy to switch databases, centralized query management.

---

### 6. **middlewares/** - Cross-Cutting Concerns
**Purpose:** Handle authentication, validation, logging, error handling, etc.

**Current Contents:**
- asyncHandler.js
- errorHandler.js
- notFoundHandler.js
- updaterolesmiddleware.js

**What it should contain:**
```
middlewares/
├── auth.middleware.js         # JWT/Session authentication
├── errorHandler.js            # Global error handling
├── asyncHandler.js            # Async try-catch wrapper
├── notFoundHandler.js         # 404 handler
├── validation.middleware.js   # Request validation
├── logging.middleware.js      # Request/response logging
├── cors.middleware.js         # CORS configuration
├── rateLimit.middleware.js    # Rate limiting
└── requestId.middleware.js    # Request tracking
```

**Professional Middleware Examples:**

```javascript
// middlewares/auth.middleware.js
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No authentication token provided",
        statusCode: 401
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Invalid token",
      statusCode: 401
    });
  }
};

module.exports = authMiddleware;
```

```javascript
// middlewares/validation.middleware.js
const validateUserProfile = (req, res, next) => {
  const { firstName, lastName, email } = req.body;

  if (!firstName || firstName.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "First name is required",
      statusCode: 400
    });
  }

  if (!email || !isValidEmail(email)) {
    return res.status(400).json({
      success: false,
      message: "Valid email is required",
      statusCode: 400
    });
  }

  next();
};

module.exports = validateUserProfile;
```

```javascript
// middlewares/errorHandler.js
const errorHandler = (error, req, res, next) => {
  console.error("ERROR:", error);

  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    message: message,
    statusCode: statusCode,
    error: process.env.NODE_ENV === "development" ? error.stack : undefined
  });
};

module.exports = errorHandler;
```

**Middleware Responsibilities:**
- ✅ Authentication & Authorization
- ✅ Request validation
- ✅ Logging & monitoring
- ✅ Error handling
- ✅ CORS handling
- ✅ Rate limiting
- ✅ Request transformation

**Business Need:** Centralized security, logging, validation; consistent error handling.

---

### 7. **dtos/** - Data Transfer Objects
**Purpose:** Define request/response shapes for API contracts

**Current Contents:**
- `requests/` - Input validation schemas
- `responses/` - Output formatting

**What it should contain:**
```
dtos/
├── requests/
│   ├── create-user-profile.dto.js
│   ├── update-user-profile.dto.js
│   ├── auth-login.dto.js
│   └── index.js
├── responses/
│   ├── user-profile-response.dto.js
│   ├── auth-response.dto.js
│   ├── error-response.dto.js
│   └── index.js
└── base.dto.js                # Abstract DTO class
```

**Professional DTO Examples:**

```javascript
// dtos/requests/create-user-profile.dto.js
class CreateUserProfileDto {
  constructor(firstName, lastName, email, contact) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.contact = contact;
  }

  static validate(data) {
    const errors = [];

    if (!data.firstName || data.firstName.trim() === "") {
      errors.push("First name is required");
    }
    if (!data.email || !this.isValidEmail(data.email)) {
      errors.push("Valid email is required");
    }

    return {
      isValid: errors.length === 0,
      errors: errors
    };
  }

  static isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

module.exports = CreateUserProfileDto;
```

```javascript
// dtos/responses/user-profile-response.dto.js
class UserProfileResponseDto {
  constructor(id, firstName, lastName, email, contact, status) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.contact = contact;
    this.status = status;
  }

  static fromDbRow(row) {
    return new UserProfileResponseDto(
      row.user_id,
      row.first_name,
      row.last_name,
      row.email,
      row.contact,
      row.status
    );
  }
}

module.exports = UserProfileResponseDto;
```

**DTO Responsibilities:**
- ✅ Define request shapes
- ✅ Define response shapes
- ✅ Input validation
- ✅ Type safety
- ✅ Documentation

**Business Need:** API contract definition, request validation, consistent response formats.

---

### 8. **models/** & **entities/** - Domain Objects
**Purpose:** Represent database tables and business domain objects

**Current Contents:**
- models/userProfile.js
- entities/user.js, updaterolesmodel.js

**Professional Structure:**
```
models/                        # Database schema models
├── user.model.js
├── user-profile.model.js
├── role.model.js
└── base.model.js

entities/                      # Domain/Business entities
├── user.entity.js
├── user-profile.entity.js
├── role.entity.js
└── base.entity.js
```

**Difference:**
- **Model:** Maps to database table structure
- **Entity:** Represents business domain concept

**Example:**
```javascript
// models/user.model.js (Database structure)
class UserModel {
  static schema = {
    id: { type: "INT", primary: true },
    contact: { type: "VARCHAR(20)" },
    status: { type: "ENUM", values: ["active", "inactive"] },
    created_at: { type: "TIMESTAMP", default: "CURRENT_TIMESTAMP" }
  };
}

module.exports = UserModel;
```

```javascript
// entities/user.entity.js (Business object)
class UserEntity {
  constructor(id, contact, status, email) {
    this.id = id;
    this.contact = contact;
    this.status = status;
    this.email = email;
  }

  isActive() {
    return this.status === "active";
  }

  getDisplayName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

module.exports = UserEntity;
```

---

## 🔄 Complete Request Workflow Diagram

```
┌────────────────────────────────────────────────────────────────┐
│  USER REQUEST (HTTP)                                           │
│  GET /api/v1/user-profiles/3                                   │
└────────────────────────────────────────────────────────────────┘
                          ↓
┌────────────────────────────────────────────────────────────────┐
│  ROUTER (routers/v1/user-profiles.routes.js)                   │
│  ✓ Matches route pattern                                       │
│  ✓ Extracts route parameters (id=3)                            │
└────────────────────────────────────────────────────────────────┘
                          ↓
┌────────────────────────────────────────────────────────────────┐
│  MIDDLEWARE CHAIN (middlewares/)                               │
│  1. authMiddleware → Verify JWT token                          │
│  2. asyncHandler → Wrap in try-catch                           │
│  3. loggingMiddleware → Log request                            │
└────────────────────────────────────────────────────────────────┘
                          ↓
┌────────────────────────────────────────────────────────────────┐
│  CONTROLLER (controllers/v1/user-profiles.controller.js)        │
│  getUserProfile(req, res, next)                                │
│  ✓ Extract params: userId = 3                                  │
│  ✓ Input validation                                            │
│  ✓ Call service.getUserProfileById(3)                          │
└────────────────────────────────────────────────────────────────┘
                          ↓
┌────────────────────────────────────────────────────────────────┐
│  SERVICE (services/v1/user-profiles.service.js)                │
│  getUserProfileById(userId)                                    │
│  ✓ Validate userId (not NaN, not null)                         │
│  ✓ Call repository.getUserProfileById(3)                       │
│  ✓ Transform DB data to DTO                                    │
│  ✓ Apply business rules                                        │
└────────────────────────────────────────────────────────────────┘
                          ↓
┌────────────────────────────────────────────────────────────────┐
│  REPOSITORY (repositories/v1/user-profiles.repository.js)       │
│  getUserProfileById(userId)                                    │
│  ✓ Build SQL query with JOINs                                  │
│  ✓ Execute query via connection                                │
│  ✓ Return raw database row                                     │
└────────────────────────────────────────────────────────────────┘
                          ↓
┌────────────────────────────────────────────────────────────────┐
│  DATABASE (MySQL)                                              │
│  ✓ Execute SELECT with JOINs                                   │
│  ✓ Return result set                                           │
└────────────────────────────────────────────────────────────────┘
                          ↓
┌────────────────────────────────────────────────────────────────┐
│  REPOSITORY RETURNS: Raw database row                          │
│  { user_id: 3, first_name: "John", ... }                       │
└────────────────────────────────────────────────────────────────┘
                          ↓
┌────────────────────────────────────────────────────────────────┐
│  SERVICE TRANSFORMS: DTO object                                │
│  {                                                             │
│    success: true,                                              │
│    data: {                                                     │
│      id: 3,                                                    │
│      firstName: "John",                                        │
│      ...                                                       │
│    }                                                           │
│  }                                                             │
└────────────────────────────────────────────────────────────────┘
                          ↓
┌────────────────────────────────────────────────────────────────┐
│  CONTROLLER FORMATS: HTTP response                             │
│  ✓ Set status code (200)                                       │
│  ✓ Set response headers                                        │
│  ✓ Serialize to JSON                                           │
└────────────────────────────────────────────────────────────────┘
                          ↓
┌────────────────────────────────────────────────────────────────┐
│  HTTP RESPONSE (200 OK)                                        │
│  {                                                             │
│    "success": true,                                            │
│    "message": "User profile retrieved successfully",           │
│    "data": {                                                   │
│      "id": 3,                                                  │
│      "firstName": "John",                                      │
│      "lastName": "Doe",                                        │
│      "email": "john@example.com",                              │
│      "contact": "9876543210",                                  │
│      "status": "active"                                        │
│    }                                                           │
│  }                                                             │
└────────────────────────────────────────────────────────────────┘
                          ↓
┌────────────────────────────────────────────────────────────────┐
│  CLIENT RECEIVES & DISPLAYS RESPONSE                           │
└────────────────────────────────────────────────────────────────┘
```

---

## 🎯 Business Layer Mapping to Folders

Your TFL (Training For Life) platform business needs → Code structure:

### User Management Module
```
BUSINESS: User registration, profile management, status tracking

CODE STRUCTURE:
├── routers/v1/user-profiles.routes.js
├── controllers/v1/user-profiles.controller.js
├── services/v1/user-profiles.service.js
├── repositories/v1/user-profiles.repository.js
├── dtos/requests/create-user-profile.dto.js
├── dtos/responses/user-profile-response.dto.js
├── middlewares/validation.middleware.js
└── entities/user.entity.js
```

### Authentication Module
```
BUSINESS: Login, JWT tokens, session management

CODE STRUCTURE:
├── routers/v1/auth.routes.js
├── controllers/v1/auth.controller.js
├── services/v1/auth.service.js
├── repositories/v1/auth.repository.js
├── middlewares/auth.middleware.js
├── dtos/requests/login.dto.js
└── dtos/responses/auth-response.dto.js
```

### Role Management Module
```
BUSINESS: RBAC, permissions, role-based access

CODE STRUCTURE:
├── routers/v1/roles.routes.js
├── controllers/v1/roles.controller.js
├── services/v1/roles.service.js
├── repositories/v1/roles.repository.js
├── middlewares/authorization.middleware.js
└── entities/role.entity.js
```

---

## ✅ Professional Standards Checklist

### Naming Conventions
- [ ] Controllers: `{resource}.controller.js`
- [ ] Services: `{resource}.service.js`
- [ ] Repositories: `{resource}.repository.js`
- [ ] Routes: `{resource}.routes.js`
- [ ] Middlewares: `{feature}.middleware.js`
- [ ] DTOs: `{action}-{resource}.dto.js`
- [ ] camelCase for variables/methods
- [ ] PascalCase for classes/exports
- [ ] kebab-case for file names (except class-based)

### Code Organization
- [ ] One class per file
- [ ] Imports at top of file
- [ ] Exports at bottom
- [ ] Clear comments for complex logic
- [ ] JSDoc for public methods
- [ ] Error handling in every layer

### Separation of Concerns
- [ ] Router: Only route matching
- [ ] Controller: Only HTTP I/O
- [ ] Service: Only business logic
- [ ] Repository: Only database queries
- [ ] Middleware: Only specific concerns

### API Design
- [ ] RESTful endpoints (/api/v1/resources)
- [ ] Proper HTTP methods (GET, POST, PUT, DELETE)
- [ ] Consistent response format
- [ ] Proper status codes
- [ ] Error responses structured
- [ ] API versioning support

---

## 📝 Missing Folders (Recommendations)

### 1. **config/** - Configuration Management
```
config/
├── database.config.js
├── app.config.js
├── jwt.config.js
└── constants.js
```

### 2. **utils/** - Utility Functions
```
utils/
├── validators.js
├── formatters.js
├── helpers.js
└── constants.js
```

### 3. **tests/** - Test Files
```
tests/
├── unit/
│   ├── controllers/
│   ├── services/
│   └── repositories/
├── integration/
└── e2e/
```

### 4. **logs/** - Logging
```
logs/
├── error.log
├── access.log
└── debug.log
```

### 5. **constants/** - Application Constants
```
constants/
├── http-status.constants.js
├── error-messages.constants.js
├── user-status.constants.js
└── response-messages.constants.js
```

### 6. **exceptions/** - Custom Exceptions
```
exceptions/
├── app-error.exception.js
├── validation-error.exception.js
├── not-found-error.exception.js
└── unauthorized-error.exception.js
```

---

## 🚀 Recommended Project Structure (Professional Standard)

```
src/
├── config/                    # Configuration files
│   ├── database.config.js
│   ├── app.config.js
│   └── constants.js
│
├── connectivity/              # Database connection
│   ├── db.js
│   └── connectionManager.js
│
├── v1/                        # API Version 1
│   ├── modules/               # Feature-based organization (OPTIONAL)
│   │   ├── user-profiles/
│   │   │   ├── controllers/
│   │   │   ├── services/
│   │   │   ├── repositories/
│   │   │   ├── dtos/
│   │   │   └── routes/
│   │   ├── auth/
│   │   └── roles/
│   │
│   ├── controllers/           # Layer-based organization (CURRENT)
│   ├── services/
│   ├── repositories/
│   ├── routers/
│   └── middlewares/
│
├── middlewares/               # Global middlewares
│   ├── auth.middleware.js
│   ├── errorHandler.js
│   └── ...
│
├── dtos/                      # Data Transfer Objects
│   ├── requests/
│   └── responses/
│
├── entities/                  # Domain entities
├── models/                    # Database models
├── utils/                     # Utility functions
├── exceptions/                # Custom exceptions
├── tests/                     # Test files
├── logs/                      # Application logs
│
├── app.js                     # Express app configuration
└── server.js                  # Server entry point
```

---

## 📚 Summary Table

| Folder | Purpose | Contains | Communicates With |
|--------|---------|----------|-------------------|
| **connectivity** | DB Connection | Connection pool | Database |
| **routers** | Route matching | Express routes | Controllers |
| **controllers** | HTTP I/O | Request handlers | Services |
| **services** | Business Logic | Rules, validation | Repositories |
| **repositories** | Data Access | SQL queries | Database |
| **middlewares** | Cross-cutting | Auth, logging | Entire app |
| **dtos** | Data contracts | Validation schemas | Controllers, Services |
| **entities** | Domain objects | Business classes | Services |
| **models** | DB schema | Table definitions | Repositories |

---

## 🎓 Key Takeaways

1. **Layered Architecture** ensures clear separation of concerns
2. **Each layer has a single responsibility** (SOLID principle)
3. **Data flows downward** (Controller → Service → Repository → DB)
4. **Errors flow upward** (DB → Repository → Service → Controller → Client)
5. **Middleware acts as gatekeeper** for cross-cutting concerns
6. **DTOs define contracts** between layers
7. **Professional naming** makes code discoverable
8. **Version support** enables API evolution
9. **Modularity** enables testing and scaling
10. **Clear structure** onboards new developers faster
