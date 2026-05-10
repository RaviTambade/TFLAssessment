# 1️⃣ Employer UI Routes (Frontend Navigation)

Our **Employer Portal structure** for **TFLCoMentor** fits perfectly into the ecosystem where **companies discover, assess, interview, and hire students**.
We will convert into a **clear production-ready route architecture**.

We will structure it into:

1️⃣ Employer UI Routes
2️⃣ Employer REST API Routes
3️⃣ Backend Module Architecture
4️⃣ Hiring Pipeline Design (Very important)

```text
/employer
│
├── /employer/dashboard
│
├── /employer/company
│     ├── /employer/company/profile
│     └── /employer/company/edit
│
├── /employer/jobs
│     │
│     ├── /employer/jobs/post
│     │
│     ├── /employer/jobs/manage
│     │      └── /employer/jobs/:jobId
│     │
│     └── /employer/jobs/:jobId/applications
│            ├── all
│            ├── shortlisted
│            └── rejected
│
├── /employer/candidates
│     │
│     ├── /employer/candidates/all
│     ├── /employer/candidates/search
│     ├── /employer/candidates/skills
│     │
│     └── /employer/candidates/:studentId
│            └── interview-pipeline
│
├── /employer/assessments
│     │
│     ├── /employer/assessments/library
│     ├── /employer/assessments/assign
│     ├── /employer/assessments/results
│     ├── /employer/assessments/shortlisted
│     └── /employer/assessments/ongoing
│
├── /employer/interviews
│     │
│     ├── /employer/interviews/summary
│     ├── /employer/interviews/upcoming
│     ├── /employer/interviews/today
│     ├── /employer/interviews/results
│     └── /employer/interviews/shortlist
│
└── /employer/reports
      ├── /employer/reports/hiring-summary
      └── /employer/reports/joining-status
```

This structure keeps **hiring workflow very clear**.

# 2️⃣ Employer REST API Routes

# Company Profile APIs

### Get Company Profile

```http
GET /api/employer/company
```

### Update Company Profile

```http
PUT /api/employer/company
```

Example

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

# Job Management APIs

### Post Job

```http
POST /api/employer/jobs
```

Example

```json
{
 "title":"Junior Full Stack Developer",
 "vacancies":5,
 "description":"Looking for developers with NodeJS or .NET skills",
 "location":"Pune",
 "workMode":"Hybrid",
 "salary":"6 LPA"
}
```

### Get Jobs

```http
GET /api/employer/jobs
```


### Job Details

```http
GET /api/employer/jobs/{jobId}
```


### Update Job

```http
PUT /api/employer/jobs/{jobId}
```

### Delete Job

```http
DELETE /api/employer/jobs/{jobId}
```

# Job Application APIs

### Get Applications

```http
GET /api/employer/jobs/{jobId}/applications
```

### Shortlist Candidate

```http
POST /api/employer/jobs/{jobId}/shortlist
```

### Reject Candidate

```http
POST /api/employer/jobs/{jobId}/reject
```

# Candidate Pool APIs

### Get All Candidates

```http
GET /api/employer/candidates
```

### Search Candidate

```http
GET /api/employer/candidates?skill=node
```

### Candidate Profile

```http
GET /api/employer/candidates/{studentId}
```

# Assessment APIs

### Assessment Library

```http
GET /api/employer/assessments/library
```

### Assign Assessment

```http
POST /api/employer/assessments/assign
```

Example

```json
{
 "assessmentId":21,
 "candidateIds":[12,14,18]
}
```

### Assessment Results

```http
GET /api/employer/assessments/results
```


# Interview APIs

### Schedule Interview

```http
POST /api/employer/interviews
```

Example

```json
{
 "candidateId":12,
 "jobId":5,
 "date":"2026-03-25",
 "time":"11:00",
 "meetingLink":"google-meet"
}
```

### Interview List

```http
GET /api/employer/interviews
```
### Interview Result

```http
POST /api/employer/interviews/{interviewId}/result
```
# Hiring Reports APIs

### Hiring Summary

```http
GET /api/employer/reports/hiring
```


### Joining Status

```http
GET /api/employer/reports/joining
```

# 3️⃣ Employer Backend Module Architecture

```text
Employer Module
│
├── Company
│     ├── CompanyProfile
│
├── Jobs
│     ├── Job
│     ├── JobLocation
│
├── Applications
│     ├── JobApplication
│     ├── CandidateStatus
│
├── CandidatePool
│     ├── Candidate
│     ├── CandidateSkill
│
├── Assessments
│     ├── AssessmentAssignment
│     ├── AssessmentResult
│
├── Interviews
│     ├── Interview
│     ├── InterviewResult
│
└── Reports
      ├── HiringReport
```


# 4️⃣ Important Hiring Pipeline (Very Important)

Inside **TFLCoMentor**, employer hiring should follow a **clear pipeline**.

```text
Candidate Applied
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
Interview Selected
        │
        ▼
Offer Released
        │
        ▼
Joined
```

This pipeline integrates:

👨‍🎓 Student
👨‍🏫 Mentor
🧠 SME
🏢 Employer
⚙ Admin

# Final Full Platform Route Structure

```text
/admin/*
/sme/*
/mentor/*
/student/*
/employer/*
```
This is the **complete role architecture** for **TFLCoMentor**.
