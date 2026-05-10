# Admin Module – API Test Case Documentation

## Overview
This document contains professional QA test cases derived from Admin user stories for the coaching ecosystem web application. Each user story includes a structured set of test cases covering positive, negative, validation, authorization, and performance scenarios.

---

# 1. Admin Dashboard APIs

## User Story: View Platform Overview
As an Admin I want to view the overall platform statistics so that I can quickly understand platform activity and growth.

API

`GET /api/admin/dashboard/overview`

### Test Cases

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-ADM-DASH-01 | Retrieve platform overview successfully | Admin logged in | Send GET request to API | Response contains totalUsers, activeUsers, totalAssessments | High |
| TC-ADM-DASH-02 | Validate response data types | Admin logged in | Call API | All values are numeric | High |
| TC-ADM-DASH-03 | Validate large dataset aggregation | Database contains large data | Call API | Correct aggregated values returned | Medium |
| TC-ADM-DASH-04 | Unauthorized access attempt | Student logged in | Call API | 403 Forbidden | High |
| TC-ADM-DASH-05 | API response performance | Admin logged in | Call API | Response time under 2 seconds | Medium |

---

# 2. Assessment Management APIs

## User Story: View Assessment Statistics
As an Admin I want to see statistics of assessments so that I can understand how many assessments are ongoing or unassigned.

API

`GET /api/admin/assessments/statistics`

### Test Cases

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-ADM-ASS-01 | Fetch assessment statistics successfully | Admin logged in | Call API | Response contains ongoingAssessments and unassignedAssessments | High |
| TC-ADM-ASS-02 | Validate statistics accuracy | Assessments exist | Call API | Counts match database values | High |
| TC-ADM-ASS-03 | Validate response structure | Admin logged in | Call API | JSON keys match API contract | Medium |
| TC-ADM-ASS-04 | Unauthorized access | Student logged in | Call API | 403 Forbidden | High |

---

## User Story: View Assessment List
As an Admin I want to see all assessments in the system so that I can manage and assign them.

API

`GET /api/admin/assessments`

### Test Cases

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-ADM-ASS-05 | Retrieve assessment list | Admin logged in | Call API | Assessment list returned | High |
| TC-ADM-ASS-06 | Validate assessment fields | Admin logged in | Call API | Response contains assessmentName, status, scheduleDate | High |
| TC-ADM-ASS-07 | Validate empty results | No assessments exist | Call API | Empty array returned | Medium |
| TC-ADM-ASS-08 | Validate large dataset loading | 1000+ records exist | Call API | Data loads correctly | Medium |

---

## User Story: Assign Assessment to Students
As an Admin I want to assign an assessment to multiple students so that their skills can be evaluated.

API

`POST /api/admin/assessments/{assessmentId}/assign`

### Test Cases

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-ADM-ASS-09 | Assign assessment successfully | Students exist | Send request with studentIds | Assignment created successfully | High |
| TC-ADM-ASS-10 | Assign with invalid student ID | Invalid studentId provided | Send request | 400 Bad Request | High |
| TC-ADM-ASS-11 | Assign with empty student list | Admin logged in | Send empty array | Validation error | High |
| TC-ADM-ASS-12 | Assign without schedule date | Admin logged in | Send request | Validation error | High |
| TC-ADM-ASS-13 | Verify DB assignment record | Assignment successful | Query database | Assignment record exists | High |

---

## User Story: Delete an Assessment
As an Admin I want to delete an assessment so that outdated or incorrect assessments can be removed.

API

`DELETE /api/admin/assessments/{assessmentId}`

### Test Cases

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-ADM-ASS-14 | Delete assessment successfully | No attempts exist | Call API | Assessment removed | High |
| TC-ADM-ASS-15 | Prevent deletion if attempts exist | Attempts exist | Call API | Error returned | High |
| TC-ADM-ASS-16 | Delete invalid assessment ID | Assessment does not exist | Call API | 404 Not Found | Medium |
| TC-ADM-ASS-17 | Unauthorized delete attempt | Student logged in | Call API | 403 Forbidden | High |

---

## User Story: View Assessment Summary
As an Admin I want to view summary of an assessment so that I can analyze participation and performance.

API

`GET /api/admin/assessments/{assessmentId}/summary`

### Test Cases

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-ADM-ASS-18 | Retrieve summary successfully | Assessment exists | Call API | Summary statistics returned | High |
| TC-ADM-ASS-19 | Validate average score calculation | Attempt data exists | Call API | Average score calculated correctly | High |
| TC-ADM-ASS-20 | Invalid assessment ID | Assessment not found | Call API | 404 Not Found | Medium |

---

## User Story: View Student-wise Assessment Status

API

`GET /api/admin/assessments/{assessmentId}/students`

### Test Cases

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-ADM-ASS-21 | Retrieve student status list | Students assigned | Call API | List returned successfully | High |
| TC-ADM-ASS-22 | Validate allowed status values | Data exists | Call API | Status values Attempted, Missed, Pending only | High |
| TC-ADM-ASS-23 | No assigned students | No assignments exist | Call API | Empty array returned | Medium |

---

## User Story: Reschedule Assessment

API

`PUT /api/admin/assessments/{assessmentId}/reschedule`

### Test Cases

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-ADM-ASS-24 | Reschedule assessment successfully | Assessment exists | Send new schedule date | Schedule updated in DB | High |
| TC-ADM-ASS-25 | Reschedule with past date | Admin logged in | Send past date | Validation error | High |
| TC-ADM-ASS-26 | Verify notification triggered | Students assigned | Reschedule assessment | Students notified | Medium |

---

# 3. Session Management APIs

## User Story: View Session Statistics

API

`GET /api/admin/sessions/statistics`

### Test Cases

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-ADM-SES-01 | Retrieve session statistics | Admin logged in | Call API | Session stats returned | High |
| TC-ADM-SES-02 | Validate average session calculation | Session records exist | Call API | Correct average time | High |
| TC-ADM-SES-03 | Unauthorized access | Student logged in | Call API | 403 Forbidden | High |

---

## User Story: View All Session Logs

API

`GET /api/admin/sessions/logs`

### Test Cases

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-ADM-SES-04 | Retrieve session logs | Logs exist | Call API | Logs returned successfully | High |
| TC-ADM-SES-05 | Validate role field in logs | Logs exist | Call API | Each record includes role | Medium |

---

## User Story: View Student Session Logs

API

`GET /api/admin/sessions/logs/{studentId}`

### Test Cases

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-ADM-SES-06 | Retrieve student session logs | Student exists | Call API | Logs returned successfully | High |
| TC-ADM-SES-07 | Validate session duration | Login and logout recorded | Call API | Correct duration calculated | High |
| TC-ADM-SES-08 | Invalid student ID | Student does not exist | Call API | 404 Not Found | Medium |

---

# 4. User Management APIs

## User Story: View Users List

API

`GET /api/admin/users`

### Test Cases

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-ADM-USR-01 | Retrieve users list | Admin logged in | Call API | User list returned | High |
| TC-ADM-USR-02 | Filter users by role | Users exist | Call /users?role=student | Only student users returned | High |
| TC-ADM-USR-03 | Empty user dataset | No users exist | Call API | Empty array returned | Medium |

---

## User Story: View User Profile

API

`GET /api/admin/users/{userId}`

### Test Cases

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-ADM-USR-04 | Retrieve user profile | User exists | Call API | User details returned | High |
| TC-ADM-USR-05 | Invalid user ID | User not found | Call API | 404 Not Found | Medium |

---

## User Story: Modify User Roles

API

`PUT /api/admin/users/{userId}/roles`

### Test Cases

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-ADM-USR-06 | Assign multiple roles | User exists | Send role list | Roles updated successfully | High |
| TC-ADM-USR-07 | Assign invalid role | Role does not exist | Send request | Validation error | High |
| TC-ADM-USR-08 | Unauthorized role modification | Non-admin user | Call API | 403 Forbidden | High |

---

## User Story: Remove User

API

`DELETE /api/admin/users/{userId}`

### Test Cases

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-ADM-USR-09 | Delete user successfully | No linked records | Call API | User deleted | High |
| TC-ADM-USR-10 | Prevent deletion if linked records exist | User has dependencies | Call API | Deletion prevented | High |
| TC-ADM-USR-11 | Invalid user ID | User not found | Call API | 404 Not Found | Medium |

---

# Architecture Reference

UI Route

/admin/assessments/list

↓

REST API

GET /api/admin/assessments

↓

Controller

AssessmentController

↓

Service Layer

AssessmentService

↓

Repository

AssessmentRepository

↓

Database

Assessment Table

