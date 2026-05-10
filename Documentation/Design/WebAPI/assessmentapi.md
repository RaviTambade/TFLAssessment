# Introduction: Assessment Web API

The **Assessment Web API** provides a set of RESTful endpoints designed to manage assessments and their associated questions within the platform. Assessments play a central role in evaluating a learner’s understanding of specific skills, concepts, and technologies defined in the system.

Through these APIs, clients such as **student portals, mentor dashboards, and administrative tools** can create, retrieve, update, and delete assessments as well as manage the questions that belong to each assessment.

The API follows standard **REST principles** where:

* **Resources** are represented using clear URL paths.
* **HTTP methods** such as `GET`, `POST`, `PUT`, and `DELETE` represent operations on those resources.
* **Nested resources** are used to represent relationships between entities, such as questions belonging to a specific assessment.

For example:

* `/assessments` represents the collection of all assessments.
* `/assessments/{assessmentId}` represents a specific assessment.
* `/assessments/{assessmentId}/questions` represents the questions associated with that assessment.

These endpoints enable the system to support key assessment management activities such as:

* Creating and maintaining assessments
* Managing questions within assessments
* Retrieving assessment structures for test delivery
* Updating assessment content
* Removing obsolete assessments or questions

By organizing endpoints in this way, the API ensures **clear resource hierarchy, maintainability, and scalability**, making it easy for client applications to interact with the assessment management system.

The following section describes the available endpoints for managing assessments and their related questions.

##  Assessment-related Web API endpoints:

1. **Retrieve List of Assessments**:
   - URL: `/assessments`
   - Method: `GET`
   - Description: Retrieves a list of all assessments available.

2. **Retrieve Details of a Specific Assessment**:
   - URL: `/assessments/{assessmentId}`
   - Method: `GET`
   - Description: Retrieves details of the assessment identified by `{assessmentId}`.

3. **Create a New Assessment**:
   - URL: `/assessments`
   - Method: `POST`
   - Description: Creates a new assessment with the provided data in the request body.

4. **Update an Existing Assessment**:
   - URL: `/assessments/{assessmentId}`
   - Method: `PUT`
   - Description: Updates the assessment identified by `{assessmentId}` with the provided data in the request body.

5. **Delete an Assessment**:
   - URL: `/assessments/{assessmentId}`
   - Method: `DELETE`
   - Description: Deletes the assessment identified by `{assessmentId}`.

6. **Retrieve List of Questions for an Assessment** (Nested Resource):
   - URL: `/assessments/{assessmentId}/questions`
   - Method: `GET`
   - Description: Retrieves a list of questions associated with the assessment identified by `{assessmentId}`.

7. **Retrieve Details of a Specific Question** (Nested Resource):
   - URL: `/assessments/{assessmentId}/questions/{questionId}`
   - Method: `GET`
   - Description: Retrieves details of the question identified by `{questionId}` within the assessment identified by `{assessmentId}`.

8. **Create a New Question** (Nested Resource):
   - URL: `/assessments/{assessmentId}/questions`
   - Method: `POST`
   - Description: Creates a new question for the assessment identified by `{assessmentId}` with the provided data in the request body.

9. **Update an Existing Question** (Nested Resource):
   - URL: `/assessments/{assessmentId}/questions/{questionId}`
   - Method: `PUT`
   - Description: Updates the question identified by `{questionId}` within the assessment identified by `{assessmentId}` with the provided data in the request body.

10. **Delete a Question** (Nested Resource):
    - URL: `/assessments/{assessmentId}/questions/{questionId}`
    - Method: `DELETE`
    - Description: Deletes the question identified by `{questionId}` within the assessment identified by `{assessmentId}`.

These endpoints represent a RESTful API structure for managing assessments and related entities, including CRUD operations on assessments and questions, as well as retrieving details of assessments and their associated questions.