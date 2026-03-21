# Old Training Plan (Feb–Mar 2024)

## Phase 1: Database Concepts (MySQL)

### 24 Feb 2024

**Topics**

* Stored Procedures
* Triggers
* Views
* Transactions
* Indexes

### 26 Feb 2024

**Topics**

* Events
* Cursor
* Code Walkthrough

### 27 Feb 2024

**Revision Session**

#### Database Concepts

* Tables
* Constraints
* Views
* Triggers
* Events
* Stored Procedures
* Transactions
* Cursor

#### Object Oriented Programming

1. **Entry Point Function**

   * `Main()` – Program.cs

2. **User Defined Class**

   * Example: `Employee` class

3. **Namespace**

   * Collection of classes, interfaces, structures, events, delegates, enumerations

4. **Class Members**

   * Access modifiers

     * private
     * public
     * protected
     * internal

5. **Member Functions**

   * Constructors (Overloading)
   * Destructor
   * Getter / Setter functions
   * Properties
   * Auto properties
   * Static functions

6. **Inheritance**

   * Base class (Super class)
   * Derived class (Sub class)
   * Protected scope
   * Constructor chaining
   * Member initializer list
   * Override `ToString()`

7. **Polymorphism**

   * virtual
   * override
   * base keyword
   * this keyword
   * sealed

#### SQL Joins

* Why joins?
* Types of joins
* When to use which join

# Phase 2: Introduction to Web Application

### 28 Feb 2024

**Web Application Architecture**

Server Components

* Program.cs (Main Function)
* Web Application DLL
* Kestrel / IIS Web Server
* dotnet.exe Runtime Process

Network Connectivity

* LAN
* WAN
* Internet

Client-Server Communication

* HTTP Request
* HTTP Response

Example

* Client Browser → Request → Server
* Server → Response → Client

Multiple clients can connect simultaneously.

# Phase 3: ASP.NET Web Application Development

### 29 Feb 2024

**Topics**

* Creating Web Application

Command:

```
dotnet new webapp -n "NAME"
```

Concepts

* Razor Pages (.cshtml)
* Layout.cshtml
* Navigation between pages
* `@page` and `@model`
* Dynamic pages using JavaScript
* `app.MapPost()`

### 01 March 2024

**Revision and Discussion**

#### Dotnet CLI Commands

* dotnet new sln
* dotnet new console
* dotnet new classlib
* dotnet new web
* dotnet new webapp
* dotnet new mvc
* dotnet build
* dotnet run
* dotnet add package

#### Application Types

* Console Application
* Class Library
* Web Application
* Razor Pages
* ASP.NET MVC

#### Web Concepts

* Startup Code
* `app.Run()`
* `app.MapGet()`
* `app.MapPost()`

#### Frontend Basics

* HTML
* CSS
* Div
* Basic Bootstrap
* Basic JavaScript
* Event Handling
* `document.getElementById()`
* Arrow functions

# Phase 4: Frontend Development

### 02 March 2024

**HTML & CSS**

Topics

* Tables
* Buttons
* Bootstrap classes
* `getElementById()`
* `getElementByName()`
* `.checked` property

### 04 March 2024

**JavaScript**

Topics

* Client Side UI
* Frontend Application Development
* DOM Tree
* JavaScript DOM methods

  * `getElementById()`
  * `getElementByName()`
* jQuery Selectors

  * ID selector
  * Element selector
  * Attribute selector

### 05 March 2024

**jQuery**

Topics

* DOM Traversing
* DOM Manipulation
* jQuery Events (`.change`)
* jQuery Functions

  * `.append()`
  * `.empty()`
* `$(this).val()`
* `this.value`
* `$(this).prop("checked")`


### 06 March 2024

**jQuery and Clean Code**

Topics

* DOM Traversing

Clean Code Principles

* SOLID Principle
* Single Responsibility Principle
* DRY – Don't Repeat Yourself
* KISS – Keep It Simple

jQuery Methods

* `.prop()`
* `.width()`
* `.addClass()`
* `.removeClass()`

### 07 March 2024

**jQuery**

Topics

* DOM Navigation

  * First
  * Next
  * Previous
  * Last

AJAX Call

```
$.get("url", function(data, status){})
```

* Extracting data
* Data manipulation

# Phase 5: Backend Integration

### 08 March 2024

Topics

* Database connectivity discussion
* Database connectivity coding
* `app.MapGet()` implementation
* URL routing for API endpoints
* Parameterized queries

### 09 March 2024

Topics

* Frontend → Backend → Database flow
* Progress bar implementation
* JSON array generation
* JSON manipulation

Array functions

* `.filter()`
* `.map()`

# Phase 6: Test Application Development

### 12 March 2024

* Basic HTML navigation for Test application
* Progress bar

### 13 March 2024

* Timer implementation
* Score calculation
* Database update

### 14 March 2024

* Database queries
* Test answer processing
* Additional fields in database tables


### 15 March 2024

* Subject and Test module
* HTML navigation
* jQuery navigation
* Bootstrap integration
* Complete test appearing workflow

### 16 March 2024

* HTML + jQuery improvements
* Criteria implementation
* Interview functionality

# Phase 7: System Refinement

### 18 March 2024

* Database restructuring

### 19 March 2024

* Repository restructuring

### 20 March 2024

* Web API restructuring

# Phase 8: Software Testing

### 21 March 2024

Topics

* Software Testing
* Unit Testing
* NUnit Framework

### 22 March 2024

Activities

* Testing all HTML pages
* Interaction with mentor
* Cleaning unnecessary HTML files and folders


✅ This now becomes a **proper documented historical training plan**.
