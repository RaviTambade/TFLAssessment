
## API endpoints in this project

The backend exposes endpoints from 4 controllers in `backend/Controllers`:

- `AssessmentController`
- `QuestionsController`
- `TestsController`
- `UsersController`


### `AssessmentController` (`api/assessment`)

| HTTP | Route | Purpose | Payload / Notes |
|---|---|---|---|
| GET | `api/assessment/user/{userId}` | Get upcoming assessments for a user | Returns list of `UpcomingAssessmentDto` |
| GET | `api/assessment/all` | Get all assessments | Returns list of `AllAssessmentDto` |
| GET | `api/assessment/tests` | Get all tests | Returns list of `TestDto` |
| GET | `api/assessment/students` | Get all students | Returns list of `StudentDto` |
| POST | `api/assessment/assigned` | Assign an assessment | Body: `AssignAssessmentDto` |
| GET | `api/assessment/questions/{assessmentId}` | Get questions for a given assessment | Returns list of `AssessmentQuestionDto` |
| POST | `api/assessment/submit` | Submit assessment answers | Body: `AssessmentAnswersDto` |
| GET | `api/assessment/{studentId}/{assessmentId}` | Get assessment result/report for a student | Returns `AssessmentReportDto` |

---

### `QuestionsController` (`api/questions`)

| HTTP | Route | Purpose | Notes |
|---|---|---|---|
| GET | `api/questions/{questionId}` | Get question by ID | Returns question entity |
| GET | `api/questions/tests/{testId}` | Get questions by test ID | Uses `TestQuestions` join |
| GET | `api/questions/concepts/{conceptId}` | Get questions by concept ID | Joins `QuestionFrameworkConcepts` → `FrameworkConcepts` |
| GET | `api/questions/frameworks/{frameworkId}` | Get questions by framework ID | Joins `QuestionFrameworkConcepts` |
| GET | `api/questions/languages/{languageId}` | Get questions by language ID | Joins `LearningResources` |

---

### `TestsController` (`api/tests`)

| HTTP | Route | Purpose | Notes |
|---|---|---|---|
| GET | `api/tests/sme/{smeId}` | Get tests created by SME | Uses `ITestService.GetAllTestsBySMEIdAsync` |
| GET | `api/tests/language/{languageId}` | Get tests by language | Uses framework/language relationships |
| GET | `api/tests/assessment/{assessmentId}` | Get tests by assessment ID | Joins `Assessments` → `Tests` |
| GET | `api/tests/framework/{frameworkId}` | Get tests by framework ID | Uses `QuestionFrameworkConcepts` |
| GET | `api/tests/runtime/{runtimeId}` | Get tests by runtime ID | Uses `SmeRuntimes` |
| GET | `api/tests/details/{testId}` | Get test details | Includes questions and SME info |

---

### `UsersController` (`api/users`)

| HTTP | Route | Purpose | Notes |
|---|---|---|---|
| GET | `api/users/personal/{userId}` | Get personal details for user | From `PersonalInformations` |
| GET | `api/users/professional/{userId}` | Get professional details for user | From `ProfessionalInformations` |
| GET | `api/users/academic/{userId}` | Get academic details for user | From `AcademicInformations` |
| GET | `api/users/fullname/{userId}` | Get full name for user | Returns full-name DTO |
| GET | `api/users/role/{userId}` | Get roles for user | Returns role list via `UserRoles` |

---

### Notes

- Base route template is `api/[controller]`.
- `AssessmentController` and `TestsController` use service classes via dependency injection.
- `QuestionsController` directly uses `AppDbContext`.
- `UsersController` uses `IUserService` through DI.

