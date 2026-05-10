# Feature → API → Database → Portal Mapping Table

*(Master Architecture Blueprint)*

This artifact becomes the **implementation blueprint** for developers building **TFLCoMentor**.

It connects **Feature → API → Database → Portal → Module** so the team clearly understands **what to build and where it belongs**.

# 1️⃣ Identity & User Management Module

| Feature                 | API Endpoint                     | Database Tables  | Portals                   |
| ----------------------- | -------------------------------- | ---------------- | ------------------------- |
| View platform users     | GET /api/admin/users             | Users, UserRoles | Admin                     |
| View user profile       | GET /api/users/{id}              | Users            | Admin, Mentor             |
| Update profile          | PUT /api/users/{id}              | Users            | Student, Mentor, Employer |
| Change password         | PUT /api/users/password          | Users            | Student                   |
| Assign role             | POST /api/admin/users/{id}/roles | UserRoles        | Admin                     |
| Delete user             | DELETE /api/admin/users/{id}     | Users            | Admin                     |
| Create employer profile | POST /api/employer/profile       | Employers        | Employer                  |



# 2️⃣ Learning & Content Management Module

| Feature                  | API Endpoint               | Database Tables            | Portals      |
| ------------------------ | -------------------------- | -------------------------- | ------------ |
| View courses             | GET /api/student/courses   | Courses, CourseAssignments | Student      |
| View sessions            | GET /api/sessions          | Sessions                   | Student, SME |
| Create session           | POST /api/sme/sessions     | Sessions                   | SME          |
| Update session           | PUT /api/sme/sessions/{id} | Sessions                   | SME          |
| Search sessions          | GET /api/sessions/search   | Sessions                   | SME          |
| Create hands-on activity | POST /api/sme/hands-on     | HandsOnActivities          | SME          |
| View hands-on activities | GET /api/hands-on          | HandsOnActivities          | Student, SME |
| Manage concepts          | POST /api/sme/concepts     | Concepts                   | SME          |


# 3️⃣ Assessment & Evaluation Engine

| Feature                    | API Endpoint                              | Database Tables             | Portals |
| -------------------------- | ----------------------------------------- | --------------------------- | ------- |
| Create assessment          | POST /api/sme/tests                       | Tests                       | SME     |
| View assessments           | GET /api/admin/assessments                | Tests                       | Admin   |
| Assign assessment          | POST /api/admin/assessments/{id}/assign   | AssessmentAssignments       | Admin   |
| Start assessment           | POST /api/student/assessments/{id}/start  | AssessmentAttempts          | Student |
| Submit answers             | POST /api/student/assessments/{id}/submit | Answers, AssessmentAttempts | Student |
| View results               | GET /api/student/assessments/{id}/result  | Results                     | Student |
| Create questions           | POST /api/sme/questions                   | Questions                   | SME     |
| Submit question for review | POST /api/sme/questions/review            | Questions                   | SME     |


# 4️⃣ Mentoring & Guidance Module

| Feature                    | API Endpoint                         | Database Tables   | Portals |
| -------------------------- | ------------------------------------ | ----------------- | ------- |
| View mentees               | GET /api/mentor/students             | MentorAssignments | Mentor  |
| Add mentee                 | POST /api/admin/mentor/assign        | MentorAssignments | Admin   |
| Remove mentee              | DELETE /api/admin/mentor/{studentId} | MentorAssignments | Admin   |
| Schedule mentoring session | POST /api/mentor/sessions            | MentorSessions    | Mentor  |
| View mentoring sessions    | GET /api/mentor/sessions             | MentorSessions    | Mentor  |
| Provide feedback           | POST /api/mentor/feedback            | MentorFeedback    | Mentor  |


# 5️⃣ Project & Assignment Management Module

| Feature                     | API Endpoint                              | Database Tables       | Portals |
| --------------------------- | ----------------------------------------- | --------------------- | ------- |
| View assignments            | GET /api/student/assignments              | Assignments           | Student |
| Submit assignment           | POST /api/student/assignments/{id}/submit | AssignmentSubmissions | Student |
| View projects               | GET /api/student/projects                 | Projects              | Student |
| Submit project              | POST /api/student/projects/{id}/submit    | ProjectSubmissions    | Student |
| Review projects             | POST /api/mentor/projects/{id}/review     | ProjectReviews        | Mentor  |
| Schedule project discussion | POST /api/mentor/projects/{id}/discussion | ProjectMeetings       | Mentor  |


# 6️⃣ Skill Graph & Learning Progress Module

| Feature                     | API Endpoint                         | Database Tables        | Portals |
| --------------------------- | ------------------------------------ | ---------------------- | ------- |
| View skill progress         | GET /api/student/skills              | SkillProgress          | Student |
| View learning path          | GET /api/student/learning-path       | LearningPaths          | Student |
| Analyze student performance | GET /api/sme/performance/{studentId} | SkillProgress, Results | SME     |
| View skill dashboard        | GET /api/mentor/skills/{studentId}   | SkillProgress          | Mentor  |
| Analyze question difficulty | GET /api/sme/question-analysis       | QuestionAnalytics      | SME     |


# 7️⃣ Hiring & Recruitment Engine

| Feature                | API Endpoint                                 | Database Tables    | Portals  |
| ---------------------- | -------------------------------------------- | ------------------ | -------- |
| View job opportunities | GET /api/jobs                                | Jobs               | Student  |
| Apply for job          | POST /api/jobs/{id}/apply                    | JobApplications    | Student  |
| View applications      | GET /api/student/applications                | JobApplications    | Student  |
| Post job               | POST /api/employer/jobs                      | Jobs               | Employer |
| Edit job               | PUT /api/employer/jobs/{id}                  | Jobs               | Employer |
| Close job              | PUT /api/employer/jobs/{id}/close            | Jobs               | Employer |
| Search candidates      | GET /api/employer/candidates                 | Students, Skills   | Employer |
| Shortlist candidate    | POST /api/employer/candidates/{id}/shortlist | CandidateShortlist | Employer |
| Schedule interview     | POST /api/employer/interviews                | Interviews         | Employer |
| View interview results | GET /api/employer/interviews/results         | InterviewResults   | Employer |


# Portal-to-Module Mapping

| Portal          | Modules Used                                   |
| --------------- | ---------------------------------------------- |
| Admin Portal    | Identity, Assessment, Mentoring                |
| Student Portal  | Learning, Assessment, Projects, Skills, Hiring |
| SME Portal      | Learning, Assessment, Skill Analytics          |
| Mentor Portal   | Mentoring, Projects, Skill Graph               |
| Employer Portal | Hiring Engine                                  |


# Complete Logical Architecture Flow

```
                ┌─────────────────────────┐
                │      Admin Portal       │
                └────────────┬────────────┘
                             │
                             ▼
                    Identity Management
                             │
                             ▼
                     Learning Management
                             │
                             ▼
                     Assessment Engine
                             │
                             ▼
                     Mentoring System
                             │
                             ▼
                     Project Management
                             │
                             ▼
                        Skill Graph
                             │
                             ▼
                       Hiring Engine
```


# Key Architectural Insight

The **TFLCoMentor system is a Skill Development Lifecycle Platform**:

```
Learn → Practice → Assess → Mentor → Build → Measure → Hire
```

Which is **very different from LMS systems**.

Typical LMS:

```
Content → Test → Certificate
```

TFLCoMentor:

```
Learning → Mentoring → Skill Graph → Employment
```

This is why the platform is **much closer to a Professional Development Ecosystem**.
