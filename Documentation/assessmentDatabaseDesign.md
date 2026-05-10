# TFL Assessment Database Design
## 🔍 **Purpose**

This database is designed to manage a complete **online test and assessment system**, including:

* **User and Role Management**
* **Test and Question Management**
* **Candidate Performance Evaluation**
* **Interview Scheduling and Evaluation**


## 🧑‍💼 **User & Role Management**

| Table       | Description                                                             |
| ----------- | ----------------------------------------------------------------------- |
| `users`     | Stores user details like Aadhar ID, name, email, contact, and password. |
| `roles`     | Defines user roles (e.g., Admin, SME, Candidate).                       |
| `userroles` | Links users to their roles (many-to-many relationship).                 |


## 👨‍💻 **Employees & SMEs**

| Table                  | Description                                                           |
| ---------------------- | --------------------------------------------------------------------- |
| `employees`            | Employees (candidates or internal staff) with basic info.             |
| `employeeperformance`  | Tracks test/interview performance of employees.                       |
| `subjectmatterexperts` | Maps employees as SMEs to specific subjects, with certification date. |

## 📚 **Subjects & Evaluation Criteria**

| Table                 | Description                                                                                           |
| --------------------- | ----------------------------------------------------------------------------------------------------- |
| `subjects`            | List of subjects (e.g., Java, C#, SQL).                                                               |
| `evaluationcriterias` | Criteria used to evaluate tests or interviews under each subject (e.g., Logic, Syntax, Code Quality). |


## ❓ **Question Bank**

| Table          | Description                                                                                         |
| -------------- | --------------------------------------------------------------------------------------------------- |
| `questionbank` | Stores MCQ questions with four options and answer key, linked to a subject and evaluation criteria. |


## 🧪 **Tests & Assessments**

| Table                     | Description                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------------- |
| `tests`                   | Each test has a subject, SME, timing, and status (e.g., created, scheduled).                |
| `testassessmentcriterias` | Evaluation criteria applied to a particular test.                                           |
| `testquestions`           | Links questions from the question bank to a specific test.                                  |
| `candidateanswers`        | Stores answers submitted by candidates for each question.                                   |
| `candidatetestresults`    | Final score and test duration for each candidate’s test attempt.                            |
| `testschedules`           | Schedules tests for candidates with start/end time and status (e.g., Scheduled, Completed). |


## 🗣️ **Interview Management**

| Table                | Description                                       |
| -------------------- | ------------------------------------------------- |
| `interviews`         | SME interviews scheduled with candidates.         |
| `interviewcriterias` | Evaluation criteria used in a specific interview. |
| `interviewresults`   | Ratings and comments for interview criteria.      |


## 🔗 **Key Relationships (Foreign Keys)**

* **Users ↔ Roles** through `userroles`
* **Employees ↔ Users**
* **Employees ↔ Performance, SME, Interview, Schedule**
* **SME ↔ Subjects**
* **Subjects ↔ Evaluation Criteria, Questions, Tests**
* **Tests ↔ Questions, Candidates, SME**
* **Candidates ↔ Answers, Results, Interviews**
* **Interviews ↔ Criteria ↔ Results**


## ✅ **Use Case Summary**

* **Admins** manage users, roles, subjects, and tests.
* **SMEs** create questions, conduct interviews, and rate candidates.
* **Candidates** take scheduled tests, submit answers, and attend interviews.
* The system evaluates both **automated tests** and **human interviews** using predefined criteria.
 