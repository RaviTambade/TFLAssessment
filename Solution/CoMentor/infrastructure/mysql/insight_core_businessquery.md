
# Insight Core – Business Query Playbook


Now we are inside the **Insight Core Intelligence Layer** of TFLCoMentor.

This database is not storing raw answers anymore.

This is your:

* 📊 Placement Readiness Dashboard
* 🏆 Ranking Engine
* 📈 Growth Analytics System
* 🎯 Performance Prediction Model
* 🤖 AI Career Advisor Core


# 🎯 1️⃣ Candidate Performance Dashboard Queries

## 🔹 1. Get Full Performance Summary of a Candidate

### Business Question:

> Show overall readiness summary for candidate Ravi.

```sql
SELECT candidate_id,
       overall_score,
       average_score,
       tests_attempted,
       improvement_rate
FROM candidate_performance
WHERE candidate_id = 10;
```

**Used In:**

* Candidate dashboard
* Mentor review page
* Recruiter preview


## 🔹 2. Top 10 Candidates by Overall Score

```sql
SELECT candidate_id, overall_score
FROM candidate_performance
ORDER BY overall_score DESC
LIMIT 10;
```

**Used In:**

* Merit list
* Scholarship shortlist
* Placement drive filtering


## 🔹 3. Candidates With High Improvement Rate

### Business Question:

> Who is improving fastest?

```sql
SELECT candidate_id, improvement_rate
FROM candidate_performance
ORDER BY improvement_rate DESC
LIMIT 10;
```

**Used In:**

* Growth-based recognition
* Mentor encouragement system

## 🔹 4. Identify At-Risk Candidates

```sql
SELECT candidate_id
FROM candidate_performance
WHERE overall_score < 40
AND tests_attempted >= 3;
```

**Used In:**

* Early intervention program
* Auto-remedial path trigger

# 📊 2️⃣ Test Result Intelligence

## 🔹 5. Get Test History of a Candidate

```sql
SELECT test_id, score, percentile, attempt_date
FROM candidate_test_results
WHERE candidate_id = 10
ORDER BY attempt_date DESC;
```

**Used In:**

* Score progression graph
* Attempt analytics


## 🔹 6. Latest Score of Each Candidate

```sql
SELECT candidate_id, test_id, score, attempt_date
FROM candidate_test_results ctr1
WHERE attempt_date = (
    SELECT MAX(ctr2.attempt_date)
    FROM candidate_test_results ctr2
    WHERE ctr2.candidate_id = ctr1.candidate_id
);
```

**Used In:**

* Real-time leaderboard
* Current performance snapshot

## 🔹 7. Average Score Per Test

```sql
SELECT test_id, AVG(score) AS avg_score
FROM candidate_test_results
GROUP BY test_id;
```

**Used In:**

* Test difficulty validation
* Assessment calibration


## 🔹 8. High Percentile Performers (>90)

```sql
SELECT candidate_id, test_id, percentile
FROM candidate_test_results
WHERE percentile >= 90;
```

**Used In:**

* Elite badge
* Recruiter spotlight



# 🏆 3️⃣ Ranking Engine Queries


## 🔹 9. Get Current Ranking List

```sql
SELECT candidate_id, rank_position, category
FROM rankings
ORDER BY rank_position ASC;
```

**Used In:**

* Leaderboard page


## 🔹 10. Get Rank of Specific Candidate

```sql
SELECT rank_position, category
FROM rankings
WHERE candidate_id = 10;
```

**Used In:**

* Candidate dashboard


## 🔹 11. Top 5 in Each Category

```sql
SELECT candidate_id, rank_position, category
FROM rankings
WHERE rank_position <= 5
ORDER BY category, rank_position;
```

**Used In:**

* Category-based merit display


# 📈 4️⃣ Performance Snapshot & Trend Analysis


## 🔹 12. Get Latest Performance Snapshot

```sql
SELECT performance_json
FROM performance_snapshots
WHERE candidate_id = 10
ORDER BY snapshot_date DESC
LIMIT 1;
```

**Used In:**

* AI performance visualization
* Historical replay


## 🔹 13. Performance Growth Timeline

```sql
SELECT snapshot_date
FROM performance_snapshots
WHERE candidate_id = 10
ORDER BY snapshot_date;
```

**Used In:**

* Performance timeline graph


## 🔹 14. Snapshot Count Per Candidate

```sql
SELECT candidate_id, COUNT(*) AS snapshot_count
FROM performance_snapshots
GROUP BY candidate_id;
```

**Used In:**

* Monitoring analytics coverage


# 🎯 5️⃣ Performance Level & Scoring Logic


## 🔹 15. Get Marks Allocation by Difficulty

```sql
SELECT difficulty_level, marks_per_question
FROM performance_level;
```

**Used In:**

* Dynamic scoring engine
* Test generation logic


## 🔹 16. Estimate Score for Candidate Based on Question Mix

(Example simulation query)

```sql
SELECT 
    SUM(pl.marks_per_question) AS expected_total_score
FROM performance_level pl
WHERE pl.difficulty_level IN ('Beginner', 'Intermediate', 'Advanced');
```

**Used In:**

* Assessment blueprint design
* Maximum score estimation


# 🧠 6️⃣ Advanced Intelligence Queries

## 🔹 17. Predict Placement-Ready Candidates

```sql
SELECT candidate_id
FROM candidate_performance
WHERE overall_score >= 75
AND improvement_rate > 5
AND tests_attempted >= 5;
```

**Used In:**

* Placement shortlisting
* Recruiter dashboard

## 🔹 18. Candidates Whose Percentile Is Increasing Over Time

```sql
SELECT candidate_id, AVG(percentile) AS avg_percentile
FROM candidate_test_results
GROUP BY candidate_id
ORDER BY avg_percentile DESC;
```

**Used In:**

* Long-term growth indicator

## 🔹 19. Detect Performance Drop

```sql
SELECT ctr1.candidate_id
FROM candidate_test_results ctr1
JOIN candidate_test_results ctr2
ON ctr1.candidate_id = ctr2.candidate_id
WHERE ctr1.attempt_date > ctr2.attempt_date
AND ctr1.score < ctr2.score;
```

**Used In:**

* Mentor intervention trigger



# 🚀 What This Enables in TFLCoMentor

With insight_core_db, you can build:

- ✔ Placement Readiness Score
- ✔ AI Growth Predictor
- ✔ Smart Ranking Engine
- ✔ Performance Heatmap
- ✔ Improvement Trend Graph
- ✔ Recruiter Shortlist System
- ✔ Candidate Risk Alert System



# 🔥 Strategic Architecture View

Now TFLCoMentor has:

1️⃣ Membership Layer → Access Control
2️⃣ Skill Taxonomy Layer → What to Learn
3️⃣ Evaluation Content Layer → What to Test
4️⃣ Evaluation Service Layer → How They Performed
5️⃣ Insight Core Layer → What It Means

This final layer converts data into **decisions**.


If they can model weighted scoring logic,
They are building analytics systems — not CRUD apps.