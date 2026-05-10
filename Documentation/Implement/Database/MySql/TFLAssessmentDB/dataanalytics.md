
# List of Business Requirements categorized by modules


## 📘 Module: **Question Bank Management**

### 🧾 Business Requirements:

1. **BR-QB-01**: *"Fetch all question bank entries that belong to the subject Advanced Java."*
   **User Story**: As a teacher, I want to view all questions from the *Advanced Java* subject so that I can review or update them.

2. **BR-QB-02**: *"Retrieve all questions from the question bank that are included in the test with ID 1, along with their test-specific mapping details."*
   **User Story**: As an admin, I want to see which questions are included in a particular test, so I can verify test content before publishing.

3. **BR-QB-03**: *"Get a detailed list of all questions from the question bank, including their subject and the evaluation criteria they belong to."*
   **User Story**: As a curriculum designer, I want to analyze the distribution of questions across subjects and evaluation criteria to ensure syllabus coverage.

4. **BR-QB-04**: *"List all questions that belong to a specific subject (ID = 1) and are evaluated based on a specific evaluation criteria (ID = 1)."*
   **User Story**: As a test designer, I want to filter questions that meet both subject and evaluation needs for focused assessment creation.


## 📘 Module: **Interview Management System**

### 🧾 Business Requirements:

5. **BR-INT-01**: *"List all candidates (by name) who have attended interviews, sorted by candidate ID."*
   **User Story**: As HR staff, I want to view all interviewed candidates in order, to manage follow-ups and reporting.

6. **BR-INT-02**: *"List all interviews conducted by Subject Matter Experts."*
   **User Story**: As an admin, I want to track interviews conducted by SMEs to analyze their participation and load.

7. **BR-INT-03**: *"Get the schedule details and Subject Matter Expert's name for interview ID 2."*
   **User Story**: As an HR executive, I want to check who conducted a specific interview and when, for auditing and feedback.

8. **BR-INT-04**: *"Retrieve the name of the candidate who appeared in the interview with ID 2."*
   **User Story**: As a reporting analyst, I want to fetch the candidate name for an interview to generate performance reports.

9. **BR-INT-05**: *"Find out which subject was handled by the Subject Matter Expert in the interview with ID 2."*
   **User Story**: As an academic coordinator, I want to identify the subject evaluated in a specific interview for quality control.

10. **BR-INT-06**: *"List all evaluation criteria applied during the interview with ID 2."*
    **User Story**: As a panel coordinator, I want to check which criteria were used to assess a candidate in a particular interview.


## 📘 Module: **Subject Matter Expert (SME) Management**

### 🧾 Business Requirements:

11. **BR-SME-01**: *"List all Subject Matter Experts with the subjects they specialize in."*
    **User Story**: As a training coordinator, I want to know the SME-subject mapping to assign them to appropriate interviews.

12. **BR-SME-02**: *"List each SME along with the questions from their subject."*
    **User Story**: As a content reviewer, I want to link SMEs to questions to ensure ownership and accountability of content quality.


## All Queries of Business Requirements:

Query:

```sql
SELECT * 
FROM questionbank 
WHERE subjectid = (
    SELECT id 
    FROM subjects 
    WHERE title = "ADVJAVA"
);
```

### ✅ What This Query Does:

This query retrieves **all columns** from the `questionbank` table for entries that are related to the subject titled **"ADVJAVA"**.

### 💼 Business Requirement (Meaningful Context):

**"Fetch all question bank entries that belong to the subject Advanced Java."**

This is useful when:

* A teacher wants to review or update all the questions related to "ADVJAVA".
* You're building a feature in an assessment system to list questions by subject.
* You want to export or analyze question patterns for a specific subject.

```sql
SELECT qb.* 
FROM questionbank qb
JOIN subjects s ON qb.subjectid = s.id
WHERE s.title = "ADVJAVA";
```

Query:

```sql
SELECT * 
FROM questionbank 
INNER JOIN testquestions ON testquestions.questionbankid = questionbank.id 
WHERE testquestions.testid = 1;
```

### ✅ What This Query Does:

This query retrieves **all columns from both** `questionbank` and `testquestions` tables where the `questionbank.id` matches the `testquestions.questionbankid`, and the question is part of a **test with ID 1**.

---

### 💼 Business Requirement (Meaningful Context):

**"Retrieve all questions from the question bank that are included in the test with ID 1, along with their test-specific mapping details."**

This would be useful for:

* Displaying the list of questions assigned to a specific test.
* Allowing instructors or admins to review which questions are linked to a test.
* Preparing a test preview or analysis report for test ID 1.

---

### Optional: Improved Version with Aliases (for readability)

```sql
SELECT qb.*, tq.*
FROM questionbank qb
INNER JOIN testquestions tq ON tq.questionbankid = qb.id
WHERE tq.testid = 1;
```

Query:

```sql
SELECT 
    s.title AS subject_title, 
    qb.id AS question_bank_id, 
    qb.title AS question_title, 
    ec.title AS criteria_title
FROM questionbank qb
INNER JOIN evaluationcriterias ec ON qb.evaluationcriteriaid = ec.id
INNER JOIN subjects s ON qb.subjectid = s.id;
```

---

### ✅ What This Query Does:

This query retrieves a **summary of question bank entries**, combining:

* **Subject title** (from `subjects`),
* **Question Bank ID and title** (from `questionbank`),
* **Evaluation Criteria title** (from `evaluationcriterias`).

---

### 💼 Business Requirement (Meaningful Context):

**"Get a detailed list of all questions from the question bank, including their subject and the evaluation criteria they belong to."**

This supports:

* Curriculum mapping and syllabus coverage analysis.
* Question paper or test design workflows.
* Generating structured reports for academic audits.
* Filtering or grouping questions based on subject and assessment focus.

---

### 📝 Example Output Format:

| subject\_title | question\_bank\_id | question\_title           | criteria\_title      |
| -------------- | ------------------ | ------------------------- | -------------------- |
| ADVJAVA        | 12                 | Explain Servlet Lifecycle | Conceptual Clarity   |
| DBMS           | 19                 | Define Normalization      | Understanding Levels |


Query:

```sql
SELECT 
    questionbank.id, 
    questionbank.title, 
    subjects.title AS subject, 
    evaluationcriterias.title AS criteria
FROM questionbank, subjects, evaluationcriterias
WHERE questionbank.subjectid = subjects.id 
  AND questionbank.evaluationcriteriaid = evaluationcriterias.id
  AND subjects.id = 1 
  AND evaluationcriterias.id = 1;
```

---

### ✅ What This Query Does:

This query retrieves all **question bank entries** where:

* The subject ID is **1**, and
* The evaluation criteria ID is **1**.

It also fetches the **subject title** and **criteria title** by joining the `subjects` and `evaluationcriterias` tables based on their IDs.

---

### 💼 Business Requirement (Meaningful Context):

**"List all questions that belong to a specific subject (ID = 1) and are evaluated based on a specific evaluation criteria (ID = 1)."**

This helps in:

* Filtering questions by both **subject and evaluation focus**.
* Preparing customized assessments or question papers.
* Analyzing how many and which questions match a specific teaching goal.

---

### 📝 Example Output Format:

| id | title                      | subject | criteria           |
| -- | -------------------------- | ------- | ------------------ |
| 5  | What is JVM?               | ADVJAVA | Conceptual Clarity |
| 9  | Explain method overloading | ADVJAVA | Conceptual Clarity |

---

### ✅ Tip: Use Explicit JOINs for Better Readability

Using `JOIN` is clearer and more maintainable:

```sql
SELECT 
    qb.id, 
    qb.title, 
    s.title AS subject, 
    ec.title AS criteria
FROM questionbank qb
JOIN subjects s ON qb.subjectid = s.id
JOIN evaluationcriterias ec ON qb.evaluationcriteriaid = ec.id
WHERE s.id = 1 
  AND ec.id = 1;
```

Query:

```sql
SELECT employees.firstname, employees.lastname, interviews.candidateid
FROM employees
INNER JOIN interviews
WHERE employees.id = interviews.candidateid
ORDER BY interviews.candidateid ASC;
```

---

### ✅ What This Query Does:

This query retrieves the **first name and last name of candidates** (from the `employees` table) who have appeared for interviews (in the `interviews` table), by matching `employees.id` with `interviews.candidateid`.

It **orders the result** by `candidateid` in **ascending order**.

---

### 💼 Business Requirement (Meaningful Context):

**"List all candidates (by name) who have attended interviews, sorted by candidate ID."**

Useful for:

* HR reports showing which employees appeared for interviews.
* Sorting interview records for verification or follow-up.
* Displaying interview schedules or history by candidate.

---

### ✅ Best Practice — Use Explicit JOIN Syntax:


```sql
SELECT 
    e.firstname, 
    e.lastname, 
    i.candidateid
FROM employees e
INNER JOIN interviews i ON e.id = i.candidateid
ORDER BY i.candidateid ASC;
```

---

### 📝 Sample Output:

| firstname | lastname | candidateid |
| --------- | -------- | ----------- |
| Raj       | Mehta    | 101         |
| Sneha     | Kulkarni | 102         |

To help you correctly **use `INNER JOIN` with the `subjectmatterexperts` table**, I need to know how it is related to your existing query or what exactly you want to fetch. But assuming you want to retrieve which **Subject Matter Expert (SME)** is assigned to which **question** or **subject**, here’s a general approach based on typical schema relationships.

---

### ✅ Scenario 1: Join `subjectmatterexperts` with `subjects` (Each SME is linked to a subject)

```sql
SELECT 
    sme.firstname, 
    sme.lastname, 
    s.title AS subject_title
FROM subjectmatterexperts sme
INNER JOIN subjects s ON sme.subjectid = s.id;
```

**Business Meaning**: "List all Subject Matter Experts with the subjects they specialize in."

---

### ✅ Scenario 2: Join `subjectmatterexperts` with `questionbank` via `subjects` (SMEs linked to questions through subjects)

```sql
SELECT 
    sme.firstname, 
    sme.lastname, 
    s.title AS subject_title, 
    qb.title AS question_title
FROM subjectmatterexperts sme
INNER JOIN subjects s ON sme.subjectid = s.id
INNER JOIN questionbank qb ON qb.subjectid = s.id;
```

**Business Meaning**: "List each SME along with the questions from their subject."

---

### ✅ Scenario 3: Join `subjectmatterexperts` with `interviews` if SMEs conduct interviews

If your schema has `interviews.smeid` referring to `subjectmatterexperts.id`, then:

```sql
SELECT 
    sme.firstname, 
    sme.lastname, 
    i.candidateid, 
    i.interviewdate
FROM subjectmatterexperts sme
INNER JOIN interviews i ON sme.id = i.smeid;
```

**Business Meaning**: "List all interviews conducted by Subject Matter Experts."

---

Query:

```sql
SELECT interviews.candidateid, subjects.title
FROM interviews
INNER JOIN subjectmatterexperts ON interviews.smeid = subjectmatterexperts.id
INNER JOIN subjects ON subjectmatterexperts.subjectid = subjects.id
WHERE interviews.candidateid = 2;
```

 

### ✅ What This Query Does:

This query fetches the **subject title** associated with the **Subject Matter Expert (SME)** who conducted an **interview** for **candidate ID 2**.

 

### 💼 Business Requirement (Meaningful Context):

**"Find out which subject was handled by the SME who interviewed candidate with ID 2."**

This is useful for:

* Viewing subject expertise involved in an interview.
* Generating candidate-specific interview history along with SME subject mapping.
* Analyzing candidate exposure to subject-specific interviews.

 

### 📝 Example Output:

| candidateid | title   |
| ----------- | ------- |
| 2           | ADVJAVA |
| 2           | DBMS    |

If the candidate was interviewed by multiple SMEs, this will show all subjects related to those SMEs.

Query:

```sql
SELECT 
    interviews.id,
    interviews.interviewdate,
    interviews.interviewtime,
    interviews.smeid,
    CONCAT(employees.firstname, " ", employees.lastname) AS SmeName
FROM interviews
INNER JOIN subjectmatterexperts 
    ON interviews.smeid = subjectmatterexperts.id 
INNER JOIN employees
    ON subjectmatterexperts.employeeid = employees.id
WHERE interviews.id = 2;
```

---

### ✅ What This Query Does:

This query retrieves **detailed interview information** for a specific interview (ID = 2), including:

* Interview date and time
* SME ID
* Full name of the Subject Matter Expert (from `employees` table)

---

### 💼 Business Requirement (Meaningful Context):

**"Get the schedule details and Subject Matter Expert's name for interview ID 2."**

This is useful when:

* Displaying or verifying the interview schedule and SME assignment
* Reviewing interview logs or history
* Mapping interviews to specific SMEs based on employee records

---

### 📝 Sample Output:

| id | interviewdate | interviewtime | smeid | SmeName      |
| -- | ------------- | ------------- | ----- | ------------ |
| 2  | 2025-05-22    | 10:30:00      | 101   | Rajiv Sharma |

---
 
Query:

```sql
SELECT 
    interviews.candidateid, 
    CONCAT(employees.firstname, " ", employees.lastname) AS CandidateName 
FROM employees
INNER JOIN interviews ON interviews.candidateid = employees.id
WHERE interviews.id = 2;
```

---

### ✅ What This Query Does:

This query fetches:

* The **candidate ID** and
* The **full name of the candidate** (by combining first and last name from the `employees` table)

for the interview with **ID = 2**.

---

### 💼 Business Requirement (Meaningful Context):

**"Retrieve the name of the candidate who appeared in the interview with ID 2."**

This can be useful for:

* Viewing detailed interview records
* Creating interview reports with candidate names
* Verifying which employee (candidate) attended a specific interview

---

### 📝 Sample Output:

| candidateid | CandidateName  |
| ----------- | -------------- |
| 202         | Sneha Kulkarni |

 
Query:

```sql
SELECT subjects.id, subjects.title 
FROM interviews
INNER JOIN subjectmatterexperts ON interviews.smeid = subjectmatterexperts.id
INNER JOIN subjects ON subjectmatterexperts.subjectid = subjects.id
WHERE interviews.id = 2;
```

---

### ✅ What This Query Does:

This query fetches the **subject ID** and **subject title** for the **interview with ID = 2**, based on the **subject associated with the SME** who conducted the interview.

---

### 💼 Business Requirement (Meaningful Context):

**"Find out which subject was handled by the Subject Matter Expert in the interview with ID 2."**

This is helpful when:

* You want to analyze subject-wise distribution of interviews.
* You need to show interview details with academic context (subject focus).
* Preparing SME performance or workload reports per subject.

---

### 📝 Sample Output:

| id | title   |
| -- | ------- |
| 3  | ADVJAVA |

 
Query:

```sql
SELECT evaluationcriterias.id, evaluationcriterias.title 
FROM interviews
INNER JOIN interviewcriterias ON interviews.id = interviewcriterias.interviewid
INNER JOIN evaluationcriterias ON interviewcriterias.evaluationcriteriaid = evaluationcriterias.id
WHERE interviews.id = 2;
```

---

### ✅ What This Query Does:

This query retrieves the **evaluation criteria ID** and **title** that were used to evaluate the candidate in the **interview with ID = 2**.

---

### 💼 Business Requirement (Meaningful Context):

**"List all evaluation criteria applied during the interview with ID 2."**

This is useful when:

* You want to audit which competencies or areas were assessed in an interview.
* Generating evaluation reports for interviews.
* Cross-checking if all required evaluation points were covered.

---

### 📝 Sample Output:

| id | title                   |
| -- | ----------------------- |
| 1  | Communication Skills    |
| 2  | Technical Understanding |

