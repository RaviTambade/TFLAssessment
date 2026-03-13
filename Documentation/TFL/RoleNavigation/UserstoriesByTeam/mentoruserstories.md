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

## User Story 1: View and Search Mentees

**As a Mentor**  
I want to view and search the list of students assigned to me  
So that I can quickly find and monitor their learning progress.

### API

```http
GET /api/mentor/mentee
GET /api/mentor/mentee/students-name
```

### Acceptance Criteria

- Mentor should see all assigned mentees  
- Mentor can search students using name  
- System shows student name, skill level, and technology track  

### Business Value

Allows mentors to **quickly locate students and monitor progress efficiently**.

---

## User Story 2: Filter Mentees by Technology

**As a Mentor**  
I want to filter mentees by technology  
So that I can focus on students aligned with my expertise.

### API

```http
GET /api/mentor/mentees?technology={tech}
```

Example:

```
/api/mentor/mentees?technology=node
```

### Acceptance Criteria

- Mentor can filter mentees by technology  
- Only matching students should appear  
- System displays learning track and skill level  

### Business Value

Helps mentors **focus on students working in relevant technologies**.

---

## User Story 3: Manage Mentees

**As a Mentor**  
I want to add or remove mentees  
So that I can manage my mentoring responsibilities.

### API

```http
POST /api/mentor/mentee
DELETE /api/mentor/mentee/{studentId}
```

### Acceptance Criteria

- Mentor can assign a new mentee  
- Mentor can remove a student from the mentee list  
- Updated mentee list should be visible immediately  

### Business Value

Provides **flexibility in managing mentoring relationships**.

---

## User Story 4: View Mentee Profile

**As a Mentor**  
I want to view the profile of a mentee  
So that I can understand their background and learning progress.

### API

```http
GET /api/mentor/mentee/student-profile
```

### Acceptance Criteria

Profile should show:

- Student name  
- Technology track  
- Learning path  
- Projects  
- Skill level  

### Business Value

Helps mentors **understand student background before giving guidance**.

---

# 📊 2️⃣ Student Performance APIs

---

## User Story 5: View Learning Path Progress

**As a Mentor**  
I want to see the learning path progress of a student  
So that I can track their course completion.

### API

```http
GET /api/mentor/mentee/{studentId}/learning-path
```

### Acceptance Criteria

- System shows completed modules  
- System shows remaining modules  
- Completion percentage should be visible  

### Business Value

Allows mentors to **identify whether students are progressing properly**.

---

## User Story 6: View Student Skills

**As a Mentor**  
I want to view skills acquired by a student  
So that I can recommend the next learning steps.

### API

```http
GET /api/mentor/mentee/{studentId}/student-skills
```

### Acceptance Criteria

- System lists all acquired skills  
- Skill level should be displayed  
- Assessment scores should be visible  

### Business Value

Helps mentors **guide students toward industry-ready skills**.

---

## User Story 7: View External Feedback

**As a Mentor**  
I want to see feedback given by SMEs and employers  
So that I can evaluate the student's professional readiness.

### API

```http
GET /api/mentor/mentee/{studentId}/SMEfeedback
GET /api/mentor/mentee/{studentId}/employer-feedback
```

### Acceptance Criteria

- SME feedback should be visible  
- Employer feedback should be visible  
- Feedback should include ratings and comments  

### Business Value

Provides **multi-source evaluation of student performance**.

---

# 📝 3️⃣ Assignment Performance APIs

---

## User Story 8: View Assignment Status

**As a Mentor**  
I want to see completed and scheduled assignments of a student  
So that I can track evaluation activities.

### API

```http
GET /api/mentor/mentee/{studentId}/assignment?status=completed
GET /api/mentor/mentee/{studentId}/assignments?status=scheduled
```

### Acceptance Criteria

- Completed assignments should be listed  
- Scheduled assignments should be listed  
- Assignment score should be visible  

### Business Value

Helps mentors **monitor student learning progress through assignments**.

---

## User Story 9: View Assignment Score Analysis

**As a Mentor**  
I want to analyze assignment scores  
So that I can identify learning strengths and weaknesses.

### API

```http
GET /api/mentor/mentee/{studentId}/assignments-score
```

### Acceptance Criteria

- Score summary should be visible  
- System should show average score  
- Performance trend should be displayed  

### Business Value

Allows mentors to **identify areas where students need improvement**.

---

# 🎓 4️⃣ Session Tracking APIs

---

## User Story 10: View Student Session Participation

**As a Mentor**  
I want to see sessions attended and assigned to a student  
So that I can track their participation in mentoring activities.

### API

```http
GET /api/mentor/mentee/{studentId}/sessions/attended
GET /api/mentor/mentee/{studentId}/sessions/assigned
```

### Acceptance Criteria

- Attended sessions should be listed  
- Assigned sessions should be listed  
- Session topic and date should be visible  

### Business Value

Helps mentors **measure student engagement in mentoring sessions**.

---

# 🗒 5️⃣ Mentoring Notes & Feedback APIs

---

## User Story 11: View Mentor Notes

**As a Mentor**  
I want to view mentoring notes written about a student  
So that I can track observations about their learning journey.

### API

```http
GET /api/mentor/mentee/{studentId}/notes/viewed
```

### Acceptance Criteria

- Notes should be visible to mentor  
- Notes should contain timestamps  
- Notes should be associated with a student  

### Business Value

Helps mentors **maintain historical observations for each student**.

---

## User Story 12: Provide Feedback to Student

**As a Mentor**  
I want to provide structured feedback to a student  
So that they can improve their skills.

### API

```http
POST /api/mentor/mentee/{studentId}/feedback
```

Example:

```json
{
  "strengths": "Strong problem solving",
  "improvementAreas": "Needs practice in algorithms"
}
```

### Acceptance Criteria

- Mentor can submit feedback  
- Feedback should include strengths and improvement areas  
- Student should be able to view feedback  

### Business Value

Provides **constructive guidance to improve student performance**.

---

# 🚀 6️⃣ Project Management APIs

---

## User Story 13: View Projects

**As a Mentor**  
I want to view all projects assigned to my mentees  
So that I can monitor project development.

### API

```http
GET /api/mentor/projects
```

Example:

```
/api/mentor/projects?status=running
```

### Acceptance Criteria

- System should list projects  
- Running projects should be visible  
- Completed projects should be visible  
- Project team members should be listed  

### Business Value

Allows mentors to **track real-world project development of students**.

---

## User Story 14: View Project Details

**As a Mentor**  
I want to view detailed information about a project  
So that I can evaluate architecture and implementation.

### API

```http
GET /api/mentor/projects/details
```

### Acceptance Criteria

- Project description should be visible  
- Technologies used should be shown  
- Repository link should be available  

### Business Value

Helps mentors **review project structure and implementation quality**.

---

## User Story 15: Manage Project Team

**As a Mentor**  
I want to add or remove students from a project  
So that I can manage the project team.

### API

```http
POST /api/mentor/projects/{projectId}/students
DELETE /api/mentor/projects/{projectId}/students/{studentId}
```

### Acceptance Criteria

- Mentor can add students to project  
- Mentor can remove students from project  
- Updated team should be visible immediately  

### Business Value

Allows mentors to **manage collaboration between students**.

---

## User Story 16: Provide Project Feedback

**As a Mentor**  
I want to review projects  
So that students receive constructive feedback.

### API

```http
POST /api/mentor/projects/{projectId}/feedback
```

### Acceptance Criteria

- Mentor can submit project comments  
- Mentor can give ratings  

### Business Value

Improves **project quality through mentor guidance**.

---

## User Story 17: Schedule Project Meeting

**As a Mentor**  
I want to schedule project discussions  
So that I can guide the team during development.

### API

```http
POST /api/mentor/projects/{projectId}/meeting
```

### Acceptance Criteria

- Meeting date and time should be stored  
- Students should receive notification  

### Business Value

Ensures **regular communication between mentor and project team**.

---

# 🎓 7️⃣ Mentor Session APIs

---

## User Story 18: View Upcoming Sessions

**As a Mentor**  
I want to see upcoming mentoring sessions  
So that I can prepare for them.

### API

```http
GET /api/mentor/sessions?status=upcoming
```

### Acceptance Criteria

- Session topic should be displayed  
- Session date and time should be shown  
- Participating students should be visible  

### Business Value

Helps mentors **prepare for upcoming teaching sessions**.

---

## User Story 19: Create Mentoring Session

**As a Mentor**  
I want to create mentoring sessions  
So that I can guide students.

### API

```http
POST /api/mentor/sessions
```

Example:

```json
{
  "sessionName": "C++ Memory Management",
  "topic": "Pointers",
  "date": "2026-03-20",
  "time": "10:30",
  "meetingLink": "zoom-link",
  "students": [21,25,30]
}
```

### Acceptance Criteria

- Session should be stored in system  
- Session should appear in student dashboard  
- Students should receive notifications  

### Business Value

Supports **structured mentoring sessions**.

---

## User Story 20: View Session History

**As a Mentor**  
I want to view past mentoring sessions  
So that I can analyze teaching impact.

### API

```http
GET /api/mentor/sessions?status=completed
```

### Acceptance Criteria

- System lists past sessions  
- Session duration should be visible  
- Attendance information should be available  

### Business Value

Helps mentors **evaluate mentoring effectiveness**.

---

# 📚 8️⃣ Mentor Resource APIs

---

## User Story 21: Access Learning Resources

**As a Mentor**  
I want to access shared learning resources  
So that I can guide students effectively.

### API

```http
GET /api/mentor/resources
```

### Resource Types

```
recordings
notes
diagrams
```

### Acceptance Criteria

- Resources should be categorized  
- Mentors should easily find materials  

### Business Value

Provides **centralized learning materials for mentoring sessions**.

---

# 👤 9️⃣ Mentor Profile APIs

---

## User Story 22: View Mentor Profile

**As a Mentor**  
I want to view my profile  
So that I can verify my mentoring information.

### API

```http
GET /api/mentor/profile
```

### Acceptance Criteria

- System shows expertise  
- System shows mentoring statistics  
- System shows mentee count  

### Business Value

Allows mentors to **review their mentoring impact**.

---

## User Story 23: Update Mentor Profile

**As a Mentor**  
I want to update my profile information  
So that my expertise and experience are accurate.

### API

```http
PUT /api/mentor/profile
```

### Acceptance Criteria

- Mentor can update expertise  
- Mentor can update biography  

### Business Value

Ensures **accurate mentor information across the platform**.

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
