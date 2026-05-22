# Student Perspective User Stories for TFL CoMentor

From a Student perspective, TFL CoMentor user stories should focus on:

```text
Learning Journey
Mentor Interaction
Roadmap Tracking
Session Participation
Skill Building
Project Execution
Assessments
Employability Growth
```

Below are industry-style student user stories aligned with mentor-driven learning, project-based execution, and employability-focused education.


# 1. Session Discovery & Access User Stories

These user stories help students discover, access, and consume mentor-led learning sessions.

> As a Student, I want to view all assigned sessions so that I can continue my learning journey systematically.

> As a Student, I want to view session details so that I can understand the topic, objectives, and learning expectations.

> As a Student, I want to access learning materials from a session so that I can study concepts anytime.

> As a Student, I want to search sessions so that I can quickly find a specific topic or technology.

> As a Student, I want to filter sessions by technology, mentor, or difficulty level so that I can focus on relevant learning.


# 2. Learning Progress User Stories

These user stories help students monitor, continue, and organize their learning progress.

> As a Student, I want to track my course and session progress so that I can monitor my learning completion.

> As a Student, I want to continue learning from where I stopped so that I can learn at my own pace.

> As a Student, I want to mark learning materials as completed so that I can organize my study progress.

### 9.

> As a Student, I want to view my weekly roadmap so that I can plan my learning activities effectively.

### 10.

> As a Student, I want to view upcoming sessions so that I can prepare before attending mentor discussions.


# 3. Mentor Interaction User Stories

These user stories strengthen communication and guidance between mentors and students.
> As a Student, I want to know which SME assigned a session so that I can seek guidance when needed.


> As a Student, I want to ask questions on session topics so that I can clarify my doubts.

> As a Student, I want to receive mentor feedback on assignments so that I can improve my skills.

> As a Student, I want to book mentoring sessions so that I can receive personalized guidance.

> As a Student, I want to participate in discussion forums so that I can collaborate with peers and mentors.


# 4. Assignment & Project User Stories

These user stories encourage hands-on learning and real-world project execution.

> As a Student, I want to view session assignments so that I can practice concepts through hands-on work.



> As a Student, I want to upload assignment submissions so that mentors can review my work.

> As a Student, I want to work on real-world projects so that I can build industry-ready skills.



> As a Student, I want to view project requirements so that I can understand expected deliverables.



> As a Student, I want to receive project reviews so that I can improve my implementation approach.


# 5. Assessment & Evaluation User Stories

These user stories support continuous evaluation and skill measurement.


> As a Student, I want to attend quizzes and assessments so that I can evaluate my understanding.

> As a Student, I want to view assessment results so that I can identify my weak areas.


### 23.

> As a Student, I want to receive skill-based recommendations so that I can improve missing competencies.

> As a Student, I want to view coding challenges so that I can improve problem-solving abilities.


# 6. Employability & Career User Stories

These user stories focus on career readiness and employability development.

> As a Student, I want to build a portfolio from completed projects so that I can showcase my skills to employers.
> As a Student, I want to track my skill growth so that I can understand my industry readiness.

> As a Student, I want to receive career roadmap recommendations so that I can plan my future learning path.

> As a Student, I want to participate in mock interviews so that I can prepare for placements.


> As a Student, I want to view industry-oriented learning paths so that I can align my learning with job demand.


# 7. Collaboration User Stories

These user stories support peer learning and collaborative growth.

> As a Student, I want to collaborate with peers on projects so that I can improve teamwork skills.

> As a Student, I want to participate in coding groups so that I can learn from community discussions.

> As a Student, I want to share notes and resources so that collaborative learning becomes easier.


# 8. Notifications & Engagement User Stories

These user stories help improve engagement and consistency.


### 33.

> As a Student, I want to receive notifications about new sessions and assignments so that I do not miss learning activities.


### 34.

> As a Student, I want to receive reminders for pending tasks so that I can complete work on time.

> As a Student, I want to receive achievement badges so that I stay motivated during learning.


# 9. AI & Smart Learning Future User Stories

These user stories represent future AI-assisted learning capabilities.

> As a Student, I want AI-based learning recommendations so that I can improve faster based on my weak areas.

> As a Student, I want personalized learning paths so that I can learn according to my skill level.

> As a Student, I want AI-generated summaries of sessions so that revision becomes easier.


### 39.

> As a Student, I want smart practice recommendations so that I can strengthen concepts through repetition.


> As a Student, I want skill-gap analysis so that I can understand what industry skills I still need.



# High-Level Student Modules in TFL CoMentor

```text
Authentication & Profile Management
Learning Roadmaps
Sessions & Learning Materials
Assignments & Projects
Assessments & Coding Challenges
Mentor Interaction
Discussion Forums
Progress Tracking
Skill Analytics
Notifications & Engagement
Career Readiness
AI Learning Recommendations
```


# Core Student Activities in TFL CoMentor

```text
Learn
Practice
Collaborate
Build Projects
Track Progress
Ask Questions
Attend Sessions
Complete Assessments
Improve Skills
Prepare for Industry
```

# Real Industry Thinking

These student user stories can evolve TFL CoMentor into:

* Mentor Driven LMS
* Project-Based Learning Platform
* Employability Development Ecosystem
* Skill Engineering Platform
* AI-Powered Learning Assistant
* Career Readiness System
* Collaborative Learning Community
* Continuous Learning Ecosystem

# Suggested Future Roles in TFL CoMentor

```text
Student
Mentor
SME
Project Guide
Code Reviewer
Career Coach
Placement Mentor
Industry Expert
AI Learning Assistant
```

# Recommended Technical Architecture

```text
Frontend:
React + Redux Toolkit

Backend:
ASP.NET Core Web API

Database:
MySQL

Authentication:
JWT + RBAC

Realtime Communication:
SignalR / WebSocket

Storage:
AWS S3 / Azure Blob

Search:
ElasticSearch

AI Layer:
OpenAI + Vector Database

Analytics:
Power BI / Grafana
```



# TFL CoMentor Vision

```text
Mentor Driven Learning
        +
Project Based Education
        +
Skill Engineering
        +
Continuous Evaluation
        +
Employability Tracking
        +
AI Guidance
        =
Future Ready Learning Ecosystem
```



## MySQL tables required to support the complete **Student Perspective User Stories** in TFL CoMentor.

These tables support:

```text id="0xw3fk"
Learning Journey
Roadmap Tracking
Sessions
Learning Materials
Assignments
Projects
Assessments
Mentor Interaction
Collaboration
Notifications
Skill Tracking
Employability Growth
AI Recommendations
```

# 1. courses

Stores reusable learning courses.

```sql id="rz4qbt"
CREATE TABLE courses (
    course_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(300) NOT NULL,
    description TEXT,
    technology VARCHAR(100),
    difficulty_level VARCHAR(50),
    duration_in_hours INT,
    status VARCHAR(50),
    created_by BIGINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_course_mentor
    FOREIGN KEY(created_by)
    REFERENCES mentors(mentor_id)
);
```
# 2. roadmaps

Structured learning journeys.

```sql id="0ob9n2"
CREATE TABLE roadmaps (
    roadmap_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(300) NOT NULL,
    description TEXT,
    duration_in_weeks INT,
    difficulty_level VARCHAR(50),
    status VARCHAR(50),
    created_by BIGINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_roadmap_mentor
    FOREIGN KEY(created_by)
    REFERENCES mentors(mentor_id)
);
```

# 3. roadmap_courses

Courses mapped inside roadmap.

```sql id="yl4xwp"
CREATE TABLE roadmap_courses (
    roadmap_course_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    roadmap_id BIGINT,
    course_id BIGINT,
    week_no INT,
    sequence_no INT,

    CONSTRAINT fk_rc_roadmap
    FOREIGN KEY(roadmap_id)
    REFERENCES roadmaps(roadmap_id),

    CONSTRAINT fk_rc_course
    FOREIGN KEY(course_id)
    REFERENCES courses(course_id)
);
```

# 4. student_roadmaps

Assigned roadmap to students.

```sql id="2lk14u"
CREATE TABLE student_roadmaps (
    student_roadmap_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    student_id BIGINT,
    roadmap_id BIGINT,
    mentor_id BIGINT,
    assigned_date DATE,
    completion_percent DECIMAL(5,2),
    status VARCHAR(50),

    CONSTRAINT fk_sr_student
    FOREIGN KEY(student_id)
    REFERENCES students(student_id),

    CONSTRAINT fk_sr_roadmap
    FOREIGN KEY(roadmap_id)
    REFERENCES roadmaps(roadmap_id),

    CONSTRAINT fk_sr_mentor
    FOREIGN KEY(mentor_id)
    REFERENCES mentors(mentor_id)
);
```

# 5. sessions

Mentor learning sessions.

```sql id="4zge2v"
CREATE TABLE sessions (
    session_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    roadmap_id BIGINT,
    mentor_id BIGINT,
    title VARCHAR(300),
    topic VARCHAR(300),
    description TEXT,
    learning_objectives TEXT,
    technology VARCHAR(100),
    difficulty_level VARCHAR(50),
    session_date DATETIME,
    duration_in_minutes INT,
    status VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_session_roadmap
    FOREIGN KEY(roadmap_id)
    REFERENCES roadmaps(roadmap_id),

    CONSTRAINT fk_session_mentor
    FOREIGN KEY(mentor_id)
    REFERENCES mentors(mentor_id)
);
```
# 6. session_students

Students attending sessions.

```sql id="c7qjks"
CREATE TABLE session_students (
    session_student_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    session_id BIGINT,
    student_id BIGINT,
    attendance_status VARCHAR(50),
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_ss_session
    FOREIGN KEY(session_id)
    REFERENCES sessions(session_id),

    CONSTRAINT fk_ss_student
    FOREIGN KEY(student_id)
    REFERENCES students(student_id)
);
```


# 7. learning_materials

Session learning resources.

```sql id="on8shz"
CREATE TABLE learning_materials (
    material_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    session_id BIGINT,
    title VARCHAR(300),
    material_type VARCHAR(50),
    material_url TEXT,
    description TEXT,
    sequence_no INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_material_session
    FOREIGN KEY(session_id)
    REFERENCES sessions(session_id)
);
```


# 8. student_material_progress

Track student learning progress.

```sql id="70o7m4"
CREATE TABLE student_material_progress (
    progress_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    student_id BIGINT,
    material_id BIGINT,
    progress_percent DECIMAL(5,2),
    status VARCHAR(50),
    completed_at TIMESTAMP NULL,
    last_accessed TIMESTAMP,

    CONSTRAINT fk_smp_student
    FOREIGN KEY(student_id)
    REFERENCES students(student_id),

    CONSTRAINT fk_smp_material
    FOREIGN KEY(material_id)
    REFERENCES learning_materials(material_id)
);
```

# 9. mentor_questions

Student doubts/questions.

```sql id="tdug8s"
CREATE TABLE mentor_questions (
    question_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    session_id BIGINT,
    student_id BIGINT,
    question TEXT,
    asked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50),

    CONSTRAINT fk_mq_session
    FOREIGN KEY(session_id)
    REFERENCES sessions(session_id),

    CONSTRAINT fk_mq_student
    FOREIGN KEY(student_id)
    REFERENCES students(student_id)
);
```

# 10. mentor_answers

Mentor responses.

```sql id="esntr9"
CREATE TABLE mentor_answers (
    answer_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    question_id BIGINT,
    mentor_id BIGINT,
    answer TEXT,
    answered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_ma_question
    FOREIGN KEY(question_id)
    REFERENCES mentor_questions(question_id),

    CONSTRAINT fk_ma_mentor
    FOREIGN KEY(mentor_id)
    REFERENCES mentors(mentor_id)
);
```

# 11. mentoring_bookings

One-on-one mentoring sessions.

```sql id="s9p8p2"
CREATE TABLE mentoring_bookings (
    booking_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    student_id BIGINT,
    mentor_id BIGINT,
    booking_date DATETIME,
    purpose TEXT,
    status VARCHAR(50),

    CONSTRAINT fk_mb_student
    FOREIGN KEY(student_id)
    REFERENCES students(student_id),

    CONSTRAINT fk_mb_mentor
    FOREIGN KEY(mentor_id)
    REFERENCES mentors(mentor_id)
);
```

# 12. discussion_groups

Peer discussion groups.

```sql id="jlwm47"
CREATE TABLE discussion_groups (
    group_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(300),
    technology VARCHAR(100),
    created_by BIGINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

# 13. discussion_messages

Group discussions.

```sql id="6jztqa"
CREATE TABLE discussion_messages (
    message_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    group_id BIGINT,
    sender_type VARCHAR(50),
    sender_id BIGINT,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_dm_group
    FOREIGN KEY(group_id)
    REFERENCES discussion_groups(group_id)
);
```

# 14. assignments

Hands-on assignments.

```sql id="w1sq7h"
CREATE TABLE assignments (
    assignment_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    session_id BIGINT,
    title VARCHAR(300),
    description TEXT,
    due_date DATETIME,
    total_marks INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_assignment_session
    FOREIGN KEY(session_id)
    REFERENCES sessions(session_id)
);
```

# 15. assignment_submissions

Student assignment submissions.

```sql id="jlwm96"
CREATE TABLE assignment_submissions (
    submission_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    assignment_id BIGINT,
    student_id BIGINT,
    submission_url TEXT,
    feedback TEXT,
    marks_obtained DECIMAL(5,2),
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50),

    CONSTRAINT fk_as_assignment
    FOREIGN KEY(assignment_id)
    REFERENCES assignments(assignment_id),

    CONSTRAINT fk_as_student
    FOREIGN KEY(student_id)
    REFERENCES students(student_id)
);
```

# 16. projects

Industry-level projects.

```sql id="4rshwm"
CREATE TABLE projects (
    project_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    mentor_id BIGINT,
    title VARCHAR(300),
    description TEXT,
    technology_stack VARCHAR(300),
    difficulty_level VARCHAR(50),
    start_date DATE,
    end_date DATE,
    status VARCHAR(50),

    CONSTRAINT fk_project_mentor
    FOREIGN KEY(mentor_id)
    REFERENCES mentors(mentor_id)
);
```

# 17. student_projects

Student project participation.

```sql id="s1q13l"
CREATE TABLE student_projects (
    student_project_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    student_id BIGINT,
    project_id BIGINT,
    github_repository_url TEXT,
    deployment_url TEXT,
    completion_percent DECIMAL(5,2),
    review_feedback TEXT,
    status VARCHAR(50),

    CONSTRAINT fk_sp_student
    FOREIGN KEY(student_id)
    REFERENCES students(student_id),

    CONSTRAINT fk_sp_project
    FOREIGN KEY(project_id)
    REFERENCES projects(project_id)
);
```

# 18. assessments

Quizzes and evaluations.

```sql id="85djlwm"
CREATE TABLE assessments (
    assessment_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    session_id BIGINT,
    title VARCHAR(300),
    description TEXT,
    total_marks INT,
    assessment_type VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_assessment_session
    FOREIGN KEY(session_id)
    REFERENCES sessions(session_id)
);
```

# 19. student_assessments

Assessment results.

```sql id="z2bsbm"
CREATE TABLE student_assessments (
    student_assessment_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    assessment_id BIGINT,
    student_id BIGINT,
    marks_obtained DECIMAL(5,2),
    feedback TEXT,
    completed_at TIMESTAMP,

    CONSTRAINT fk_sa_assessment
    FOREIGN KEY(assessment_id)
    REFERENCES assessments(assessment_id),

    CONSTRAINT fk_sa_student
    FOREIGN KEY(student_id)
    REFERENCES students(student_id)
);
```

# 20. coding_challenges

Problem-solving activities.

```sql id="1xtjvk"
CREATE TABLE coding_challenges (
    challenge_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(300),
    description TEXT,
    difficulty_level VARCHAR(50),
    technology VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

# 21. student_challenges

Student coding challenge attempts.

```sql id="jlwm02"
CREATE TABLE student_challenges (
    student_challenge_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    student_id BIGINT,
    challenge_id BIGINT,
    solution_repository_url TEXT,
    status VARCHAR(50),
    score DECIMAL(5,2),
    attempted_at TIMESTAMP,

    CONSTRAINT fk_sc_student
    FOREIGN KEY(student_id)
    REFERENCES students(student_id),

    CONSTRAINT fk_sc_challenge
    FOREIGN KEY(challenge_id)
    REFERENCES coding_challenges(challenge_id)
);
```


# 22. skills

Master skills catalog.

```sql id="uf3gql"
CREATE TABLE skills (
    skill_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200),
    category VARCHAR(100),
    description TEXT
);
```

 

# 23. student_skills

Track skill growth.

```sql id="vjlwm8"
CREATE TABLE student_skills (
    student_skill_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    student_id BIGINT,
    skill_id BIGINT,
    proficiency_level VARCHAR(50),
    last_assessed_at TIMESTAMP,

    CONSTRAINT fk_sskill_student
    FOREIGN KEY(student_id)
    REFERENCES students(student_id),

    CONSTRAINT fk_sskill_skill
    FOREIGN KEY(skill_id)
    REFERENCES skills(skill_id)
);
```

 

# 24. employability_scores

Industry readiness tracking.

```sql id="6mwj2t"
CREATE TABLE employability_scores (
    employability_score_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    student_id BIGINT,
    technical_score DECIMAL(5,2),
    communication_score DECIMAL(5,2),
    project_score DECIMAL(5,2),
    interview_score DECIMAL(5,2),
    overall_score DECIMAL(5,2),
    evaluated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_employability_student
    FOREIGN KEY(student_id)
    REFERENCES students(student_id)
);
```

   

# 25. notifications

Session/task reminders.

```sql id="jlwm84"
CREATE TABLE notifications (
    notification_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    recipient_type VARCHAR(50),
    recipient_id BIGINT,
    title VARCHAR(300),
    message TEXT,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```


# 26. achievement_badges

Gamification badges.

```sql id="kugv6u"
CREATE TABLE achievement_badges (
    badge_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200),
    description TEXT,
    icon_url TEXT
);
```

# 27. student_badges

Student achievements.

```sql id="jlwm66"
CREATE TABLE student_badges (
    student_badge_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    student_id BIGINT,
    badge_id BIGINT,
    earned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_sb_student
    FOREIGN KEY(student_id)
    REFERENCES students(student_id),

    CONSTRAINT fk_sb_badge
    FOREIGN KEY(badge_id)
    REFERENCES achievement_badges(badge_id)
);
```

# 28. ai_recommendations

AI-generated learning recommendations.

```sql id="jlwm90"
CREATE TABLE ai_recommendations (
    recommendation_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    student_id BIGINT,
    recommendation_type VARCHAR(100),
    recommendation_text TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_ai_student
    FOREIGN KEY(student_id)
    REFERENCES students(student_id)
);
```



# High-Level Student Learning Flow

```text id="jlwm51"
Roadmap
   ↓
Courses
   ↓
Sessions
   ↓
Learning Materials
   ↓
Assignments
   ↓
Assessments
   ↓
Projects
   ↓
Skill Tracking
   ↓
Employability Growth
```


# Core Student Modules Supported

```text id="jlwm62"
Learning Journey
Roadmap Tracking
Session Participation
Mentor Interaction
Assignments
Projects
Assessments
Coding Challenges
Skill Tracking
Career Readiness
Notifications
AI Recommendations
```

---

# Industry-Level Vision for TFL CoMentor

```text id="jlwm73"
Mentor Driven LMS
        +
Project Based Learning
        +
Skill Engineering
        +
Continuous Assessment
        +
Employability Tracking
        +
AI Assisted Learning
        =
Future Ready Talent Ecosystem
```
