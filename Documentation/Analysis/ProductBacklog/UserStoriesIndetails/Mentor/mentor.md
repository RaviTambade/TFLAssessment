Below are **Agile User Stories mapped to each Mentor REST API endpoint** for the **TFLCoMentor Mentor Portal**.
This structure helps **developers, product owners, and students understand the purpose of every API** in a real mentoring platform.

Format used:

* 👨‍🏫 **User Story**
* 🔗 **API Endpoint**
* ✅ **Acceptance Criteria**
* 🎯 **Business Value**

---

# 👨‍🏫 1️⃣ Mentee Management APIs

---

# User Story: View Mentees

**As a Mentor**
I want to see the list of students assigned to me
So that I can monitor their learning progress.

**API**

```http
GET /api/mentor/mentees
```

Example

```
/api/mentor/mentees?technology=node
```

**Acceptance Criteria**

* Mentor should see assigned mentees
* Mentor can filter mentees by technology
* System shows name, skill level, and learning track

**Business Value**

Helps mentors **focus on students aligned with their expertise**.

---

# User Story: View Mentee Profile

**As a Mentor**
I want to view the profile of a mentee
So that I can understand their background and skills.

**API**

```http
GET /api/mentor/mentees/{studentId}
```

**Acceptance Criteria**

* Profile should show:

  * Student name
  * Technology track
  * Learning path
  * Projects

---

# User Story: View Mentee Performance

**As a Mentor**
I want to see performance analytics of a student
So that I can guide them effectively.

**API**

```http
GET /api/mentor/mentees/{studentId}/performance
```

**Acceptance Criteria**

* Show learning path progress
* Show assignment scores
* Show session attendance
* Show feedback from SMEs or employers

---

# User Story: View Student Skills

**As a Mentor**
I want to view skills acquired by a student
So that I can recommend the next learning steps.

**API**

```http
GET /api/mentor/mentees/{studentId}/skills
```

**Acceptance Criteria**

* System lists all student skills
* Include skill level and assessment scores

---

# User Story: View Assignments

**As a Mentor**
I want to view assignments of a student
So that I can evaluate learning progress.

**API**

```http
GET /api/mentor/mentees/{studentId}/assignments
```

**Acceptance Criteria**

* Show completed assignments
* Show scheduled assignments
* Show scores and analysis

---

# User Story: Add Mentor Notes

**As a Mentor**
I want to add mentoring notes for a student
So that I can track learning observations.

**API**

```http
POST /api/mentor/mentees/{studentId}/notes
```

Example

```json
{
 "note":"Student needs improvement in problem solving"
}
```

**Acceptance Criteria**

* Notes should be visible to mentor
* Notes should help track student growth

---

# User Story: Send Feedback to Student

**As a Mentor**
I want to provide structured feedback to a student
So that they can improve their skills.

**API**

```http
POST /api/mentor/mentees/{studentId}/feedback
```

**Acceptance Criteria**

* Feedback should include strengths
* Feedback should include improvement areas

---

# 🚀 2️⃣ Project Review APIs

---

# User Story: View Projects

**As a Mentor**
I want to see projects being developed by my mentees
So that I can guide them during development.

**API**

```http
GET /api/mentor/projects
```

Example

```
/api/mentor/projects?status=running
```

**Acceptance Criteria**

* Show running projects
* Show completed projects
* Show team members

---

# User Story: View Project Details

**As a Mentor**
I want to view project details
So that I can evaluate architecture and implementation.

**API**

```http
GET /api/mentor/projects/{projectId}
```

**Acceptance Criteria**

* Show project description
* Show technologies used
* Show project repository link

---

# User Story: Submit Project Review

**As a Mentor**
I want to review a project
So that students receive constructive feedback.

**API**

```http
POST /api/mentor/projects/{projectId}/review
```

**Acceptance Criteria**

* Mentor can submit comments
* Mentor can give rating

---

# User Story: Schedule Project Discussion

**As a Mentor**
I want to schedule a meeting for a project
So that I can guide the team.

**API**

```http
POST /api/mentor/projects/{projectId}/meeting
```

**Acceptance Criteria**

* Meeting date and time should be stored
* Students receive notification

---

# 🎓 3️⃣ Mentor Session APIs

---

# User Story: View Upcoming Sessions

**As a Mentor**
I want to see upcoming mentoring sessions
So that I can prepare for them.

**API**

```http
GET /api/mentor/sessions/upcoming
```

**Acceptance Criteria**

* Show date and time
* Show session topic
* Show participating students

---

# User Story: Create Mentoring Session

**As a Mentor**
I want to create a mentoring session
So that I can teach or guide students.

**API**

```http
POST /api/mentor/sessions
```

Example

```json
{
 "sessionName":"C++ Memory Management",
 "topic":"Pointers",
 "date":"2026-03-20",
 "time":"10:30",
 "meetingLink":"zoom-link",
 "students":[21,25,30]
}
```

**Acceptance Criteria**

* Session should appear in student dashboard
* Students should receive notification

---

# User Story: View Session History

**As a Mentor**
I want to view past mentoring sessions
So that I can analyze teaching impact.

**API**

```http
GET /api/mentor/sessions/history
```

**Acceptance Criteria**

* System lists past sessions
* Include session duration and attendance

---

# 📚 4️⃣ Mentor Resources APIs

---

# User Story: Access Learning Resources

**As a Mentor**
I want to access shared learning resources
So that I can guide students effectively.

**API**

```http
GET /api/mentor/resources
```

**Types**

```
recordings
notes
diagrams
```

**Acceptance Criteria**

* Resources should be categorized
* Mentors should easily share with students

---

# 👤 5️⃣ Mentor Profile APIs

---

# User Story: View Mentor Profile

**As a Mentor**
I want to view my profile
So that I can verify my mentoring information.

**API**

```http
GET /api/mentor/profile
```

**Acceptance Criteria**

* Show expertise
* Show mentoring statistics
* Show mentee count

---

# User Story: Update Mentor Profile

**As a Mentor**
I want to update my profile information
So that my expertise and experience are accurate.

**API**

```http
PUT /api/mentor/profile
```

**Acceptance Criteria**

* Mentor can update expertise
* Mentor can update biography

---

# 🧠 Complete Mentor Responsibility Flow

Mentor plays a **critical role in the TFLCoMentor ecosystem**.

```text
Student joins platform
        │
        ▼
Mentor assigned
        │
        ▼
Learning path guidance
        │
        ▼
Project mentoring
        │
        ▼
Skill evaluation
        │
        ▼
Industry readiness
        │
        ▼
Employer hiring
```

This type of mentorship ecosystem is similar to mentoring systems used by organizations like:

* Google
* Microsoft
* Linux Foundation

---

# 🧩 Final Role-Based Platform Architecture

For **TFLCoMentor**, the routing structure remains consistent:

```text
/admin/*
/mentor/*
/student/*
/sme/*
/employer/*
```

This separation ensures:

✔ scalable architecture
✔ clean API design
✔ clear responsibility boundaries

