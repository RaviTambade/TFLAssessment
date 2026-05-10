# 🔐 Role-Based Access Control

Now let’s design **RBAC (Role-Based Access Control)** properly inside your **TFL CoMentor – Membership Module**.

This is not just theory — this is **industry-grade security architecture** your students must understand.

**RBAC (Role-Based Access Control)** means:

> Users do NOT get permissions directly.
> Users get Roles.
> Roles contain Permissions.

So access is controlled by **role assignment**, not by user-specific rules.


# 🏗 RBAC Architecture Inside Membership Module

Your service:

**Membership & Roles Management (Java – Spring Security)**

Database: `membership_db`



# 🧱 Core RBAC Tables (MySQL Design)

### 1️⃣ Users

```sql
Users
------
Id (PK)
Username
Email
PasswordHash
IsActive
CreatedAt
```



### 2️⃣ Roles

```sql
Roles
------
Id (PK)
RoleName
Description
```

Examples:

* ADMIN
* MENTOR
* STUDENT
* SME
* DEVOPS

### 3️⃣ Permissions

```sql
Permissions
------------
Id (PK)
PermissionName
Description
```

Examples:

* CREATE_TEST
* VIEW_REPORT
* ASSIGN_PROJECT
* SUBMIT_ANSWER
* DEPLOY_SERVICE

### 4️⃣ User_Roles (Mapping Table)

```sql
User_Roles
------------
UserId (FK)
RoleId (FK)
```


### 5️⃣ Role_Permissions (Mapping Table)

```sql
Role_Permissions
------------------
RoleId (FK)
PermissionId (FK)
```


# 📊 ER Diagram (Conceptual View)

```ascii
Users ───────< User_Roles >────── Roles ───────< Role_Permissions >────── Permissions
```

This ensures:

- ✔ Clean separation
- ✔ Scalable security
- ✔ Easy to add new roles
- ✔ No hardcoding in application


# 🧠 How Access Works (Step-by-Step)

```ascii
Login Request
     │
     ▼
Validate Credentials
     │
     ▼
Fetch User Roles
     │
     ▼
Fetch Role Permissions
     │
     ▼
Generate JWT Token (with roles/claims)
     │
     ▼
Client Sends Token in Every Request
     │
     ▼
Spring Security Checks Permission
```

# 🔑 JWT + RBAC Flow

When user logs in:

JWT payload contains:

```json
{
  "sub": "ravi",
  "roles": ["MENTOR"],
  "permissions": ["CREATE_TEST", "VIEW_REPORT"],
  "exp": 1710000000
}
```

Now:

If API requires:

```java
@PreAuthorize("hasAuthority('CREATE_TEST')")
```

Only users with that permission can access it.


# 🎯 RBAC in TFL CoMentor Context

| Role    | What They Can Do              |
| ------- | ----------------------------- |
| ADMIN   | Manage users, roles, system   |
| MENTOR  | Assign projects, create tests |
| STUDENT | Submit answers, view reports  |
| SME     | Create question bank          |
| DEVOPS  | Deploy services               |

# 🏢 Real Industry Analogy

Think of a hospital:

| Role         | Permission            |
| ------------ | --------------------- |
| Doctor       | Prescribe medicine    |
| Nurse        | Update patient record |
| Receptionist | Book appointment      |
| Admin        | Full access           |

You don’t assign “Prescribe Medicine” to a specific person.
You assign them the **Doctor role**.

That is RBAC.



# 🧩 Why RBAC is Better Than Hardcoding

❌ Bad approach:

```java
if(user.getUsername().equals("ravi")) {
    // allow
}
```

❌ Also bad:

```java
if(user.getRole().equals("MENTOR"))
```

✔ Correct approach:

```java
@PreAuthorize("hasAuthority('ASSIGN_PROJECT')")
```

This decouples business logic from security logic.



# 🚀 Advanced Version (Future Growth)

Later you can implement:

### 🔹 Hierarchical Roles

ADMIN > MENTOR > STUDENT

### 🔹 Multi-Tenant RBAC

College A Mentor cannot access College B data.

### 🔹 Dynamic Permission Engine

Permissions stored in DB and changeable without code deploy.


# 🧠 Teaching Strategy

- Step 1: Explain simple login
- Step 2: Add roles
- Step 3: Add permissions
- Step 4: Enforce via annotation
- Step 5: Show security breach example
- Step 6: Fix using RBAC

They will NEVER forget it.


# 📦 How It Fits in Your Microservice Architecture

```ascii
Client → API Gateway → Membership Service
                        │
                        ├─ Authenticate
                        ├─ Issue JWT
                        └─ Validate Token
```

Other services trust the JWT.


# 🏁 Final Clarity

RBAC answers:

* Who are you? → Authentication
* What can you do? → Authorization
* How is it enforced? → Role + Permission mapping
* Where is it stored? → membership_db


Excellent Ravi 👨‍🏫👏

Below is a **production-ready MySQL DDL script** for implementing **RBAC (Role-Based Access Control)** inside your **TFL CoMentor – Membership Module**.

This follows:

* ✅ Database-per-service pattern
* ✅ Proper FK constraints
* ✅ Unique indexes
* ✅ Audit columns
* ✅ Scalable design

---

# 🗄 Database: `membership_db`

```sql
CREATE DATABASE IF NOT EXISTS membership_db;
USE membership_db;
```

---

# 👤 1️⃣ Users Table

```sql
CREATE TABLE Users (
    Id BIGINT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(100) NOT NULL UNIQUE,
    Email VARCHAR(150) NOT NULL UNIQUE,
    PasswordHash VARCHAR(255) NOT NULL,
    IsActive BOOLEAN DEFAULT TRUE,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

---

# 🎭 2️⃣ Roles Table

```sql
CREATE TABLE Roles (
    Id BIGINT AUTO_INCREMENT PRIMARY KEY,
    RoleName VARCHAR(100) NOT NULL UNIQUE,
    Description VARCHAR(255),
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Example roles:

* ADMIN
* MENTOR
* STUDENT
* SME
* DEVOPS

---

# 🔑 3️⃣ Permissions Table

```sql
CREATE TABLE Permissions (
    Id BIGINT AUTO_INCREMENT PRIMARY KEY,
    PermissionName VARCHAR(150) NOT NULL UNIQUE,
    Description VARCHAR(255),
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Example permissions:

* CREATE_TEST
* ASSIGN_PROJECT
* VIEW_REPORT
* SUBMIT_ANSWER
* MANAGE_USERS

---

# 🔁 4️⃣ User_Roles Mapping Table

Many-to-many relationship between Users and Roles.

```sql
CREATE TABLE User_Roles (
    UserId BIGINT NOT NULL,
    RoleId BIGINT NOT NULL,
    AssignedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (UserId, RoleId),
    CONSTRAINT FK_UserRoles_User
        FOREIGN KEY (UserId) REFERENCES Users(Id)
        ON DELETE CASCADE,
    CONSTRAINT FK_UserRoles_Role
        FOREIGN KEY (RoleId) REFERENCES Roles(Id)
        ON DELETE CASCADE
);
```

---

# 🔁 5️⃣ Role_Permissions Mapping Table

Many-to-many between Roles and Permissions.

```sql
CREATE TABLE Role_Permissions (
    RoleId BIGINT NOT NULL,
    PermissionId BIGINT NOT NULL,
    AssignedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (RoleId, PermissionId),
    CONSTRAINT FK_RolePermissions_Role
        FOREIGN KEY (RoleId) REFERENCES Roles(Id)
        ON DELETE CASCADE,
    CONSTRAINT FK_RolePermissions_Permission
        FOREIGN KEY (PermissionId) REFERENCES Permissions(Id)
        ON DELETE CASCADE
);
```

---

# 📊 Optional: User_Sessions Table (For JWT Tracking / Logout Control)

```sql
CREATE TABLE User_Sessions (
    Id BIGINT AUTO_INCREMENT PRIMARY KEY,
    UserId BIGINT NOT NULL,
    JwtToken TEXT NOT NULL,
    IsRevoked BOOLEAN DEFAULT FALSE,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ExpiryDate TIMESTAMP,
    CONSTRAINT FK_UserSessions_User
        FOREIGN KEY (UserId) REFERENCES Users(Id)
        ON DELETE CASCADE
);
```

Useful for:

* Logout support
* Token blacklisting
* Multi-device login tracking

---

# 🧠 ER Relationship Overview

```ascii
Users ───────< User_Roles >────── Roles ───────< Role_Permissions >────── Permissions
      │
      └────────────< User_Sessions
```

---

# 🚀 Recommended Indexes for Performance

```sql
CREATE INDEX idx_userroles_roleid ON User_Roles(RoleId);
CREATE INDEX idx_rolepermissions_permissionid ON Role_Permissions(PermissionId);
CREATE INDEX idx_users_email ON Users(Email);
```

---

# 🔐 Why This Design Is Industry-Ready

- ✔ No direct permissions assigned to users
- ✔ Easy to add new roles without code change
- ✔ Supports hierarchical expansion
- ✔ Microservice friendly
- ✔ JWT-ready
- ✔ Clean normalization



# 🧠 Teaching Tip

Authentication → Who are you?
Authorization → What are you allowed to do?

RBAC solves Authorization using:

* Roles
* Permissions
* Mapping tables



This will create:

* ✅ Roles (ADMIN, MENTOR, STUDENT)
* ✅ Permissions
* ✅ Role-Permission mappings
* ✅ Sample users
* ✅ User-Role mappings

Database: `membership_db`


# 🗄 Use Database

```sql
USE membership_db;
```


# 🎭 1️⃣ Insert Roles

```sql
INSERT INTO Roles (RoleName, Description) VALUES
('ADMIN', 'System Administrator with full access'),
('MENTOR', 'Mentor who can create tests and assign projects'),
('STUDENT', 'Student who can take tests and submit answers');
```


# 🔑 2️⃣ Insert Permissions

```sql
INSERT INTO Permissions (PermissionName, Description) VALUES
('MANAGE_USERS', 'Create and manage users'),
('CREATE_TEST', 'Create assessments and tests'),
('ASSIGN_PROJECT', 'Assign projects to students'),
('VIEW_REPORT', 'View performance reports'),
('SUBMIT_ANSWER', 'Submit answers for evaluation'),
('VIEW_OWN_REPORT', 'View personal performance report');
```



# 🔗 3️⃣ Map Role → Permissions



## ADMIN gets all permissions

```sql
INSERT INTO Role_Permissions (RoleId, PermissionId)
SELECT r.Id, p.Id
FROM Roles r, Permissions p
WHERE r.RoleName = 'ADMIN';
```

## MENTOR permissions

```sql
INSERT INTO Role_Permissions (RoleId, PermissionId)
SELECT r.Id, p.Id
FROM Roles r
JOIN Permissions p
WHERE r.RoleName = 'MENTOR'
AND p.PermissionName IN (
    'CREATE_TEST',
    'ASSIGN_PROJECT',
    'VIEW_REPORT'
);
```


## STUDENT permissions

```sql
INSERT INTO Role_Permissions (RoleId, PermissionId)
SELECT r.Id, p.Id
FROM Roles r
JOIN Permissions p
WHERE r.RoleName = 'STUDENT'
AND p.PermissionName IN (
    'SUBMIT_ANSWER',
    'VIEW_OWN_REPORT'
);
```



# 👤 4️⃣ Insert Sample Users

⚠️ Passwords should be **hashed** in real system.
Below values are placeholder hashes.

```sql
INSERT INTO Users (Username, Email, PasswordHash) VALUES
('admin_user', 'admin@tfl.com', '$2a$10$adminhashedpassword'),
('mentor_ravi', 'mentor@tfl.com', '$2a$10$mentorhashedpassword'),
('student_akash', 'student@tfl.com', '$2a$10$studenthashedpassword');
```



# 🔗 5️⃣ Map Users → Roles



## Assign ADMIN role

```sql
INSERT INTO User_Roles (UserId, RoleId)
SELECT u.Id, r.Id
FROM Users u, Roles r
WHERE u.Username = 'admin_user'
AND r.RoleName = 'ADMIN';
```



## Assign MENTOR role

```sql
INSERT INTO User_Roles (UserId, RoleId)
SELECT u.Id, r.Id
FROM Users u, Roles r
WHERE u.Username = 'mentor_ravi'
AND r.RoleName = 'MENTOR';
```



## Assign STUDENT role

```sql
INSERT INTO User_Roles (UserId, RoleId)
SELECT u.Id, r.Id
FROM Users u, Roles r
WHERE u.Username = 'student_akash'
AND r.RoleName = 'STUDENT';
```



# 🧠 Verify Data

### Check Roles Assigned

```sql
SELECT u.Username, r.RoleName
FROM Users u
JOIN User_Roles ur ON u.Id = ur.UserId
JOIN Roles r ON ur.RoleId = r.Id;
```



### Check Permissions per Role

```sql
SELECT r.RoleName, p.PermissionName
FROM Roles r
JOIN Role_Permissions rp ON r.Id = rp.RoleId
JOIN Permissions p ON rp.PermissionId = p.Id
ORDER BY r.RoleName;
```



# 🧠 Teaching Explanation for Students

After login:

- 1️⃣ Fetch User
- 2️⃣ Fetch Roles
- 3️⃣ Fetch Role Permissions
- 4️⃣ Embed in JWT
- 5️⃣ Enforce via `@PreAuthorize`

They should understand:

> User → Role → Permission → API Access


# 🚀 What This Enables in TFL CoMentor

| User          | Can Do                        |
| ------------- | ----------------------------- |
| admin_user    | Manage entire system          |
| mentor_ravi   | Create tests, assign projects |
| student_akash | Take tests, view own report   |

This perfectly aligns with your:

* Assessment Orchestrator
* Evaluation Service
* Insight Core


Excellent Ravi 👨‍🏫🔥

Now we are entering **enterprise SaaS-level security architecture**.

Your TFL CoMentor becomes:

> One platform
> Multiple colleges / institutes / companies
> Strict data isolation
> Tenant-aware RBAC

This is called:

# 🏢 Multi-Tenant RBAC (Role-Based Access Control)

---

# 🧠 First: What is Multi-Tenancy?

A **Tenant** = One independent organization using your system.

Example:

| Tenant   | Example                    |
| -------- | -------------------------- |
| Tenant A | Pune Engineering College   |
| Tenant B | Mumbai IT Academy          |
| Tenant C | Corporate Training Company |

All use the same application
But their data must NEVER mix.

---

# 🔐 Problem With Basic RBAC

In normal RBAC:

```
User → Role → Permission
```

But if Ravi is a Mentor in:

* College A
* College B

His permissions must apply separately per tenant.

So we upgrade to:

```
Tenant → User → Role → Permission
```

# 🏗 Multi-Tenant RBAC Database Design

Database: `membership_db`

# 1️⃣ Tenants Table

```sql
CREATE TABLE Tenants (
    Id BIGINT AUTO_INCREMENT PRIMARY KEY,
    TenantName VARCHAR(150) NOT NULL UNIQUE,
    Domain VARCHAR(150),
    IsActive BOOLEAN DEFAULT TRUE,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

# 2️⃣ Users Table (Tenant-Aware)

User now belongs to a tenant.

```sql
CREATE TABLE Users (
    Id BIGINT AUTO_INCREMENT PRIMARY KEY,
    TenantId BIGINT NOT NULL,
    Username VARCHAR(100) NOT NULL,
    Email VARCHAR(150) NOT NULL,
    PasswordHash VARCHAR(255) NOT NULL,
    IsActive BOOLEAN DEFAULT TRUE,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT FK_User_Tenant
        FOREIGN KEY (TenantId) REFERENCES Tenants(Id)
        ON DELETE CASCADE,
    UNIQUE (TenantId, Username),
    UNIQUE (TenantId, Email)
);
```

⚠️ Notice:
Username can repeat across tenants.

# 3️⃣ Roles Table (Tenant Scoped)

Roles can be:

* Global
* Tenant-specific

Here we design tenant-specific:

```sql
CREATE TABLE Roles (
    Id BIGINT AUTO_INCREMENT PRIMARY KEY,
    TenantId BIGINT NOT NULL,
    RoleName VARCHAR(100) NOT NULL,
    Description VARCHAR(255),
    CONSTRAINT FK_Role_Tenant
        FOREIGN KEY (TenantId) REFERENCES Tenants(Id)
        ON DELETE CASCADE,
    UNIQUE (TenantId, RoleName)
);
```

Now:
Tenant A can have ADMIN
Tenant B can also have ADMIN
But they are isolated.

# 4️⃣ Permissions (Global)

Permissions are usually system-wide.

```sql
CREATE TABLE Permissions (
    Id BIGINT AUTO_INCREMENT PRIMARY KEY,
    PermissionName VARCHAR(150) NOT NULL UNIQUE,
    Description VARCHAR(255)
);
```

# 5️⃣ User_Roles (Tenant-Aware)

```sql
CREATE TABLE User_Roles (
    UserId BIGINT NOT NULL,
    RoleId BIGINT NOT NULL,
    AssignedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (UserId, RoleId),
    FOREIGN KEY (UserId) REFERENCES Users(Id) ON DELETE CASCADE,
    FOREIGN KEY (RoleId) REFERENCES Roles(Id) ON DELETE CASCADE
);
```

# 6️⃣ Role_Permissions

```sql
CREATE TABLE Role_Permissions (
    RoleId BIGINT NOT NULL,
    PermissionId BIGINT NOT NULL,
    PRIMARY KEY (RoleId, PermissionId),
    FOREIGN KEY (RoleId) REFERENCES Roles(Id) ON DELETE CASCADE,
    FOREIGN KEY (PermissionId) REFERENCES Permissions(Id) ON DELETE CASCADE
);
```

# 🧠 New ER Diagram

```ascii
Tenants
   │
   ├── Users
   │      └── User_Roles
   │
   └── Roles
           └── Role_Permissions
                   
Permissions (Global)
```


# 🔑 Multi-Tenant JWT Design

When user logs in, JWT should contain:

```json
{
  "sub": "mentor_ravi",
  "tenantId": 2,
  "roles": ["MENTOR"],
  "permissions": ["CREATE_TEST", "VIEW_REPORT"],
  "exp": 1710000000
}
```

Now every API request:

- ✔ Extract tenantId
- ✔ Validate user
- ✔ Filter all queries by tenantId


# 🧠 Critical Rule in Multi-Tenant Systems

Every table in every microservice must contain:

```
TenantId
```

Example:

In Assessment DB:

```
Tests
------
Id
TenantId
Name
CreatedBy
```

Then all queries become:

```sql
SELECT * FROM Tests 
WHERE TenantId = :tenantId;
```

This prevents cross-tenant data leaks.



# 🏢 Real-World Example

Companies using this model:

* Salesforce
* Slack
* Zoho

Each customer is a tenant.

Their data is isolated but system is shared.



# 🔥 Advanced Upgrade: Super Admin

Add:

Global ADMIN who can manage all tenants.

For that:

* Create SystemRoles table
* Or allow TenantId = NULL for system-wide roles



# 🧠 Three Multi-Tenancy Models (Teach Students This)

| Model                       | Description       | Complexity |
| --------------------------- | ----------------- | ---------- |
| Shared DB + Shared Schema   | TenantId column   | Easy       |
| Shared DB + Separate Schema | Schema per tenant | Medium     |
| Separate DB per Tenant      | Full isolation    | Complex    |

For TFL CoMentor:
Start with **Shared DB + TenantId column**



# 🚀 How This Changes Your TFL Architecture

Before:

```
User → Role → Permission
```

Now:

```
Tenant → User → Role → Permission
```

And every microservice becomes:

```
Tenant-aware service
```
> “Security is not about login.
> Security is about isolation.”
 Tap your potential
 