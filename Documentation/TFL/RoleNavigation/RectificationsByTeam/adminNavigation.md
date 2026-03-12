# Admin Panel

## 1. Dashboard Module 

### GET `/dashboard/overview`

```json
{
  "totalUsers": 1200,
  "activeUsers": 245,
  "totalAssessments": 48,
  "ongoingAssessments": 12,
  "roleSummary": {
    "Student": 1044,
    "Mentor": 87,
    "SME": 24,
    "Employer": 45
  }
}
```
## 2. Assessment Module 

### GET `/assessments/statistics`

```json
{
  "ongoingAssessments": 12,
  "unassignedAssessments": 5,
  
}
```
### GET `/assessments`

```json
{
  "total": 48,
  "data": [
    {
      "testId": 5,
      "title": "Java Backend Assessment",
      "description": "Core Java + Spring Boot",
      "durationMinutes": 90,
      "status": "PUBLISHED",
      "createdAt": "2026-01-10T09:00:00Z"
    }
  ]
}
```
 
### POST `/assessments`

```json
{
  "title": "Java Backend Assessment",
  "description": "Core Java + Spring Boot concepts",
  "durationMinutes": 90,
  "questionIds": [101, 102, 103],
  "status": "DRAFT"
}
```

```json
{
  "testId": 10,
  "title": "Java Backend Assessment",
  "status": "DRAFT",
  "createdAt": "2026-03-12T10:00:00Z"
}
```

### POST `/assessments/{assessmentId}/assign`
```json
{
  "studentIds": [12, 45, 67],
  "scheduleDate": "2026-03-15",
  "scheduleTime": "10:00"
}
```
```json
{
  "assigned": 3,
  "testId": 5,
  "scheduleDate": "2026-03-15T10:00:00Z",
  "students": [
    { "studentId": 12, "name": "Rahul Sharma", "status": "Assigned" },
    { "studentId": 45, "name": "Sneha Patil",  "status": "Assigned" },
    { "studentId": 67, "name": "Arjun Mehta",  "status": "Assigned" }
  ]
}
```

### GET `/assessments/{assessmentId}/summary`
```json
{
  "testId": 5,
  "title": "Java Backend Assessment",
  "durationMinutes": 90,
  "totalAssigned": 30,
  "attempted": 22,
  "missed": 5,
  "pending": 3,
  "averageScore": 68.4,
  "highestScore": 95.0,
  "lowestScore": 32.0
}
```

### GET `/assessments/{assessmentId}/students`

```json
[
  {
    "studentId": 21,
    "name": "Rahul Sharma",
    "email": "rahul@example.com",
    "status": "Attempted",
    "score": 78.5,
    "timeTakenMinutes": 74,
    "attemptDate": "2026-03-15T10:45:00Z"
  },
  {
    "studentId": 22,
    "name": "Sneha Patil",
    "email": "sneha@example.com",
    "status": "Missed",
    "score": null,
    "timeTakenMinutes": null,
    "attemptDate": null
  }
]
```

### PUT `/assessments/{assessmentId}/students/{studentId}/reschedule`
```json
{
  "newScheduleDate": "2026-04-01",
  "newScheduleTime": "10:00",

}
```

```json
{
  "assessmentId": 5,
  "studentId": 22,
  "studentName": "Sneha Patil",
  "previousSchedule": "2026-03-15T10:00:00Z",
  "newSchedule": "2026-04-01T10:00:00Z",
  "rescheduledAt": "2026-03-12T09:00:00Z"
}
```

## 3. Session Module 

### GET `/sessions/statistics`
```json
{
  "activeSessions": 85,
  "avgSessionTime": "00:32:15",
  "totalLogins": 1240,
  "todayLogins": 134
}
```

### GET `/sessions/logs`

```json
{
   [
    {
      "sessionId": 301,
      "userId": 42,
      "name": "Rahul Sharma",
      "role": "Student",
      "loginTime": "2026-03-10T10:20:00Z",
      "logoutTime": "2026-03-10T11:10:00Z",
      "sessionDuration": "50 mins",
      "status": "Inactive"
    }
  ]
}
```

### GET `/sessions/logs/{studentId}`

```json
{
  "userId": 42,
  "name": "Rahul Sharma",
  "email": "rahul@example.com",
  "role": "Student",
  "totalSessions": 18,
  "logs": [
    {
      "sessionId": 301,
      "loginTime": "2026-03-10T10:20:00Z",
      "logoutTime": "2026-03-10T11:10:00Z",
      "sessionDuration": "50 mins",
      "status": "Inactive"
    },
    {
      "sessionId": 298,
      "loginTime": "2026-03-09T09:00:00Z",
      "logoutTime": "2026-03-09T09:45:00Z",
      "sessionDuration": "45 mins",
      "status": "Inactive"
    }
  ]
}
```

## 4. User Module 

### GET `/users`

```json
{
   [
    {
      "userId": 101,
      "firstName": "Rahul",
      "lastName": "Sharma",
      "email": "rahul@example.com",
      "contact": "9876543210",
      "roles": ["Student"],
      "status": "ACTIVE",
      "emailVerified": true,
      "createdAt": "2025-08-01T00:00:00Z"
    }
  ]
}
```

---

### GET `/users` — Filter by Role 

#### `GET /api/admin/users?role=Student`

```json
{
  
   [
    {
      "userId": 101,
      "firstName": "Rahul",
      "lastName": "Sharma",
      "email": "rahul@example.com",
      "contact": "9876543210",
      "status": "ACTIVE",
      "studentProfile": {
        "collegeName": "MIT Pune",
        "degree": "B.Tech",
        "branch": "Computer Science",
        "graduationYear": 2026,
        "expertiseLevel": "INTERMEDIATE",
        "employabilityStatus": "Student"
      }
    }
  ]
}
```

#### `GET /api/admin/users?role=Mentor`

```json
{

   [
    {
      "userId": 202,
      "firstName": "Anjali",
      "lastName": "Desai",
      "email": "anjali@example.com",
      "contact": "9812345678",
      "status": "ACTIVE",
      "mentorProfile": {
        "experienceYears": 6,
        "specialization": "Full Stack Development",
        "createdOn": "2025-06-01T00:00:00Z"
      }
    }
  ]
}
```

#### `GET /api/admin/users?role=SME`

```json
{
  [
    {
      "userId": 303,
      "firstName": "Vikram",
      "lastName": "Nair",
      "email": "vikram@example.com",
      "contact": "9823456789",
      "status": "ACTIVE",
      "smeProfile": {
        "expertiseTitle": "Backend Architect",
        "availabilityStatus": "AVAILABLE",
        "assignedOn": "2025-09-01T00:00:00Z",
        "company": "TechCorp India",
        "jobTitle": "Senior Engineer"
      }
    }
  ]
}
```

#### `GET /api/admin/users?role=Employer`
```json
{
   [
    {
      "userId": 404,
      "firstName": "Meera",
      "lastName": "Shah",
      "email": "meera@infosys.com",
      "contact": "9834567890",
      "status": "ACTIVE",
      "employerProfile": {
        "jobTitle": "HR Manager",
        "workEmail": "meera.hr@infosys.com",
        "workPhone": "+91-2012345678",
        "company": {
          "companyId": 10,
          "companyName": "Infosys Ltd.",
          "industry": "IT Services",
          "companySize": "10000+",
          "headquartersCity": "Bengaluru"
        }
      }
    }
  ]
}
```

### GET `/users/role-summary`
```json
{
  "total": 1200,
  "Student": 1044,
  "Mentor": 87,
  "SME": 24,
  "Employer": 45,
  "Admin": 3
}
```

### POST `/users`

```json
{
  "firstName": "Priya",
  "lastName": "Nair",
  "email": "priya@example.com",
  "contact": "9123456789",
  "role": "Student",
  "password": "TempPass@123"
}
```

```json
{
  "userId": 1205,
  "firstName": "Priya",
  "lastName": "Nair",
  "email": "priya@example.com",
  "role": "Student",
  "status": "ACTIVE",
  "createdAt": "2026-03-12T10:00:00Z"
}
```

### GET `/users/{userId}`
```json
{
  "userId": 101,
  "firstName": "Rahul",
  "lastName": "Sharma",
  "email": "rahul@example.com",
  "contact": "9876543210",
  "status": "ACTIVE",
  "emailVerified": true,
  "roles": ["Student"],
  "profile": {
    "gender": "Male",
    "dateOfBirth": "2001-05-14",
    "city": "Pune",
    "state": "Maharashtra",
    "country": "India",
    "linkedinUrl": "https://linkedin.com/in/rahul",
    "githubUrl": "https://github.com/rahul"
  },
  "studentProfile": {
    "collegeName": "MIT Pune",
    "degree": "B.Tech",
    "branch": "Computer Science",
    "graduationYear": 2026,
    "expertiseLevel": "INTERMEDIATE",
    "employabilityStatus": "Student"
  },
  "lastLogin": "2026-03-10T10:20:00Z"
}
```

### PUT `/users/{userId}`

```json
{
  "firstName": "Rahul",
  "lastName": "Sharma",
  "contact": "9876543210",
  "profile": {
    "city": "Mumbai",
    "state": "Maharashtra",
    "linkedinUrl": "https://linkedin.com/in/rahul-updated"
  }
}
```

```json
{
  "success": true,
  "userId": 101,
  "updatedAt": "2026-03-12T11:00:00Z"
}
```

### PUT `/users/{userId}/roles`
```json
{
  "roles": ["Student", "Mentor"]
}
```
```json
{
  "userId": 101,
  "name": "Rahul Sharma",
  "roles": ["Student", "Mentor"],
  "updatedAt": "2026-03-12T11:00:00Z"
}
```

### PUT `/users/{userId}/status`
```json
{
  "status": "INACTIVE",
}
```

```json
{
  "userId": 101,
  "name": "Rahul Sharma",
  "status": "INACTIVE",
  "updatedAt": "2026-03-12T11:30:00Z"
}
```
---

### GET `/users/{userId}/assessments`
```json
{
  "userId": 101,
  "name": "Rahul Sharma",
  "totalAssigned": 5,
  "assessments": [
    {
      "testId": 5,
      "title": "Java Backend Assessment",
      "status": "Attempted",
      "score": 78.5,
      "attemptDate": "2026-03-15T10:45:00Z",
      "timeTakenMinutes": 74
    },
    {
      "testId": 6,
      "title": "React Frontend Quiz",
      "status": "Pending",
      "score": null,
      "attemptDate": null,
      "timeTakenMinutes": null
    }
  ]
}
```

## 5. Settings Module 

### GET `/settings`

```json
{
  "platformName": "EduPortal",
  "maxSessionDurationMinutes": 120,
  "allowSelfRegistration": true,
  "defaultRole": "Student",
  "emailNotificationsEnabled": true,
  "maintenanceMode": false
}
```

### PUT `/settings`
```json
{
  "platformName": "EduPortal v2",
  "maxSessionDurationMinutes": 90,
  "allowSelfRegistration": false,
  "defaultRole": "Student",
  "maintenanceMode": false
}
```
```json
{
  "success": true,
  "updatedAt": "2026-03-12T12:00:00Z"
}
```
---
### GET `/settings/roles`
```json
[
  { "roleId": 1, "roleName": "Student",  "description": "Platform learner" },
  { "roleId": 2, "roleName": "Mentor",   "description": "Guides students" },
  { "roleId": 3, "roleName": "SME",      "description": "Subject Matter Expert" },
  { "roleId": 4, "roleName": "Employer", "description": "Hires students" },
  { "roleId": 5, "roleName": "Admin",    "description": "Platform administrator" }
]
```
---
### POST `/settings/roles`

```json
{
  "roleName": "Evaluator",
  "description": "Reviews and grades submitted assessments"
}
```

```json
{
  "roleId": 6,
  "roleName": "Evaluator",
  "description": "Reviews and grades submitted assessments"
}




