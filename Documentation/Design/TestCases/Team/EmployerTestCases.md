# 🏢 User Story 1 — View Company Profile

**API:** `GET /api/employer/company/profile`

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC_CP_01 | View company profile successfully | Employer logged in | Call GET /api/employer/company/profile | Company profile details returned | High |
| TC_CP_02 | Access company profile without authentication | Employer not logged in | Call API without token | 401 Unauthorized | High |
| TC_CP_03 | Access company profile with invalid token | Invalid auth token | Call API | 403 Forbidden | High |
| TC_CP_04 | Validate company profile fields | Employer logged in | Call API | Fields: company name, founded year, about, website, logo present | High |
| TC_CP_05 | Company profile with empty fields | Profile not completed | Call API | Fields returned as null/empty | Medium |
| TC_CP_06 | Invalid API endpoint | Employer logged in | Call incorrect endpoint | 404 Not Found | Medium |
| TC_CP_07 | Server error handling | Database unavailable | Call API | 500 Internal Server Error | High |
| TC_CP_08 | Access another company's profile | Employer belongs to different company | Call API | Access denied | High |

---

# 🏢 User Story 2 — Add Company Alumni

**API:** `POST /api/employer/company/alumni`

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC_AL_01 | Add alumni successfully | Employer authenticated | POST /api/employer/company/alumni with name | Alumni created successfully | High |
| TC_AL_02 | Missing alumni name | Employer authenticated | Send empty request body | 400 Bad Request | High |
| TC_AL_03 | Empty alumni name | Employer authenticated | `"name": ""` | Validation error | High |
| TC_AL_04 | Alumni name too long | Employer authenticated | Name >255 characters | Validation error | Medium |
| TC_AL_05 | Duplicate alumni entry | Employer authenticated | Add same alumni twice | Duplicate handled properly | Medium |
| TC_AL_06 | SQL injection attempt | Employer authenticated | Send malicious string | Input rejected | High |
| TC_AL_07 | XSS attack attempt | Employer authenticated | Send `<script>` input | Script sanitized | High |
| TC_AL_08 | Invalid content type | Employer authenticated | Send XML instead of JSON | 415 Unsupported Media Type | Medium |

---

# 🏢 User Story 3 — View Company Alumni

**API:** `GET /api/employer/company/alumni`

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC_ALV_01 | View alumni list successfully | Employer authenticated | GET /api/employer/company/alumni | Alumni list returned | High |
| TC_ALV_02 | Access alumni list without authentication | Employer not logged in | Call API | 401 Unauthorized | High |
| TC_ALV_03 | Empty alumni list | No alumni exist | Call API | Empty array returned | Medium |
| TC_ALV_04 | Multiple alumni records exist | Alumni already added | Call API | All alumni returned | Medium |
| TC_ALV_05 | Unauthorized cross-company access | Employer from different company | Call API | Access denied | High |
| TC_ALV_06 | Database failure | DB unavailable | Call API | 500 Internal Server Error | High |

---

# 🏢 User Story 4 — Add Referral Candidate

**API:** `POST /api/employer/company/referral`

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC_RF_01 | Add referral successfully | Employer authenticated | POST referral API with candidate name and email | Referral added | High |
| TC_RF_02 | Missing candidate name | Employer authenticated | Send email only | 400 error | High |
| TC_RF_03 | Missing email | Employer authenticated | Send candidate name only | 400 error | High |
| TC_RF_04 | Invalid email format | Employer authenticated | `"amitgmail.com"` | Validation error | High |
| TC_RF_05 | Duplicate referral email | Employer authenticated | Add same email twice | Duplicate handled | Medium |
| TC_RF_06 | Candidate name too long | Employer authenticated | Name >255 characters | Validation error | Medium |
| TC_RF_07 | SQL injection attempt | Employer authenticated | Malicious input | Request rejected | High |
| TC_RF_08 | XSS attack attempt | Employer authenticated | `<script>` input | Input sanitized | High |
| TC_RF_09 | Invalid JSON request body | Employer authenticated | Send malformed JSON | 400 Bad Request | High |

---

# 👤 User Story 5 — View Employer Profile

**API:** `GET /api/employer/profile`

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC_EP_01 | View employer profile successfully | Employer logged in | GET /api/employer/profile | Employer profile returned | High |
| TC_EP_02 | Access profile without authentication | Employer not logged in | Call API | 401 Unauthorized | High |
| TC_EP_03 | Validate employer profile fields | Employer logged in | Call API | Name, email, phone returned | High |
| TC_EP_04 | Profile with empty optional fields | Profile incomplete | Call API | Empty fields allowed | Medium |
| TC_EP_05 | Access another employer profile | Employer A logged in | Try accessing B profile | Access denied | High |
| TC_EP_06 | Database failure | Database unavailable | Call API | 500 error | High |

# 👤 User Story 6 — Create Employer Profile

**API**

`POST /api/employer/profile`

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-EMP-PROF-01 | Create profile successfully | Employer logged in | Send POST request with valid profile data | Profile created successfully | High |
| TC-EMP-PROF-02 | Missing required fields | Employer logged in | Send POST request without name or email | Validation error returned | High |
| TC-EMP-PROF-03 | Invalid email format | Employer logged in | Send POST request with email = abc.com | System shows invalid email error | High |
| TC-EMP-PROF-04 | Duplicate profile creation | Employer profile already exists | Send POST request again | System returns profile already exists error | Medium |
| TC-EMP-PROF-05 | Unauthorized request | User not logged in | Send POST request to API | 401 Unauthorized response | High |

---

# 👤 User Story 7 — Update Employer Profile

**API**

`PUT /api/employer/profile`

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-EMP-PROF-06 | Update profile successfully | Employer logged in | Send PUT request with updated phone number | Profile updated successfully | High |
| TC-EMP-PROF-07 | Update single field | Employer logged in | Send PUT request with only designation updated | Only designation updated | Medium |
| TC-EMP-PROF-08 | Invalid phone number | Employer logged in | Send PUT request with phone = abc123 | Validation error returned | High |
| TC-EMP-PROF-09 | Unauthorized update attempt | User not logged in | Send PUT request to API | 401 Unauthorized response | High |

---

# 👤 User Story 8 — Delete Employer Profile

**API**

`DELETE /api/employer/profile`

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-EMP-PROF-10 | Delete profile successfully | Employer logged in | Send DELETE request to API | Profile deleted successfully | High |
| TC-EMP-PROF-11 | Verify profile after deletion | Employer profile deleted | Attempt to GET profile | System returns profile not found | Medium |
| TC-EMP-PROF-12 | Unauthorized delete request | User not logged in | Send DELETE request to API | 401 Unauthorized response | High |

---

# 💼 User Story 9 — Post Job

**API**

`POST /api/employer/jobs`

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-JOB-01 | Post job successfully | Employer logged in | Send POST request with valid job details | Job created successfully | High |
| TC-JOB-02 | Missing job title | Employer logged in | Send POST request with title = null | Validation error returned | High |
| TC-JOB-03 | Invalid experience value | Employer logged in | Send POST request with experience = -2 | System rejects request | Medium |
| TC-JOB-04 | Unauthorized job posting | User not logged in | Send POST request to API | 401 Unauthorized response | High |

---

# 💼 User Story 10 — View Job Details

**API**

`GET /api/employer/jobs/{jobId}`

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-JOB-05 | View job details successfully | Employer logged in, job exists | Send GET request with valid jobId | Job details returned | High |
| TC-JOB-06 | Invalid jobId | Employer logged in | Send GET request with non-existing jobId | 404 Job not found | High |
| TC-JOB-07 | Unauthorized access attempt | User not logged in | Send GET request to API | 401 Unauthorized response | High |
| TC-JOB-08 | Validate job fields in response | Employer logged in | Send GET request with valid jobId | Response contains title, description, skills, experience, location | Medium |

# 📌 User Story 11 — View Posted Jobs

**API:** `GET /api/employer/jobs`

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC_JM_11_01 | Employer views all posted jobs | Employer logged in | Send GET request with valid token | System returns list of all jobs | High |
| TC_JM_11_02 | Employer with multiple jobs | Employer has multiple job postings | Send GET request | API returns complete job list | High |
| TC_JM_11_03 | Employer with single job | Employer has one job posted | Send GET request | API returns one job record | Medium |
| TC_JM_11_04 | Employer with no jobs | Employer exists but has no jobs | Send GET request | API returns empty list | Medium |
| TC_JM_11_05 | Unauthorized request | User not logged in | Send GET request without token | API returns 401 Unauthorized | High |
| TC_JM_11_06 | Access by candidate role | Candidate logged in | Send GET request | API returns 403 Forbidden | High |

---

# 📌 User Story 12 — Edit Job Details

**API:** `PUT /api/employer/jobs/{jobId}`

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC_JM_12_01 | Update job title | Employer logged in and job exists | Send PUT request with new title | Job title updated successfully | High |
| TC_JM_12_02 | Update job description | Employer logged in and job exists | Send PUT request with new description | Job description updated | High |
| TC_JM_12_03 | Update all job details | Employer logged in and job exists | Send PUT request with updated fields | API returns 200 OK and saves changes | High |
| TC_JM_12_04 | Invalid job ID | Employer logged in | Send PUT request with invalid jobId | API returns 404 Not Found | High |
| TC_JM_12_05 | Edit job of another employer | Job belongs to different employer | Send PUT request | API returns 403 Forbidden | High |
| TC_JM_12_06 | Empty required fields | Employer logged in | Send PUT request with empty required fields | Validation error returned | Medium |

---

# 📌 User Story 13 — Close Job Posting

**API:** `PATCH /api/employer/jobs/{jobId}/close`

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC_JM_13_01 | Close active job | Employer logged in and job active | Send PATCH request | Job status becomes Closed | High |
| TC_JM_13_02 | Verify successful response | Employer logged in | Send valid close request | API returns 200 OK | High |
| TC_JM_13_03 | Prevent applications after closure | Job is closed | Attempt to apply for job | System blocks application | High |
| TC_JM_13_04 | Invalid job ID | Employer logged in | Send request with invalid jobId | API returns 404 Not Found | High |
| TC_JM_13_05 | Close job of another employer | Job belongs to another employer | Send PATCH request | API returns 403 Forbidden | High |
| TC_JM_13_06 | Closing already closed job | Job already closed | Send PATCH request again | System returns appropriate message | Medium |

---

# 📌 User Story 14 — View Job List

**API:** `GET /api/employer/jobs/list`

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC_JM_14_01 | View job list | Employer logged in | Send GET request | API returns job list | High |
| TC_JM_14_02 | Employer with multiple jobs | Employer has many jobs | Send GET request | All jobs displayed | Medium |
| TC_JM_14_03 | Employer with no jobs | Employer has no job postings | Send GET request | API returns empty list | Medium |
| TC_JM_14_04 | Validate response format | Employer logged in | Send GET request | Response returned in JSON | Medium |
| TC_JM_14_05 | Unauthorized request | User not logged in | Send GET request without token | API returns 401 Unauthorized | High |

---

# 📌 User Story 15 — Check Job Status

**API:** `GET /api/employer/jobs/status`

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC_JM_15_01 | Check job status | Employer logged in and job exists | Send GET request with jobId | API returns job status | High |
| TC_JM_15_02 | Check active job | Job status active | Send request | Response shows Active | Medium |
| TC_JM_15_03 | Check closed job | Job status closed | Send request | Response shows Closed | Medium |
| TC_JM_15_04 | Invalid jobId | Employer logged in | Send request with invalid jobId | API returns 404 Not Found | High |
| TC_JM_15_05 | Access by candidate role | Candidate logged in | Send request | API returns 403 Forbidden | High |

# 📥 User Story 16 — View All Applications

## User Story
As an Employer I want to view all job applications so that I can review candidates who applied.

**API:** `GET /api/employer/jobs/{jobId}/applications`

## Test Cases

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-EMP-APP-01 | Retrieve applications successfully | Employer logged in | Send GET request with valid jobId | List of job applications returned | High |
| TC-EMP-APP-02 | Validate response structure | Employer logged in | Call API | Response contains candidateId, candidateName, status | High |
| TC-EMP-APP-03 | No applications available | Employer logged in, no applications | Call API | Empty list returned | Medium |
| TC-EMP-APP-04 | Invalid jobId | Employer logged in | Call API with incorrect jobId | 404 Job not found | High |
| TC-EMP-APP-05 | Unauthorized access | User not logged in | Call API | 401 Unauthorized | High |
| TC-EMP-APP-06 | Employer accessing another employer’s job | Employer logged in | Call API with jobId belonging to another employer | 403 Forbidden | High |
| TC-EMP-APP-07 | API performance validation | Employer logged in | Call API | Response time under 2 seconds | Medium |

---

# 📥 User Story 17 — View Qualified Applications

## User Story
As an Employer I want to view qualified candidates so that I can move them to the interview stage.

**API:** `GET /api/employer/jobs/{jobId}/applications/qualified`

## Test Cases

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-EMP-APP-08 | Retrieve qualified candidates | Employer logged in | Send GET request with valid jobId | Qualified candidates list returned | High |
| TC-EMP-APP-09 | Validate response structure | Employer logged in | Call API | Response contains candidateId and candidateName | High |
| TC-EMP-APP-10 | No qualified candidates | Employer logged in | Call API | Empty list returned | Medium |
| TC-EMP-APP-11 | Invalid jobId | Employer logged in | Call API with invalid jobId | 404 Job not found | High |
| TC-EMP-APP-12 | Unauthorized request | User not logged in | Call API | 401 Unauthorized | High |
| TC-EMP-APP-13 | API response performance | Employer logged in | Call API | Response under 2 seconds | Medium |

---

# 👥 User Story 18 — View All Candidates

## User Story
As an Employer I want to view candidates in the candidate pool so that I can explore potential candidates.

**API:** `GET /api/employer/candidates`

## Test Cases

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-EMP-CAN-01 | Retrieve candidate list successfully | Employer logged in | Send GET request to API | Candidate list returned | High |
| TC-EMP-CAN-02 | Validate response fields | Employer logged in | Call API | Response contains candidateId, name, skills, experience | High |
| TC-EMP-CAN-03 | No candidates available | Employer logged in | Call API | Empty list returned | Medium |
| TC-EMP-CAN-04 | Unauthorized access | User not logged in | Call API | 401 Unauthorized | High |
| TC-EMP-CAN-05 | Large dataset validation | Database contains many candidates | Call API | Correct list returned without failure | Medium |
| TC-EMP-CAN-06 | API response performance | Employer logged in | Call API | Response time under 2 seconds | Medium |

---

# 🔍 User Story 19 — Search Candidates

## User Story
As an Employer I want to search candidates so that I can find candidates based on skills or qualifications.

**API:** `GET /api/employer/candidates/search?skill=java`

## Test Cases

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-EMP-CAN-07 | Search candidate by skill | Employer logged in | Call API with skill parameter | Matching candidates returned | High |
| TC-EMP-CAN-08 | No matching candidates | Employer logged in | Search skill not present | Empty list returned | Medium |
| TC-EMP-CAN-09 | Missing query parameter | Employer logged in | Call API without skill parameter | Validation error returned | High |
| TC-EMP-CAN-10 | Multiple skill search | Employer logged in | Call API with multiple skills | Candidates matching skills returned | Medium |
| TC-EMP-CAN-11 | SQL injection attempt | Employer logged in | Send malicious input | Input rejected and API secure | High |
| TC-EMP-CAN-12 | API performance validation | Employer logged in | Call API | Response under 2 seconds | Medium |

---

# ⭐ User Story 20 — Shortlist Candidates

## User Story
As an Employer I want to shortlist candidates so that they can be considered for interviews.

**API:** `POST /api/employer/candidates/{candidateId}/shortlist`

## Test Cases

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-EMP-CAN-13 | Shortlist candidate successfully | Employer logged in | Send POST request with valid candidateId | Candidate added to shortlist | High |
| TC-EMP-CAN-14 | Candidate already shortlisted | Employer logged in | Call API again | System returns "Already shortlisted" message | Medium |
| TC-EMP-CAN-15 | Invalid candidateId | Employer logged in | Send request with invalid ID | 404 Candidate not found | High |
| TC-EMP-CAN-16 | Unauthorized access | User not logged in | Call API | 401 Unauthorized | High |
| TC-EMP-CAN-17 | Shortlist non-existing candidate | Employer logged in | Send random candidateId | Error returned | High |
| TC-EMP-CAN-18 | API response performance | Employer logged in | Call API | Response under 2 seconds | Medium |



# 📊 User Story 21 — View Interview Summary

## User Story
As an Employer I want to view interview summary so that I can analyze interview activities.

**API:** `GET /api/employer/interviews/summary`

## Test Cases

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-EMP-INT-01 | Retrieve interview summary successfully | Employer logged in | Send GET request to API | Response contains interview statistics such as totalInterviews, completedInterviews, pendingInterviews | High |
| TC-EMP-INT-02 | Validate response data types | Employer logged in | Call API | All numeric fields return valid numeric values | High |
| TC-EMP-INT-03 | Unauthorized access attempt | Student logged in | Call API | API returns 403 Forbidden | High |
| TC-EMP-INT-04 | Missing authentication token | No login session | Call API | API returns 401 Unauthorized | High |
| TC-EMP-INT-05 | API response performance | Employer logged in | Call API | Response returned within 2 seconds | Medium |

---

# 📅 User Story 22 — View Upcoming Interviews

## User Story
As an Employer I want to view upcoming interviews so that I can prepare for scheduled interviews.

**API:** `GET /api/employer/interviews/upcoming`

## Test Cases

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-EMP-INT-06 | Retrieve upcoming interviews successfully | Employer logged in | Send GET request | List of upcoming interviews returned | High |
| TC-EMP-INT-07 | Validate interview schedule details | Employer logged in | Call API | Each record contains candidateName, interviewDate, interviewer | High |
| TC-EMP-INT-08 | No upcoming interviews available | Employer logged in | Call API | Empty list returned | Medium |
| TC-EMP-INT-09 | Unauthorized user attempts access | Student logged in | Call API | 403 Forbidden response | High |
| TC-EMP-INT-10 | Performance test | Employer logged in | Call API | Response time under 2 seconds | Medium |

---

# 📆 User Story 23 — View Today's Interviews

## User Story
As an Employer I want to view today's interviews so that I can track the interviews scheduled today.

**API:** `GET /api/employer/interviews/today`

## Test Cases

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-EMP-INT-11 | Retrieve today's interviews | Employer logged in | Send GET request | List of interviews scheduled today returned | High |
| TC-EMP-INT-12 | Validate interview date equals current date | Employer logged in | Call API | All interviews returned belong to today's date | High |
| TC-EMP-INT-13 | No interviews scheduled today | Employer logged in | Call API | Empty response list | Medium |
| TC-EMP-INT-14 | Unauthorized access attempt | Student logged in | Call API | 403 Forbidden | High |
| TC-EMP-INT-15 | API response performance | Employer logged in | Call API | Response within 2 seconds | Medium |

---

# 🔄 User Story 24 — Reschedule Interview

## User Story
As an Employer I want to reschedule interviews so that interview timing can be adjusted if required.

**API:** `PATCH /api/employer/interviews/{interviewId}/reschedule`

## Test Cases

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-EMP-INT-16 | Successfully reschedule interview | Employer logged in | Send PATCH request with valid interviewId and new date | Interview schedule updated successfully | High |
| TC-EMP-INT-17 | Invalid interview ID | Employer logged in | Send request with invalid ID | API returns 404 Not Found | High |
| TC-EMP-INT-18 | Invalid date format provided | Employer logged in | Send incorrect date format | API returns validation error | High |
| TC-EMP-INT-19 | Unauthorized access attempt | Student logged in | Call API | 403 Forbidden | High |
| TC-EMP-INT-20 | Reschedule to past date | Employer logged in | Send request with past date | API returns validation error | Medium |

---

# 📊 User Story 25 — View Interview Results

## User Story
As an Employer I want to view interview results so that I can evaluate candidate performance.

**API:** `GET /api/employer/interviews/results`

## Test Cases

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-EMP-INT-21 | Retrieve interview results | Employer logged in | Send GET request | Interview results list returned | High |
| TC-EMP-INT-22 | Validate result data fields | Employer logged in | Call API | Response contains candidateName, score, resultStatus | High |
| TC-EMP-INT-23 | No results available | Employer logged in | Call API | Empty response list | Medium |
| TC-EMP-INT-24 | Unauthorized access attempt | Student logged in | Call API | 403 Forbidden | High |
| TC-EMP-INT-25 | Performance validation | Employer logged in | Call API | Response time under 2 seconds | Medium |

---

# ⭐ User Story 26 — View Qualified Candidates

## User Story
As an Employer I want to view qualified candidates after interviews so that I can proceed with hiring decisions.

**API:** `GET /api/employer/interviews/qualified`

## Test Cases

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-EMP-INT-26 | Retrieve qualified candidates | Employer logged in | Send GET request | List of qualified candidates returned | High |
| TC-EMP-INT-27 | Validate candidate data fields | Employer logged in | Call API | Response includes candidateName, score, interviewStatus | High |
| TC-EMP-INT-28 | No candidates qualified | Employer logged in | Call API | Empty response list | Medium |
| TC-EMP-INT-29 | Unauthorized access attempt | Student logged in | Call API | 403 Forbidden | High |
| TC-EMP-INT-30 | Response performance validation | Employer logged in | Call API | Response time under 2 seconds | Medium |