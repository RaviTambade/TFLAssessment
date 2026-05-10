Below are **Agile User Stories mapped to each Employer REST API endpoint** for the **TFLCoMentor Employer Portal**.

Format used:

* **User Story**
* **API Endpoint**
* **Acceptance Criteria**
* **Business Value**

This helps **product managers, developers, testers, and students** clearly understand **why each API exists**.

---

# 🏢 1️⃣ Company Profile APIs

---

# User Story: View Company Profile

**As an Employer**
I want to view my company profile
So that I can verify the company information displayed to candidates.

**API**

```http
GET /api/employer/company
```

**Acceptance Criteria**

* Employer can view company name
* Employer can see industry, location, website
* Employer can verify employer branding information

**Business Value**

Helps build **trust and transparency for students applying to jobs**.

---

# User Story: Update Company Profile

**As an Employer**
I want to update my company profile
So that candidates can see accurate company information.

**API**

```http
PUT /api/employer/company
```

**Request Example**

```json
{
 "name":"TechNova Pvt Ltd",
 "tagline":"Building Next Gen Platforms",
 "industry":"Software Development",
 "foundedYear":2018,
 "location":"Pune",
 "website":"technova.com"
}
```

**Acceptance Criteria**

* Employer can edit company information
* Changes should reflect immediately on job postings
* Admin may review changes if moderation is enabled

---

# 💼 2️⃣ Job Management APIs

---

# User Story: Post a New Job

**As an Employer**
I want to post a job opportunity
So that students can apply for the position.

**API**

```http
POST /api/employer/jobs
```

**Acceptance Criteria**

* Employer enters job title
* Employer defines vacancies
* Employer provides description and salary
* Job becomes visible to eligible students

**Business Value**

Creates **job opportunities within the TFLCoMentor ecosystem**.

---

# User Story: View Posted Jobs

**As an Employer**
I want to view all jobs posted by my company
So that I can manage or update them.

**API**

```http
GET /api/employer/jobs
```

**Acceptance Criteria**

* System returns all company jobs
* Jobs should include status (Open / Closed)

---

# User Story: View Job Details

**As an Employer**
I want to view details of a specific job
So that I can monitor its applications.

**API**

```http
GET /api/employer/jobs/{jobId}
```

**Acceptance Criteria**

* Employer can see job description
* Employer can see number of applicants

---

# User Story: Update Job

**As an Employer**
I want to update a job posting
So that I can modify requirements or vacancies.

**API**

```http
PUT /api/employer/jobs/{jobId}
```

**Acceptance Criteria**

* Employer can modify title
* Employer can update description
* Employer can update salary and vacancies

---

# User Story: Delete Job

**As an Employer**
I want to delete a job posting
So that outdated openings are removed.

**API**

```http
DELETE /api/employer/jobs/{jobId}
```

**Acceptance Criteria**

* Employer can remove job
* Job should not appear in student job portal

---

# 📄 3️⃣ Job Application APIs

---

# User Story: View Job Applications

**As an Employer**
I want to view all applications for a job
So that I can review candidates.

**API**

```http
GET /api/employer/jobs/{jobId}/applications
```

**Acceptance Criteria**

* System returns candidate list
* Include name, skills, application date

---

# User Story: Shortlist Candidate

**As an Employer**
I want to shortlist a candidate
So that they can proceed to the next hiring stage.

**API**

```http
POST /api/employer/jobs/{jobId}/shortlist
```

**Acceptance Criteria**

* Candidate status should change to **Shortlisted**
* Candidate should receive notification

---

# User Story: Reject Candidate

**As an Employer**
I want to reject a candidate
So that they are removed from the hiring process.

**API**

```http
POST /api/employer/jobs/{jobId}/reject
```

**Acceptance Criteria**

* Candidate status should change to **Rejected**
* Candidate should not appear in shortlist list

---

# 👨‍🎓 4️⃣ Candidate Pool APIs

---

# User Story: Browse Candidate Pool

**As an Employer**
I want to browse all available candidates
So that I can discover potential hires.

**API**

```http
GET /api/employer/candidates
```

**Acceptance Criteria**

* Show candidate name
* Show skills
* Show experience or projects

---

# User Story: Search Candidate by Skill

**As an Employer**
I want to search candidates by skill
So that I can find developers with required technologies.

**API**

```http
GET /api/employer/candidates?skill=node
```

**Acceptance Criteria**

* Employer can search using skill name
* Results should show matching candidates

---

# User Story: View Candidate Profile

**As an Employer**
I want to view detailed profile of a candidate
So that I can evaluate their skills.

**API**

```http
GET /api/employer/candidates/{studentId}
```

**Acceptance Criteria**

* Show skills
* Show assessments
* Show projects
* Show mentor feedback

---

# 🧪 5️⃣ Assessment APIs

---

# User Story: View Assessment Library

**As an Employer**
I want to browse assessment library
So that I can evaluate candidates using standardized tests.

**API**

```http
GET /api/employer/assessments/library
```

**Acceptance Criteria**

* System should list available assessments
* Include technology tags

---

# User Story: Assign Assessment to Candidates

**As an Employer**
I want to assign an assessment to candidates
So that I can evaluate their technical skills.

**API**

```http
POST /api/employer/assessments/assign
```

**Example Request**

```json
{
 "assessmentId":21,
 "candidateIds":[12,14,18]
}
```

**Acceptance Criteria**

* Candidates should receive assessment notification
* Assessment should appear in candidate dashboard

---

# User Story: View Assessment Results

**As an Employer**
I want to view assessment results
So that I can shortlist skilled candidates.

**API**

```http
GET /api/employer/assessments/results
```

**Acceptance Criteria**

* System returns candidate scores
* Results can be filtered by job or skill

---

# 🎤 6️⃣ Interview APIs

---

# User Story: Schedule Interview

**As an Employer**
I want to schedule interviews with shortlisted candidates
So that I can evaluate them personally.

**API**

```http
POST /api/employer/interviews
```

**Example**

```json
{
 "candidateId":12,
 "jobId":5,
 "date":"2026-03-25",
 "time":"11:00",
 "meetingLink":"google-meet"
}
```

**Acceptance Criteria**

* Candidate receives interview notification
* Interview appears in interview dashboard

---

# User Story: View Interviews

**As an Employer**
I want to see scheduled interviews
So that I can manage hiring activities.

**API**

```http
GET /api/employer/interviews
```

**Acceptance Criteria**

* Show upcoming interviews
* Show candidate and job details

---

# User Story: Submit Interview Result

**As an Employer**
I want to record interview result
So that hiring decisions can be tracked.

**API**

```http
POST /api/employer/interviews/{interviewId}/result
```

**Acceptance Criteria**

* Employer can mark candidate **Selected / Rejected**
* System should update hiring pipeline

---

# 📊 7️⃣ Hiring Reports APIs

---

# User Story: View Hiring Summary

**As an Employer**
I want to view hiring statistics
So that I can evaluate recruitment performance.

**API**

```http
GET /api/employer/reports/hiring
```

**Acceptance Criteria**

* Show total candidates applied
* Show shortlisted candidates
* Show selected candidates

---

# User Story: View Candidate Joining Status

**As an Employer**
I want to see joining status of selected candidates
So that I can track onboarding.

**API**

```http
GET /api/employer/reports/joining
```

**Acceptance Criteria**

* Show selected candidates
* Show joined vs pending

---

# 🧠 Complete Hiring Pipeline (Product Thinking)

This pipeline connects **all stakeholders in TFLCoMentor**:

```text
Student Applies
        │
        ▼
Employer Reviews Application
        │
        ▼
Assessment Assigned
        │
        ▼
Assessment Passed
        │
        ▼
Interview Scheduled
        │
        ▼
Interview Result
        │
        ▼
Offer Released
        │
        ▼
Candidate Joined
```

---

# 🚀 How This Helps Students

This design teaches students:

* **REST API architecture**
* **Recruitment systems**
* **ATS (Applicant Tracking System) design**
* **Enterprise software architecture**

Real companies like:

* LinkedIn
* Greenhouse Software
* Lever

use **similar hiring pipelines internally**.

