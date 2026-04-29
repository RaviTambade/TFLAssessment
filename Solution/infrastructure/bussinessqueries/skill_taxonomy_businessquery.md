# Skill Taxonomy – Business Query Playbook

This schema is not just taxonomy.
This is your:

* Learning path engine
* Assessment sequencing engine
* Mentor allocation logic
* AI recommendation backbone

# 🎯 1️⃣ Skill Level Management

## 🔹 1. Get All Skill Levels (For Dropdowns)

### Business Question:

> What learning levels do we support?

```sql
SELECT level_id, level_name, description
FROM skill_levels
ORDER BY level_id;
```

**Used In:**

* Admin UI
* Concept creation form
* Learning path builder


## 🔹 2. Count Concepts Per Skill Level

### Business Question:

> How many Beginner vs Advanced concepts do we have?

```sql
SELECT sl.level_name, COUNT(c.concept_id) AS total_concepts
FROM skill_levels sl
LEFT JOIN concepts c ON sl.level_id = c.level_id
GROUP BY sl.level_name;
```

**Used In:**

* Curriculum coverage analytics
* Difficulty balance validation

# 📘 2️⃣ Subject Management Queries

## 🔹 3. Get All Active Subjects

```sql
SELECT subject_id, name, description
FROM subjects
WHERE status = 'ACTIVE'
ORDER BY name;
```

**Used In:**

* Course catalog
* Enrollment UI

## 🔹 4. Count Concepts Per Subject

### Business Question:

> Which subject has the most depth?

```sql
SELECT s.name AS subject_name, COUNT(sc.concept_id) AS total_concepts
FROM subjects s
LEFT JOIN subject_concepts sc ON s.subject_id = sc.subject_id
GROUP BY s.name
ORDER BY total_concepts DESC;
```

**Used In:**

* Subject maturity ranking
* Marketing positioning


## 🔹 5. Subjects Without Concepts (Data Integrity)

```sql
SELECT s.name
FROM subjects s
LEFT JOIN subject_concepts sc ON s.subject_id = sc.subject_id
WHERE sc.subject_id IS NULL;
```

**Used In:**

* Admin cleanup
* Curriculum gap detection

# 🧠 3️⃣ Concept Management Queries

## 🔹 6. Get All Concepts With Skill Level

```sql
SELECT c.concept_id, c.name,
       sl.level_name,
       c.created_at
FROM concepts c
LEFT JOIN skill_levels sl ON c.level_id = sl.level_id
ORDER BY sl.level_name;
```

**Used In:**

* Concept listing page
* Difficulty-based filtering

## 🔹 7. Get Concepts By Skill Level (e.g., Beginner)

```sql
SELECT c.name
FROM concepts c
JOIN skill_levels sl ON c.level_id = sl.level_id
WHERE sl.level_name = 'Beginner';
```

**Used In:**

* Beginner learning path generation

## 🔹 8. Get Concepts Under a Subject

```sql
SELECT c.concept_id, c.name, sl.level_name
FROM subject_concepts sc
JOIN concepts c ON sc.concept_id = c.concept_id
LEFT JOIN skill_levels sl ON c.level_id = sl.level_id
JOIN subjects s ON sc.subject_id = s.subject_id
WHERE s.name = 'Java'
ORDER BY sl.level_id;
```

**Used In:**

* Subject detail page
* Curriculum visualization

# 🔁 4️⃣ Prerequisite Intelligence (Learning Path Engine)

This is where TFLCoMentor becomes powerful.


## 🔹 9. Get Direct Prerequisites of a Concept

### Business Question:

> What must a student learn before “OOP”?

```sql
SELECT c2.name AS prerequisite_concept
FROM concept_prerequisites cp
JOIN concepts c1 ON cp.concept_id = c1.concept_id
JOIN concepts c2 ON cp.prerequisite_concept_id = c2.concept_id
WHERE c1.name = 'OOP';
```

**Used In:**

* Learning roadmap UI
* Assessment gating


## 🔹 10. Find Concepts That Have No Prerequisites (Entry Points)

```sql
SELECT c.name
FROM concepts c
LEFT JOIN concept_prerequisites cp
ON c.concept_id = cp.concept_id
WHERE cp.concept_id IS NULL;
```

**Used In:**

* Beginner path starting points
* Auto curriculum builder


## 🔹 11. Find Concepts That Depend On a Given Concept

### Business Question:

> If I change “Variables”, what gets impacted?

```sql
SELECT c1.name AS dependent_concept
FROM concept_prerequisites cp
JOIN concepts c1 ON cp.concept_id = c1.concept_id
JOIN concepts c2 ON cp.prerequisite_concept_id = c2.concept_id
WHERE c2.name = 'Variables';
```

**Used In:**

* Curriculum update impact analysis
* Version control planning


# 🏗️ 5️⃣ Learning Path Builder Queries


## 🔹 12. Beginner-Level Concepts for a Subject

```sql
SELECT c.name
FROM subject_concepts sc
JOIN concepts c ON sc.concept_id = c.concept_id
JOIN skill_levels sl ON c.level_id = sl.level_id
JOIN subjects s ON sc.subject_id = s.subject_id
WHERE s.name = 'Python'
AND sl.level_name = 'Beginner';
```

**Used In:**

* Auto-generate beginner roadmap


## 🔹 13. Advanced Concepts With Prerequisites

```sql
SELECT c.name, COUNT(cp.prerequisite_concept_id) AS prereq_count
FROM concepts c
JOIN skill_levels sl ON c.level_id = sl.level_id
LEFT JOIN concept_prerequisites cp
ON c.concept_id = cp.concept_id
WHERE sl.level_name = 'Advanced'
GROUP BY c.name
ORDER BY prereq_count DESC;
```

**Used In:**

* Capstone preparation
* Advanced program design


# 📊 6️⃣ Curriculum Analytics Queries


## 🔹 14. Most Complex Concepts (Highest Prerequisites)

```sql
SELECT c.name, COUNT(cp.prerequisite_concept_id) AS complexity_score
FROM concepts c
JOIN concept_prerequisites cp
ON c.concept_id = cp.concept_id
GROUP BY c.name
ORDER BY complexity_score DESC
LIMIT 5;
```

**Used In:**

* Difficulty calibration
* Assessment weighting

## 🔹 15. Skill Level Distribution Per Subject

```sql
SELECT s.name AS subject_name,
       sl.level_name,
       COUNT(c.concept_id) AS total_concepts
FROM subject_concepts sc
JOIN subjects s ON sc.subject_id = s.subject_id
JOIN concepts c ON sc.concept_id = c.concept_id
JOIN skill_levels sl ON c.level_id = sl.level_id
GROUP BY s.name, sl.level_name
ORDER BY s.name;
```

**Used In:**

* Curriculum balance analytics
* Program design decisions


# 🛡️ 7️⃣ Data Integrity & Governance Queries


## 🔹 16. Concepts Without Skill Level

```sql
SELECT name
FROM concepts
WHERE level_id IS NULL;
```

## 🔹 17. Concepts Not Mapped to Any Subject

```sql
SELECT c.name
FROM concepts c
LEFT JOIN subject_concepts sc
ON c.concept_id = sc.concept_id
WHERE sc.concept_id IS NULL;
```

## 🔹 18. Circular Prerequisite Detection (Basic Check)

```sql
SELECT *
FROM concept_prerequisites cp1
JOIN concept_prerequisites cp2
ON cp1.concept_id = cp2.prerequisite_concept_id
AND cp1.prerequisite_concept_id = cp2.concept_id;
```

**Used In:**

* Prevent invalid learning graph


# 🚀 What This Enables in TFLCoMentor

With these queries, you can build:

- ✔ AI-powered roadmap generator
- ✔ Assessment sequencing engine
- ✔ Mentor-to-concept allocation
- ✔ Difficulty-based evaluation
- ✔ Curriculum maturity dashboard
- ✔ Subject complexity scoring
- ✔ Dependency graph engine


This taxonomy DB is the foundation for:

* Project allocation engine
* Skill-gap detection system
* Employability scoring model
* AI learning advisor
