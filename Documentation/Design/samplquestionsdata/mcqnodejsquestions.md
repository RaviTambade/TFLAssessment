Quetions with mcq and answers
# MySQL Database Connectivity in Node.js - MCQ Quiz

## 🟢 Beginner Level (1–7)

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

## 🟡 Intermediate Level (8–14)

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

## 🔴 Advanced Level (15–20)

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



