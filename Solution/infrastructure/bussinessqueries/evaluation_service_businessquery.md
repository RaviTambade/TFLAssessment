# Evaluation Service – Business Query Playbook
This database is not just storing answers.

This is your:

* Placement Readiness Engine
* Performance Analytics System
* Skill Gap Detector
* Mentor Review Dashboard
* AI-based Improvement Advisor


# 🎯 1️⃣ Candidate Answer Tracking


## 🔹 1. Get All Answers Submitted for an Assessment

### Business Question:

> How many students attempted Assessment #101?

```sql
SELECT candidate_id, question_id, submitted_at
FROM candidate_answers
WHERE assessment_id = 101
ORDER BY submitted_at DESC;
```

**Used In:**

* Assessment participation report
* Admin monitoring

## 🔹 2. Get All Answers of a Candidate

### Business Question:

> Show full answer history of candidate Ravi.

```sql
SELECT assessment_id, question_id, submitted_at
FROM candidate_answers
WHERE candidate_id = 10
ORDER BY submitted_at DESC;
```

**Used In:**

* Candidate profile page
* Growth tracking

## 🔹 3. Detect Multiple Submissions Per Question

```sql
SELECT candidate_id, question_id, COUNT(*) AS submission_count
FROM candidate_answers
GROUP BY candidate_id, question_id
HAVING COUNT(*) > 1;
```

**Used In:**

* Attempt policy enforcement
* Anti-cheating logic

# 🤖 2️⃣ Auto Grading Intelligence


## 🔹 4. Get Grading Results for an Assessment

```sql
SELECT ca.candidate_id,
       agr.score,
       agr.test_cases_passed,
       agr.execution_time,
       agr.memory_used
FROM auto_grading_results agr
JOIN candidate_answers ca
ON agr.answer_id = ca.answer_id
WHERE ca.assessment_id = 101;
```

**Used In:**

* Leaderboard
* Scoreboard page


## 🔹 5. Get Top Performers in an Assessment

```sql
SELECT ca.candidate_id,
       SUM(agr.score) AS total_score
FROM auto_grading_results agr
JOIN candidate_answers ca
ON agr.answer_id = ca.answer_id
WHERE ca.assessment_id = 101
GROUP BY ca.candidate_id
ORDER BY total_score DESC
LIMIT 5;
```

**Used In:**

* Merit ranking
* Scholarship selection

## 🔹 6. Identify Slow Code Submissions

```sql
SELECT ca.candidate_id,
       agr.execution_time
FROM auto_grading_results agr
JOIN candidate_answers ca
ON agr.answer_id = ca.answer_id
WHERE agr.execution_time > 2.0;
```

**Used In:**

* Performance optimization mentoring
* DSA skill detection


## 🔹 7. Detect High Memory Usage

```sql
SELECT ca.candidate_id,
       agr.memory_used
FROM auto_grading_results agr
JOIN candidate_answers ca
ON agr.answer_id = ca.answer_id
WHERE agr.memory_used > 128;
```

**Used In:**

* Algorithm efficiency review
* Interview readiness assessment


# 🧠 3️⃣ Concept-wise Mastery Engine


## 🔹 8. Get Concept-wise Score for Assessment

### Business Question:

> Which concepts were weak in Assessment 101?

```sql
SELECT concept_id,
       score,
       mastery_level
FROM concept_wise_results
WHERE assessment_id = 101
ORDER BY score ASC;
```

**Used In:**

* Skill gap detection
* Remedial assignment


## 🔹 9. Identify Weak Concepts (Below 40%)

```sql
SELECT concept_id, score
FROM concept_wise_results
WHERE assessment_id = 101
AND score < 40;
```

**Used In:**

* Auto-remedial learning path
* Mentor alert system


## 🔹 10. Calculate Overall Mastery Level Distribution

```sql
SELECT mastery_level, COUNT(*) AS total
FROM concept_wise_results
GROUP BY mastery_level;
```

**Used In:**

* Platform-level analytics
* Curriculum quality evaluation


# 📊 4️⃣ Candidate Performance Analytics


## 🔹 11. Total Score of Candidate in an Assessment

```sql
SELECT SUM(agr.score) AS total_score
FROM auto_grading_results agr
JOIN candidate_answers ca
ON agr.answer_id = ca.answer_id
WHERE ca.assessment_id = 101
AND ca.candidate_id = 10;
```

**Used In:**

* Candidate result summary page

## 🔹 12. Candidate Improvement Trend (Across Assessments)

```sql
SELECT ca.assessment_id,
       SUM(agr.score) AS total_score
FROM auto_grading_results agr
JOIN candidate_answers ca
ON agr.answer_id = ca.answer_id
WHERE ca.candidate_id = 10
GROUP BY ca.assessment_id
ORDER BY ca.assessment_id;
```

**Used In:**

* Growth graph
* Placement readiness evolution


# 🛡️ 5️⃣ Code Execution Monitoring


## 🔹 13. Get Failed Executions

```sql
SELECT ca.candidate_id,
       cel.execution_status,
       cel.stderr
FROM code_execution_logs cel
JOIN candidate_answers ca
ON cel.answer_id = ca.answer_id
WHERE cel.execution_status != 'SUCCESS';
```

**Used In:**

* Debug assistance
* Platform health monitoring


## 🔹 14. Identify Runtime Errors by Frequency

```sql
SELECT execution_status, COUNT(*) AS occurrences
FROM code_execution_logs
GROUP BY execution_status
ORDER BY occurrences DESC;
```

**Used In:**

* Identify common coding mistakes
* Improve practice material


# 🏆 6️⃣ Placement Readiness Engine Queries


## 🔹 15. Candidates Above 75% Overall Score

```sql
SELECT ca.candidate_id,
       SUM(agr.score) AS total_score
FROM auto_grading_results agr
JOIN candidate_answers ca
ON agr.answer_id = ca.answer_id
GROUP BY ca.candidate_id
HAVING total_score >= 75;
```

**Used In:**

* Ready-for-placement badge
* Recruiter shortlist


## 🔹 16. Candidates With Strong Concept Mastery

```sql
SELECT concept_id,
       COUNT(*) AS strong_count
FROM concept_wise_results
WHERE mastery_level = 'ADVANCED'
GROUP BY concept_id;
```

**Used In:**

* Identify subject experts
* Peer mentoring program


# 🔍 7️⃣ Integrity & Governance Queries

## 🔹 17. Answers Without Grading (System Failure Detection)

```sql
SELECT ca.answer_id
FROM candidate_answers ca
LEFT JOIN auto_grading_results agr
ON ca.answer_id = agr.answer_id
WHERE agr.answer_id IS NULL;
```


## 🔹 18. Execution Logs Missing for Coding Answers

```sql
SELECT ca.answer_id
FROM candidate_answers ca
LEFT JOIN code_execution_logs cel
ON ca.answer_id = cel.answer_id
WHERE cel.answer_id IS NULL;
```


# 🚀 What This Enables in TFLCoMentor

With this evaluation_service_db, you can build:

- ✔ AI-based placement readiness score
- ✔ Concept mastery heatmap
- ✔ Leaderboard system
- ✔ Candidate growth tracking
- ✔ Automated remediation engine
- ✔ Efficiency benchmarking (time + memory)
- ✔ Interview simulation scoring


Now TFLCoMentor has 4 intelligent layers:

1. Membership DB → Who can access
2. Skill Taxonomy DB → What should be learned
3. Evaluation Content DB → How to test
4. Evaluation Service DB → How well they performed

This is not LMS.

This is an **Employability Intelligence System**.
