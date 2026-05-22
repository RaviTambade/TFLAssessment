# User Story

> “As a Student, I want to write detailed solutions for technical problems so that mentors can evaluate my analytical thinking.”

 
# Step 1: Functional Understanding

This feature allows students to:

* view descriptive technical questions
* write analytical answers
* explain architecture/design thinking
* submit solutions
* receive mentor evaluation
* improve technical communication

Your backend storage approach:

```text id="7vdjlwm"
React Frontend
      ↓
REST API
      ↓
JSON File Storage
```

This is a good lightweight MVP architecture before moving to MySQL.

 

# Step 2: Feature Workflow

```text id="jlwm01"
Student Login
      ↓
View Assessment List
      ↓
Open Technical Question
      ↓
Write Detailed Answer
      ↓
Submit Solution
      ↓
Store in JSON File
      ↓
Mentor Reviews Submission
      ↓
Feedback & Evaluation
```

 

# Step 3: JSON File Structure

Since backend uses JSON files, create:

 

# assessments.json

Stores technical assessments.

```json id="jlwm12"
[
  {
    "assessmentId": 1,
    "title": "Microservices Architecture",
    "description": "Explain scalability design",
    "durationInMinutes": 60,
    "totalMarks": 50
  }
]
```

  

# questions.json

Stores descriptive technical questions.

```json id="jlwm24"
[
  {
    "questionId": 1,
    "assessmentId": 1,
    "questionText": "Explain Monolithic vs Microservices Architecture",
    "marks": 20
  }
]
```

  

# submissions.json

Stores student answers.

```json id="jlwm33"
[
  {
    "submissionId": 1,
    "assessmentId": 1,
    "questionId": 1,
    "studentId": 101,
    "answerText": "Microservices architecture divides applications...",
    "submittedAt": "2026-05-22T10:00:00",
    "status": "SUBMITTED",
    "mentorFeedback": "",
    "marksObtained": 0
  }
]
```

 

# Step 4: REST API Design

 

# Student APIs

 

# 1. Get Assessments

```http id="jlwm48"
GET /api/assessments
```


# Response

```json id="jlwm57"
[
  {
    "assessmentId": 1,
    "title": "Microservices Architecture",
    "totalMarks": 50
  }
]
```

---

# 2. Get Questions by Assessment

```http id="jlwm69"
GET /api/assessments/{assessmentId}/questions
```



# Response

```json id="jlwm78"
[
  {
    "questionId": 1,
    "questionText": "Explain Monolithic vs Microservices Architecture",
    "marks": 20
  }
]
```


# 3. Submit Descriptive Answer

```http id="jlwm83"
POST /api/submissions
```


# Request Body

```json id="jlwm91"
{
  "assessmentId": 1,
  "questionId": 1,
  "studentId": 101,
  "answerText": "Microservices architecture divides applications into independent services..."
}
```


# 4. Get Student Submissions

```http id="jlwm95"
GET /api/students/{studentId}/submissions
```



# Mentor APIs



# 5. Get All Submissions

```http id="jlwm03"
GET /api/submissions
```


# 6. Evaluate Submission

```http id="jlwm15"
PUT /api/submissions/{submissionId}/evaluate
```


# Request Body

```json id="jlwm22"
{
  "marksObtained": 18,
  "mentorFeedback": "Good analytical explanation with scalability examples"
}
```


# Step 5: Backend Folder Structure

Example using:

* Node.js
* Express.js
* JSON file storage

```text id="jlwm36"
backend/
│
├── data/
│     ├── assessments.json
│     ├── questions.json
│     └── submissions.json
│
├── routes/
│     ├── assessments.routes.js
│     └── submissions.routes.js
│
├── controllers/
│     ├── assessments.controller.js
│     └── submissions.controller.js
│
├── services/
│     └── jsonFile.service.js
│
└── server.js
```


# Step 6: Express REST API Example


# server.js

```javascript id="jlwm44"
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const assessmentRoutes = require("./routes/assessments.routes");

app.use("/api", assessmentRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
```


# assessments.routes.js

```javascript id="jlwm53"
const express = require("express");
const router = express.Router();

const controller = require("../controllers/assessments.controller");

router.get("/assessments", controller.getAssessments);

router.get(
    "/assessments/:assessmentId/questions",
    controller.getQuestions
);

router.post(
    "/submissions",
    controller.submitAnswer
);

module.exports = router;
```


# assessments.controller.js

```javascript id="jlwm64"
const fs = require("fs");

exports.getAssessments = (req, res) => {

    const data =
        JSON.parse(
            fs.readFileSync("./data/assessments.json")
        );

    res.json(data);
};

exports.getQuestions = (req, res) => {

    const questions =
        JSON.parse(
            fs.readFileSync("./data/questions.json")
        );

    const assessmentId =
        parseInt(req.params.assessmentId);

    const filtered =
        questions.filter(
            q => q.assessmentId === assessmentId
        );

    res.json(filtered);
};

exports.submitAnswer = (req, res) => {

    const submissions =
        JSON.parse(
            fs.readFileSync("./data/submissions.json")
        );

    const newSubmission = {

        submissionId: submissions.length + 1,

        ...req.body,

        submittedAt: new Date(),

        status: "SUBMITTED"
    };

    submissions.push(newSubmission);

    fs.writeFileSync(
        "./data/submissions.json",
        JSON.stringify(submissions, null, 2)
    );

    res.json({
        message: "Submission successful"
    });
};
```


# Step 7: React Frontend Structure

```text id="jlwm75"
src/
│
├── pages/
│     ├── AssessmentListPage.jsx
│     ├── AssessmentQuestionsPage.jsx
│     └── StudentSubmissionsPage.jsx
│
├── components/
│     ├── AssessmentCard.jsx
│     ├── QuestionEditor.jsx
│     └── SubmissionForm.jsx
│
├── services/
│     └── assessmentService.js
```


# Step 8: React API Service



# assessmentService.js

```javascript id="jlwm84"
const API_URL = "http://localhost:5000/api";

export async function getAssessments() {

    const response =
        await fetch(`${API_URL}/assessments`);

    return await response.json();
}

export async function getQuestions(assessmentId) {

    const response =
        await fetch(
            `${API_URL}/assessments/${assessmentId}/questions`
        );

    return await response.json();
}

export async function submitAnswer(data) {

    const response =
        await fetch(`${API_URL}/submissions`, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)
        });

    return await response.json();
}
```


# Step 9: React Assessment List Page


# AssessmentListPage.jsx

```javascript id="jlwm94"
import { useEffect, useState } from "react";

import { getAssessments }
from "../services/assessmentService";

function AssessmentListPage() {

    const [assessments, setAssessments]
        = useState([]);

    useEffect(() => {

        loadAssessments();

    }, []);

    async function loadAssessments() {

        const data =
            await getAssessments();

        setAssessments(data);
    }

    return (

        <div>

            <h2>
                Technical Assessments
            </h2>

            {
                assessments.map(a => (

                    <div key={a.assessmentId}>

                        <h3>{a.title}</h3>

                        <p>
                            Total Marks:
                            {a.totalMarks}
                        </p>

                    </div>
                ))
            }

        </div>
    );
}

export default AssessmentListPage;
```

# Step 10: React Question Editor


# QuestionEditor.jsx

```javascript id="jlwm05"
import { useState } from "react";

function QuestionEditor({question, onSubmit}) {

    const [answerText, setAnswerText]
        = useState("");

    const handleSubmit = () => {

        onSubmit({

            questionId: question.questionId,

            answerText
        });
    };

    return (

        <div>

            <h3>
                {question.questionText}
            </h3>

            <textarea

                rows="10"

                cols="80"

                value={answerText}

                onChange={(e) =>
                    setAnswerText(e.target.value)
                }
            />

            <br />

            <button onClick={handleSubmit}>
                Submit Answer
            </button>

        </div>
    );
}

export default QuestionEditor;
```


# Step 11: Future Database Migration

Later migrate from JSON to:

```text id="jlwm16"
JSON Files
    ↓
MySQL
    ↓
MongoDB
    ↓
Cloud Storage
```

# Step 12: Future AI Features

```text id="jlwm27"
AI Evaluation
Grammar Analysis
Technical Keyword Detection
Architecture Quality Scoring
Plagiarism Detection
Skill Gap Analysis
Smart Feedback Generation
Interview Readiness Prediction
```

# Industry-Level Vision

```text id="jlwm38"
Descriptive Assessments
        +
Analytical Thinking
        +
Technical Communication
        +
Project Reasoning
        +
Architecture Thinking
        =
Industry Ready Software Engineer
```
