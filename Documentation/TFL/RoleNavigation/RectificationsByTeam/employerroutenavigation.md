# Employer API Documentation

## Employer Dashboard

### Dashboard APIs

```
GET /api/employer/dashboard/summary
GET /api/employer/dashboard/stats
GET /api/employer/dashboard/candidate-stats
GET /api/employer/dashboard/interview-stats
```

### JSON DATA

```json
{
  "totalJobs": 12,
  "appearedCandidates": 6,
  "shortlisted": 3,
  "interviewsScheduled": 3,
  "hired": 1
}
```

---

# Company Profile

## 1. Get Company Profile

```
GET /api/employer/company
```

### JSON DATA

```json
{
  "companyId": 10,
  "name": "TechInfo Soln",
  "industry": "Software development",
  "website": "http://techinfo.com",
  "location": "Pune",
  "description": "We build enterprise software",
  "foundedYear": 2015,
  "companySize": "100-1000"
}
```

---

## 2. Create Company Profile

```
POST /api/employer/company
```

---

## 3. Update Company Profile

```
PUT /api/employer/company
```

---

## 4. Partially Update Profile

```
PATCH /api/employer/company
```

---

## 5. Delete Company Profile

```
DELETE /api/employer/company
```

---

# Jobs

## 1. Post Job

```
POST /api/employer/jobs
```

---

## 2. Get All Jobs

```
GET /api/employer/jobs?status=open
```

### JSON DATA

```json
{
  "jobId": 12,
  "title": "Full Stack developer",
  "location": "Pune",
  "applications": 45,
  "status": "open"
}
```

---

## 3. Get Job Details

```
GET /api/employer/jobs/{jobId}
```

### JSON DATA

```json
{
  "jobId": 11,
  "title": "Full Stack developer",
  "description": "MERN Stack developer",
  "experience": "1-3 years",
  "skills": ["React", "Node"],
  "location": "Pune"
}
```

---

## 4. Update Job

```
PUT /api/employer/jobs/{jobId}
```

---

## 5. Delete Job

```
DELETE /api/employer/jobs/{jobId}
```

---

## 6. Change Job Status

```
PATCH /api/employer/jobs/{jobId}/status
```

---

## 7. Get Appeared Candidates for Job

```
GET /api/employer/jobs/{jobId}/applications
```

### JSON DATA

```json
{
  "applicationId": 13,
  "candidateId": 2,
  "candidateName": "Rahul Sharma",
  "status": "appeared"
}
```

---

## 8. Get Shortlisted Candidates

```
GET /api/employer/jobs/{jobId}/candidates?status=shortlisted
```

### JSON DATA

```json
{
  "candidateId": 20,
  "candidateName": "Ganesh",
  "status": "shortlisted"
}
```

---

## 9. Get Appeared Student / Candidate Count

```
GET /api/employer/jobs/{jobId}/candidate/count
```

### JSON DATA

```json
{
  "total": 100,
  "shortlisted": 50
}
```

---

# Candidates

## 1. Get All Candidates

```
GET /api/employer/candidates
```

### JSON DATA

```json
{
  "candidateId": 10,
  "name": "Tejas",
  "email": "tejas@123.com",
  "skill": ["React"],
  "experience": "4 years"
}
```

---

## 2. Search Candidates

```
GET /api/employer/candidates/search
```

### Search Examples

Search by Name

```
/search?name=rahul
```

Search by Skill

```
/search?skill=react
```

Search by Experience

```
/search?experience=2
```

---

## 3. Get Candidates by Skill

```
GET /api/employer/candidates/skills
```

### JSON DATA

```json
{
  "studentId": 120,
  "name": "Garthak",
  "skill": "C#"
}
```

---

## 4. Get Candidate Profile

```
GET /api/employer/candidates
```

### JSON DATA

```json
{
  "studentId": 20,
  "name": "",
  "email": "",
  "education": "B.Tech Computer",
  "skills": ["Java", "Spring Boot"],
  "projects": ["Ecommerce App", "Student Management"],
  "resume": "system"
}
```

---

## 5. Get Candidate Skill Summary

```
GET /api/employer/candidates/{candidateId}/skills
```

### JSON DATA

```json
{
  "skill": ["React", "Java", "MySQL"],
  "proficiency": {
    "React": "Advance",
    "MySQL": "Intermediate"
  }
}
```

---

# Interview

## 1. Interview Pipeline

```
GET /api/employer/candidates/{studentId}/pipeline
```

### JSON DATA

```json
{
  "candidateId": 11,
  "jobId": 12,
  "stages": [
    "Applied",
    "Assessment",
    "Technical Interview",
    "HR Interview",
    "Offer"
  ],
  "currentStage": "Technical Interview"
}
```

---

## 2. Schedule Interview

```
POST /api/employer/interview
```

---

## 3. Get Interview Total Info

```
GET /api/employer/interviews/summary
```

### JSON DATA

```json
{
  "totalInterviews": 40,
  "upcoming": 12,
  "completed": 20,
  "shortlisted": 6
}
```

---

## 4. Upcoming Interviews

```
GET /api/employer/interviews/upcoming
```

### JSON DATA

```json
{
  "interviewId": 50,
  "candidateName": "Garthak",
  "jobTitle": "Tester",
  "date": "2026-03-15",
  "time": "11:00"
}
```

---

## 5. Today's Interviews

```
GET /api/employer/interviews/today
```

### JSON DATA

```json
{
  "interviewId": 100,
  "candidateName": "Samruddhi",
  "time": "10:30",
  "mode": "Online"
}
```

---

## 6. Interview Feedback

```
GET /api/employer/interviews/results
```

### JSON DATA

```json
[
  {
    "interviewId": 22,
    "candidateName": "",
    "result": "Selected",
    "feedback": "Strong in MySQL"
  }
]
```

---

## 7. Reschedule Interview

```
PUT /api/employer/interviews/{interviewId}
```

---

## 8. Cancel Interview

```
DELETE /api/employer/interviews/{interviewId}
```

---

## 9. Shortlisted Candidates

```
GET /api/employer/interviews/shortlisted
```

### JSON DATA

```json
[
  {
    "candidateId": 101,
    "candidateName": "",
    "jobTitle": "",
    "status": ""
  }
]
```