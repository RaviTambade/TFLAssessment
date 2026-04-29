
# Evaluation Content – Business Query Playbook

This database is not just a question bank.

This is your:

* Assessment Engine
* Employability Measurement System
* Skill Gap Analyzer
* Mock Interview Framework
* Project Evaluation Backbone


# 🎯 1️⃣ Question Bank Management

## 🔹 1. Get All Active Questions

### Business Question:

> What evaluation content is currently usable?

```sql
SELECT question_id, title, question_type, difficulty_level, created_at
FROM question_bank
WHERE status = 'ACTIVE'
ORDER BY created_at DESC;
```

**Used In:**

* Admin content dashboard
* Assessment builder

## 🔹 2. Count Questions by Type

### Business Question:

> How many MCQs vs Coding vs Projects do we have?

```sql
SELECT question_type, COUNT(*) AS total_questions
FROM question_bank
GROUP BY question_type;
```

**Used In:**

* Content balance analytics
* Curriculum planning

## 🔹 3. Count Questions by Difficulty

```sql
SELECT difficulty_level, COUNT(*) AS total
FROM question_bank
GROUP BY difficulty_level;
```

**Used In:**

* Difficulty calibration
* Assessment difficulty mix


## 🔹 4. Questions Without Mapping (Data Integrity)

```sql
SELECT qb.question_id, qb.title
FROM question_bank qb
LEFT JOIN question_subject_concept_map qscm
ON qb.question_id = qscm.question_id
WHERE qscm.question_id IS NULL;
```

**Used In:**

* Prevent orphan evaluation content
* Admin cleanup


# 📘 2️⃣ Subject & Concept Mapping Queries


## 🔹 5. Get Questions for a Specific Subject (e.g., Java)

```sql
SELECT qb.question_id, qb.title, qb.question_type
FROM question_bank qb
JOIN question_subject_concept_map qscm
ON qb.question_id = qscm.question_id
JOIN subject_concepts sc
ON qscm.subject_concept_id = sc.id
JOIN subjects s
ON sc.subject_id = s.subject_id
WHERE s.name = 'Java';
```

**Used In:**

* Subject-wise mock test generation
* Domain-specific evaluation


## 🔹 6. Get Questions for a Specific Concept

```sql
SELECT qb.title, qb.difficulty_level
FROM question_bank qb
JOIN question_subject_concept_map qscm
ON qb.question_id = qscm.question_id
JOIN subject_concepts sc
ON qscm.subject_concept_id = sc.id
JOIN concepts c
ON sc.concept_id = c.concept_id
WHERE c.name = 'OOP';
```

**Used In:**

* Concept mastery test
* Skill gap detection

## 🔹 7. Count Questions Per Concept

```sql
SELECT c.name AS concept_name, COUNT(qb.question_id) AS total_questions
FROM concepts c
LEFT JOIN subject_concepts sc ON c.concept_id = sc.concept_id
LEFT JOIN question_subject_concept_map qscm ON sc.id = qscm.subject_concept_id
LEFT JOIN question_bank qb ON qscm.question_id = qb.question_id
GROUP BY c.name
ORDER BY total_questions DESC;
```

**Used In:**

* Coverage analysis
* Content depth scoring


# 🧠 3️⃣ Assessment Builder Queries

## 🔹 8. Generate Random MCQ Set for Java (Beginner)

```sql
SELECT qb.question_id, qb.title
FROM question_bank qb
JOIN question_subject_concept_map qscm
ON qb.question_id = qscm.question_id
JOIN subject_concepts sc
ON qscm.subject_concept_id = sc.id
JOIN subjects s
ON sc.subject_id = s.subject_id
JOIN concepts c
ON sc.concept_id = c.concept_id
JOIN skill_levels sl
ON c.level_id = sl.level_id
WHERE s.name = 'Java'
AND qb.question_type = 'MCQ'
AND sl.level_name = 'Beginner'
ORDER BY RAND()
LIMIT 10;
```

**Used In:**

* Auto mock test generator
* Placement readiness test


## 🔹 9. Generate Mixed Difficulty Assessment

```sql
SELECT question_id, title, difficulty_level
FROM question_bank
WHERE question_type = 'CODING'
ORDER BY FIELD(difficulty_level, 'Easy', 'Medium', 'Hard');
```

**Used In:**

* Progressive challenge test
* Campus placement simulation


# 💻 4️⃣ Coding Problem Queries

## 🔹 10. Get Full Coding Question Details

```sql
SELECT qb.title,
       qb.description,
       ps.input_format,
       ps.output_format,
       ps.constraints,
       ps.sample_input,
       ps.sample_output
FROM question_bank qb
JOIN problem_statements ps
ON qb.question_id = ps.question_id
WHERE qb.question_id = 1;
```

**Used In:**

* Coding platform view
* Online judge UI

## 🔹 11. Get Starter Code for Language (e.g., Java)

```sql
SELECT language, starter_code
FROM code_snippets
WHERE question_id = 1
AND language = 'Java';
```

**Used In:**

* IDE integration
* Practice platform

# 🏗️ 5️⃣ Mini Project Queries


## 🔹 12. Get All Mini Projects

```sql
SELECT qb.title, mp.project_description, mp.evaluation_criteria
FROM mini_projects mp
JOIN question_bank qb
ON mp.question_id = qb.question_id;
```

**Used In:**

* Project allocation engine
* Capstone selection


## 🔹 13. Projects by Subject

```sql
SELECT qb.title, s.name AS subject_name
FROM mini_projects mp
JOIN question_bank qb ON mp.question_id = qb.question_id
JOIN question_subject_concept_map qscm ON qb.question_id = qscm.question_id
JOIN subject_concepts sc ON qscm.subject_concept_id = sc.id
JOIN subjects s ON sc.subject_id = s.subject_id;
```

**Used In:**

* Domain-based project assignment

# 🎤 6️⃣ Mock Interview Queries


## 🔹 14. Get Mock Questions by Category

```sql
SELECT qb.title, mq.mock_category
FROM mock_questions mq
JOIN question_bank qb
ON mq.question_id = qb.question_id
WHERE mq.mock_category = 'Technical Round';
```

**Used In:**

* Interview simulation module
* SME panel preparation


# 📊 7️⃣ Evaluation Analytics Queries

## 🔹 15. Question Distribution Per Subject

```sql
SELECT s.name AS subject_name,
       COUNT(qb.question_id) AS total_questions
FROM subjects s
LEFT JOIN subject_concepts sc ON s.subject_id = sc.subject_id
LEFT JOIN question_subject_concept_map qscm ON sc.id = qscm.subject_concept_id
LEFT JOIN question_bank qb ON qscm.question_id = qb.question_id
GROUP BY s.name
ORDER BY total_questions DESC;
```

**Used In:**

* Content maturity score
* Subject strength analysis

## 🔹 16. Identify Overused Concepts (High Question Density)

```sql
SELECT c.name, COUNT(qb.question_id) AS question_count
FROM concepts c
JOIN subject_concepts sc ON c.concept_id = sc.concept_id
JOIN question_subject_concept_map qscm ON sc.id = qscm.subject_concept_id
JOIN question_bank qb ON qscm.question_id = qb.question_id
GROUP BY c.name
ORDER BY question_count DESC
LIMIT 5;
```

**Used In:**

* Balance curriculum
* Avoid repetition


# 🛡️ 8️⃣ Governance & Integrity



## 🔹 17. Coding Questions Without Problem Statement

```sql
SELECT qb.question_id, qb.title
FROM question_bank qb
LEFT JOIN problem_statements ps
ON qb.question_id = ps.question_id
WHERE qb.question_type = 'CODING'
AND ps.question_id IS NULL;
```

## 🔹 18. MCQs Without Options

```sql
SELECT qb.question_id, qb.title
FROM question_bank qb
LEFT JOIN mcq_options mo
ON qb.question_id = mo.question_id
WHERE qb.question_type = 'MCQ'
AND mo.question_id IS NULL;
```


# 🚀 What This Enables in TFLCoMentor

With this evaluation DB + queries, you can build:

- ✔ AI-powered mock test generator
- ✔ Skill gap analysis engine
- ✔ Placement readiness scoring
- ✔ Concept mastery evaluation
- ✔ Mentor-based manual evaluation
- ✔ Project grading automation
- ✔ Adaptive assessment sequencing


You now have 3 intelligent layers:

1. Membership DB → Who can access?
2. Skill Taxonomy DB → What should be learned?
3. Evaluation Content DB → How to measure learning?

This is not a learning platform.

This is an **Employability Operating System**.
