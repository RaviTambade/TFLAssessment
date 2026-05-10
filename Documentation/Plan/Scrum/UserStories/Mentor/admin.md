Below are **clear User Stories mapped to each REST API endpoint**. This format is commonly used in **Agile / Scrum product development** so that **developers, testers, UI teams, and students understand the purpose of every API**.

I have used the standard **User Story format**:

```
As a <Role>
I want to <Action>
So that <Business Value>
```

And added:

* API Endpoint
* Acceptance Criteria
* Example Response

This will help your **TFLCoMentor platform architecture documentation**.

## Changes suggested according to scrum framework

# 🧭 1️⃣ Admin Dashboard APIs

## User Story: View Platform Overview

**As an Admin**
I want to view the overall platform statistics
So that I can quickly understand platform activity and growth.

**API**

```
GET /api/admin/dashboard/overview
```

**Acceptance Criteria**

* Admin can view total registered users
* Admin can view active users
* Admin can view number of assessments created
* Data should load within dashboard overview

**Example Response**

```json
{
 "totalUsers":1200,
 "activeUsers":245,
 "totalAssessments":48
}
```

---

# 🧪 2️⃣ Assessment Management APIs

---

# User Story: View Assessment Statistics

**As an Admin**
I want to see statistics of assessments
So that I can understand how many assessments are ongoing or unassigned.

**API**

```
GET /api/admin/assessments/statistics
```

**Acceptance Criteria**

* System should return ongoing assessments
* System should return unassigned assessments
* Dashboard should visualize the data

**Response**

```json
{
 "ongoingAssessments":12,
 "unassignedAssessments":5
}
```

---

# User Story: View Assessment List

**As an Admin**
I want to see all assessments in the system
So that I can manage and assign them to students.

**API**

```
GET /api/admin/assessments
```

**Acceptance Criteria**

* System should return list of assessments
* List should include assessment name, status, schedule date
* Admin should be able to navigate to details

---

# User Story: Assign Assessment to Students

**As an Admin**
I want to assign an assessment to multiple students
So that their skills can be evaluated.

**API**

```
POST /api/admin/assessments/{assessmentId}/assign
```

**Request Body**

```json
{
 "studentIds":[12,45,67],
 "scheduleDate":"2026-03-15"
}
```

**Acceptance Criteria**

* Admin selects assessment
* Admin selects students
* Admin schedules date
* Students receive assigned assessment

---

# User Story: Delete an Assessment

**As an Admin**
I want to delete an assessment
So that outdated or incorrect assessments can be removed.

**API**

```
DELETE /api/admin/assessments/{assessmentId}
```

**Acceptance Criteria**

* Only admin can delete
* System confirms before delete
* Assessment should not delete if attempts exist

---

# User Story: View Assessment Summary

**As an Admin**
I want to view summary of an assessment
So that I can analyze participation and performance.

**API**

```
GET /api/admin/assessments/{assessmentId}/summary
```

**Acceptance Criteria**

* Show number of students assigned
* Show attempted vs missed
* Show average score

---

# User Story: View Student-wise Assessment Status

**As an Admin**
I want to see each student's assessment status
So that I can track who attempted or missed the assessment.

**API**

```
GET /api/admin/assessments/{assessmentId}/students
```

**Response**

```json
[
 {
  "studentId":21,
  "name":"Rahul",
  "status":"Attempted"
 },
 {
  "studentId":22,
  "name":"Sneha",
  "status":"Missed"
 }
]
```

**Acceptance Criteria**

* Admin can see all assigned students
* Status should show Attempted / Missed / Pending

---

# User Story: Reschedule an Assessment

**As an Admin**
I want to reschedule an assessment
So that students who missed it can attempt again.

**API**

```
PUT /api/admin/assessments/{assessmentId}/reschedule
```

**Acceptance Criteria**

* Admin can update schedule date
* Students should receive updated schedule notification

---

# 🧑‍💻 3️⃣ Session Management APIs

---

# User Story: View Session Statistics

**As an Admin**
I want to see platform session statistics
So that I can monitor platform usage.

**API**

```
GET /api/admin/sessions/statistics
```

**Response**

```json
{
 "activeSessions":85,
 "avgSessionTime":"00:32:15",
 "totalLogins":1240
}
```

**Acceptance Criteria**

* Admin can see number of active sessions
* System should show average session time
* Admin can monitor login activity

---

# User Story: View All Session Logs

**As an Admin**
I want to view session logs
So that I can audit platform activity.

**API**

```
GET /api/admin/sessions/logs
```

**Acceptance Criteria**

* System returns list of login sessions
* Include user role and session duration

---

# User Story: View Student Session Logs

**As an Admin**
I want to view session logs of a specific student
So that I can analyze login activity.

**API**

```
GET /api/admin/sessions/logs/{studentId}
```

**Response**

```json
{
 "loginTime":"10:20",
 "logoutTime":"11:10",
 "role":"Student",
 "status":"Inactive",
 "sessionTime":"50 mins"
}
```

**Acceptance Criteria**

* Admin can see login and logout times
* System should calculate session duration

---

# 👥 4️⃣ User Management APIs

---

# User Story: View Users List

**As an Admin**
I want to see all platform users
So that I can manage students, mentors, and employers.

**API**

```
GET /api/admin/users
```

Example Query

```
/api/admin/users?role=student
```

**Acceptance Criteria**

* Admin can filter by role
* System returns user list with role information

---

# User Story: View User Profile

**As an Admin**
I want to view a user profile
So that I can understand their role and details.

**API**

```
GET /api/admin/users/{userId}
```

**Acceptance Criteria**

* Admin can see user profile
* Display name, role, email, status

---

# User Story: Modify User Roles

**As an Admin**
I want to assign or change roles of a user
So that users can participate in multiple roles like Student, Mentor, or SME.

**API**

```
PUT /api/admin/users/{userId}/roles
```

**Request Body**

```json
{
 "roles":[
  "Student",
  "Mentor"
 ]
}
```

**Acceptance Criteria**

* Admin can assign multiple roles
* System updates role permissions

---

# User Story: Remove a User

**As an Admin**
I want to remove a user
So that inactive or invalid accounts are removed from the system.

**API**

```
DELETE /api/admin/users/{userId}
```

**Acceptance Criteria**

* Only admin can delete user
* System asks for confirmation
* User should not be deleted if critical records exist

---

# 🧠 Final Architecture Understanding for Students

This mapping is **very important in real software engineering**:

```
UI Route
      ↓
REST API
      ↓
Controller
      ↓
Service Layer
      ↓
Repository
      ↓
Database
```

Example

```
/admin/assessments/list
        ↓
GET /api/admin/assessments
        ↓
AssessmentController
        ↓
AssessmentService
        ↓
AssessmentRepository
        ↓
Assessment Table
```

This helps students understand **how a real production platform like TFLCoMentor works**.

 