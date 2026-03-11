## Auth and student core

- `POST /student/login`  
  Body: `{ email, password }`  
  Response: `{ token, student: { id, name, email } }`


- `GET /student/dashboard`  
  Auth: required  
  Response: summary of courses, pending assignments, upcoming assessments, notifications.

- `GET /student/profile/view`  
  Response: `{ id, name, email, phone, avatarUrl, year, ... }`

- `PUT /student/profile/edit`  
  Body: editable profile fields (no password).  
  Response: updated profile.

- `PUT /student/profile/change-password`  
  Body: `{ currentPassword, newPassword }`  
  Response: `{ message }`

***

## Learnings and courses

- `GET /student/learnings`  
  Response: overview of learning stats (assigned courses, completed, in-progress).

- `GET /student/learnings/courses`  
  Query: `?status=ongoing|completed`  
  Response: list of enrolled courses.

- `GET /student/learnings/courses/:courseId`  
  Response: course detail, modules, progress.

- `GET /student/learnings/courses/:courseId/assignments`  
  Response: list of assignments for course.

- `GET /student/learnings/courses/:courseId/assignments/:assignmentId`  
  Response: assignment detail.

- `POST /student/learnings/courses/:courseId/assignments/:assignmentId/submit`  
  Body: `{ textAnswer?, fileUrls? }`  
  Response: submission record.
 
***

## Assessments

- `GET /student/assessments`  
  Optional combined view of scheduled + attempted.

- `GET /student/assessments/scheduled`  
  Response: list of upcoming assessments.

- `GET /student/assessments/:assessmentId`  
  Use only for scheduled/in-progress assessments.  
  Response: assessment meta and questions (if allowed before start).

- `POST /student/assessments/:assessmentId/start`  
  Response: `{ attemptId, startTime, duration, questions[] }`

- `POST /student/assessments/:assessmentId/attempts/:attemptId/submit`  
  Body: `answers[]`  
  Response: `{ score, status, resultId }`

- `GET /student/assessments/attempted`  
  Response: list of past attempts.

- `GET /student/assessments/:assessmentId/result`  
  Response: `{ score, maxScore, breakdown, feedback }`

***

## Mentorship

- `GET /student/mentorship`  
  Response: overview (assigned mentor, upcoming sessions).

- `GET /student/mentor`  
  Response: mentor summary.
  //current mentor

- `GET /student/mentor/profile`  
  Response: full mentor profile.

  linkedIn url
  github
  overall exp 

- `GET /student/mentorship/schedule`  
  Response: list of sessions (past/upcoming).

- `POST /student/mentorship/schedule`  
  Body: `{ preferredSlot, topic, notes }`  
  Response: created session/booking.

- `PUT /student/mentorship/schedule/:sessionId/cancel`  //mentor assigned session
  Response: `{ message }`

- `GET /student/mentorship/questions`  
  Query: `?courseId=&status=open|resolved&search=`  
  Response: paginated questions list.

- `POST /student/mentorship/questions/post`  
  Body: `{ title, body, courseId?, tags? }`  
  Response: created question.

- `GET /student/mentorship/questions/discussion`  
  Response: maybe trending / latest questions.

- `GET /student/mentorship/questions/:questionId`  
  Response: question detail, answers.

- `POST /student/mentorship/questions/:questionId/answers`  
  Body: `{ body }`  
  Response: created answer.
 
***

## Projects

- `GET /student/projects`  
  Response: combination of my projects + available project topics (optional).

- `GET /student/projects/myprojects`  
  Response: list of projects owned by student.

- `GET /student/projects/:projectId`  
  Response: project detail, team, mentor, status.

- `POST /student/projects/submit`  
  Body: `{ title, description, repoUrl, demoUrl?, members?, courseId? }`  
  Response: created project submission.

- `PUT /student/projects/:projectId`  
  Body: fields to update.
 
***

## Placements

- `GET /student/placements`  
  Response: overview (eligible/not eligible jobs, applications, offers count).

- `GET /student/placements/jobs`  
  Query: `?company=&location=&ctcMin=&ctcMax=&role=&eligibleOnly=true`  
  Response: list of jobs.

- `GET /student/placements/jobs/:jobId`  
  Response: job detail.

- `POST /student/placements/jobs/:jobId/apply`  
  Body: `{ resumeUrl?, coverLetter? }`  
  Response: application created.

- `GET /student/placements/applications`  
  Response: list of applications with status.

- `GET /student/placements/applications/:applicationId`  
  Response: application detail, stages.

- `GET /student/placements/offers`  
  Response: list of offers.

- `GET /student/placements/offers/:offerId`  
  Response: offer detail.
 
***

## Progress and analytics

- `GET /student/progress`  
  Response: high-level metrics (course completion, assessment performance).

- `GET /student/progress/courses`  
  Response: per-course progress summary.

- `GET /student/progress/courses/:courseId`  
  Response: detailed progress for that course.

***

## Notifications

// add filter
test 
placement 
assignment submission
technical issues

- `GET /student/notifications`  
  Query: `?status=unread|read&type=system|assessment|placement`  
  Response: notifications list.

- `PUT /student/notifications/:notificationId/read`  
  Response: `{ message }`

- `PUT /student/notifications/:notificationId/star`  
Response: `{ message }`


















