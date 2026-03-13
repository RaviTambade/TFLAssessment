# Mentee Management Test Cases

## 1.GET /api/mentor/mentee

| Test Case ID | Test Scenario                                       | Preconditions      | Test Steps                                   | Expected Result                                                   |
| ------------ | --------------------------------------------------- | ------------------ | -------------------------------------------- | ----------------------------------------------------------------- |
| TC_01        | Verify mentor can view all assigned mentees         | Mentor logged in   | 1. Send request `GET /api/mentor/mentee`     | API returns list of mentees                                       |
| TC_02        | Verify response when mentor has no assigned mentees | Mentor logged in   | 1. Send request `GET /api/mentor/mentee`     | API returns empty list                                            |
| TC_03        | Verify API authorization                            | User not logged in | 1. Send request without authentication token | System returns **401 Unauthorized**                               |
| TC_04        | Verify response structure                           | Mentor logged in   | 1. Call API                                  | Response contains **student name, skill level, technology track** |
| TC_05        | Verify API response performance                     | Mentor logged in   | 1. Call API                                  | API responds within acceptable time (<2 seconds)                  |


## 2.GET /api/mentor/mentee/students-name

| Test Case ID | Test Scenario                            | Preconditions      | Test Steps                                                       | Expected Result                     |
| ------------ | ---------------------------------------- | ------------------ | ---------------------------------------------------------------- | ----------------------------------- |
| TC_06        | Verify mentor can search student by name | Mentor logged in   | 1. Send request `GET /api/mentor/mentee/students-name?name=John` | API returns matching student list   |
| TC_07        | Verify search using partial name         | Mentor logged in   | 1. Call API with partial name                                    | Matching students returned          |
| TC_08        | Verify search with non-existing student  | Mentor logged in   | 1. Call API with random name                                     | API returns empty list              |
| TC_09        | Verify search parameter validation       | Mentor logged in   | 1. Call API without name parameter                               | System returns validation error     |
| TC_10        | Verify authorization for search API      | User not logged in | 1. Call API without token                                        | System returns **401 Unauthorized** |

## 3.GET /api/mentor/mentees?technology={tech}

| Test Case ID | Test Scenario                                  | Preconditions      | Test Steps                                        | Expected Result                     |
| ------------ | ---------------------------------------------- | ------------------ | ------------------------------------------------- | ----------------------------------- |
| TC_11        | Verify mentor can filter mentees by technology | Mentor logged in   | 1. Call `GET /api/mentor/mentees?technology=node` | API returns only Node students      |
| TC_12        | Verify filter using different technology       | Mentor logged in   | 1. Call API with `technology=react`               | System returns React students       |
| TC_13        | Verify filter with invalid technology          | Mentor logged in   | 1. Call API with unsupported technology           | API returns empty list              |
| TC_14        | Verify missing technology parameter            | Mentor logged in   | 1. Call `/api/mentor/mentees` without parameter   | System returns validation error     |
| TC_15        | Verify API authorization                       | User not logged in | 1. Call API without token                         | System returns **401 Unauthorized** |


## 4.POST /api/mentor/mentee

| Test Case ID | Test Scenario                         | Preconditions      | Test Steps                                       | Expected Result                     |
| ------------ | ------------------------------------- | ------------------ | ------------------------------------------------ | ----------------------------------- |
| TC_16        | Verify mentor can add new mentee      | Mentor logged in   | 1. Send `POST /api/mentor/mentee` with studentId | Student added successfully          |
| TC_17        | Verify adding duplicate mentee        | Mentor logged in   | 1. Send POST request with existing studentId     | System returns duplicate error      |
| TC_18        | Verify request with invalid studentId | Mentor logged in   | 1. Send POST request with invalid studentId      | System returns validation error     |
| TC_19        | Verify authorization for add mentee   | User not logged in | 1. Send POST request without token               | System returns **401 Unauthorized** |


## 5.DELETE /api/mentor/mentee/{studentId}
| Test Case ID | Test Scenario                                  | Preconditions      | Test Steps                                      | Expected Result                     |
| ------------ | ---------------------------------------------- | ------------------ | ----------------------------------------------- | ----------------------------------- |
| TC_20        | Verify mentor can remove existing mentee       | Mentor logged in   | 1. Send `DELETE /api/mentor/mentee/{studentId}` | Student removed successfully        |
| TC_21        | Verify removing non-existing student           | Mentor logged in   | 1. Send DELETE with invalid studentId           | System returns error                |
| TC_22        | Verify removing student not assigned to mentor | Mentor logged in   | 1. Send DELETE for another mentor's student     | System returns **403 Forbidden**    |
| TC_23        | Verify authorization for delete API            | User not logged in | 1. Send DELETE without token                    | System returns **401 Unauthorized** |


## 6.GET /api/mentor/mentee/student-profile

| Test Case ID | Test Scenario                                 | Preconditions      | Test Steps                                       | Expected Result                                                                    |
| ------------ | --------------------------------------------- | ------------------ | ------------------------------------------------ | ---------------------------------------------------------------------------------- |
| TC_24        | Verify mentor can view student profile        | Mentor logged in   | 1. Send `GET /api/mentor/mentee/student-profile` | API returns student profile                                                        |
| TC_25        | Verify profile contains required fields       | Mentor logged in   | 1. Call API                                      | Response contains **name, technology track, learning path, projects, skill level** |
| TC_26        | Verify profile request with invalid studentId | Mentor logged in   | 1. Call API with incorrect ID                    | System returns error message                                                       |
| TC_27        | Verify authorization for profile API          | User not logged in | 1. Call API without token                        | System returns **401 Unauthorized**                                                |

## 7.GET /api/mentor/mentee/{studentId}/learning-path

| Test Case ID | Test Scenario                                             | Preconditions      | Test Steps                                                                          | Expected Result                                                 |
| ------------ | --------------------------------------------------------- | ------------------ | ----------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| TC_28        | Verify mentor can view learning path progress             | Mentor logged in   | 1. Call API `GET /api/mentor/mentee/{studentId}/learning-path` with valid studentId | API returns learning path progress of the student               |
| TC_29        | Verify completed modules are displayed                    | Mentor logged in   | 1. Call the API with valid studentId                                                | Response contains list of **completed modules**                 |
| TC_30        | Verify remaining modules are displayed                    | Mentor logged in   | 1. Call API with valid studentId                                                    | Response contains **remaining modules**                         |
| TC_31        | Verify completion percentage is displayed                 | Mentor logged in   | 1. Call API                                                                         | Response contains **completion percentage field**               |
| TC_32        | Verify progress when student completed all modules        | Mentor logged in   | 1. Call API for a student who finished all modules                                  | Completion percentage = **100%**, remaining modules list empty  |
| TC_33        | Verify progress when student has not started modules      | Mentor logged in   | 1. Call API for a new student                                                       | Completion percentage = **0%**, completed modules empty         |
| TC_34        | Verify API behavior for invalid studentId                 | Mentor logged in   | 1. Call API with invalid studentId                                                  | System returns **404 Not Found**                                |                               |
| TC_35        | Verify API authorization                                  | User not logged in | 1. Call API without authentication                                                  | System returns **401 Unauthorized**                             |

## 8.GET /api/mentor/mentee/{studentId}/student-skills

| Test Case ID | Test Scenario                                                      | Preconditions      | Test Steps                                                                               | Expected Result                                                            |
| ------------ | ------------------------------------------------------------------ | ------------------ | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| TC_36        | Verify mentor can view student skills                              | Mentor logged in   | 1. Send request `GET /api/mentor/mentee/{studentId}/student-skills` with valid studentId | API returns list of student skills                                         |
| TC_37        | Verify system lists all acquired skills                            | Mentor logged in   | 1. Call API for a student with multiple skills                                           | Response contains **all acquired skills**                                  |
| TC_38        | Verify skill level is displayed                                    | Mentor logged in   | 1. Call API                                                                              | Each skill contains **skill level** (Beginner/Intermediate/Advanced etc.)  |
| TC_39        | Verify assessment score is visible                                 | Mentor logged in   | 1. Call API                                                                              | Each skill contains **assessment score**                                   |
| TC_40        | Verify response when student has no skills                         | Mentor logged in   | 1. Call API for student with no recorded skills                                          | API returns **empty list or message "No skills found"**                    |
| TC_41        | Verify API with invalid studentId                                  | Mentor logged in   | 1. Call API with invalid studentId                                                       | System returns **404 Not Found**                                           |                                          |
| TC_42        | Verify API authorization                                           | User not logged in | 1. Call API without authentication token                                                 | System returns **401 Unauthorized**                                        |
| TC_43        | Verify correct data format                                         | Mentor logged in   | 1. Call API                                                                              | Response contains **skill name, skill level, and assessment score fields** |                 |


## 9.GET /api/mentor/mentee/{studentId}/SMEfeedback

## GET /api/mentor/mentee/{studentId}/employer-feedback

| Test Case ID | Test Scenario                                                         | Preconditions      | Test Steps                                                          | Expected Result                                               |
| ------------ | --------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------- | ------------------------------------------------------------- |
| TC_44        | Verify mentor can view SME feedback                                   | Mentor logged in   | 1. Call API `GET /api/mentor/mentee/{studentId}/SMEfeedback`        | API returns SME feedback for the student                      |
| TC_45        | Verify mentor can view employer feedback                              | Mentor logged in   | 1. Call API `GET /api/mentor/mentee/{studentId}/employer-feedback`  | API returns employer feedback for the student                 |
| TC_46        | Verify SME feedback contains rating and comments                      | Mentor logged in   | 1. Call SME feedback API                                            | Response contains **rating and comments fields**              |
| TC_47        | Verify employer feedback contains rating and comments                 | Mentor logged in   | 1. Call employer feedback API                                       | Response contains **rating and comments fields**              |
| TC_48        | Verify system behavior when no SME feedback exists                    | Mentor logged in   | 1. Call SME feedback API for student without SME feedback           | API returns **empty list or "No feedback available" message** |
| TC_49        | Verify system behavior when no employer feedback exists               | Mentor logged in   | 1. Call employer feedback API for student without employer feedback | API returns **empty list or message**                         |
| TC_50        | Verify API with invalid studentId                                     | Mentor logged in   | 1. Call APIs with invalid studentId                                 | System returns **404 Not Found**                              |                        |
| TC_51        | Verify API authorization                                              | User not logged in | 1. Call API without authentication                                  | System returns **401 Unauthorized**                           |
| TC_52        | Verify response format and data accuracy                              | Mentor logged in   | 1. Call both APIs                                                   | Response contains **feedback source, rating, and comments**   |
| TC_53        | Verify rating value range                                             | Mentor logged in   | 1. Call API                                                         | Rating value should be within valid range (e.g., 1–5)         |



# Project Review Test Cases

| Test Case ID | Test Scenario | Preconditions | Test Steps | Expected Result |
|---------------|---------------|---------------|------------|----------------|
| TC_PROJECT_54 | Verify mentor can view all assigned projects | Mentor logged into system | 1. Send request to `GET /api/mentor/projects` | API returns list of all projects with **project name, status, team members** |
| TC_PROJECT_55 | Verify mentor can view running projects | Mentor logged in | 1. Send request to `GET /api/mentor/projects?status=running` | System returns only projects with status **running** |
| TC_PROJECT_56 | Verify mentor can view completed projects | Mentor logged in | 1. Send request to `GET /api/mentor/projects?status=completed` | System returns only projects with status **completed** |
| TC_PROJECT_57 | Verify invalid project status filter | Mentor logged in | 1. Send request to `GET /api/mentor/projects?status=invalid` | System returns empty list or validation error |
| TC_PROJECT_58 | Verify mentor can view project details | Mentor logged in and project exists | 1. Call `GET /api/mentor/projects/details` with valid projectId | API returns **project description, technologies used, repository link** |
| TC_PROJECT_59 | Verify invalid project ID in details API | Mentor logged in | 1. Call `GET /api/mentor/projects/details` with invalid projectId | System returns **error message or 404 response** |
| TC_PROJECT_60 | Verify mentor can add student to project | Mentor logged in and project exists | 1. Send `POST /api/mentor/projects/{projectId}/students` with studentId | Student added to project team successfully |
| TC_PROJECT_61 | Verify mentor can remove student from project | Mentor logged in and student exists in project | 1. Call `DELETE /api/mentor/projects/{projectId}/students/{studentId}` | Student removed from project team |
| TC_PROJECT_62 | Verify mentor can submit project feedback | Mentor logged in and project exists | 1. Send `POST /api/mentor/projects/{projectId}/feedback` with feedback JSON | Feedback stored successfully |
| TC_PROJECT_63 | Verify mentor can schedule project meeting | Mentor logged in and project exists | 1. Send `POST /api/mentor/projects/{projectId}/meeting` with meeting date and time | Meeting scheduled successfully |

# Mentor Session API Test Cases

## 1. View Upcoming Sessions

*API*

GET /api/mentor/sessions?status=upcoming

| Test Case ID | Scenario | Precondition | Test Steps | Expected Result |
|--------------|----------|--------------|-------------|----------------|
| TC_64 | Create session with valid data | Mentor logged in | Send POST request with valid body | Session created successfully |
| TC_65 | Create session with missing fields | Mentor logged in | Send POST request without topic or date | 400 Bad Request |
| TC_66 | Create session without authentication | User not logged in | Send POST request without token | 401 Unauthorized |
| TC_67 | Verify session saved in system | Mentor logged in | Create session then fetch upcoming sessions | Created session appears in list |

---

## 3. View Session History

*API*

GET /api/mentor/sessions?status=completed

| Test Case ID | Scenario | Precondition | Test Steps | Expected Result |
|--------------|----------|--------------|-------------|----------------|
| TC_68 | Fetch completed sessions | Mentor logged in | Call API with status=completed | List of completed sessions returned |
| TC_69 | Verify session history details | Mentor logged in | Call API | Response shows duration and attendance |
| TC_70 | Fetch session history without login | User not logged in | Call API without token | 401 Unauthorized |

---

# Mentor Resources

*API*

GET /api/mentor/resources

| Test Case ID | Scenario | Precondition | Test Steps | Expected Result |
|--------------|----------|--------------|-------------|----------------|
| TC_71 | Fetch learning resources | Mentor logged in | Call API with token | Resources list returned |
| TC_RES_002 | Verify resources categorized | Mentor logged in | Call API | Resources categorized as recordings, notes, diagrams |
| TC_72 | Fetch resources without authentication | User not logged in | Call API without token | 401 Unauthorized |
| TC_73 | Verify resource response fields | Mentor logged in | Call API | Response contains title, type, and file link |

---

# Mentor Profile API Test Cases

---

## 1. GET /api/mentors/{mentorId}

| Test Case ID | Scenario | Precondition | Test Steps | Expected Result |
|--------------|----------|--------------|-------------|----------------|
| TC_74 | Fetch mentor profile with valid mentorId | Mentor exists in system | Call API with existing mentorId | Mentor profile details returned |
| TC_75 | Fetch mentor profile with invalid mentorId | Mentor does not exist | Call API with non-existing mentorId | 404 Not Found |
| TC_76 | Fetch mentor profile without authentication | User not logged in | Call API without token | 401 Unauthorized |
| TC_77 | Verify response fields | Mentor profile available | Call API | Response contains name, email, expertise, experience |
| TC_78 | Verify role access | User logged in as admin/student | Login and call API | Mentor profile visible |

---

## 2. GET /api/mentor/profile

| Test Case ID | Scenario | Precondition | Test Steps | Expected Result |
|--------------|----------|--------------|-------------|----------------|
| TC_79 | Fetch logged-in mentor profile | Mentor logged in | Login as mentor and call API | Mentor profile returned |
| TC_80 | Call API without login | User not authenticated | Send request without token | 401 Unauthorized |
| TC_81 | Verify mentor-specific fields | Mentor logged in | Call API | Response includes mentorId, expertise, bio |
| TC_82 | Verify response time | Mentor logged in | Call API | Response time < 2 seconds |

---

## 3. PUT /api/mentor/profile

| Test Case ID | Scenario | Precondition | Test Steps | Expected Result |
|--------------|----------|--------------|-------------|----------------|
| TC_83 | Update mentor profile with valid data | Mentor logged in | Send PUT request with valid fields | Profile updated successfully |
| TC_84 | Update mentor profile with missing fields | Mentor logged in | Send request without required fields | 400 Bad Request |
| TC_85 | Update profile without authentication | User not logged in | Call API without token | 401 Unauthorized |
| TC_86 | Update profile with invalid data type | Mentor logged in | Send string instead of number | Validation error |
| TC_87 | Verify database update | Mentor logged in | Update profile then check DB | Data updated in DB |

---

## 4. GET /api/mentor/mentees

| Test Case ID | Scenario | Precondition | Test Steps | Expected Result |
|--------------|----------|--------------|-------------|----------------|
| TC_88 | Fetch mentees list | Mentor logged in and mentees assigned | Login as mentor and call API | List of assigned mentees returned |
| TC_89 | Mentor with no mentees | Mentor logged in but no mentees assigned | Call API | Empty list returned |
| TC_90 | Unauthorized access | User not logged in | Call API without login | 401 Unauthorized |
| TC_91 | Validate mentee details | Mentor logged in | Call API | Response includes menteeId, name, progress |

---

## 5. GET /api/mentor/profile/session-stats

| Test Case ID | Scenario | Precondition | Test Steps | Expected Result |
|--------------|----------|--------------|-------------|----------------|
| TC_92| Fetch session statistics | Mentor logged in | Login as mentor and call API | Session stats returned |
| TC_93 | Verify stats data | Mentor logged in | Call API | Response contains totalSessions, completedSessions |
| TC_94 | Unauthorized access | User not logged in | Call API without token | 401 Unauthorized |

---

## 6. PUT /api/mentor/profile/settings

| Test Case ID | Scenario | Precondition | Test Steps | Expected Result |
|--------------|----------|--------------|-------------|----------------|
| TC_95 | Update mentor settings | Mentor logged in | Send PUT request with valid settings | Settings updated successfully |
| TC_96 | Invalid settings data | Mentor logged in | Send incorrect format | Validation error |
| TC_97 | Unauthorized access | User not logged in | Call API without login | 401 Unauthorized |
| TC_98 | Verify settings persistence | Mentor logged in | Update settings and fetch profile | Settings saved in DB |


