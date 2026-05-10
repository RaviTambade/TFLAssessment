# 🚀 Employer API Documentation

This document describes the **Employer Module APIs** used for managing dashboards, employer profiles, company profiles, jobs, candidates, and interviews.

---

# 📊 Employer Dashboard

## 📌 Dashboard APIs

```
GET /api/employer/dashboard/summary
GET /api/employer/dashboard/stats
GET /api/employer/dashboard/candidate-stats
GET /api/employer/dashboard/interview-stats
```

### 📄 Sample JSON Response

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

# 👤 Employer Profile

## Employer Profile APIs

### 1️⃣ Get Employer Profile

```
GET /api/employer/profile
```

### 📄 JSON DATA

```json
{
  "fullName": "John Doe",
  "email": "john.doe@company.com",
  "phoneNumber": "+91-9876543210",
  "designation": "HR Manager",
  "profilePhoto": "profile.jpg",
  "companyName": "TechInfo Soln"
}
```

---

### 2️⃣ Create Employer Profile

```
POST /api/employer/profile
```

---

### 3️⃣ Update Employer Profile (Full Update)

```
PUT /api/employer/profile
```

---

### 4️⃣ Partially Update Employer Profile

Use this API when updating **only specific fields** like name, phone, designation etc.

```
PATCH /api/employer/profile
```

### Example JSON

```json
{
  "phoneNumber": "+91-9000000000",
  "designation": "Senior HR Manager"
}
```

---

### 5️⃣ Upload Profile Photo

```
POST /api/employer/profile/photo
```

---

### 6️⃣ Delete Profile Photo

```
DELETE /api/employer/profile/photo
```

---

# 🏢 Company Profile

## 1️⃣ Get Company Profile

```
GET /api/employer/company
```

### 📄 JSON DATA

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

## 2️⃣ Create Company Profile

```
POST /api/employer/company
```

---

## 3️⃣ Update Company Profile (Full Update)

```
PUT /api/employer/company
```

---

## 4️⃣ Partially Update Company Profile

Used when updating **specific fields like website, location, description etc.**

```
PATCH /api/employer/company
```

### Example JSON

```json
{
  "website": "https://techinfo.com",
  "location": "Mumbai"
}
```

---

## 5️⃣ Delete Company Profile

```
DELETE /api/employer/company
```

---

# 💼 Job Management

## 1️⃣ Post Job

```
POST /api/employer/jobs
```

---

## 2️⃣ Get All Jobs

```
GET /api/employer/jobs?status=open
```

### 📄 JSON DATA

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

## 3️⃣ Get Job Details

```
GET /api/employer/jobs/{jobId}
```

### 📄 JSON DATA

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

## 4️⃣ Update Job

```
PUT /api/employer/jobs/{jobId}
```

---

## 5️⃣ Delete Job

```
DELETE /api/employer/jobs/{jobId}
```

---

## 6️⃣ Change Job Status

```
PATCH /api/employer/jobs/{jobId}/status
```

---

## 7️⃣ Get Appeared Candidates for Job

```
GET /api/employer/jobs/{jobId}/applications
```

### 📄 JSON DATA

```json
{
  "applicationId": 13,
  "candidateId": 2,
  "candidateName": "Rahul Sharma",
  "status": "appeared"
}
```

---

## 8️⃣ Qualified Candidates

```
GET /api/employer/jobs/{jobId}/candidates?status=shortlisted
```

### 📄 JSON DATA

```json
{
  "candidateId": 20,
  "candidateName": "Ganesh",
  "status": "shortlisted"
}
```

---

## 9️⃣ Get Appeared Student / Candidate Count

```
GET /api/employer/jobs/{jobId}/candidate/count
```

### 📄 JSON DATA

```json
{
  "total": 100,
  "shortlisted": 50
}
```

---

# 👨‍💻 Candidate Management

## 1️⃣ Get All Candidates

```
GET /api/employer/candidates
```

### 📄 JSON DATA

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

## 2️⃣ Search Candidates

```
GET /api/employer/candidates/search
```

### 🔍 Search Examples

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

## 3️⃣ Get Candidates by Skill

```
GET /api/employer/candidates/skills
```

### 📄 JSON DATA

```json
{
  "studentId": 120,
  "name": "Garthak",
  "skill": "C#"
}
```

---

## 4️⃣ Get Candidate Profile

```
GET /api/employer/candidates/{candidateId}
```

### 📄 JSON DATA

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

## 5️⃣ Get Candidate Skill Summary

```
GET /api/employer/candidates/{candidateId}/skills
```

### 📄 JSON DATA

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

# 🎯 Interview Management

## 1️⃣ Interview Pipeline

```
GET /api/employer/candidates/{studentId}/pipeline
```

### 📄 JSON DATA

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

## 2️⃣ Schedule Interview

```
POST /api/employer/interview
```

---

## 3️⃣ Get Interview Summary

```
GET /api/employer/interviews/summary
```

### 📄 JSON DATA

```json
{
  "totalInterviews": 40,
  "upcoming": 12,
  "completed": 20,
  "shortlisted": 6
}
```

---

## 4️⃣ Upcoming Interviews

```
GET /api/employer/interviews/upcoming
```

### 📄 JSON DATA

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

## 5️⃣ Today's Interviews

```
GET /api/employer/interviews/today
```

### 📄 JSON DATA

```json
{
  "interviewId": 100,
  "candidateName": "Samruddhi",
  "time": "10:30",
  "mode": "Online"
}
```

---

## 6️⃣ Interview Feedback

```
GET /api/employer/interviews/results
```

### 📄 JSON DATA

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

## 7️⃣ Reschedule Interview

```
PUT /api/employer/interviews/{interviewId}
```

---

## 8️⃣ Cancel Interview

```
DELETE /api/employer/interviews/{interviewId}
```

---

## 9️⃣ Selected Candidates

```
GET /api/employer/interviews/shortlisted
```

### 📄 JSON DATA

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

---
