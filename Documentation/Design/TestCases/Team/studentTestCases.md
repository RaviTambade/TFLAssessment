# 🎓 TFLCoMentor Student Portal
## QA Test Case Documentation

### Project
**TFLCoMentor Coaching Ecosystem Platform**

This document defines **functional, validation, security, negative, and boundary test cases** for all **Student APIs**.

---

# 📘 Test Case Structure

| Field | Description |
|------|-------------|
| **Test Case ID** | Unique identifier |
| **Scenario** | Description of the test |
| **Preconditions** | Required system state before executing test |
| **Steps** | Steps to execute |
| **Expected Result** | Expected system behavior |
| **Type** | Functional / Validation / Security / Boundary / Negative |

---

# 1️⃣ Student Profile APIs

---

## API  
`GET /api/student/profile`

### User Story
As a **Student**, I want to **view my profile information** so that I can verify my personal and professional details.

### Test Cases

| Test Case ID | Scenario | Preconditions | Steps | Expected Result | Type |
|---|---|---|---|---|---|
| TC_ST_PROFILE_01 | View profile successfully | User logged in | Login → Call API | Profile data returned | Functional |
| TC_ST_PROFILE_02 | Validate profile fields | Profile exists | Call API | name, role, skills, GitHub, Gmail, LinkedIn present | Validation |
| TC_ST_PROFILE_03 | Verify completion status | Profile partially filled | Call API | Profile completion percentage shown | Functional |
| TC_ST_PROFILE_04 | Unauthorized access | No login token | Call API without token | 401 Unauthorized | Security |
| TC_ST_PROFILE_05 | Invalid token | Expired token | Call API with expired token | 403 Forbidden | Security |

---

## API  
`PUT /api/student/profile`

### Test Cases

| Test Case ID | Scenario | Preconditions | Steps | Expected Result | Type |
|---|---|---|---|---|---|
| TC_PROFILE_UPDATE_01 | Update profile | Logged in | Send valid payload | Profile updated | Functional |
| TC_PROFILE_UPDATE_02 | Update skills | Logged in | Send new skills array | Skills stored successfully | Functional |
| TC_PROFILE_UPDATE_03 | Update links | Logged in | Send GitHub/LinkedIn URLs | Links saved | Functional |
| TC_PROFILE_UPDATE_04 | Invalid GitHub URL | Logged in | Send invalid link | Validation error returned | Validation |
| TC_PROFILE_UPDATE_05 | Empty skills | Logged in | Send empty array | Accepted or warning shown | Boundary |
| TC_PROFILE_UPDATE_06 | Large skills list | Logged in | Send 100 skills | System handles request | Boundary |

---

## API  
`PUT /api/student/profile/password`

### Test Cases

| Test Case ID | Scenario | Preconditions | Steps | Expected Result | Type |
|---|---|---|---|---|---|
| TC_PASSWORD_01 | Change password successfully | Logged in | Correct old password | Password updated | Functional |
| TC_PASSWORD_02 | Wrong old password | Logged in | Send wrong password | Error returned | Negative |
| TC_PASSWORD_03 | Weak password | Logged in | Send weak password | Policy validation error | Security |
| TC_PASSWORD_04 | Minimum length password | Logged in | Send valid minimum length password | Accepted | Boundary |
| TC_PASSWORD_05 | Confirmation mismatch | Logged in | Passwords mismatch | Validation error | Validation |

---

# 2️⃣ Learning APIs

---

## API  
`GET /api/student/courses`

| Test Case ID | Scenario | Preconditions | Steps | Expected Result | Type |
|---|---|---|---|---|---|
| TC_COURSE_01 | View courses | Logged in | Call API | Course list returned | Functional |
| TC_COURSE_02 | Validate fields | Courses exist | Call API | name, SME, progress %, date returned | Validation |
| TC_COURSE_03 | No courses | Student not enrolled | Call API | Empty list | Boundary |
| TC_COURSE_04 | Unauthorized request | No token | Call API | 401 Unauthorized | Security |

---

## API  
`GET /api/student/courses/{courseId}/tasks`

| Test Case ID | Scenario | Preconditions | Steps | Expected Result | Type |
|---|---|---|---|---|---|
| TC_TASK_01 | View assignments | Course exists | Call API | Assignments shown | Functional |
| TC_TASK_02 | View labs | Course exists | Call API | Labs displayed | Functional |
| TC_TASK_03 | Due date validation | Tasks exist | Call API | Due dates visible | Validation |
| TC_TASK_04 | Invalid courseId | Wrong ID | Call API | 404 error | Negative |
| TC_TASK_05 | Unauthorized course | Student not enrolled | Call API | Access denied | Security |

---

## API  
`POST /api/student/courses/{courseId}/assignments/{assignmentId}/submit`

| Test Case ID | Scenario | Preconditions | Steps | Expected Result | Type |
|---|---|---|---|---|---|
| TC_ASSIGN_01 | Submit via file | Assignment open | Upload PDF | Stored successfully | Functional |
| TC_ASSIGN_02 | Submit via GitHub | Assignment open | Send repo link | Accepted | Functional |
| TC_ASSIGN_03 | Multiple files | Assignment open | Upload zip + pdf | Stored | Functional |
| TC_ASSIGN_04 | After deadline | Deadline passed | Late submission | Rejected | Negative |
| TC_ASSIGN_05 | Invalid file type | Assignment open | Upload `.exe` | Validation error | Security |
| TC_ASSIGN_06 | Large file | Assignment open | Upload large file | Size validation triggered | Boundary |

---

# 3️⃣ Assessment APIs

---

## API  
`GET /api/student/assessments/scheduled`

| Test Case ID | Scenario | Preconditions | Steps | Expected Result | Type |
|---|---|---|---|---|---|
| TC_ASSESS_01 | View scheduled | Logged in | Call API | Assessments listed | Functional |
| TC_ASSESS_02 | Validate fields | Assessments exist | Call API | Date, time, duration returned | Validation |
| TC_ASSESS_03 | No assessments | None scheduled | Call API | Empty list | Boundary |

---

## API  
`GET /api/student/assessments/{assessmentId}`

| Test Case ID | Scenario | Preconditions | Steps | Expected Result | Type |
|---|---|---|---|---|---|
| TC_ASSESS_START_01 | Start assessment | Assessment active | Open test | Questions load | Functional |
| TC_ASSESS_START_02 | Timer starts | Assessment started | Start exam | Timer begins | Functional |
| TC_ASSESS_START_03 | Invalid ID | Wrong ID | Open exam | 404 error | Negative |
| TC_ASSESS_START_04 | Expired test | Deadline passed | Start exam | Access blocked | Security |

---

## API  
`POST /api/student/assessments/{assessmentId}/submit`

| Test Case ID | Scenario | Preconditions | Steps | Expected Result | Type |
|---|---|---|---|---|---|
| TC_ASSESS_SUBMIT_01 | Submit answers | Exam completed | Send JSON answers | Stored | Functional |
| TC_ASSESS_SUBMIT_02 | Auto scoring | Auto evaluation enabled | Submit test | Score calculated | Functional |
| TC_ASSESS_SUBMIT_03 | Partial answers | Incomplete exam | Submit | Accepted | Boundary |
| TC_ASSESS_SUBMIT_04 | Duplicate submission | Already submitted | Submit again | Rejected | Security |

---

## API  
`GET /api/student/assessments/{assessmentId}/result`

| Test Case ID | Scenario | Preconditions | Steps | Expected Result | Type |
|---|---|---|---|---|---|
| TC_RESULT_01 | View score | Exam submitted | Call API | Score displayed | Functional |
| TC_RESULT_02 | Validate answers | Exam evaluated | Call API | Correct vs incorrect answers | Validation |
| TC_RESULT_03 | View statistics | Results generated | Call API | Stats displayed | Functional |

---

# 4️⃣ Mentorship APIs

---

## API  
`GET /api/student/mentor`

| Test Case ID | Scenario | Preconditions | Steps | Expected Result | Type |
|---|---|---|---|---|---|
| TC_MENTOR_01 | View mentor | Mentor assigned | Call API | Mentor details shown | Functional |
| TC_MENTOR_02 | Expertise validation | Mentor exists | Call API | Expertise visible | Validation |
| TC_MENTOR_03 | No mentor assigned | No mentor | Call API | Info message | Boundary |

---

## API  
`POST /api/student/mentorship/session`

| Test Case ID | Scenario | Preconditions | Steps | Expected Result | Type |
|---|---|---|---|---|---|
| TC_SESSION_01 | Schedule session | Mentor available | Send date/time | Session created | Functional |
| TC_SESSION_02 | Calendar sync | Session created | Schedule session | Mentor calendar updated | Integration |
| TC_SESSION_03 | Past date | Invalid date | Send past date | Validation error | Negative |
| TC_SESSION_04 | Double booking | Slot already booked | Same slot | Rejected | Validation |

---

# 5️⃣ Discussion APIs

---

## API  
`POST /api/student/questions`

| Test Case ID | Scenario | Preconditions | Steps | Expected Result | Type |
|---|---|---|---|---|---|
| TC_DISCUSS_01 | Post question | Logged in | Send text | Question posted | Functional |
| TC_DISCUSS_02 | Empty question | Logged in | Blank text | Validation error | Negative |
| TC_DISCUSS_03 | Long text | Logged in | Large text | Stored | Boundary |

---

# 6️⃣ Project APIs

---

## API  
`POST /api/student/projects`

| Test Case ID | Scenario | Preconditions | Steps | Expected Result | Type |
|---|---|---|---|---|---|
| TC_PROJECT_01 | Submit project | Logged in | Send details | Stored | Functional |
| TC_PROJECT_02 | Valid GitHub repo | Repo accessible | Send repo link | Accepted | Validation |
| TC_PROJECT_03 | Invalid repo | Wrong URL | Send repo link | Validation error | Negative |

---

# 7️⃣ Placement APIs

---

## API  
`POST /api/student/jobs/{jobId}/apply`

| Test Case ID | Scenario | Preconditions | Steps | Expected Result | Type |
|---|---|---|---|---|---|
| TC_JOB_01 | Apply job | Job open | Submit application | Stored | Functional |
| TC_JOB_02 | Duplicate apply | Already applied | Apply again | Rejected | Validation |
| TC_JOB_03 | Invalid jobId | Wrong ID | Submit request | 404 error | Negative |

---

# 8️⃣ Progress APIs

---

## API  
`GET /api/student/progress`

| Test Case ID | Scenario | Preconditions | Steps | Expected Result | Type |
|---|---|---|---|---|---|
| TC_PROGRESS_01 | View progress | Logged in | Call API | Metrics displayed | Functional |
| TC_PROGRESS_02 | Validate metrics | Data exists | Call API | Skills, projects, assessments metrics returned | Validation |

---

# 9️⃣ Notification APIs

---

## API  
`GET /api/student/notifications`

| Test Case ID | Scenario | Preconditions | Steps | Expected Result | Type |
|---|---|---|---|---|---|
| TC_NOTIFY_01 | View notifications | Logged in | Call API | Notifications listed | Functional |
| TC_NOTIFY_02 | Validate fields | Notifications exist | Call API | message, source, time returned | Validation |
| TC_NOTIFY_03 | No notifications | None available | Call API | Empty list | Boundary |

---

