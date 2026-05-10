GET     /api/questions
GET     /api/questions/{question_id}
GET     /api/questions/difficulty/{level}


GET    /api/assessments           .     // instead of /all
GET    /api/assessments?userId=101    // instead of /user/{userId}
GET    /api/assessments/tests
GET    /api/assessments/students
POST   /api/assessments/assign        // instead of /assigned
GET    /api/assessments/{id}/questions
POST   /api/assessments/{id}/submit
GET    /api/assessments/results

POST /api/auth/login
POST /api/auth/logout
POST /api/auth/refresh-token

POST /api/auth/forgot-password
POST /api/auth/verify-otp
POST /api/auth/reset-password
PUT  /api/auth/change-password
POST /api/auth/reset-password
POST /api/auth/forgot-password

GET /api/users/active
GET /api/users?page=1&pageSize=10
GET /api/users?status=active
GET /api/users/{id}

POST /api/users/register


GET /api/users/{userId}/profile
GET    /api/students
GET    /api/students/{id}
POST   /api/students
PUT    /api/students/{id}
DELETE /api/students/{id}

GET    /api/students/{id}/assessments
GET    /api/students/{id}/results
GET    /api/students/{id}/sessions


GET    /api/smes
GET    /api/smes/{id}
POST   /api/smes
PUT    /api/smes/{id}
DELETE /api/smes/{id}

GET    /api/smes/{id}/questions
GET    /api/smes/{id}/assessments



GET    /api/admins
GET    /api/admins/{id}
POST   /api/admins
PUT    /api/admins/{id}
DELETE /api/admins/{id}

GET    /api/admins/{id}/profile
GET    /api/admins/{id}/sessions

GET    /api/mentors
GET    /api/mentors/{id}
POST   /api/mentors
PUT    /api/mentors/{id}
DELETE /api/mentors/{id}

GET    /api/mentors/{id}/students
GET    /api/mentors/{id}/sessions
GET    /api/mentors/{id}/assessments
GET    /api/admins/{userId}/profile

GET /api/sessions/logins?range=24h
GET /api/sessions/average-duration
GET /api/sessions/active
GET /api/sessions
GET /api/sessions?type=logs
GET /api/userlogs/{id}


GET    /api/sessions
GET    /api/sessions/active
GET    /api/sessions/logs

GET    /api/assessments
GET    /api/assessments/{id}
POST   /api/assessments

GET    /api/questions
POST   /api/questions


GET /users
GET /users/{id}
GET /admins/{id}/profile

GET /mentors/{id}/students


GET /api/companies/profile/{company_id}
