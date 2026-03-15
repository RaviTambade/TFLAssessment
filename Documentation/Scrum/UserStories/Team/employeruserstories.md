# 🚀 Employer Module – User Stories & Acceptance Criteria

This document defines the **User Stories and Acceptance Criteria** for the Employer module, including Dashboard, Profile Management, Job Management, Candidate Management, and Interview Management.

---

# 📊 Employer Dashboard

## User Story 1 — View Employer Dashboard

### User Story

As an **Employer**, I want to **view my dashboard summary** so that I can **see overall recruitment activity such as jobs, candidates, and interviews**.

### Acceptance Criteria

* Employer must be authenticated.
* System should return dashboard summary.
* Dashboard must show:

  * Total jobs posted
  * Appeared candidates
  * Shortlisted candidates
  * Interviews scheduled
  * Candidates hired

**API**

```
GET /api/employer/dashboard/summary
```

---

## User Story 2 — View Recruitment Statistics

### User Story

As an **Employer**, I want to **view recruitment statistics** so that I can **analyze hiring progress**.

### Acceptance Criteria

* Employer must be logged in.
* System should provide recruitment statistics.
* Statistics should include job and candidate insights.

**API**

```
GET /api/employer/dashboard/stats
```

---

# 👤 Employer Profile

## User Story 3 — View Employer Profile

### User Story

As an **Employer**, I want to **view my profile information** so that I can **confirm my account details**.

### Acceptance Criteria

* Employer must be authenticated.
* System should return profile details.
* Profile should include:

  * Full name
  * Email
  * Phone number
  * Designation
  * Profile photo
  * Company name

**API**

```
GET /api/employer/profile
```

---

## User Story 4 — Create Employer Profile

### User Story

As an **Employer**, I want to **create my profile** so that I can **start using the recruitment platform**.

### Acceptance Criteria

* Employer must submit profile information.
* Required fields:

  * Full name
  * Email
  * Phone number
  * Designation
  * Company name
* System should create profile successfully.

**API**

```
POST /api/employer/profile
```

---

## User Story 5 — Update Employer Profile

### User Story

As an **Employer**, I want to **update my profile information** so that **my details remain accurate**.

### Acceptance Criteria

* Employer must be authenticated.
* System should allow updating profile fields.
* Only modified fields should be updated.

**API**

```
PATCH /api/employer/profile
```

### Example

```json
{
  "phoneNumber": "+91-9000000000",
  "designation": "Senior HR Manager"
}
```

---

## User Story 6 — Upload Profile Photo

### User Story

As an **Employer**, I want to **upload a profile photo** so that **my profile appears professional**.

### Acceptance Criteria

* Employer must be authenticated.
* System should accept an image file.
* Profile photo should be stored and linked to profile.

**API**

```
POST /api/employer/profile/photo
```

---

# 🏢 Company Profile

## User Story 7 — View Company Profile

### User Story

As an **Employer**, I want to **view my company profile** so that **I can verify company information**.

### Acceptance Criteria

* Employer must be authenticated.
* System should return company details.

**API**

```
GET /api/employer/company
```

---

## User Story 8 — Create Company Profile

### User Story

As an **Employer**, I want to **create my company profile** so that **candidates can learn about my organization**.

### Acceptance Criteria

* Employer must submit company details.
* Required fields:

  * Company name
  * Industry
  * Location
  * Website
* System should save company profile.

**API**

```
POST /api/employer/company
```

---

## User Story 9 — Update Company Profile

### User Story

As an **Employer**, I want to **update company information** so that **the company profile remains accurate**.

### Acceptance Criteria

* Employer must be authenticated.
* System should allow partial updates.

**API**

```
PATCH /api/employer/company
```

### Example

```json
{
  "website": "https://techinfo.com",
  "location": "Mumbai"
}
```

---

# 💼 Job Management

## User Story 10 — Post a Job

### User Story

As an **Employer**, I want to **post a job opening** so that **candidates can apply**.

### Acceptance Criteria

* Employer must be authenticated.
* Job posting should include:

  * Job title
  * Description
  * Skills required
  * Experience
  * Location
* System should create job successfully.

**API**

```
POST /api/employer/jobs
```

---

## User Story 11 — View Posted Jobs

### User Story

As an **Employer**, I want to **view all my posted jobs** so that **I can manage them**.

### Acceptance Criteria

* Employer must be authenticated.
* System should return job list.
* Jobs should include application counts.

**API**

```
GET /api/employer/jobs
```

---

## User Story 12 — Update Job Details

### User Story

As an **Employer**, I want to **edit job details** so that **I can update requirements**.

### Acceptance Criteria

* Employer must be authenticated.
* System should update job information.

**API**

```
PUT /api/employer/jobs/{jobId}
```

---

## User Story 13 — Close Job Posting

### User Story

As an **Employer**, I want to **change job status** so that **I can close hiring when the position is filled**.

### Acceptance Criteria

* Employer must be authenticated.
* Job status should be updated.

**API**

```
PATCH /api/employer/jobs/{jobId}/status
```

---

# 👨‍💻 Candidate Management

## User Story 14 — View Candidate Applications

### User Story

As an **Employer**, I want to **view candidates who applied for a job** so that **I can evaluate them**.

### Acceptance Criteria

* Employer must be authenticated.
* System should return candidate list.

**API**

```
GET /api/employer/jobs/{jobId}/applications
```

---

## User Story 15 — Search Candidates

### User Story

As an **Employer**, I want to **search candidates by skill or experience** so that **I can find suitable talent**.

### Acceptance Criteria

* System should support filtering by:

  * Name
  * Skill
  * Experience

**API**

```
GET /api/employer/candidates/search
```

### Example

```
/search?skill=react
```

---

# 🎯 Interview Management

## User Story 16 — Schedule Interview

### User Story

As an **Employer**, I want to **schedule an interview with a candidate** so that **I can assess their skills**.

### Acceptance Criteria

* Employer must be authenticated.
* Interview must include:

  * Candidate
  * Job
  * Date
  * Time
  * Mode

**API**

```
POST /api/employer/interview
```

---

## User Story 17 — View Upcoming Interviews

### User Story

As an **Employer**, I want to **see upcoming interviews** so that **I can prepare**.

### Acceptance Criteria

* Employer must be authenticated.
* System should return upcoming interviews.

**API**

```
GET /api/employer/interviews/upcoming
```

---

## User Story 18 — Cancel Interview

### User Story

As an **Employer**, I want to **cancel an interview** so that **I can reschedule if necessary**.

### Acceptance Criteria

* Employer must be authenticated.
* System should remove scheduled interview.

**API**

```
DELETE /api/employer/interviews/{interviewId}
```

---
