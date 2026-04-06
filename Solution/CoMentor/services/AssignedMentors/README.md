# AssignedMentors Service

API for student assigned mentor lookup (MVC pattern).

## Setup

1. `cd services/AssignedMentors`
2. `npm install`
3. Configure `.env` if needed (DB environment variables).
4. `npm start`

## Endpoint

GET `/api/students/:studentId/mentor`
- Returns assigned mentor details from `mentor_mentees` joined with `users`.

Example:
```
GET http://localhost:3004/api/students/12/mentor
```

Response:
```
{
  "mentorId": 5,
  "mentorContact": "1234567890",
  "mentorStatus": "ACTIVE",
  "assignedOn": "2024-08-11T00:00:00.000Z"
}
```
