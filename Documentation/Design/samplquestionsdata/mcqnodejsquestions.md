Quetions with mcq and answers
# MySQL Database Connectivity in Node.js - MCQ Quiz



### 1. Which package is commonly used to connect MySQL with Node.js?

* A. express
* B. mysql
* C. mongoose
* D. fs
  **Answer:** B

---

### 2. Which command installs MySQL package in Node.js?

* A. npm install mysql
* B. node install mysql
* C. install mysql
* D. npm get mysql
  **Answer:** A

---

### 3. What is required to connect Node.js with MySQL?

* A. Only database name
* B. Connection object
* C. HTML file
* D. CSS file
  **Answer:** B

---

### 4. Which method is used to create a connection?

* A. mysql.connect()
* B. mysql.createConnection()
* C. mysql.open()
* D. mysql.start()
  **Answer:** B

---

### 5. Which property specifies the MySQL server hostname?

* A. user
* B. password
* C. host
* D. database
  **Answer:** C

---

### 6. Which method is used to execute SQL queries?

* A. run()
* B. execute()
* C. query()
* D. sql()
  **Answer:** C

---

### 7. Default MySQL port number is:

* A. 8080
* B. 3000
* C. 3306
* D. 5000
  **Answer:** C

---



### 8. What does the callback function in `connection.query()` return?

* A. HTML output
* B. error, results, fields
* C. JSON only
* D. Boolean value
  **Answer:** B

---

### 9. Which module is a newer alternative to `mysql` package?

* A. mysql2
* B. express-mysql
* C. dbconnect
* D. node-db
  **Answer:** A

---

### 10. Which statement is used to prevent SQL injection?

* A. SELECT * FROM users
* B. Using placeholders (?)
* C. Using console.log()
* D. Using var
  **Answer:** B

---

### 11. What does this code do?

`connection.end();`

* A. Starts connection
* B. Closes connection
* C. Restarts server
* D. Deletes database
  **Answer:** B

---

### 12. Which method is used for connection pooling?

* A. createConnection()
* B. createPool()
* C. openPool()
* D. connectPool()
  **Answer:** B

---

### 13. What is the benefit of connection pooling?

* A. Slower performance
* B. Reuses connections
* C. Deletes data
* D. Increases errors
  **Answer:** B

---

### 14. Which keyword is used with async MySQL queries?

* A. wait
* B. async/await
* C. promiseOnly
* D. callbackOnly
  **Answer:** B

---


### 15. What does `mysql2/promise` provide?

* A. Only callbacks
* B. Promise-based API
* C. CSS support
* D. HTML rendering
  **Answer:** B

---

### 16. Which is correct prepared statement syntax?

* A. SELECT * FROM users WHERE id = ?
* B. SELECT id FROM users ?
* C. WHERE id = SELECT
* D. SELECT ? FROM users
  **Answer:** A

---

### 17. What is the purpose of transactions in MySQL?

* A. Styling data
* B. Ensuring atomic operations
* C. Faster UI
* D. Logging only
  **Answer:** B

---

### 18. Which commands are used in transactions?

* A. START, STOP
* B. BEGIN, COMMIT, ROLLBACK
* C. OPEN, CLOSE
* D. INIT, END
  **Answer:** B

---

### 19. What happens if `ROLLBACK` is executed?

* A. Saves data
* B. Deletes table
* C. Reverts changes
* D. Restarts DB
  **Answer:** C

---

### 20. Which is best practice for production DB connections?

* A. Single connection
* B. Connection pooling
* C. No connection
* D. Reconnect every time
  **Answer:** B

---
# Event-Driven Programming (Node.js + MERN) — Assessment MCQs
## Questions

### 1.
In Node.js, what is the primary reason event-driven architecture is efficient for handling multiple client requests?  
a. It creates a new thread for each request  
b. It uses synchronous execution  
c. It uses a non-blocking event loop  
d. It prioritizes database operations  

**ans:** c  

---

### 2.
Consider the following code snippet:
```js
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.emit('dataReceived');
emitter.on('dataReceived', () => {
  console.log('Data processed');
});
```
What will be the output?  
a. Data processed  
b. Error  
c. No output  
d. Undefined  

**ans:** c  

---

### 3.
In a real-time chat application built using MERN, which component is responsible for emitting messages to connected clients?  
a. React frontend  
b. MongoDB  
c. Node.js server with Socket.io  
d. Express Router  

**ans:** c  

---

### 4.
Which of the following best describes the Node.js event loop phases?  
a. Fetch → Render → Execute  
b. Timers → I/O callbacks → Idle → Poll → Check → Close  
c. Request → Response → Close  
d. Compile → Execute → Terminate  

**ans:** b  

---

### 5.
In a MERN e-commerce app, when a user places an order and triggers email + inventory update + analytics logging, which pattern is most suitable?  
a. Sequential execution  
b. Event-driven architecture  
c. Monolithic blocking calls  
d. Static rendering  

**ans:** b  

---

### 6.
Which method ensures an event listener is executed only once?  
a. on()  
b. emit()  
c. once()  
d. addListener()  

**ans:** c  

---

### 7.
What will be the output?
```js
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('event', () => console.log('A'));
emitter.on('event', () => console.log('B'));

emitter.emit('event');
```
a. A  
b. B  
c. A B  
d. Error  

**ans:** c  

---

### 8.
Which real-world system heavily relies on event-driven architecture?  
a. Static blog website  
b. Real-time stock trading platform  
c. Basic calculator  
d. Offline desktop editor  

**ans:** b  

---

### 9.
In Node.js, what happens if a blocking operation is introduced in the event loop?  
a. It improves performance  
b. It blocks all incoming requests  
c. It creates parallel threads  
d. It crashes the server  

**ans:** b  

---

### 10.
In a MERN app, which approach is best for handling real-time notifications?  
a. REST API polling  
b. Cron jobs  
c. WebSockets (Socket.io)  
d. Static JSON files  

**ans:** c  

---

### 11.
What is the purpose of the “poll” phase in the event loop?  
a. Execute timers  
b. Retrieve new I/O events  
c. Close connections  
d. Handle HTTP routing  

**ans:** b  

---

### 12.
In a ride-booking system (like Uber), which event-driven flow is correct?  
a. Driver assigned → Request created → Payment processed  
b. Request created → Driver assigned → Ride started → Ride completed  
c. Payment processed → Ride started  
d. Ride completed → Request created  

**ans:** b  

---

### 13.
Which of the following is NOT an advantage of event-driven systems?  
a. Scalability  
b. Loose coupling  
c. Blocking execution  
d. Responsiveness  

**ans:** c  

---

### 14.
What will be the output?
```js
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.once('login', () => console.log('User logged in'));

emitter.emit('login');
emitter.emit('login');
```
a. User logged in (once)  
b. User logged in (twice)  
c. No output  
d. Error  

**ans:** a  

---

### 15.
In a large-scale MERN application, why is Redis Pub/Sub often used?  
a. For UI rendering  
b. For event broadcasting across multiple servers  
c. For storing images  
d. For CSS caching  

**ans:** b  

---

### 16.
Which scenario best demonstrates loose coupling in event-driven architecture?  
a. Direct function calls between modules  
b. Modules communicating via shared events  
c. Hardcoded dependencies  
d. Sequential execution  

**ans:** b  

---

### 17.
In a file upload system, what event-driven approach improves user experience?  
a. Blocking upload until complete  
b. Emitting progress events to frontend  
c. Reloading page repeatedly  
d. Using synchronous file read  

**ans:** b  

---

### 18.
Which issue can arise if too many listeners are attached to a single event?  
a. Memory leak warning  
b. Syntax error  
c. Compilation failure  
d. Infinite loop  

**ans:** a  

---

### 19.
In microservices architecture using Node.js, event-driven communication is preferred because:  
a. It reduces network calls  
b. It allows asynchronous service interaction  
c. It removes need for APIs  
d. It simplifies UI  

**ans:** b  

---

### 20.
Which of the following best represents a real-time MERN event-driven pipeline?  
a. User clicks → Page reload  
b. User sends message → Server emits event → Clients update UI instantly  
c. User submits form → Data stored → No UI update  
d. User logs in → Static page load  

**ans:** b  

---

# Middleware in Event-Driven Node.js (MERN Context)

---

## 1.
**In Node.js, middleware primarily operates within which programming paradigm?**  
A. Object-Oriented  
B. Functional  
C. Event-Driven  
D. Procedural  

✅ **Answer:** C  

---

## 2.
**How does middleware align with Node.js's event loop?**  
A. It blocks the event loop  
B. It runs synchronously only  
C. It participates in handling asynchronous request events  
D. It replaces the event loop  

✅ **Answer:** C  

---

## 3.
**What is the consequence of performing heavy synchronous computation inside middleware?**  
A. Faster response  
B. Improved scalability  
C. Blocking the event loop  
D. Automatic parallel execution  

✅ **Answer:** C  

---

## 4.
**Which real-world middleware use case best demonstrates event-driven design?**  
A. Static HTML rendering  
B. Logging each incoming request asynchronously  
C. Writing hardcoded responses  
D. Restarting server on each request  

✅ **Answer:** B  

---

## 5.
**In Express, middleware execution flow is best described as:**  
A. Parallel execution  
B. Event queue processing  
C. Sequential pipeline triggered by events  
D. Random execution  

✅ **Answer:** C  

---

## 6.
**Which scenario best illustrates non-blocking middleware?**  
A. Reading file using fs.readFileSync  
B. Making async DB call with await  
C. Using while(true) loop  
D. CPU-intensive encryption inline  

✅ **Answer:** B  

---

## 7.
**In a MERN stack app, where is middleware primarily used?**  
A. MongoDB layer  
B. React frontend only  
C. Express/Node backend  
D. Browser DOM  

✅ **Answer:** C  

---

## 8.
**How does middleware help in handling API authentication in MERN apps?**  
A. It modifies MongoDB schema  
B. It intercepts requests before route handlers  
C. It renders UI components  
D. It compiles React code  

✅ **Answer:** B  

---

## 9.
**What role does middleware play in request lifecycle?**  
A. Only starts request  
B. Only ends response  
C. Intercepts, modifies, or terminates flow  
D. Only logs errors  

✅ **Answer:** C  

---

## 10.
**Which pattern is used when multiple middleware functions process a request?**  
A. Singleton  
B. Observer  
C. Chain of Responsibility  
D. Factory  

✅ **Answer:** C  

---

## 11.
**In event-driven systems, middleware can be compared to:**  
A. Database triggers  
B. Event listeners  
C. UI components  
D. CSS rules  

✅ **Answer:** B  

---

## 12.
**What happens if asynchronous middleware forgets to handle errors properly?**  
A. Automatic retry  
B. Silent failure or unhandled promise rejection  
C. Immediate server restart  
D. Data auto-correction  

✅ **Answer:** B  

---

## 13.
**Which middleware design improves scalability in Node.js apps?**  
A. Blocking synchronous logic  
B. Stateless middleware  
C. Global variables  
D. Nested callbacks  

✅ **Answer:** B  

---

## 14.
**In MERN applications, logging middleware is typically used for:**  
A. Styling UI  
B. Monitoring API usage and debugging  
C. Compiling React  
D. Managing database schema  

✅ **Answer:** B  

---

## 15.
**How does middleware contribute to microservices architecture?**  
A. Couples services tightly  
B. Handles cross-cutting concerns like auth/logging  
C. Replaces APIs  
D. Eliminates need for backend  

✅ **Answer:** B  

---

## 16.
**Which of the following is a real-world middleware example?**  
A. JWT authentication validation  
B. HTML rendering  
C. CSS animation  
D. Browser caching  

✅ **Answer:** A  

---

## 17.
**What is the impact of improper middleware ordering?**  
A. No effect  
B. Performance boost  
C. Logical errors in request handling  
D. Automatic correction  

✅ **Answer:** C  

---

## 18.
**How does middleware handle errors in an event-driven architecture?**  
A. Ignores them  
B. Uses special error-handling middleware  
C. Stops Node.js runtime  
D. Logs only  

✅ **Answer:** B  

---

## 19.
**Which concept ensures middleware does not retain user-specific state across requests?**  
A. Coupling  
B. Statelessness  
C. Inheritance  
D. Encapsulation  

✅ **Answer:** B  

---

## 20.
**In a production MERN app, which middleware combination is most realistic?**  
A. Logging + Authentication + Error Handling  
B. Only static serving  
C. Only routing  
D. Only database queries  

✅ **Answer:** A  

---

## Async/Await MCQs - Node.js (MERN Backend)

### 1.
In a Node.js Express backend, an API handler is declared using async. What is the primary behavior of this function?

A. It automatically returns a Promise representing the asynchronous operation  
B. It disables callbacks  
C. It blocks the event loop until execution completes  
D. It executes synchronously  

**Answer: A**

---

### 2.
In a Node.js application, how does the await keyword interact with a Promise returned from a database query?

A. It executes the Promise in parallel  
B. It blocks the entire Node.js process  
C. It pauses execution of the current async function until the Promise resolves, without blocking the event loop  
D. It converts asynchronous code into synchronous code globally  

**Answer: C**

---

### 3.
Why must await be used only inside functions declared with async in Node.js?

A. Because JavaScript syntax enforces that async functions return Promises  
B. Because await requires access to the Promise resolution mechanism provided by async functions  
C. Because Node.js does not support await globally  
D. Because await blocks execution  

**Answer: B**

---

### 4.
Consider a service-layer function in a MERN backend:

```js
async function getUserId() {
  return 42;
}
```

What does this function return when invoked?

A. 42  
B. Error  
C. undefined  
D. Promise that resolves to 42  

**Answer: D**

---

### 5.
In a Node.js API, what occurs when a Promise rejection inside an async function is not handled using try-catch?

A. The function retries automatically  
B. The event loop stops  
C. An unhandled promise rejection error may occur  
D. The error is ignored  

**Answer: C**

---

### 6.
In a backend service using async/await, which syntax correctly waits for an asynchronous operation?

A. await => fetchData()  
B. await fetchData()  
C. await(fetchData)  
D. await: fetchData()  

**Answer: B**

---

### 7.
Why is async/await preferred over Promise chaining (.then()) in modern Node.js applications?

A. It eliminates the event loop  
B. It increases execution speed  
C. It removes the need for Promises  
D. It simplifies asynchronous control flow and improves readability  

**Answer: D**

---

### 8.
In an async function, if no explicit return value is provided, what is returned?

A. undefined  
B. null  
C. Promise resolved with undefined  
D. Error  

**Answer: C**

---

### 9.
What will be the output of the following Node.js code?

```js
async function initServer() {
  console.log("Server initialized");
}
initServer();
```

A. Server initialized  
B. Promise  
C. Nothing  
D. Error  

**Answer: A**

---

### 10.
How does async/await contribute to handling asynchronous operations in a MERN stack backend?

A. It removes database latency  
B. It makes operations synchronous  
C. It provides structured handling of non-blocking operations  
D. It eliminates API calls  

**Answer: C**

---

### 11.
In an Express.js route handler interacting with MongoDB, why is async/await commonly used?

A. To improve frontend rendering  
B. To manage non-blocking database operations in a readable manner  
C. To avoid JSON parsing  
D. To reduce HTTP requests  

**Answer: B**

---

### 12.
What is the role of try-catch when using async/await in a Node.js API?

A. Improves performance  
B. Converts async code to sync  
C. Handles rejected Promises and prevents application crashes  
D. Avoids database queries  

**Answer: C**

---

### 13.
Why are MongoDB queries handled asynchronously in a Node.js environment?

A. Node.js uses non-blocking I/O via the event loop  
B. MongoDB runs in frontend  
C. MongoDB is synchronous  
D. JavaScript cannot handle synchronous operations  

**Answer: A**

---

### 14.
Identify the issue in this Express route:

```js
router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});
```

A. Invalid await usage  
B. Missing error handling for Promise rejection  
C. Syntax error  
D. Incorrect response format  

**Answer: B**

---

### 15.
What does Promise.all() return in a Node.js application?

A. Error only  
B. Boolean  
C. Array of resolved values from all Promises  
D. First resolved value  

**Answer: C**

---

### 16.
What is a key advantage of async/await in REST API development?

A. Eliminates latency  
B. Provides clean and maintainable asynchronous control flow  
C. Avoids database usage  
D. Increases CPU speed  

**Answer: B**

---

### 17.
In a Node.js backend service, what is the performance issue in the following code?

```js
for (let i = 0; i < 5; i++) {
  await fetchUser(i);
}
```

A. Syntax error  
B. Parallel execution overload  
C. Sequential execution leading to performance bottleneck  
D. Memory leak  

**Answer: C**

---

### 18.
What is the optimal way to execute multiple independent asynchronous operations in Node.js?

A. Sequential await  
B. Promise.all() with mapping  
C. Nested callbacks  
D. setInterval()  

**Answer: B**

---

### 19.
How does Node.js internally manage async/await operations?

A. Using the event loop and callback queue  
B. Using multithreading  
C. Using GPU acceleration  
D. Using database threads  

**Answer: A**

---

### 20.
Why is non-blocking I/O critical in Node.js backend systems?

A. Improves UI design  
B. Avoids APIs  
C. Enables multithreading  
D. Allows handling multiple concurrent requests efficiently  

**Answer: D**

---

# ASYNC PROGRAMMING

1. What is asynchronous programming in Node.js?
A. Executing code line by line  
B. Blocking execution until task completes  
C. Non-blocking execution allowing multiple tasks  
D. Running only one task at a time  

✅ Answer: C

---

2. In a Node.js Express server, which of the following mechanisms is commonly used to handle asynchronous operations like database queries?
A. Threads  
B. Promises and async/await  
C. HTML rendering  
D. CSS  

✅ Answer: B

---

3. In Node.js, what is a callback function in the context of handling asynchronous operations like file reading or API calls?
A. A function executed immediately  
B. A function passed to another function to be executed later  
C. A function that blocks execution  
D. A built-in Node.js function  

✅ Answer: B

---

4. In Node.js, which function is typically used to simulate delayed asynchronous operations such as API response delays?
A. setTimeout()  
B. require()  
C. console.log()  
D. module.exports  

✅ Answer: A

---

5. In Node.js backend development, what does a Promise represent when fetching data from a MongoDB database?
A. Immediate result  
B. Future completion of an async operation  
C. A synchronous function  
D. A database schema  

✅ Answer: B

---

6. When handling API responses in Node.js using Promises, how many states can a Promise have?
A. 2  
B. 3  
C. 4  
D. 5  

✅ Answer: B

---

7. In a Node.js Express API, which method is used to handle successful Promise resolution when fetching data?
A. .catch()  
B. .then()  
C. .finally()  
D. .resolve()  

✅ Answer: B

---

8. In modern Node.js backend development, what is the purpose of using the async keyword in a function?
A. Makes code synchronous  
B. Automatically returns a Promise  
C. Stops execution  
D. Runs multiple threads  

✅ Answer: B

---

9. In Node.js architecture, what is the role of the Event Loop when handling multiple API requests?
A. Stores database data  
B. Manages execution of asynchronous callbacks  
C. Handles UI rendering  
D. Executes only synchronous code  

✅ Answer: B

---

10. In Node.js, when both a resolved Promise and a ```setTimeout``` callback are present, which one executes first in the event loop?
A. setTimeout  
B. Promise (microtask queue)  
C. Both simultaneously  
D. Random  

✅ Answer: B

---

11. In a Node.js server, which of the following executes before moving to the next phase of the event loop?
A. setTimeout  
B. setImmediate  
C. process.nextTick  
D. HTTP request  

✅ Answer: C

---

12. In real-world MERN applications, what is ```process.nextTick()``` typically used for?
A. Scheduling database calls  
B. Executing a callback immediately after current operation  
C. Delaying execution  
D. Handling UI updates  

✅ Answer: B

---

13. In a MERN stack application, how are MongoDB queries typically handled in Node.js?
A. Synchronously  
B. Using async/await or Promises  
C. Using only callbacks  
D. Using threads  

✅ Answer: B

---

14. In an Express.js route handler, what does ```await``` do when calling a database function?
A. Blocks entire server  
B. Waits for Promise resolution inside async function  
C. Creates new thread  
D. Skips execution  

✅ Answer: B

---

15. In a MERN application, how are HTTP requests typically handled on the backend?
A. Synchronously  
B. Asynchronously using event-driven architecture  
C. Sequentially  
D. Manually  

✅ Answer: B

---

16. What is the execution model used by Node.js servers handling concurrent client requests?
A. Multi-threaded blocking  
B. Single-threaded event-driven  
C. Distributed processing  
D. Sequential execution  

✅ Answer: B

---

17. In Node.js event loop phases, which phase handles timers like ```setTimeout```?
A. Poll  
B. Timers phase  
C. Check  
D. Close  

✅ Answer: B

---

18. In Node.js, what is considered blocking code in a backend server?
A. Async API call  
B. Code that stops event loop execution  
C. Promise resolution  
D. HTTP request  

✅ Answer: B

---

19. In Node.js streams (used in file upload/download APIs), what is backpressure?
A. Server crash  
B. Mechanism to handle data flow overload  
C. API failure  
D. Timeout  

✅ Answer: B

---

20. In Node.js internals, what is the role of ```libuv``` in handling asynchronous operations?
A. Handles frontend rendering  
B. Provides event loop and async I/O  
C. Manages MongoDB  
D. Handles routing  

✅ Answer: B

# 📘 Node.js File I/O MCQs



### 1. Which module is primarily used for file I/O in Node.js?

A. http
B. fs
C. path
D. os

**Correct option:** B fs

---

### 2. What is the default behavior of `fs.readFile()`?

A. Blocking
B. Non-blocking
C. Streaming
D. Synchronous

**Correct option:** B Non-blocking

---

### 3. Which method reads files synchronously?

A. fs.readFile()
B. fs.read()
C. fs.readFileSync()
D. fs.syncRead()

**Correct option:** C fs.readFileSync()

---

### 4. What is a major drawback of synchronous file operations in Node.js?

A. Memory leak
B. Callback hell
C. Blocks event loop
D. Data corruption

**Correct option:** C Blocks event loop

---

### 5. Which flag is used to append data to a file?

A. 'r'
B. 'w'
C. 'a'
D. 'x'

**Correct option:** C 'a'

---

### 6. What does `fs.writeFile()` do if the file already exists?

A. Throws error
B. Appends content
C. Overwrites file
D. Ignores write

**Correct option:** C Overwrites file

---

### 7. What is the purpose of `fs.createReadStream()`?

A. Read entire file at once
B. Read file in chunks
C. Write file
D. Delete file

**Correct option:** B Read file in chunks

---

### 8. Which event is emitted when a readable stream finishes?

A. close
B. finish
C. end
D. done

**Correct option:** C end

---

### 9. What is the advantage of using streams over buffers?

A. Faster CPU
B. Less memory usage
C. Better syntax
D. No callbacks

**Correct option:** B Less memory usage

---

### 10. Which method checks if a file exists?

A. fs.exists()
B. fs.check()
C. fs.stat()
D. fs.access()

**Correct option:** D fs.access()

---

### 11. Which method is used to rename a file?

A. fs.move()
B. fs.rename()
C. fs.changeName()
D. fs.update()

**Correct option:** B fs.rename()

---

### 12. What does `fs.stat()` return?

A. File content
B. File metadata
C. File path
D. File stream

**Correct option:** B File metadata

---

### 13. Which encoding is default for `fs.readFile()` if not specified?

A. utf16
B. ascii
C. buffer
D. utf8

**Correct option:** C buffer

---

### 14. Which approach avoids callback hell in file operations?

A. Nested callbacks
B. Promises / async-await
C. Loops
D. JSON

**Correct option:** B Promises / async-await

---

### 15. Which module helps in handling file paths?

A. fs
B. path
C. os
D. util

**Correct option:** B path

---

### 16. What is the purpose of `fs.createWriteStream()`?

A. Write file in chunks
B. Read file
C. Delete file
D. Compress file

**Correct option:** A Write file in chunks

---

### 17. What is the role of buffers in file I/O?

A. Store entire file permanently
B. Temporary binary storage
C. Compress files
D. Encrypt files

**Correct option:** B Temporary binary storage

---

### 18. What happens if no callback is provided to `fs.readFile()`?

A. File is read synchronously
B. Throws error
C. Returns promise
D. Returns buffer

**Correct option:** B Throws error

---

### 19. What type of I/O model does Node.js primarily use?

A. Blocking I/O
B. Multi-threaded blocking
C. Event-driven non-blocking I/O
D. Synchronous polling

**Correct option:** C Event-driven non-blocking I/O

---

### 20. Which component handles asynchronous I/O in Node.js internally?

A. V8 Engine
B. Libuv
C. Express
D. npm

**Correct option:** B Libuv


# 📘 Configuration Management in Node.js - MCQs

### 1. Which object is used to access environment variables in Node.js?

* A. env.process  
* B. process.env  
* C. config.env  
* D. node.env  
  **Answer:** B  

---

### 2. Which file is used to store environment variables?

* A. config.json  
* B. .env  
* C. package.json  
* D. index.js  
  **Answer:** B  

---

### 3. Which package is used to load environment variables from `.env` file?

* A. express  
* B. dotenv  
* C. config  
* D. http  
  **Answer:** B  

---

### 4. What does NODE_ENV represent?

* A. Node version  
* B. Environment type  
* C. API key  
* D. Port number  
  **Answer:** B  

---

### 5. What is the main purpose of configuration management?

* A. UI design  
* B. Managing application settings  
* C. Writing APIs  
* D. Debugging  
  **Answer:** B  

---

### 6. Why should sensitive data not be hardcoded?

* A. It increases memory  
* B. It reduces speed  
* C. Security risk  
* D. No effect  
  **Answer:** C  

---

### 7. Which command is used to install dotenv?

* A. npm start  
* B. npm install dotenv  
* C. node dotenv  
* D. npm run dotenv  
  **Answer:** B  

---

### 8. Where should `.env` file be placed?

* A. node_modules  
* B. public  
* C. Root directory  
* D. config folder  
  **Answer:** C  

---

### 9. Which method loads environment variables using dotenv?

* A. dotenv.load()  
* B. dotenv.env()  
* C. require('dotenv').config()  
* D. config.load()  
  **Answer:** C  

---

### 10. Which file is used to ignore `.env` in Git?

* A. package.json  
* B. .gitignore  
* C. README.md  
* D. config.json  
  **Answer:** B  

---

### 11. Which environment is used for production?

* A. development  
* B. testing  
* C. production  
* D. debug  
  **Answer:** C  

---

### 12. Which environment is used during development?

* A. production  
* B. development  
* C. staging  
* D. release  
  **Answer:** B  

---

### 13. Which of the following is a valid environment variable?

* A. PORT=3000  
* B. PORT:3000  
* C. PORT->3000  
* D. PORT-3000  
  **Answer:** A  

---

### 14. How to access PORT value in Node.js?

* A. process.PORT  
* B. env.PORT  
* C. process.env.PORT  
* D. config.PORT  
  **Answer:** C  

---

### 15. What is the benefit of configuration management?

* A. Security  
* B. Flexibility  
* C. Easy environment switching  
* D. All of the above  
  **Answer:** D  

---

### 16. Which file contains project dependencies?

* A. config.json  
* B. .env  
* C. package.json  
* D. index.html  
  **Answer:** C  

---

### 17. Which format is commonly used for config files?

* A. JSON  
* B. XML  
* C. TXT  
* D. CSV  
  **Answer:** A  

---

### 18. What should be kept in `.gitignore`?

* A. index.js  
* B. .env  
* C. package.json  
* D. README.md  
  **Answer:** B  

---

### 19. Configuration helps in:

* A. Managing settings  
* B. Securing data  
* C. Switching environments  
* D. All of the above  
  **Answer:** D  

---

### 20. Which is NOT a configuration value?

* A. API key  
* B. Database URL  
* C. Port number  
* D. HTML tag  
  **Answer:** D  

 ---

### 1. What is a callback function?

A. Function inside loop
B. Function passed as argument
C. Function returning value
D. Function without name
✅ **Answer: B**

---

### 2. When is a callback executed?

A. Before function call
B. During compilation
C. After main function completes
D. Never
✅ **Answer: C**

---

### 3. Callback functions are mainly used for:

A. Styling
B. Asynchronous operations
C. Database creation
D. Variables
✅ **Answer: B**

---

### 4. What is the correct callback syntax?

A. function(data, err)
B. function(err, data)
C. function()
D. function(data)
✅ **Answer: B**

---

### 5. Which parameter comes first in Node.js callback?

A. Data
B. Error
C. Function
D. Result
✅ **Answer: B**

---

### 6. What happens if error is null?

A. Program stops
B. Callback not executed
C. Operation successful
D. Error occurs
✅ **Answer: C**

---

### 7. Identify callback:

```js
function test(cb) {
  cb();
}
```

A. test
B. cb
C. function
D. none
✅ **Answer: B**

---

### 8. What is callback hell?

A. Callback error
B. Deeply nested callbacks
C. Missing callback
D. Fast execution
✅ **Answer: B**

---

### 9. Which is example of callback?

A. setTimeout(() => console.log("Hi"), 1000);
B. let a = 5;
C. return 10;
D. console.log("Hello");
✅ **Answer: A**

---

### 10. Callback functions help Node.js to be:

A. Blocking
B. Non-blocking
C. Slow
D. Synchronous
✅ **Answer: B**

---

### 11. What is asynchronous callback?

A. Runs immediately
B. Runs after delay/event
C. Runs once
D. Runs before function
✅ **Answer: B**

---

### 12. Which function uses callback?

A. fs.readFile()
B. let x = 10
C. console.log()
D. Math.random()
✅ **Answer: A**

---

### 13. What is the output?

```js
console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");
```

A. 1 2 3
B. 1 3 2
C. 2 1 3
D. 3 2 1
✅ **Answer: B**

---

### 14. Callback function avoids:

A. Errors
B. Blocking execution
C. Variables
D. Loops
✅ **Answer: B**

---

### 15. Which is drawback of callback?

A. Easy syntax
B. Callback hell
C. Fast execution
D. Less code
✅ **Answer: B**

---

### 16. What is nested callback?

A. Callback inside callback
B. Function inside loop
C. Function inside object
D. Variable inside function
✅ **Answer: A**

---

### 17. Which is alternative to callbacks?

A. Arrays
B. Promises
C. Strings
D. Numbers
✅ **Answer: B**

---

### 18. What does this callback do?

```js
fs.readFile('file.txt', (err, data) => {});
```

A. Deletes file
B. Reads file asynchronously
C. Writes file
D. Creates file
✅ **Answer: B**

---

### 19. Callback functions are:

A. Always synchronous
B. Always blocking
C. Can be async or sync
D. Only loops
✅ **Answer: C**

---

### 20. What is the purpose of callback in Node.js?

A. Styling
B. Event handling
C. Variable declaration
D. Loop control
✅ **Answer: B**


