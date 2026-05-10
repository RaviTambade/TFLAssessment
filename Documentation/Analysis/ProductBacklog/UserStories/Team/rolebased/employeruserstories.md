# 🏢 Employer Module --- User Stories & REST APIs

This document describes the **User Stories and REST APIs** for the
**Employer Module**.\
It covers the following sections:

-   🏢 Company Profile
-   👤 Employer Profile
-   💼 Job Management
-   👥 Candidate Pool
-   🎤 Interview Module

------------------------------------------------------------------------

# 🏢 1. Company Profile

## 📌 User Story 1 --- View Company Profile

**User Story**

As an Employer, I want to view my company profile so that I can see the
company information displayed on the platform.

**Acceptance Criteria**

-   Employer must be authenticated\
-   System should return company profile details\
-   Profile must include company name, founded year, about, website, and
    logo

**API**

    GET /api/employer/company/profile

------------------------------------------------------------------------

## 📌 User Story 2 --- Add Company Alumni

**User Story**

As an Employer, I want to add company alumni so that candidates can see
previous employees associated with the company.

**Acceptance Criteria**

-   Employer must be authenticated\
-   System should allow adding alumni name\
-   Alumni should be saved under company profile

**API**

    POST /api/employer/company/alumni

**Body**

    {
      "name": "Rahul Sharma"
    }

------------------------------------------------------------------------

## 📌 User Story 3 --- View Company Alumni

**User Story**

As an Employer, I want to view company alumni so that I can track alumni
associated with my organization.

**API**

    GET /api/employer/company/alumni

------------------------------------------------------------------------

## 📌 User Story 4 --- Add Referral

**User Story**

As an Employer, I want to add a referral candidate so that referred
candidates can be considered for recruitment.

**API**

    POST /api/employer/company/referral

**Body**

    {
     "candidateName": "Amit Patel",
     "email": "amit@gmail.com"
    }

------------------------------------------------------------------------

# 👤 2. Employer Profile

## 📌 User Story 5 --- View Employer Profile

**User Story**

As an Employer, I want to view my profile information so that I can
verify my personal details.

**API**

    GET /api/employer/profile

------------------------------------------------------------------------

## 📌 User Story 6 --- Create Employer Profile

**User Story**

As an Employer, I want to create my employer profile so that my
information is stored in the system.

**API**

    POST /api/employer/profile

------------------------------------------------------------------------

## 📌 User Story 7 --- Update Employer Profile

**User Story**

As an Employer, I want to edit my profile information so that I can keep
my details updated.

**API**

    PUT /api/employer/profile

------------------------------------------------------------------------

## 📌 User Story 8 --- Delete Employer Profile

**User Story**

As an Employer, I want to delete my profile so that my account
information can be removed from the platform.

**API**

    DELETE /api/employer/profile

------------------------------------------------------------------------

# 💼 3. Job Management

## 📝 Post Job

### 📌 User Story 9 --- Post a Job

**User Story**

As an Employer, I want to post a job so that candidates can apply for
available positions.

**API**

    POST /api/employer/jobs

------------------------------------------------------------------------

### 📌 User Story 10 --- View Job Details

**User Story**

As an Employer, I want to view job details so that I can check the
information of a specific job posting.

**API**

    GET /api/employer/jobs/{jobId}

------------------------------------------------------------------------

### 📌 User Story 11 --- View Posted Jobs

**User Story**

As an Employer, I want to view all posted jobs so that I can track my
job listings.

**API**

    GET /api/employer/jobs

------------------------------------------------------------------------

### 📌 User Story 12 --- Edit Job Details

**User Story**

As an Employer, I want to edit job details so that I can update job
requirements or descriptions.

**API**

    PUT /api/employer/jobs/{jobId}

------------------------------------------------------------------------

### 📌 User Story 13 --- Close Job Posting

**User Story**

As an Employer, I want to close a job posting so that candidates cannot
apply once the position is filled.

**API**

    PATCH /api/employer/jobs/{jobId}/close

------------------------------------------------------------------------

## 📊 Manage Job

### 📌 User Story 14 --- View Job List

**User Story**

As an Employer, I want to view the list of all jobs so that I can manage
them efficiently.

**API**

    GET /api/employer/jobs/list

------------------------------------------------------------------------

### 📌 User Story 15 --- Check Job Status

**User Story**

As an Employer, I want to check job status so that I can see whether a
job is active or inactive.

**API**

    GET /api/employer/jobs/status

Example Response

    {
     "jobId": 101,
     "status": "Active"
    }

------------------------------------------------------------------------

## 📥 Job Applications

### 📌 User Story 16 --- View All Applications

**User Story**

As an Employer, I want to view all job applications so that I can review
candidates who applied.

**API**

    GET /api/employer/jobs/{jobId}/applications

------------------------------------------------------------------------

### 📌 User Story 17 --- View Qualified Applications

**User Story**

As an Employer, I want to view qualified candidates so that I can move
them to the interview stage.

**API**

    GET /api/employer/jobs/{jobId}/applications/qualified

------------------------------------------------------------------------

# 👥 4. Candidate Pool

### 📌 User Story 18 --- View All Candidates

**User Story**

As an Employer, I want to view candidates in the candidate pool so that
I can explore potential candidates.

**API**

    GET /api/employer/candidates

------------------------------------------------------------------------

### 📌 User Story 19 --- Search Candidates

**User Story**

As an Employer, I want to search candidates so that I can find
candidates based on skills or qualifications.

**API**

    GET /api/employer/candidates/search?skill=java

------------------------------------------------------------------------

### 📌 User Story 20 --- Shortlist Candidates

**User Story**

As an Employer, I want to shortlist candidates so that they can be
considered for interviews.

**API**

    POST /api/employer/candidates/{candidateId}/shortlist

------------------------------------------------------------------------

# 🎤 5. Interview Module

### 📌 User Story 21 --- View Interview Summary

**User Story**

As an Employer, I want to view interview summary so that I can analyze
interview activities.

**API**

    GET /api/employer/interviews/summary

------------------------------------------------------------------------

# 📅 Schedule Interview --- User Story

## User Story

As an **Employer**, I want to **schedule an interview with a candidate**
so that I can evaluate the candidate for a job position.

------------------------------------------------------------------------

# Acceptance Criteria

-   Employer must be **authenticated**.
-   Employer can **select a candidate** from applicants or qualified
    candidates.
-   Employer can **choose interview date and time**.
-   Employer can **select interview type** (Online / Offline).
-   Employer can **enter meeting link or interview location**.
-   System should **save the interview schedule** successfully.
-   Candidate should **receive an interview notification**.
-   Scheduled interview should appear in **Upcoming Interviews**.

------------------------------------------------------------------------

# API Endpoint

    POST /api/employer/interviews/schedule

------------------------------------------------------------------------

# Request Body Example

``` json
{
  "candidateId": "CAND123",
  "jobId": "JOB456",
  "interviewDate": "2026-03-20",
  "interviewTime": "10:30",
  "interviewType": "Online",
  "meetingLink": "https://meet.google.com/xyz",
  "notes": "Technical Round"
}
```

------------------------------------------------------------------------

# Expected Response

``` json
{
  "message": "Interview scheduled successfully",
  "interviewId": "INT789",
  "status": "Scheduled"
}
```

------------------------------------------------------------------------

### 📌 User Story 22 --- View Upcoming Interviews

**User Story**

As an Employer, I want to view upcoming interviews so that I can prepare
for scheduled interviews.

**API**

    GET /api/employer/interviews/upcoming

------------------------------------------------------------------------

### 📌 User Story 23 --- View Today's Interviews

**User Story**

As an Employer, I want to view today's interviews so that I can track
the interviews scheduled today.

**API**

    GET /api/employer/interviews/today

------------------------------------------------------------------------

### 📌 User Story 24 --- Reschedule Interview

**User Story**

As an Employer, I want to reschedule interviews so that interview timing
can be adjusted if required.

**API**

    PATCH /api/employer/interviews/{interviewId}/reschedule

------------------------------------------------------------------------

### 📌 User Story 25 --- View Interview Results

**User Story**

As an Employer, I want to view interview results so that I can evaluate
candidate performance.

**API**

    GET /api/employer/interviews/results

------------------------------------------------------------------------

### 📌 User Story 26 --- View Qualified Candidates

**User Story**

As an Employer, I want to view qualified candidates after interviews so
that I can proceed with hiring decisions.

**API**

    GET /api/employer/interviews/qualified

------------------------------------------------------------------------

# 📊 Summary

  Module                User Stories
  --------------------- --------------
  🏢 Company Profile    4
  👤 Employer Profile   4
  💼 Job Management     9
  👥 Candidate Pool     3
  🎤 Interview          7

**Total User Stories: 27**
