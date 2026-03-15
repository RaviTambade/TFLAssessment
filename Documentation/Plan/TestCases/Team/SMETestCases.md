# 1️⃣ Session Management APIs

## API

```
POST /api/sme/Sessions
```

## User Story

As a **SME**, I want to **create a Session** so that students can access learning material for a topic.

## Test Cases

| Test Case ID      | Scenario                    | Preconditions        | Steps                                             | Expected Result                        | Type       | Priority |
| ----------------- | --------------------------- | -------------------- | ------------------------------------------------- | -------------------------------------- | ---------- | -------- |
| TC_SME_SESSION_01 | Create session successfully | SME logged in        | Login → Send POST request with valid session data | Session created successfully           | Functional | High     |
| TC_SME_SESSION_02 | Validate required fields    | SME logged in        | Send POST request without title                   | Validation error returned              | Validation | High     |
| TC_SME_SESSION_03 | Validate video URL format   | SME logged in        | Send request with invalid video URL               | System returns validation error        | Validation | Medium   |
| TC_SME_SESSION_04 | Verify concept mapping      | Valid concept exists | Create session with conceptId                     | Session linked to concept successfully | Functional | High     |
| TC_SME_SESSION_05 | Unauthorized access         | No login token       | Call API without token                            | 401 Unauthorized                       | Security   | High     |

---

# 2️⃣ View Session List

## API

```
GET /api/sme/Sessions
```

## User Story

As a **SME**, I want to **view all Sessions** so that I can manage uploaded learning materials.

## Test Cases

| Test Case ID      | Scenario                       | Preconditions     | Steps            | Expected Result                   | Type       | Priority |
| ----------------- | ------------------------------ | ----------------- | ---------------- | --------------------------------- | ---------- | -------- |
| TC_SME_SESSION_06 | View session list successfully | SME logged in     | Login → Call API | System returns list of sessions   | Functional | High     |
| TC_SME_SESSION_07 | Validate session fields        | Sessions exist    | Call API         | Title and creation date displayed | Validation | Medium   |
| TC_SME_SESSION_08 | Empty session list             | No sessions exist | Call API         | Empty list returned               | Functional | Low      |
| TC_SME_SESSION_09 | Unauthorized access            | No login token    | Call API         | 401 Unauthorized                  | Security   | High     |

---

# 3️⃣ View Session Details

## API

```
GET /api/sme/Sessions/{SessionId}
```

## User Story

As a **SME**, I want to **view Session details** so that I can review the Session content.

## Test Cases

| Test Case ID      | Scenario                          | Preconditions     | Steps                    | Expected Result                        | Type       | Priority |
| ----------------- | --------------------------------- | ----------------- | ------------------------ | -------------------------------------- | ---------- | -------- |
| TC_SME_SESSION_10 | View session details successfully | Session exists    | Call API with sessionId  | Session details displayed              | Functional | High     |
| TC_SME_SESSION_11 | Validate session fields           | Session exists    | Call API                 | Title, description, videoUrl displayed | Validation | Medium   |
| TC_SME_SESSION_12 | Invalid session ID                | Session not found | Call API with invalid ID | 404 Not Found                          | Negative   | Medium   |
| TC_SME_SESSION_13 | Unauthorized access               | No login token    | Call API                 | 401 Unauthorized                       | Security   | High     |

---

# 4️⃣ Search Session

## API

```
GET /api/sme/Sessions/search?keyword={keyword}
```

## User Story

As a **SME**, I want to **search Sessions** so that I can quickly find a specific Session.

## Test Cases

| Test Case ID      | Scenario                       | Preconditions  | Steps                 | Expected Result              | Type       | Priority |
| ----------------- | ------------------------------ | -------------- | --------------------- | ---------------------------- | ---------- | -------- |
| TC_SME_SESSION_14 | Search session successfully    | Sessions exist | Call API with keyword | Matching sessions returned   | Functional | High     |
| TC_SME_SESSION_15 | Search with no results         | Sessions exist | Search random keyword | Empty result returned        | Functional | Medium   |
| TC_SME_SESSION_16 | Search with special characters | Sessions exist | Search with symbols   | System handles search safely | Validation | Medium   |
| TC_SME_SESSION_17 | Unauthorized access            | No token       | Call API              | 401 Unauthorized             | Security   | High     |

---

# 5️⃣ Update Session

## API

```
PUT /api/sme/Sessions/{SessionId}
```

## User Story

As a **SME**, I want to **update Session content** so that outdated information can be corrected.

## Test Cases

| Test Case ID      | Scenario                    | Preconditions     | Steps                               | Expected Result              | Type       | Priority |
| ----------------- | --------------------------- | ----------------- | ----------------------------------- | ---------------------------- | ---------- | -------- |
| TC_SME_SESSION_18 | Update session successfully | Session exists    | Send PUT request with updated title | Session updated successfully | Functional | High     |
| TC_SME_SESSION_19 | Update description          | Session exists    | Modify description                  | Description updated          | Functional | Medium   |
| TC_SME_SESSION_20 | Invalid session ID          | Session not found | Send request with invalid ID        | 404 Not Found                | Negative   | Medium   |
| TC_SME_SESSION_21 | Unauthorized update         | No token          | Call API                            | 401 Unauthorized             | Security   | High     |

---

# 6️⃣ Hands-on Management APIs

## API

```
POST /api/sme/Hands-ons
```

## User Story

As a **SME**, I want to **create a Hands-on** so that students can practice concepts learned in Sessions.

## Test Cases

| Test Case ID      | Scenario                     | Preconditions | Steps                             | Expected Result  | Type       | Priority |
| ----------------- | ---------------------------- | ------------- | --------------------------------- | ---------------- | ---------- | -------- |
| TC_SME_HANDSON_01 | Create hands-on successfully | SME logged in | Send POST request with valid data | Hands-on created | Functional | High     |
| TC_SME_HANDSON_02 | Validate deadline format     | SME logged in | Send invalid date format          | Validation error | Validation | Medium   |
| TC_SME_HANDSON_03 | Missing title                | SME logged in | Send request without title        | Error returned   | Validation | High     |
| TC_SME_HANDSON_04 | Unauthorized request         | No token      | Call API                          | 401 Unauthorized | Security   | High     |

---

# 7️⃣ View Hands-on Submissions

## API

```
GET /api/sme/Hands-ons/{Hands-onId}/submissions
```

## User Story

As a **SME**, I want to **view student submissions** so that I can review student work.

## Test Cases

| Test Case ID      | Scenario                      | Preconditions        | Steps    | Expected Result                        | Type       | Priority |
| ----------------- | ----------------------------- | -------------------- | -------- | -------------------------------------- | ---------- | -------- |
| TC_SME_HANDSON_05 | View submissions successfully | Submissions exist    | Call API | Student submissions displayed          | Functional | High     |
| TC_SME_HANDSON_06 | Validate submission fields    | Submissions exist    | Call API | Student name and submission time shown | Validation | Medium   |
| TC_SME_HANDSON_07 | No submissions available      | No submissions exist | Call API | Empty list returned                    | Functional | Low      |
| TC_SME_HANDSON_08 | Unauthorized access           | No token             | Call API | 401 Unauthorized                       | Security   | High     |

---

# 8️⃣ Evaluate Hands-on

## API

```
POST /api/sme/Hands-ons/{Hands-onId}/evaluate
```

## User Story

As a **SME**, I want to **evaluate Hands-ons submitted by students** so that I can give marks and feedback.

## Test Cases

| Test Case ID      | Scenario                         | Preconditions     | Steps                    | Expected Result                | Type       | Priority |
| ----------------- | -------------------------------- | ----------------- | ------------------------ | ------------------------------ | ---------- | -------- |
| TC_SME_HANDSON_09 | Evaluate submission successfully | Submission exists | Send marks and feedback  | Evaluation stored successfully | Functional | High     |
| TC_SME_HANDSON_10 | Validate marks range             | Submission exists | Send marks outside range | Validation error               | Validation | Medium   |
| TC_SME_HANDSON_11 | Missing feedback                 | Submission exists | Submit without feedback  | Validation error               | Validation | Medium   |
| TC_SME_HANDSON_12 | Unauthorized evaluation          | No token          | Call API                 | 401 Unauthorized               | Security   | High     |

---

# 3️⃣ Concept Management APIs

## API

```
GET /api/sme/concepts
```

## User Story

As a **SME**, I want to **view all concepts** so that I can organize Sessions and questions.

## Test Cases

| Test Case ID      | Scenario                   | Preconditions             | Steps                       | Expected Result                         | Type       | Priority |
| ----------------- | -------------------------- | ------------------------- | --------------------------- | --------------------------------------- | ---------- | -------- |
| TC_SME_CONCEPT_01 | View concepts successfully | SME logged in             | Login → Call API            | System returns concept list             | Functional | High     |
| TC_SME_CONCEPT_02 | Validate concept fields    | Concepts exist            | Call API                    | Each concept shows name and description | Validation | High     |
| TC_SME_CONCEPT_03 | No concepts available      | No concept data in system | Call API                    | Empty concept list returned             | Functional | Medium   |
| TC_SME_CONCEPT_04 | Unauthorized access        | No authentication token   | Call API without token      | 401 Unauthorized                        | Security   | High     |
| TC_SME_CONCEPT_05 | Invalid token access       | Expired token             | Call API with invalid token | 403 Forbidden                           | Security   | High     |

---

# Add Concept

## API

```
POST /api/sme/concepts
```

## User Story

As a **SME**, I want to **add a new concept** so that Sessions and questions can be categorized.

## Test Cases

| Test Case ID      | Scenario                     | Preconditions           | Steps                                             | Expected Result                  | Type       | Priority |
| ----------------- | ---------------------------- | ----------------------- | ------------------------------------------------- | -------------------------------- | ---------- | -------- |
| TC_SME_CONCEPT_06 | Add concept successfully     | SME logged in           | Send POST request with valid name and description | Concept created successfully     | Functional | High     |
| TC_SME_CONCEPT_07 | Validate required name field | SME logged in           | Send POST request without name                    | Validation error returned        | Validation | High     |
| TC_SME_CONCEPT_08 | Validate description field   | SME logged in           | Send request without description                  | Validation error returned        | Validation | Medium   |
| TC_SME_CONCEPT_09 | Duplicate concept name       | Concept already exists  | Send request with duplicate name                  | System rejects duplicate concept | Validation | Medium   |
| TC_SME_CONCEPT_10 | Unauthorized request         | No authentication token | Call API                                          | 401 Unauthorized                 | Security   | High     |

---

# View Concept Details

## API

```
GET /api/sme/concepts/{conceptId}
```

## User Story

As a **SME**, I want to **view concept details** so that I can review concept information.

## Test Cases

| Test Case ID      | Scenario                          | Preconditions              | Steps                         | Expected Result                   | Type       | Priority |
| ----------------- | --------------------------------- | -------------------------- | ----------------------------- | --------------------------------- | ---------- | -------- |
| TC_SME_CONCEPT_11 | View concept details successfully | Concept exists             | Call API with valid conceptId | Concept details displayed         | Functional | High     |
| TC_SME_CONCEPT_12 | Validate concept detail fields    | Concept exists             | Call API                      | System shows name and description | Validation | High     |
| TC_SME_CONCEPT_13 | Verify related sessions           | Concept linked to sessions | Call API                      | System shows related sessions     | Functional | Medium   |
| TC_SME_CONCEPT_14 | Invalid concept ID                | Concept does not exist     | Call API with invalid ID      | 404 Not Found                     | Negative   | Medium   |
| TC_SME_CONCEPT_15 | Unauthorized access               | No token                   | Call API                      | 401 Unauthorized                  | Security   | High     |

---

# Update Concept

## API

```
PUT /api/sme/concepts/{conceptId}
```

## User Story

As a **SME**, I want to **update concept information** so that concept details remain accurate.

## Test Cases

| Test Case ID      | Scenario                    | Preconditions     | Steps                              | Expected Result              | Type       | Priority |
| ----------------- | --------------------------- | ----------------- | ---------------------------------- | ---------------------------- | ---------- | -------- |
| TC_SME_CONCEPT_16 | Update concept successfully | Concept exists    | Send PUT request with updated name | Concept updated successfully | Functional | High     |
| TC_SME_CONCEPT_17 | Update description          | Concept exists    | Send request with new description  | Description updated          | Functional | Medium   |
| TC_SME_CONCEPT_18 | Deactivate concept          | Concept exists    | Send request to deactivate concept | Concept marked as inactive   | Functional | Medium   |
| TC_SME_CONCEPT_19 | Invalid concept ID          | Concept not found | Send request with invalid ID       | 404 Not Found                | Negative   | Medium   |
| TC_SME_CONCEPT_20 | Unauthorized update         | No token          | Call API                           | 401 Unauthorized             | Security   | High     |

---

# ⚙️ 4️⃣ Runtime Management APIs

# View Runtime

## API

```
GET /api/sme/runtimes
```

## User Story

As a **SME**, I want to **view all runtime environments** so that I know which programming environments are available.

## Test Cases

| Test Case ID      | Scenario                   | Preconditions         | Steps            | Expected Result                     | Type       | Priority |
| ----------------- | -------------------------- | --------------------- | ---------------- | ----------------------------------- | ---------- | -------- |
| TC_SME_RUNTIME_01 | View runtimes successfully | SME logged in         | Login → Call API | System returns runtime list         | Functional | High     |
| TC_SME_RUNTIME_02 | Validate runtime fields    | Runtimes exist        | Call API         | Language name and version displayed | Validation | High     |
| TC_SME_RUNTIME_03 | No runtime available       | No runtime configured | Call API         | Empty runtime list returned         | Functional | Medium   |
| TC_SME_RUNTIME_04 | Unauthorized access        | No token              | Call API         | 401 Unauthorized                    | Security   | High     |
| TC_SME_RUNTIME_05 | Invalid token              | Expired token         | Call API         | 403 Forbidden                       | Security   | High     |

---

# Add Runtime

## API

```
POST /api/sme/runtimes
```

## User Story

As a **SME**, I want to **add a runtime environment** so that coding questions can be executed in the correct programming language.

## Test Cases

| Test Case ID      | Scenario                 | Preconditions          | Steps                                     | Expected Result                  | Type       | Priority |
| ----------------- | ------------------------ | ---------------------- | ----------------------------------------- | -------------------------------- | ---------- | -------- |
| TC_SME_RUNTIME_06 | Add runtime successfully | SME logged in          | Send POST request with valid runtime data | Runtime created successfully     | Functional | High     |
| TC_SME_RUNTIME_07 | Validate language field  | SME logged in          | Send request without language             | Validation error                 | Validation | High     |
| TC_SME_RUNTIME_08 | Validate version field   | SME logged in          | Send request without version              | Validation error                 | Validation | High     |
| TC_SME_RUNTIME_09 | Duplicate runtime        | Runtime already exists | Send duplicate runtime data               | System rejects duplicate runtime | Validation | Medium   |
| TC_SME_RUNTIME_10 | Unauthorized request     | No token               | Call API                                  | 401 Unauthorized                 | Security   | High     |

---

# View Runtime Details

## API

```
GET /api/sme/runtimes/{runtimeId}
```

## User Story

As a **SME**, I want to **view runtime configuration details** so that I can verify execution settings.

## Test Cases

| Test Case ID      | Scenario                          | Preconditions     | Steps                   | Expected Result                          | Type       | Priority |
| ----------------- | --------------------------------- | ----------------- | ----------------------- | ---------------------------------------- | ---------- | -------- |
| TC_SME_RUNTIME_11 | View runtime details successfully | Runtime exists    | Call API with runtimeId | Runtime details displayed                | Functional | High     |
| TC_SME_RUNTIME_12 | Validate runtime fields           | Runtime exists    | Call API                | Language, version and compiler displayed | Validation | High     |
| TC_SME_RUNTIME_13 | Invalid runtime ID                | Runtime not found | Call API                | 404 Not Found                            | Negative   | Medium   |
| TC_SME_RUNTIME_14 | Unauthorized access               | No token          | Call API                | 401 Unauthorized                         | Security   | High     |

---

# Update Runtime

## API

```
PUT /api/sme/runtimes/{runtimeId}
```

## User Story

As a **SME**, I want to **update runtime configuration** so that outdated versions can be replaced.

## Test Cases

| Test Case ID      | Scenario                    | Preconditions          | Steps                                 | Expected Result              | Type       | Priority |
| ----------------- | --------------------------- | ---------------------- | ------------------------------------- | ---------------------------- | ---------- | -------- |
| TC_SME_RUNTIME_15 | Update runtime successfully | Runtime exists         | Send PUT request with updated version | Runtime updated successfully | Functional | High     |
| TC_SME_RUNTIME_16 | Update compiler command     | Runtime exists         | Send request with updated compiler    | Compiler updated             | Functional | Medium   |
| TC_SME_RUNTIME_17 | Invalid runtime ID          | Runtime does not exist | Send request with invalid ID          | 404 Not Found                | Negative   | Medium   |
| TC_SME_RUNTIME_18 | Unauthorized update         | No token               | Call API                              | 401 Unauthorized             | Security   | High     |

---

# 5️⃣ Analytics APIs

# View Completed Tests

## API

```
GET /api/sme/analytics/completed-tests
```

## User Story

As a **SME**, I want to **view completed tests** so that I can analyze test results.

## Test Cases

| Test Case ID        | Scenario                          | Preconditions                | Steps            | Expected Result                           | Type       | Priority |
| ------------------- | --------------------------------- | ---------------------------- | ---------------- | ----------------------------------------- | ---------- | -------- |
| TC_SME_ANALYTICS_01 | View completed tests successfully | SME logged in                | Login → Call API | System returns list of completed tests    | Functional | High     |
| TC_SME_ANALYTICS_02 | Validate test fields              | Completed tests exist        | Call API         | Each test shows title and completion date | Validation | High     |
| TC_SME_ANALYTICS_03 | No completed tests                | No completed tests available | Call API         | Empty list returned                       | Functional | Medium   |
| TC_SME_ANALYTICS_04 | Unauthorized access               | No login token               | Call API         | 401 Unauthorized                          | Security   | High     |

---

# View Appeared Students

## API

```
GET /api/sme/analytics/tests/{testId}/appeared-students
```

## User Story

As a **SME**, I want to **view students who appeared for a test** so that I can analyze participation.

## Test Cases

| Test Case ID        | Scenario                            | Preconditions           | Steps                | Expected Result                  | Type       | Priority |
| ------------------- | ----------------------------------- | ----------------------- | -------------------- | -------------------------------- | ---------- | -------- |
| TC_SME_ANALYTICS_05 | View appeared students successfully | Test exists             | Call API with testId | List of students returned        | Functional | High     |
| TC_SME_ANALYTICS_06 | Validate student details            | Students attempted test | Call API             | Student name and score displayed | Validation | High     |
| TC_SME_ANALYTICS_07 | No students appeared                | No attempts recorded    | Call API             | Empty list returned              | Functional | Medium   |
| TC_SME_ANALYTICS_08 | Invalid test ID                     | Test does not exist     | Call API             | 404 Not Found                    | Negative   | Medium   |
| TC_SME_ANALYTICS_09 | Unauthorized access                 | No token                | Call API             | 401 Unauthorized                 | Security   | High     |

---

# View Pass Students

## API

```
GET /api/sme/analytics/tests/{testId}/passed-students
```

## User Story

As a **SME**, I want to **view students who passed the test** so that I can identify successful candidates.

## Test Cases

| Test Case ID        | Scenario               | Preconditions                | Steps    | Expected Result                          | Type       | Priority |
| ------------------- | ---------------------- | ---------------------------- | -------- | ---------------------------------------- | ---------- | -------- |
| TC_SME_ANALYTICS_10 | View passed students   | Test exists                  | Call API | Students above passing marks returned    | Functional | High     |
| TC_SME_ANALYTICS_11 | Validate pass criteria | Passing score configured     | Call API | Only students above pass marks displayed | Validation | High     |
| TC_SME_ANALYTICS_12 | No students passed     | All students below pass mark | Call API | Empty list returned                      | Functional | Medium   |
| TC_SME_ANALYTICS_13 | Unauthorized request   | No token                     | Call API | 401 Unauthorized                         | Security   | High     |

---

# View Failed Students

## API

```
GET /api/sme/analytics/tests/{testId}/failed-students
```

## User Story

As a **SME**, I want to **view students who failed the test** so that I can identify students who need improvement.

## Test Cases

| Test Case ID        | Scenario                  | Preconditions            | Steps    | Expected Result                       | Type       | Priority |
| ------------------- | ------------------------- | ------------------------ | -------- | ------------------------------------- | ---------- | -------- |
| TC_SME_ANALYTICS_14 | View failed students      | Test exists              | Call API | Students below passing score returned | Functional | High     |
| TC_SME_ANALYTICS_15 | Validate failure criteria | Passing score configured | Call API | Only failed students displayed        | Validation | High     |
| TC_SME_ANALYTICS_16 | No failed students        | All students passed      | Call API | Empty list returned                   | Functional | Medium   |
| TC_SME_ANALYTICS_17 | Invalid test ID           | Test not found           | Call API | 404 Not Found                         | Negative   | Medium   |

---

# View Average Score

## API

```
GET /api/sme/analytics/tests/{testId}/average-score
```

## User Story

As a **SME**, I want to **view the average score of a test** so that I can evaluate overall student performance.

## Test Cases

| Test Case ID        | Scenario                     | Preconditions                     | Steps    | Expected Result                  | Type       | Priority |
| ------------------- | ---------------------------- | --------------------------------- | -------- | -------------------------------- | ---------- | -------- |
| TC_SME_ANALYTICS_18 | View average score           | Test results available            | Call API | Average score displayed          | Functional | High     |
| TC_SME_ANALYTICS_19 | Validate average calculation | Multiple student scores available | Call API | Correct average calculated       | Validation | High     |
| TC_SME_ANALYTICS_20 | No student attempts          | No attempts recorded              | Call API | Average score shown as 0 or null | Functional | Medium   |
| TC_SME_ANALYTICS_21 | Unauthorized access          | No token                          | Call API | 401 Unauthorized                 | Security   | High     |

---

# Analyze Student Performance

## API

```
GET /api/sme/analytics/assessment/{assessmentId}/student-performance/{studentId}
```

## User Story

As a **SME**, I want to **analyze individual student performance** so that I can understand strengths and weaknesses.

## Test Cases

| Test Case ID        | Scenario                      | Preconditions           | Steps    | Expected Result                           | Type       | Priority |
| ------------------- | ----------------------------- | ----------------------- | -------- | ----------------------------------------- | ---------- | -------- |
| TC_SME_ANALYTICS_22 | View student performance      | Assessment exists       | Call API | Student score displayed                   | Functional | High     |
| TC_SME_ANALYTICS_23 | Validate answer analysis      | Student attempted test  | Call API | Correct vs incorrect answers displayed    | Validation | High     |
| TC_SME_ANALYTICS_24 | Above/below average indicator | Average score available | Call API | Student performance compared with average | Functional | Medium   |
| TC_SME_ANALYTICS_25 | Invalid student ID            | Student does not exist  | Call API | 404 Not Found                             | Negative   | Medium   |

---

# Analyze Question Difficulty

## API

```
GET /api/sme/analytics/tests/{testId}/question-difficulty
```

## User Story

As a **SME**, I want to **analyze question difficulty** so that I can improve the quality of assessments.

## Test Cases

| Test Case ID        | Scenario                        | Preconditions              | Steps    | Expected Result               | Type       | Priority |
| ------------------- | ------------------------------- | -------------------------- | -------- | ----------------------------- | ---------- | -------- |
| TC_SME_ANALYTICS_26 | View question difficulty        | Test exists                | Call API | Difficulty metrics displayed  | Functional | High     |
| TC_SME_ANALYTICS_27 | Validate difficulty calculation | Multiple attempts recorded | Call API | Correct percentage calculated | Validation | High     |
| TC_SME_ANALYTICS_28 | No responses recorded           | No attempts                | Call API | Difficulty shown as 0 or null | Functional | Medium   |

---

# View Score Distribution

## API

```
GET /api/sme/analytics/tests/{testId}/score-distribution
```

## User Story

As a **SME**, I want to **view score distribution** so that I can understand score patterns.

## Test Cases

| Test Case ID        | Scenario                         | Preconditions         | Steps    | Expected Result                      | Type       | Priority |
| ------------------- | -------------------------------- | --------------------- | -------- | ------------------------------------ | ---------- | -------- |
| TC_SME_ANALYTICS_29 | View score distribution          | Test results exist    | Call API | Score ranges displayed               | Functional | High     |
| TC_SME_ANALYTICS_30 | Validate student count per range | Student results exist | Call API | Correct number of students per range | Validation | High     |
| TC_SME_ANALYTICS_31 | No attempts recorded             | No students attempted | Call API | Empty distribution returned          | Functional | Medium   |

---

# 🧪 6️⃣ Test Management APIs

# View Test History

## API

```
GET /api/sme/tests/history
```

## User Story

As a **SME**, I want to **view test history** so that I can manage previously created tests.

## Test Cases

| Test Case ID   | Scenario             | Preconditions    | Steps            | Expected Result                       | Type       | Priority |
| -------------- | -------------------- | ---------------- | ---------------- | ------------------------------------- | ---------- | -------- |
| TC_SME_TEST_01 | View test history    | SME logged in    | Login → Call API | List of tests created by SME returned | Functional | High     |
| TC_SME_TEST_02 | Validate test fields | Tests exist      | Call API         | Title and date displayed              | Validation | High     |
| TC_SME_TEST_03 | No test history      | No tests created | Call API         | Empty list returned                   | Functional | Medium   |
| TC_SME_TEST_04 | Unauthorized access  | No token         | Call API         | 401 Unauthorized                      | Security   | High     |

---

# Create Test

## API

```
POST /api/sme/tests
```

## User Story

As a **SME**, I want to **create a test** so that student knowledge can be evaluated.

## Test Cases

| Test Case ID   | Scenario                 | Preconditions | Steps                                              | Expected Result           | Type       | Priority |
| -------------- | ------------------------ | ------------- | -------------------------------------------------- | ------------------------- | ---------- | -------- |
| TC_SME_TEST_05 | Create test successfully | SME logged in | Send POST request with title, duration, difficulty | Test created successfully | Functional | High     |
| TC_SME_TEST_06 | Validate required fields | SME logged in | Send request without title                         | Validation error returned | Validation | High     |
| TC_SME_TEST_07 | Validate duration field  | SME logged in | Send request with invalid duration                 | Validation error          | Validation | Medium   |
| TC_SME_TEST_08 | Unauthorized request     | No token      | Call API                                           | 401 Unauthorized          | Security   | High     |

---

# View Test Details

## API

```
GET /api/sme/tests/{testId}
```

## User Story

As a **SME**, I want to **view test details** so that I can review the configuration.

## Test Cases

| Test Case ID   | Scenario             | Preconditions       | Steps    | Expected Result                      | Type       | Priority |
| -------------- | -------------------- | ------------------- | -------- | ------------------------------------ | ---------- | -------- |
| TC_SME_TEST_09 | View test details    | Test exists         | Call API | Test details displayed               | Functional | High     |
| TC_SME_TEST_10 | Validate test fields | Test exists         | Call API | Title, duration, questions displayed | Validation | High     |
| TC_SME_TEST_11 | Invalid test ID      | Test does not exist | Call API | 404 Not Found                        | Negative   | Medium   |

---

# Update Test

## API

```
PUT /api/sme/tests/{testId}
```

## User Story

As a **SME**, I want to **update a test** so that I can modify test configuration.

## Test Cases

| Test Case ID   | Scenario                 | Preconditions  | Steps                                  | Expected Result           | Type       | Priority |
| -------------- | ------------------------ | -------------- | -------------------------------------- | ------------------------- | ---------- | -------- |
| TC_SME_TEST_12 | Update test successfully | Test exists    | Send PUT request with updated duration | Test updated successfully | Functional | High     |
| TC_SME_TEST_13 | Update questions         | Test exists    | Send updated question list             | Questions updated         | Functional | High     |
| TC_SME_TEST_14 | Invalid test ID          | Test not found | Send request with invalid ID           | 404 Not Found             | Negative   | Medium   |
| TC_SME_TEST_15 | Unauthorized update      | No token       | Call API                               | 401 Unauthorized          | Security   | High     |

---

# 7️⃣ Question Bank APIs

# View Questions by Type

## API

```
GET /api/sme/questions?type={type}
```

## User Story

As an **SME**, I want to **view questions by type** so that I can reuse them in tests.

## Test Cases

| Test Case ID | Scenario                            | Preconditions                        | Steps                            | Expected Result                               | Type       | Priority |
| ------------ | ----------------------------------- | ------------------------------------ | -------------------------------- | --------------------------------------------- | ---------- | -------- |
| TC_SME_QB_01 | View questions by type successfully | SME logged in                        | Login → Call API with type=MCQ   | System returns MCQ questions                  | Functional | High     |
| TC_SME_QB_02 | Validate filtering by question type | Questions exist                      | Call API with type=Code Snippets | Only Code Snippet questions returned          | Validation | High     |
| TC_SME_QB_03 | Invalid question type               | SME logged in                        | Call API with invalid type       | System returns validation error or empty list | Negative   | Medium   |
| TC_SME_QB_04 | No questions available for type     | No questions exist for selected type | Call API                         | Empty list returned                           | Functional | Medium   |
| TC_SME_QB_05 | Unauthorized access                 | No token                             | Call API                         | 401 Unauthorized                              | Security   | High     |

---

# Add Question

## API

```
POST /api/sme/questions
```

## User Story

As an **SME**, I want to **add new questions as Draft** so that mentor can review them before they are used in tests.

## Test Cases

| Test Case ID | Scenario                                   | Preconditions         | Steps                                      | Expected Result                   | Type       | Priority |
| ------------ | ------------------------------------------ | --------------------- | ------------------------------------------ | --------------------------------- | ---------- | -------- |
| TC_SME_QB_06 | Create question successfully               | SME logged in         | Send POST request with valid question data | Question saved successfully       | Functional | High     |
| TC_SME_QB_07 | Verify default status is Draft             | Question created      | Call API                                   | Status automatically set to Draft | Validation | High     |
| TC_SME_QB_08 | Validate required question field           | SME logged in         | Send request without question text         | Validation error returned         | Validation | High     |
| TC_SME_QB_09 | Validate options for MCQ                   | SME logged in         | Send MCQ request without options           | Validation error                  | Validation | Medium   |
| TC_SME_QB_10 | Verify draft question not visible in tests | Draft question exists | Try selecting in test creation             | Draft question not available      | Functional | High     |
| TC_SME_QB_11 | Unauthorized request                       | No token              | Call API                                   | 401 Unauthorized                  | Security   | High     |

---

# Submit Question for Review

## API

```
POST /api/sme/questions/{questionId}/submit
```

## User Story

As an **SME**, I want to **submit a question for mentor review** so that the mentor can approve it before it is used in tests.

## Test Cases

| Test Case ID | Scenario                                      | Preconditions           | Steps                     | Expected Result                            | Type       | Priority |
| ------------ | --------------------------------------------- | ----------------------- | ------------------------- | ------------------------------------------ | ---------- | -------- |
| TC_SME_QB_12 | Submit question for review                    | Draft question exists   | Call API with questionId  | Status changes to Pending Review           | Functional | High     |
| TC_SME_QB_13 | Validate status transition                    | Draft question exists   | Submit question           | Status changes from Draft → Pending Review | Validation | High     |
| TC_SME_QB_14 | Verify question appears in mentor review list | Question submitted      | Mentor opens review panel | Question visible in review list            | Functional | High     |
| TC_SME_QB_15 | Prevent SME approval                          | Question submitted      | SME attempts approval     | System denies approval action              | Security   | Medium   |
| TC_SME_QB_16 | Invalid question ID                           | Question does not exist | Call API                  | 404 Not Found                              | Negative   | Medium   |

---

# View Question Details

## API

```
GET /api/sme/questions/{questionId}
```

## User Story

As an **SME**, I want to **view detailed question information** so that I can review question content.

## Test Cases

| Test Case ID | Scenario                 | Preconditions           | Steps                    | Expected Result                  | Type       | Priority |
| ------------ | ------------------------ | ----------------------- | ------------------------ | -------------------------------- | ---------- | -------- |
| TC_SME_QB_17 | View question details    | Question exists         | Call API with questionId | Question details displayed       | Functional | High     |
| TC_SME_QB_18 | Validate question fields | Question exists         | Call API                 | Question text and type displayed | Validation | High     |
| TC_SME_QB_19 | Invalid question ID      | Question does not exist | Call API                 | 404 Not Found                    | Negative   | Medium   |
| TC_SME_QB_20 | Unauthorized access      | No token                | Call API                 | 401 Unauthorized                 | Security   | High     |

---

# Update Question

## API

```
PUT /api/sme/questions/{questionId}
```

## User Story

As an **SME**, I want to **modify an existing question** so that incorrect or outdated content can be corrected.

## Test Cases

| Test Case ID | Scenario                     | Preconditions           | Steps                                       | Expected Result               | Type       | Priority |
| ------------ | ---------------------------- | ----------------------- | ------------------------------------------- | ----------------------------- | ---------- | -------- |
| TC_SME_QB_21 | Update question successfully | Question exists         | Send PUT request with updated question text | Question updated successfully | Functional | High     |
| TC_SME_QB_22 | Update MCQ options           | Question exists         | Modify options in request                   | Options updated successfully  | Functional | High     |
| TC_SME_QB_23 | Invalid question ID          | Question does not exist | Send request                                | 404 Not Found                 | Negative   | Medium   |
| TC_SME_QB_24 | Unauthorized update          | No token                | Call API                                    | 401 Unauthorized              | Security   | High     |

---

# View Questions by Status

## API

```
GET /api/sme/questions?status={status}
```

## User Story

As an **SME**, I want to **filter questions by status** so that I can manage Draft, Approved, Confused, and Deactivated questions.

## Test Cases

| Test Case ID | Scenario                            | Preconditions            | Steps                         | Expected Result             | Type       | Priority |
| ------------ | ----------------------------------- | ------------------------ | ----------------------------- | --------------------------- | ---------- | -------- |
| TC_SME_QB_25 | Filter questions by Draft status    | Draft questions exist    | Call API with status=DRAFT    | Draft questions returned    | Functional | High     |
| TC_SME_QB_26 | Filter questions by Approved status | Approved questions exist | Call API with status=APPROVED | Approved questions returned | Functional | High     |
| TC_SME_QB_27 | Invalid status filter               | SME logged in            | Call API with invalid status  | Validation error returned   | Negative   | Medium   |
| TC_SME_QB_28 | No questions for selected status    | No questions available   | Call API                      | Empty result returned       | Functional | Medium   |
| TC_SME_QB_29 | Unauthorized access                 | No token                 | Call API                      | 401 Unauthorized            | Security   | High     |

---

# 🌐 8️⃣ Language Management APIs

# View Languages

## API

```
GET /api/sme/languages
```

## User Story

As an **SME**, I want to **see programming languages assigned to me** so that I know which languages I can create coding questions for.

## Test Cases

| Test Case ID   | Scenario                    | Preconditions        | Steps            | Expected Result                                   | Type       | Priority |
| -------------- | --------------------------- | -------------------- | ---------------- | ------------------------------------------------- | ---------- | -------- |
| TC_SME_LANG_01 | View languages successfully | SME logged in        | Login → Call API | Assigned languages returned                       | Functional | High     |
| TC_SME_LANG_02 | Validate language details   | Languages assigned   | Call API         | Language name and runtime compatibility displayed | Validation | High     |
| TC_SME_LANG_03 | No languages assigned       | SME has no languages | Call API         | Empty list returned                               | Functional | Medium   |
| TC_SME_LANG_04 | Unauthorized access         | No token             | Call API         | 401 Unauthorized                                  | Security   | High     |
| TC_SME_LANG_05 | Invalid token               | Expired token        | Call API         | 403 Forbidden                                     | Security   | High     |

---
