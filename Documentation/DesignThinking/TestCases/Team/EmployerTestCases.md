# Employer Module Test Cases

---

# 🏢 1. Company Profile APIs

## User Story: View Company Profile
As an Employer I want to view my company profile so that I can see the company information displayed on the platform.

**API**

`GET /api/employer/company/profile`

### Test Cases

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

# 🏢 2. Company Alumni APIs

## User Story: Add Company Alumni

**API**

`POST /api/employer/company/alumni`

### Test Cases

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC_AL_01 | Add alumni successfully | Employer authenticated | POST /api/employer/company/alumni with name | Alumni created successfully | High |
| TC_AL_02 | Missing alumni name | Employer authenticated | Send empty request body | 400 Bad Request | High |
| TC_AL_03 | Empty alumni name | Employer authenticated | "name": "" | Validation error | High |
| TC_AL_04 | Alumni name too long | Employer authenticated | Name >255 characters | Validation error | Medium |
| TC_AL_05 | Duplicate alumni entry | Employer authenticated | Add same alumni twice | Duplicate handled properly | Medium |
| TC_AL_06 | SQL injection attempt | Employer authenticated | Send malicious string | Input rejected | High |
| TC_AL_07 | XSS attack attempt | Employer authenticated | Send `<script>` input | Script sanitized | High |
| TC_AL_08 | Invalid content type | Employer authenticated | Send XML instead of JSON | 415 Unsupported Media Type | Medium |

---

## User Story: View Company Alumni

**API**

`GET /api/employer/company/alumni`

### Test Cases

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC_ALV_01 | View alumni list successfully | Employer authenticated | GET /api/employer/company/alumni | Alumni list returned | High |
| TC_ALV_02 | Access alumni list without authentication | Employer not logged in | Call API | 401 Unauthorized | High |
| TC_ALV_03 | Empty alumni list | No alumni exist | Call API | Empty array returned | Medium |
| TC_ALV_04 | Multiple alumni records exist | Alumni already added | Call API | All alumni returned | Medium |
| TC_ALV_05 | Unauthorized cross-company access | Employer from different company | Call API | Access denied | High |
| TC_ALV_06 | Database failure | DB unavailable | Call API | 500 Internal Server Error | High |

---

# 🏢 3. Company Referral APIs

## User Story: Add Referral Candidate

**API**

`POST /api/employer/company/referral`

### Test Cases

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC_RF_01 | Add referral successfully | Employer authenticated | POST referral API with candidate name and email | Referral added | High |
| TC_RF_02 | Missing candidate name | Employer authenticated | Send email only | 400 error | High |
| TC_RF_03 | Missing email | Employer authenticated | Send candidate name only | 400 error | High |
| TC_RF_04 | Invalid email format | Employer authenticated | "amitgmail.com" | Validation error | High |
| TC_RF_05 | Duplicate referral email | Employer authenticated | Add same email twice | Duplicate handled | Medium |
| TC_RF_06 | Candidate name too long | Employer authenticated | Name >255 characters | Validation error | Medium |
| TC_RF_07 | SQL injection attempt | Employer authenticated | Malicious input | Request rejected | High |
| TC_RF_08 | XSS attack attempt | Employer authenticated | `<script>` input | Input sanitized | High |
| TC_RF_09 | Invalid JSON request body | Employer authenticated | Send malformed JSON | 400 Bad Request | High |

---

# 👤 4. Employer Profile APIs

## User Story: View Employer Profile

**API**

`GET /api/employer/profile`

### Test Cases

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC_EP_01 | View employer profile successfully | Employer logged in | GET /api/employer/profile | Employer profile returned | High |
| TC_EP_02 | Access profile without authentication | Employer not logged in | Call API | 401 Unauthorized | High |
| TC_EP_03 | Validate employer profile fields | Employer logged in | Call API | Name, email, phone returned | High |
| TC_EP_04 | Profile with empty optional fields | Profile incomplete | Call API | Empty fields allowed | Medium |
| TC_EP_05 | Access another employer profile | Employer A logged in | Try accessing B profile | Access denied | High |
| TC_EP_06 | Database failure | Database unavailable | Call API | 500 error | High |

---

## User Story: Create Employer Profile

**API**

`POST /api/employer/profile`

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-EMP-PROF-01 | Create profile successfully | Employer logged in | Send POST request with valid profile data | Profile created successfully | High |
| TC-EMP-PROF-02 | Missing required fields | Employer logged in | Send POST request without name or email | Validation error returned | High |
| TC-EMP-PROF-03 | Invalid email format | Employer logged in | Email = abc.com | Invalid email error | High |
| TC-EMP-PROF-04 | Duplicate profile creation | Profile already exists | Send POST again | Profile exists error | Medium |
| TC-EMP-PROF-05 | Unauthorized request | User not logged in | Send POST request | 401 Unauthorized | High |

---

## User Story: Update Employer Profile

**API**

`PUT /api/employer/profile`

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-EMP-PROF-06 | Update profile successfully | Employer logged in | Send PUT request with updated phone | Profile updated | High |
| TC-EMP-PROF-07 | Update single field | Employer logged in | Update designation only | Only field updated | Medium |
| TC-EMP-PROF-08 | Invalid phone number | Employer logged in | phone = abc123 | Validation error | High |
| TC-EMP-PROF-09 | Unauthorized update attempt | User not logged in | Send PUT request | 401 Unauthorized | High |

---

## User Story: Delete Employer Profile

**API**

`DELETE /api/employer/profile`

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-EMP-PROF-10 | Delete profile successfully | Employer logged in | Send DELETE request | Profile deleted | High |
| TC-EMP-PROF-11 | Verify profile after deletion | Profile deleted | Attempt GET profile | Profile not found | Medium |
| TC-EMP-PROF-12 | Unauthorized delete request | User not logged in | Send DELETE request | 401 Unauthorized | High |

---

# 💼 5. Job Management APIs

## User Story: Post Job

**API**

`POST /api/employer/jobs`

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-JOB-01 | Post job successfully | Employer logged in | Send POST with valid job data | Job created | High |
| TC-JOB-02 | Missing job title | Employer logged in | Title null | Validation error | High |
| TC-JOB-03 | Invalid experience value | Employer logged in | experience = -2 | Request rejected | Medium |
| TC-JOB-04 | Unauthorized job posting | User not logged in | Send POST request | 401 Unauthorized | High |

---

## User Story: View Job Details

**API**

`GET /api/employer/jobs/{jobId}`

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-JOB-05 | View job details successfully | Employer logged in | GET with jobId | Job details returned | High |
| TC-JOB-06 | Invalid jobId | Employer logged in | Invalid ID | 404 Job not found | High |
| TC-JOB-07 | Unauthorized access attempt | User not logged in | Call API | 401 Unauthorized | High |
| TC-JOB-08 | Validate job fields | Employer logged in | Call API | Fields present | Medium |

---

# 📥 6. Job Applications APIs

## User Story: View All Applications

**API**

`GET /api/employer/jobs/{jobId}/applications`

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-EMP-APP-01 | Retrieve applications successfully | Employer logged in | GET with jobId | List of applications | High |
| TC-EMP-APP-02 | Validate response structure | Employer logged in | Call API | candidateId, candidateName, status present | High |
| TC-EMP-APP-03 | No applications available | Employer logged in | Call API | Empty list | Medium |
| TC-EMP-APP-04 | Invalid jobId | Employer logged in | Invalid ID | 404 Job not found | High |
| TC-EMP-APP-05 | Unauthorized access | User not logged in | Call API | 401 Unauthorized | High |
| TC-EMP-APP-06 | Cross employer job access | Employer logged in | Call API | 403 Forbidden | High |
| TC-EMP-APP-07 | API performance validation | Employer logged in | Call API | Response <2 seconds | Medium |

---

# 👥 7. Candidate Pool APIs

## User Story: View All Candidates

**API**

`GET /api/employer/candidates`

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-EMP-CAN-01 | Retrieve candidate list | Employer logged in | GET request | Candidate list returned | High |
| TC-EMP-CAN-02 | Validate response fields | Employer logged in | Call API | candidateId, skills, experience present | High |
| TC-EMP-CAN-03 | No candidates available | Employer logged in | Call API | Empty list | Medium |
| TC-EMP-CAN-04 | Unauthorized access | User not logged in | Call API | 401 Unauthorized | High |
| TC-EMP-CAN-05 | Large dataset validation | Many candidates exist | Call API | Correct response | Medium |
| TC-EMP-CAN-06 | API performance validation | Employer logged in | Call API | Response <2 seconds | Medium |

---

# 🎤 8. Interview APIs

## User Story: View Interview Summary

**API**

`GET /api/employer/interviews/summary`

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-EMP-INT-01 | Retrieve interview summary | Employer logged in | GET request | Interview statistics returned | High |
| TC-EMP-INT-02 | Validate response data types | Employer logged in | Call API | Numeric fields valid | High |
| TC-EMP-INT-03 | Unauthorized access attempt | Student logged in | Call API | 403 Forbidden | High |
| TC-EMP-INT-04 | Missing authentication token | Not logged in | Call API | 401 Unauthorized | High |
| TC-EMP-INT-05 | API performance test | Employer logged in | Call API | Response <2 seconds | Medium |

---

## User Story: View Upcoming Interviews

**API**

`GET /api/employer/interviews/upcoming`

| Test Case ID | Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-EMP-INT-06 | Retrieve upcoming interviews | Employer logged in | Call API | List returned | High |
| TC-EMP-INT-07 | Validate interview details | Employer logged in | Call API | candidateName, date present | High |
| TC-EMP-INT-08 | No upcoming interviews | Employer logged in | Call API | Empty list | Medium |
| TC-EMP-INT-09 | Unauthorized access | Student logged in | Call API | 403 Forbidden | High |
| TC-EMP-INT-10 | API performance | Employer logged in | Call API | Response <2 seconds | Medium |

---