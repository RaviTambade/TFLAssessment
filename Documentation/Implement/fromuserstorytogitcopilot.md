

# TFLCoMentor Project From UserStory to using GitCopilot as coding assistant

## Project Name: **TFL Assessment Engine**

Good morning students 🌱💻

Let me explain how a **real software engineering project** evolves at Transflower — from **idea to implementation**, and now even **using AI agents to accelerate development**.

This project is called **TFL Assessment Engine**.


# 1️⃣ Problem Identification (Requirement Stage)

At Transflower we conduct many programs:

* KT Workshops
* Full-Time Courses
* Skill Enhancement Programs
* Project-based Learning

But the **assessment of students** was mostly **manual and human-based**.

Mentors evaluated:

* Knowledge
* Project quality
* Technical understanding
* Employability readiness

This process worked, but it had limitations.

So we asked a question:

**Can we build an AI-assisted system that helps evaluate students better?**

That is how the **TFL Assessment Engine** idea was born.


# 2️⃣ Purpose of the TFL Assessment Engine

The goal is **not just scoring students**.

The real purpose is:

- ✔ Identify **Skill Gaps**
- ✔ Track **Learning Progress**
- ✔ Support **Mentors in evaluation**
- ✔ Improve **Student Employability**

Important principle:

⚠ AI should **assist mentors**, not replace them.

Mentors should spend more time **guiding students**, not only **checking answers**.


# 3️⃣ Key Capabilities of the System

The system evaluates students based on multiple aspects.

### Concept Understanding

* Technical definitions
* Core concepts

### Logic and Coding

* Writing code
* Debugging code
* Understanding system flow

### Architecture Understanding

* Application architecture
* System design

### Project Evaluation

* Project quality
* Reasoning and trade-offs

### Diagram and Design Thinking

* Flow diagrams
* Architecture diagrams

This helps evaluate **true engineering readiness**.


# 4️⃣ Curriculum Alignment

The assessment system is tightly aligned with **TFL curriculum**.

It supports learning tracks like:

* ASP.NET
* Java
* Full Stack Development
* Professional Skill Programs

The system understands:

* Which technology the student is learning
* Which projects they completed
* What skills they should have at that stage

# 5️⃣ System Users (Role-Based Access)

The platform supports **multiple roles**.

### 👨‍🎓 Student

* Take assessments
* Submit projects
* View skill gap reports

### 👨‍🏫 Mentor

* Evaluate students
* Guide learning
* Track progress

### 🧠 Subject Matter Expert

* Define technical standards
* Create advanced evaluation criteria

### 🏢 Employer

* Access student profiles
* Review skill reports
* Identify employable candidates

This creates a **complete talent pipeline**.

Student → Mentor → SME → Employer

# 6️⃣ High-Level System Architecture

The **TFL Assessment Engine** follows a typical **software architecture**.

### Frontend Layer

User interfaces such as:

* Student Dashboard
* Mentor Dashboard
* SME Dashboard
* Employer Dashboard

Possible technologies:

* Angular
* React
* jQuery
* HTML
* AJAX


### API Layer

Backend services expose functionality through:

* **REST APIs**

Example services:

* Assessment API
* Project Evaluation API
* Skill Gap Analysis API
* User Management API


### Business Logic Layer

This layer handles:

* Scoring algorithms
* Skill gap analysis
* Learning recommendations
* Assessment workflows

### Data Layer

Database stores:

* Users
* Assessments
* Projects
* Scores
* Skill reports

Data formats may include:

* Database tables
* PDF reports
* CSV exports


# 7️⃣ Application Development Options

This system can be developed using multiple technology stacks.

Examples:

### .NET Stack

* ASP.NET MVC
* ASP.NET Web API
* C#
* SQL Server

### Java Stack

* Spring Boot
* REST APIs
* MySQL

### Frontend

* Angular
* React
* jQuery + HTML

# 8️⃣ Online Assessment Flow

A typical student experience:

1️⃣ Student logs into portal
2️⃣ Selects assessment
3️⃣ System shows questions
4️⃣ Student answers questions
5️⃣ Next / Submit
6️⃣ System evaluates answers
7️⃣ Skill report generated

This works similar to an **online examination system**.

# 9️⃣ AI Agent Integration (Modern Approach)

Now we add **AI into the development process**.

AI can assist in:

### Skeleton Code Generation

AI can generate:

* Controller classes
* API endpoints
* Database models
* Service layer templates

Example prompt:

"Generate ASP.NET Core Web API skeleton for student assessment system."

AI generates:

* Controllers
* Models
* Services
* Repository structure

This **accelerates development**.

### AI for Assessment

AI can also generate:

* Coding questions
* System design questions
* Debugging challenges
* Project evaluation criteria


### AI for Skill Gap Analysis

AI can analyze:

Student code → Identify:

* Logic issues
* Design problems
* Missing concepts

# 🔟 Why This Project Is Important

Students working on this project learn:

- ✔ Requirement analysis
- ✔ System design
- ✔ Architecture thinking
- ✔ Full stack development
- ✔ AI-assisted engineering

This is exactly how **real industry products are built**.



# Mentor Message to Students

Remember this.

Good engineers do not only **write code**.

They:

* Understand the **problem**
* Design the **system**
* Build the **solution**
* Improve it using **modern tools like AI**

And that is exactly what we practice at **Transflower**.

🌱
**Think like engineers. Build like engineers.**



# Mentor Explanation: From ASPX Applications to Modern Cloud-Ready Systems

During the session we discussed how **enterprise applications were built earlier and how modern applications are designed today**.

## 1️⃣ Earlier Approach – ASPX Based Applications

Many traditional business applications were built using **ASP.NET Web Forms (.ASPX)**.

Typical characteristics:

* Heavy use of **Web Server Controls**
* Large **ASPX pages**
* Logic mixed with UI
* Many **Stored Procedures in SQL Server**
* Business logic partly inside database

Example architecture looked like this:

Application → ASPX Pages → Stored Procedures → SQL Server

In many systems:

⚠ **70% logic was inside stored procedures**

Developers used:

* ASPX controls
* JavaScript
* DOM programming
* jQuery

These applications worked, but they had limitations.



## 2️⃣ The Classic Software Engineering Joke

In many companies developers say:

> **“If something is working, don't touch it.”** 😄

Why?

Because older systems often become **very complex**.

Changing one part may break another part.


## 3️⃣ Problems With Traditional Architecture

When applications grow large, several challenges appear.

### Tight Database Dependency

Business logic stored in **Stored Procedures**

Problems:

* Hard to maintain
* Hard to version control
* Hard to scale


### Application Downtime

When business logic changes:

1. Modify stored procedure
2. Modify application code
3. Rebuild application
4. Deploy again

During this process:

⚠ **Application may go offline**

Which means:

* Customers cannot use the system
* Business operations stop temporarily



### Data Growth Problem

Over time:

* Database grows
* Queries become slow
* Stored procedures become complex

Maintenance becomes difficult.



# 4️⃣ Modern Software Engineering Approach

Today applications follow **Layered Architecture**.

Typical layers:

### Frontend Layer

User interface

Technologies:

* Angular
* React
* Vue.js
* Mobile (Flutter / React Native)

Responsibilities:

* UI rendering
* User interaction
* API calls


### Backend Layer

Core application logic.

Technologies:

* ASP.NET Core
* Java Spring Boot
* Node.js

Responsibilities:

* Business logic
* Authentication
* APIs
* Application workflows


### Data Layer

Responsible for:

* Database storage
* Data access
* ORM tools

Technologies:

* SQL Server
* MySQL
* PostgreSQL
* Entity Framework
* Hibernate


# 5️⃣ Parallel Development

With layered architecture:

Different teams can work **in parallel**.

Example:

Frontend Team
→ Angular / React developers

Backend Team
→ API developers

Database Team
→ Data models

This improves **development speed** and **maintainability**.


# 6️⃣ Cloud Ready Applications

Modern applications must be **cloud-ready**.

Important characteristics:

- ✔ Scalable
- ✔ Modular
- ✔ API-driven
- ✔ Deployable without downtime

Cloud platforms:

* AWS
* Azure
* Google Cloud


# 7️⃣ Example: TFL Assessment Engine

The **TFL Assessment Engine** we discussed will follow modern architecture.

Example structure:

Frontend
→ Student Dashboard
→ Mentor Dashboard
→ Employer Dashboard

Backend
→ Assessment APIs
→ Skill gap analysis
→ Evaluation engine

Database
→ Students
→ Assessments
→ Results
→ Skill reports

AI Layer
→ Question generation
→ Code evaluation
→ Skill analysis



# 8️⃣ What Students Must Learn

As future engineers you must understand:

- ✔ System architecture
- ✔ Frontend frameworks
- ✔ Backend APIs
- ✔ Databases
- ✔ Cloud deployment

Not just **writing code**, but **designing systems**.


# Mentor Message

A **Software Engineer** is not only someone who writes syntax.

A real engineer understands:

* How the **system works**
* How the **layers interact**
* How to build **scalable applications**

And that is exactly what we practice at **Transflower**.

🌱
**Learn systems, not just syntax.**

 
# Mentor Explanation: TFL Assessment Engine Architecture

In our discussion we talked about how **TFL Assessment Engine** will become the **core system of Transflower learning and assessment**.

This system is not just a **question-answer system**.
It is a **knowledge engine** built on **Skill Taxonomy and Curriculum Graph**.

 

# 1️⃣ Skill Taxonomy (Foundation of the System)

The first thing we define is a **Skill Taxonomy**.

Skill taxonomy means a **structured map of skills**.

Example:

```
Technology
   → Programming Language
        → Concepts
             → Topics
                  → Problems
                       → Assignments
```

Example for **C#**

```
C#
   → OOP
       → Classes
       → Inheritance
       → Polymorphism
```

Example for **Databases**

```
Database
   → SQL
       → Tables
       → Joins
       → Indexes
       → Transactions
```

This structure helps the system understand:

- ✔ What the student should learn
- ✔ What questions should be asked
- ✔ What skills should be evaluated

 

# 2️⃣ Curriculum Graph

Instead of a simple syllabus list, we build a **Curriculum Graph**.

A graph connects:

* Concepts
* Topics
* Technologies
* Difficulty levels

Example:

```
Programming
   → Data Structures
        → Arrays
        → Linked List
        → Trees
```

Each concept will have **difficulty levels**.

### Difficulty Levels

- 1️⃣ Beginner
- 2️⃣ Intermediate
- 3️⃣ Advanced

Questions will be tagged accordingly.



# 3️⃣ Question Blueprint Engine

The system will contain a **Question Blueprint Engine**.

This engine defines:

* Which concept the question belongs to
* Difficulty level
* Question type

Example:

| Field      | Example       |
| ---------- | ------------- |
| Technology | .NET          |
| Concept    | LINQ          |
| Level      | Intermediate  |
| Type       | Coding        |
| Skill      | Query writing |


# 4️⃣ Question Database (Initial Stage)

Initially questions will be added manually.

Example database table:

```
Questions
---------
QuestionId
Technology
Concept
Difficulty
QuestionText
Options
CorrectAnswer
Explanation
```

Example SQL:

```sql
CREATE TABLE Questions(
   QuestionId INT PRIMARY KEY,
   Technology VARCHAR(50),
   Concept VARCHAR(100),
   Difficulty VARCHAR(20),
   QuestionText TEXT,
   CorrectAnswer VARCHAR(50)
);
```

Mentors and **Subject Matter Experts (SME)** will verify questions.


# 5️⃣ Future Stage: AI Generated Questions

In the future, AI will generate questions automatically.

Workflow:

AI Engine → Generate Question
↓
Subject Matter Expert → Verify
↓
Approved → Stored in Database

This reduces **repetitive manual work**.



# 6️⃣ Role of Subject Matter Expert

SME ensures:

- ✔ Correct question
- ✔ Correct options
- ✔ Correct answer
- ✔ Correct difficulty level

This ensures **quality control**.



# 7️⃣ What is LLM?

During the session we discussed **LLM**.

LLM means:

**Large Language Model**

Examples:

* ChatGPT
* Claude
* LLaMA
* Gemini

ChatGPT is a **product built using an LLM**.



# 8️⃣ How LLM Works in the System

Example use case.

Mentor prompt:

```
Generate 10 interview questions for .NET Intermediate Developer
```

The LLM processes:

* Training data
* Knowledge patterns
* Technical content

Then generates questions like:

1. What is dependency injection in ASP.NET Core?
2. Explain middleware pipeline.
3. Difference between IEnumerable and IQueryable.


# 9️⃣ Data Sources for LLM

The AI engine can use knowledge from:

* Documentation
* Recorded mentor sessions
* Notes
* Technical articles
* GitHub code examples

This allows the system to generate **context-aware questions**.


# 🔟 LLM Deployment Architecture

The AI engine will run on dedicated infrastructure.

Requirements:

* Linux machine
* GPU
* Python environment

Frameworks:

* PyTorch
* TensorFlow
* Ollama (for local LLM hosting)

Example flow:

Frontend → API → AI Engine → LLM → Response



# 11️⃣ System Architecture Overview

High-level architecture:

```
Frontend Application
      ↓
REST APIs
      ↓
Assessment Engine
      ↓
Skill Taxonomy Engine
      ↓
Question Blueprint Engine
      ↓
AI Generation Engine (LLM)
      ↓
Database
```



# 12️⃣ AI Engine Components

The AI engine includes:

### Generation Engine

Generates questions

### Validation Engine

Checks correctness

### Guardrails

Ensures safe and relevant content

### Evaluation Engine

Analyzes student answers



# 13️⃣ Service-Oriented Architecture

The application will follow **Service Oriented Architecture (SOA)**.

Each module becomes a service.

Example:

* Question Service
* Assessment Service
* Skill Analysis Service
* AI Generation Service

Services communicate through **APIs**.



# 14️⃣ Why This System is Powerful

The **TFL Assessment Engine** will combine:

- ✔ Skill Taxonomy
- ✔ Curriculum Graph
- ✔ Question Blueprint Engine
- ✔ AI Question Generation
- ✔ Mentor Validation
- ✔ Skill Gap Analysis

This will create a **complete learning intelligence platform**.

 

# Mentor Message to Students

As software engineers, your role is not only to write code.

You must learn to design:

* Knowledge systems
* Assessment engines
* AI-assisted platforms

This is how **next-generation learning platforms will be built**.

🌱
**Engineers build systems that scale knowledge.**


# TFL CoMentor Project Journey

### From User Story → Architecture → Development → GitHub Copilot

## 1️⃣ Step 1: Start with the Problem (User Story)

Every software system begins with a **problem statement**.

For TFL CoMentor, the question was:

> How do we help students learn skills systematically and allow mentors to guide their progress?

So we defined **User Stories**.

Example:

**User Story 1 – Developer**

* Login to system
* View available assessments
* Attempt assessment
* Submit answers
* Get feedback
* See skill progress

**User Story 2 – Mentor**

* View student progress
* Analyze skill gaps
* Recommend learning path
* Provide mentor guidance

Here we started identifying **entities in the system**.

* User
* Assessment
* Skill
* Sub-Skill
* Concept
* Outcome
* Progress

This becomes the **foundation of the system data model**.


# 2️⃣ Skill Taxonomy (Learning Architecture)

The learning system was designed as a **hierarchical skill model**.

```
Layer
   ↓
Skill
   ↓
Sub-Skill
   ↓
Concept
   ↓
Outcome
```

Example:

| Layer       | Skill           | SubSkill      | Concept        | Outcome                  |
| ----------- | --------------- | ------------- | -------------- | ------------------------ |
| Application | Web Development | REST API      | HTTP Stateless | Explain scalability      |
| Programming | C#              | OOP           | Encapsulation  | Implement secure classes |
| Database    | SQL             | Data Modeling | Primary Key    | Design normalized tables |

This model allows the system to **map learning progress with skills**.

This is the **core intellectual design of TFL CoMentor**.



# 3️⃣ Information Capture Layer

The system captures **learning data**.

Examples of captured information:

* Assessment results
* Skill mastery
* Student progress
* Mentor feedback
* Knowledge gaps

This data helps generate:

* **Skill Map**
* **Learning recommendations**
* **Mentor insights**

So the platform becomes a **data-driven learning system**.


# 4️⃣ Application Workflow

Typical system workflow:

```
Login
 ↓
Select Assessment
 ↓
Attempt Questions
 ↓
Submit Answers
 ↓
System Evaluation
 ↓
Feedback
 ↓
Skill Map Update
 ↓
Mentor Guidance
```

This is the **business process layer**.



# 5️⃣ Application Architecture

A real software application follows **layered architecture**.

```
Frontend Layer
(UI)

Controller Layer
(Request Handling)

Business Logic Layer
(Rules & workflows)

Service Layer
(Application services)

Repository Layer
(Database operations)

Database
(Data storage)
```

Example in **ASP.NET / .NET Core**.

```
Frontend → Razor / HTML / JavaScript
Controller → ASP.NET Controller
Service → Business logic
Repository → Database access
Database → SQL / NoSQL
```

This is the **Application-Centric Architecture**.



# 6️⃣ Understanding the Data Flow

Businesses run on **data + logic**.

Example systems:

* Billing system → transactions
* Reservation system → bookings
* E-commerce → orders
* Learning platform → skill progress

Software performs three main operations:

```
Capture Data
Process Data
Store Data
```

This is the **core cycle of any information system**.


# 7️⃣ Technology-Agnostic Design

Good architecture should not depend on a specific technology.

The same system can be implemented using:

* .NET
* Java
* Node.js
* Python

Architecture concept:

**Service Oriented Architecture (SOA)**

```
Application
     ↓
Services
     ↓
Data Layer
```



# 8️⃣ Database Strategy

Different types of data require different databases.

### Relational Databases

Examples:

* MySQL
* MS SQL Server
* PostgreSQL

Structure:

```
Tables
Rows
Columns
Primary Key
Foreign Key
Relationships
```

Best for:

* transactions
* billing
* finance systems



### NoSQL Databases

Example:

* MongoDB

Structure:

```
Collection
   ↓
Documents
   ↓
JSON
   ↓
Key-Value pairs
```

Example JSON:

```
{
  "studentId":101,
  "skill":"REST API",
  "score":80
}
```

Best for:

* large scale data
* flexible schema
* high scalability



# 9️⃣ Data Growth and Scalability

Modern systems generate **massive data**.

Examples:

* Learning analytics
* Assessment attempts
* User activity logs
* Recommendation engines

For large datasets we may use:

* MongoDB
* Vector databases
* Cloud storage



# 🔟 AI Assisted Development (GitHub Copilot)

Today developers also use **AI coding assistants**.

Example tool:

* GitHub Copilot

Benefits:

* faster coding
* auto code suggestions
* boilerplate generation
* test generation
* debugging support

Example:

Developer writes:

```
Create ASP.NET API for login
```

Copilot can generate:

* controller
* service
* model
* validation code

So developers focus more on **architecture and logic**.



# 1️⃣1️⃣ Real Learning from the Project

Students working on TFL CoMentor learn:

- ✅ System architecture
- ✅ Data modeling
- ✅ Business workflows
- ✅ API development
- ✅ Database design
- ✅ Skill mapping systems
- ✅ AI assisted coding
 

# Mentor Closing Thought

Software engineering is not about writing code.

It is about understanding:

```
Data
Logic
Workflow
Architecture
```

Code is just the **implementation of these ideas**.


# Mentor Talk: Databases in Modern Systems

### SQL, NoSQL and Vector Databases

Students, one important thing you must understand first:

👉 **Businesses revolve around data.**

Everything in a system is ultimately **data + logic**.

Examples:

* Billing system → transaction data
* Reservation system → booking data
* Shopping cart → order data
* Learning platform → assessment data
* Social media → user interaction data

Software applications exist mainly to **capture, process, and store data**.

So the real question becomes:

> How do we store and manage different types of data?

That is where **databases** come into the picture.

Today we mainly work with **three types of databases**.


# 1️⃣ SQL Databases (Relational Databases)

Examples:

* MySQL
* Microsoft SQL Server

These databases store data in **structured format**.

Structure looks like this:

```
Tables
Rows
Columns
Relationships
```

Example table:

Student Table

| Id  | Name    | Course |
| --- | ------- | ------ |
| 101 | Ravi    | .NET   |
| 102 | Kalyani | Java   |

Key characteristics:

* **Primary Key**
* **Foreign Key**
* **Relationships**
* **Transactions**
* **ACID properties**

Example relationships:

```
Customer → Orders
Student → Assessments
Parent → Child
```

SQL databases are perfect for:

- ✔ Banking systems
- ✔ Billing systems
- ✔ Order processing
- ✔ ERP systems
- ✔ Financial transactions

Because these systems require **data integrity and consistency**.



# 2️⃣ NoSQL Databases

Example:

* MongoDB

Modern systems generate **huge amounts of flexible data**.

Example:

* social media posts
* activity logs
* IoT data
* large web applications

Here rigid tables become difficult.

So we use **NoSQL databases**.

Instead of tables, they use:

```
Collections
Documents
JSON format
Key-value pairs
```

Example document:

```json
{
  "studentId": 101,
  "skill": "REST API",
  "score": 80
}
```

Structure:

```
Collection
   → Document
       → JSON
           → Key : Value
```

Advantages:

✔ flexible schema
✔ scalable
✔ handles large data
✔ good for distributed systems

Example applications:

* social media platforms
* large web applications
* analytics systems
* logging systems


# 3️⃣ Vector Databases (New Generation)

Now comes the **third type**, which is very important in **AI systems**.

This is called a **Vector Database**.

Example:

* Pinecone
* Milvus

AI systems do not only store text or numbers.

They store **embeddings**.

Embeddings are **multi-dimensional vectors**.

For example:

A sentence may become a vector like this:

```
[0.23, -0.91, 0.45, 0.78, 0.12]
```

These numbers represent **semantic meaning**.

Vector databases store:

* text embeddings
* image embeddings
* audio embeddings
* knowledge embeddings


# Understanding Dimensions

Students already know **2D data**.

Example:

```
Rows × Columns
```

This is **two-dimensional data**.

Example:

Spreadsheet

```
Row
Column
```



Now imagine **3D data**.

Example:

```
X-axis
Y-axis
Z-axis
```

Example:

* 3D graphics
* game engines
* spatial data



Vector databases store **high-dimensional data**.

Example:

```
512 dimensions
768 dimensions
1536 dimensions
```

This is how **AI models represent knowledge**.



# Why Vector Databases are Important

Modern AI systems like:

* OpenAI
* Azure OpenAI Service

convert text into **vectors**.

Example process:

```
User Question
      ↓
Embedding Model
      ↓
Vector Representation
      ↓
Vector Database Search
      ↓
Relevant Knowledge
      ↓
LLM Response
```

This is how systems like **AI assistants and knowledge bots work**.



# Comparing All Three Databases

| Type      | Structure                 | Best For         |
| --------- | ------------------------- | ---------------- |
| SQL       | Tables                    | Transactions     |
| NoSQL     | JSON documents            | Large scale apps |
| Vector DB | Multi-dimensional vectors | AI systems       |



# Example Modern Architecture

A modern AI application may use **all three databases together**.

Example system:

```
Application Layer
       ↓
Service Layer
       ↓
--------------------------------
SQL Database → Transactions
MongoDB → User activity
Vector DB → AI knowledge search
--------------------------------
```

So modern architecture becomes **polyglot persistence**.

Meaning:

> Use the right database for the right type of data.


# Mentor Insight for Students

A good developer does not just learn **programming languages**.

A good developer understands:

* data
* information flow
* system architecture
* database design

Because in reality:

> **Software systems are information systems.**

Applications only exist to **capture, process and generate information**.

