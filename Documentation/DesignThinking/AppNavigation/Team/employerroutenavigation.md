# 🚀 Employer API Documentation

This document describes the **Employer Module APIs** used for managing
dashboards, employer profiles, company profiles, jobs, candidates, and
interviews.

------------------------------------------------------------------------

# 📊 Employer Dashboard

## 📌 Dashboard APIs

    GET /api/employer/dashboard/summary
    GET /api/employer/dashboard/stats
    GET /api/employer/dashboard/candidate-stats
    GET /api/employer/dashboard/interview-stats

### 📄 Sample JSON Response

``` json
{
  "totalJobs": 12,
  "appearedCandidates": 6,
  "shortlisted": 3,
  "interviewsScheduled": 3,
  "hired": 1
}
```

------------------------------------------------------------------------

# 👤 Employer Profile

## 1️⃣ Get Employer Profile

    GET /api/employer/profile

### 📄 JSON DATA

``` json
{
  "fullName": "John Doe",
  "emailId": "john.doe@company.com",
  "phoneNumber": "+91-9876543210",
  "designation": "HR Manager",
  "companyName": "TechInfo Soln"
}
```

------------------------------------------------------------------------

## 2️⃣ Create Employer Profile

    POST /api/employer/profile

------------------------------------------------------------------------

## 3️⃣ Update Employer Profile (Full Update)

    PUT /api/employer/profile

------------------------------------------------------------------------

## 4️⃣ Partially Update Employer Profile

    PATCH /api/employer/profile

Example JSON

``` json
{
  "phoneNumber": "+91-9000000000",
  "designation": "Senior HR Manager"
}
```

------------------------------------------------------------------------

# 🏢 Company Profile

## 1️⃣ Get Company Profile

    GET /api/employer/company

### 📄 JSON DATA

``` json
{
  "companyName": "TechInfo Soln",
  "foundedYear": 2015,
  "aboutUs": "We build enterprise software",
  "websiteUrl": "http://techinfo.com",
  "logo": "logo.png"
}
```

------------------------------------------------------------------------

## 2️⃣ Create Company Profile

    POST /api/employer/company

------------------------------------------------------------------------

## 3️⃣ Update Company Profile (Full Update)

    PUT /api/employer/company

------------------------------------------------------------------------

## 4️⃣ Partially Update Company Profile

    PATCH /api/employer/company

Example JSON

``` json
{
  "websiteUrl": "https://techinfo.com",
  "aboutUs": "Global software development company"
}
```

------------------------------------------------------------------------

## 5️⃣ Delete Company Profile

    DELETE /api/employer/company

------------------------------------------------------------------------

## Company Logo

### Upload Logo

    POST /api/employer/company/logo

### Delete Logo

    DELETE /api/employer/company/logo

------------------------------------------------------------------------

## Alumni

### Add Alumni

    POST /api/employer/company/alumni

Example

``` json
{
  "name": "Rahul Sharma"
}
```

------------------------------------------------------------------------

### Get Alumni List

    GET /api/employer/company/alumni

------------------------------------------------------------------------

### Delete Alumni

    DELETE /api/employer/company/alumni/{alumniId}

------------------------------------------------------------------------

## Referral

### Add Referral

    POST /api/employer/company/referral

Example

``` json
{
  "referralEmail": "referral@techinfo.com"
}
```

------------------------------------------------------------------------

### Get Referral

    GET /api/employer/company/referral

------------------------------------------------------------------------

# 💼 Job Management

## 1️⃣ Post Job

    POST /api/employer/jobs

Example JSON

``` json
{
  "jobTitle": "Backend Developer",
  "jobDescription": "Node.js developer required",
  "location": "Pune",
  "workMode": "Hybrid",
  "compensation": "8 LPA"
}
```

------------------------------------------------------------------------

## 2️⃣ Get All Jobs

    GET /api/employer/jobs

------------------------------------------------------------------------

## 3️⃣ Get Job Details

    GET /api/employer/jobs/{jobId}

------------------------------------------------------------------------

## 4️⃣ Update Job

    PUT /api/employer/jobs/{jobId}

------------------------------------------------------------------------

## 5️⃣ Delete Job

    DELETE /api/employer/jobs/{jobId}

------------------------------------------------------------------------

## 6️⃣ Change Job Status

    PATCH /api/employer/jobs/{jobId}/status

Example

``` json
{
  "status": "Closed"
}
```

------------------------------------------------------------------------

# 📄 Job Applications

## Get All Applicants

    GET /api/employer/jobs/{jobId}/applications

Example JSON

``` json
{
  "candidateId": 2,
  "candidateName": "Rahul Sharma",
  "status": "Applied"
}
```

------------------------------------------------------------------------

## Get Qualified Candidates

    GET /api/employer/jobs/{jobId}/candidates?status=qualified

------------------------------------------------------------------------

# 👨‍💻 Candidate Pool

## 1️⃣ Get All Candidates

    GET /api/employer/candidates

Example JSON

``` json
{
  "candidateId": 10,
  "name": "Tejas",
  "email": "tejas@123.com",
  "skills": ["React"],
  "experience": "4 years"
}
```

------------------------------------------------------------------------

## 2️⃣ Search Candidates

    GET /api/employer/candidates/search

Examples

Search by name

    /search?name=rahul

Search by skill

    /search?skill=react

Search by experience

    /search?experience=2

------------------------------------------------------------------------

## 3️⃣ Shortlist Candidate

    POST /api/employer/candidates/{candidateId}/shortlist

------------------------------------------------------------------------

## 4️⃣ Get Shortlisted Candidates

    GET /api/employer/candidates/shortlisted

------------------------------------------------------------------------

## 5️⃣ Get Candidate Profile

    GET /api/employer/candidates/{candidateId}

------------------------------------------------------------------------

# 🎯 Interview Management

## 1️⃣ Interview Summary

    GET /api/employer/interviews/summary

Example JSON

``` json
{
  "totalInterviews": 40,
  "upcoming": 12,
  "today": 5,
  "completed": 20
}
```

------------------------------------------------------------------------

## 2️⃣ Schedule Interview

    POST /api/employer/interviews

Example

``` json
{
  "candidateId": 12,
  "jobId": 3,
  "date": "2026-03-20",
  "time": "10:30",
  "mode": "Online"
}
```

------------------------------------------------------------------------

## 3️⃣ Upcoming Interviews

    GET /api/employer/interviews/upcoming

------------------------------------------------------------------------

## 4️⃣ Today's Interviews

    GET /api/employer/interviews/today

------------------------------------------------------------------------

## 5️⃣ Update Interview Status

    PATCH /api/employer/interviews/{interviewId}/status

Example

``` json
{
  "status": "Completed"
}
```

------------------------------------------------------------------------

## 6️⃣ Reschedule Interview

    PUT /api/employer/interviews/{interviewId}

------------------------------------------------------------------------

## 7️⃣ Cancel Interview

    DELETE /api/employer/interviews/{interviewId}

------------------------------------------------------------------------

## 8️⃣ Qualified Candidates

    GET /api/employer/interviews/qualified
