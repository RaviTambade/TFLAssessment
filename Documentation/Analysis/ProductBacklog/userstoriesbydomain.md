
# Domain-Wise Grouped User Stories (7 Modules)

To organize the user stories **domain-wise**, we map them to the **core functional modules of the TFLCoMentor platform**.
From the architecture you designed earlier, the platform can be logically divided into **7 major domains**.

These domains align with **education flow → mentoring → evaluation → hiring**.

# 1️⃣ Identity & User Management Module

*(Users, Profiles, Roles, Security)*

### Admin

* As an Admin, I want to see all platform users so that I can manage students, mentors, and employers.
* As an Admin, I want to view a user profile so that I can understand their role and details.
* As an Admin, I want to assign or modify user roles so that users can participate in multiple roles like Student, Mentor, or SME.
* As an Admin, I want to remove a user so that inactive or invalid accounts are removed from the system.

### Student

* As a Student, I want to view my profile information so that I can verify my personal and professional details.
* As a Student, I want to update my profile so that employers and mentors see accurate information.
* As a Student, I want to change my password so that my account remains secure.

### Mentor

* As a Mentor, I want to view my profile so that I can verify my mentoring information.
* As a Mentor, I want to update my profile information so that my expertise and experience are accurate.

### Employer

* As an Employer, I want to create my employer profile so that my information is stored in the system.
* As an Employer, I want to view my profile information so that I can verify my personal details.
* As an Employer, I want to update my profile information so that I can keep my details updated.


# 2️⃣ Learning & Content Management Module

*(Courses, Sessions, Hands-On Activities, Concepts)*

### Student

* As a Student, I want to see my list of courses and the corresponding SME who assigned them so that I can continue my learning journey.
* As a Student, I want to view assignments and labs for a course so that I can understand the tasks I need to complete.

### SME

* As an SME, I want to create a session so that students can access learning material for a topic.
* As an SME, I want to view all sessions so that I can manage uploaded learning materials.
* As an SME, I want to search sessions so that I can quickly find a specific session.
* As an SME, I want to update session content so that outdated information can be corrected.

### Hands-on Activities

* As an SME, I want to create a hands-on activity so that students can practice concepts learned in sessions.
* As an SME, I want to view all hands-on activities so that I can manage them easily.
* As an SME, I want to update hands-on details so that corrections can be made.

### Concepts

* As an SME, I want to view all concepts so that I can organize sessions and questions.
* As an SME, I want to add a new concept so that sessions and questions can be categorized.

# 3️⃣ Assessment & Evaluation Engine

*(Tests, Questions, Scoring, Results)*

### Admin

* As an Admin, I want to see all assessments in the system so that I can manage them.
* As an Admin, I want to assign an assessment to multiple students so that their skills can be evaluated.
* As an Admin, I want to delete an assessment so that outdated assessments can be removed.
* As an Admin, I want to reschedule an assessment so that students who missed it can attempt it again.

### Student

* As a Student, I want to see upcoming assessments so that I can prepare for them.
* As a Student, I want to start an assessment so that my skills can be evaluated.
* As a Student, I want to submit my answers so that the system can evaluate my performance.
* As a Student, I want to see my assessment results so that I can understand my strengths and weaknesses.

### SME

* As an SME, I want to create a test so that student knowledge can be evaluated.
* As an SME, I want to add new questions as draft so that mentors can review them before they are used.


# 4️⃣ Mentoring & Guidance Module

*(Mentor-Student Interaction)*

### Student

* As a Student, I want to see my assigned mentor so that I can seek guidance.
* As a Student, I want to schedule a session with my mentor so that I can discuss learning challenges.

### Mentor

* As a Mentor, I want to view students assigned to me so that I can monitor their learning progress.
* As a Mentor, I want to filter mentees by technology so that I can focus on relevant students.
* As a Mentor, I want to add or remove mentees so that I can manage mentoring responsibilities.

### Mentoring Activities

* As a Mentor, I want to create mentoring sessions so that I can guide students.
* As a Mentor, I want to review projects so that students receive constructive feedback.
* As a Mentor, I want to provide structured feedback so that students can improve their skills.

# 5️⃣ Project & Assignment Management Module

*(Hands-on learning & project tracking)*

### Student

* As a Student, I want to submit my assignment so that mentors can review my work.
* As a Student, I want to view my projects so that I can track my development work.
* As a Student, I want to submit a project so that mentors can review my implementation.

### Mentor

* As a Mentor, I want to view projects assigned to mentees so that I can monitor project development.
* As a Mentor, I want to schedule project discussions so that I can guide teams during development.

# 6️⃣ Skill Graph & Learning Progress Module

*(Skill tracking, growth analytics)*

### Student

* As a Student, I want to view my learning progress so that I can understand my skill growth.

### Mentor

* As a Mentor, I want to view skills acquired by a student so that I can recommend next learning steps.
* As a Mentor, I want to see learning path progress so that I can track course completion.

### SME

* As an SME, I want to analyze individual student performance so that I can understand strengths and weaknesses.
* As an SME, I want to analyze question difficulty so that I can improve assessment quality.


# 7️⃣ Hiring & Recruitment Engine

*(Jobs, Applications, Interviews)*

### Student

* As a Student, I want to view job opportunities so that I can apply for relevant positions.
* As a Student, I want to apply for a job so that employers can consider me for recruitment.
* As a Student, I want to view my job applications so that I can track their status.
* As a Student, I want to view job offers so that I can review employment opportunities.

### Employer

* As an Employer, I want to post a job so that candidates can apply.
* As an Employer, I want to edit job details so that I can update requirements.
* As an Employer, I want to close a job posting so that applications stop when the position is filled.
* As an Employer, I want to search candidates so that I can find candidates based on skills.
* As an Employer, I want to shortlist candidates so that they can be considered for interviews.
* As an Employer, I want to view interview results so that I can evaluate candidate performance.


# Final Architecture Insight

Your **7 Modules represent the lifecycle of a student**:

```
Identity
   │
   ▼
Learning Content
   │
   ▼
Assessment Engine
   │
   ▼
Mentoring
   │
   ▼
Projects
   │
   ▼
Skill Graph
   │
   ▼
Hiring Engine
```

This structure makes **TFLCoMentor a Skill-to-Employment Platform** rather than just a learning system.
