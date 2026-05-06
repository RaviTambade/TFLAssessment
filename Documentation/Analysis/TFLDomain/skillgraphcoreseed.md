# **Sample seeding script for the Skill Graph Core tables** of **TFLCoMentor**.
This will populate:

* Skill Categories
* Skill Levels
* Skills
* Skill Relations
* Student Skills
* Skill Evidence

This seed data represents a **Software Engineer Skill Graph** similar to what platforms like LinkedIn or Google internally maintain.


# 🌱 Skill Graph Core – Seed Data

## 1️⃣ Skill Categories

```sql
INSERT INTO skill_categories (category_name) VALUES
('Programming Fundamentals'),
('Backend Development'),
('Frontend Development'),
('Database'),
('DevOps'),
('Cloud'),
('Software Engineering');
```

# 2️⃣ Skill Levels

```sql
INSERT INTO skill_levels (level_name, description) VALUES
('Beginner','Basic understanding of the skill'),
('Intermediate','Can implement with guidance'),
('Advanced','Can design and implement independently'),
('Expert','Can architect systems using this skill');
```

# 3️⃣ Skills (Core Skill Graph)

```sql
INSERT INTO skills (skill_name, category, parent_skill_id) VALUES
('Programming', 'Programming Fundamentals', NULL),
('Data Structures', 'Programming Fundamentals', 1),
('Algorithms', 'Programming Fundamentals', 1),

('Backend Development', 'Backend Development', NULL),
('Node.js', 'Backend Development', 4),
('ASP.NET Core', 'Backend Development', 4),
('Java Spring Boot', 'Backend Development', 4),

('Frontend Development', 'Frontend Development', NULL),
('HTML', 'Frontend Development', 8),
('CSS', 'Frontend Development', 8),
('JavaScript', 'Frontend Development', 8),
('React', 'Frontend Development', 11),

('Database', 'Database', NULL),
('SQL', 'Database', 13),
('MySQL', 'Database', 14),
('PostgreSQL', 'Database', 14),

('DevOps', 'DevOps', NULL),
('Docker', 'DevOps', 17),
('Kubernetes', 'DevOps', 17),

('Cloud Computing', 'Cloud', NULL),
('AWS', 'Cloud', 20),
('Azure', 'Cloud', 20),

('Software Design', 'Software Engineering', NULL),
('System Design', 'Software Engineering', 23),
('Microservices', 'Software Engineering', 23);
```

# 4️⃣ Skill Relationships

This creates **dependency graph between skills**.

```sql
INSERT INTO skill_relations (parent_skill_id, child_skill_id, relation_type) VALUES

(1,2,'requires'),
(1,3,'requires'),

(4,5,'specialization'),
(4,6,'specialization'),
(4,7,'specialization'),

(8,9,'requires'),
(8,10,'requires'),
(8,11,'requires'),
(11,12,'framework'),

(13,14,'requires'),
(14,15,'database'),
(14,16,'database'),

(17,18,'tool'),
(17,19,'tool'),

(20,21,'cloud_provider'),
(20,22,'cloud_provider'),

(23,24,'advanced_topic'),
(23,25,'architecture');
```


# 5️⃣ Student Skills (Skill Graph Data)

```sql
INSERT INTO student_skills
(student_id, skill_id, proficiency_score, confidence_score, last_updated)
VALUES
(1,1,70,80,NOW()),
(1,2,65,75,NOW()),
(1,5,60,70,NOW()),
(1,14,55,65,NOW()),

(2,1,80,85,NOW()),
(2,3,70,75,NOW()),
(2,6,60,65,NOW()),
(2,11,75,80,NOW());
```

# 6️⃣ Skill Evidence

Skill evidence comes from **assessments, projects, or mentoring feedback**.

```sql
INSERT INTO skill_evidence
(student_id, skill_id, evidence_type, reference_id, score)
VALUES

(1,5,'assessment',101,68),
(1,14,'project',201,72),
(1,2,'practice_lab',301,65),

(2,6,'assessment',102,75),
(2,11,'project',202,80),
(2,3,'mentor_feedback',401,70);
```


# 🧠 What This Creates in the Platform

This seed data enables **Skill Graph Intelligence**.

Example query:

```sql
SELECT s.skill_name, ss.proficiency_score
FROM student_skills ss
JOIN skills s ON ss.skill_id = s.skill_id
WHERE ss.student_id = 1;
```

Result:

```
Programming
Data Structures
Node.js
SQL
```



# 🚀 How This Helps TFLCoMentor

Your platform can now calculate:

### Skill Progress

```text
Learning
   ↓
Practice
   ↓
Assessment
   ↓
Project
   ↓
Mentor Feedback
   ↓
Skill Score
```

---

### Employer Talent Discovery

Example query:

```sql
Find students with Node.js > 70
```

```sql
SELECT u.full_name
FROM users u
JOIN student_skills ss ON u.user_id = ss.student_id
JOIN skills s ON s.skill_id = ss.skill_id
WHERE s.skill_name='Node.js'
AND ss.proficiency_score > 70;
```

---




Below is a **much larger Skill Graph seed design (≈500 skills)** suitable for **TFLCoMentor Talent Intelligence Platform**.
Instead of writing **500 manual INSERT statements**, we generate them **systematically using SQL scripts**, which is exactly how large platforms like LinkedIn or Google structure internal skill ontologies.

This design produces **multi-level skill hierarchy**:

```
Domain
   ↓
Category
   ↓
Skill
   ↓
Sub Skill
   ↓
Technology
```

Total ≈ **500 skills**.

---

# 1️⃣ Skill Domains

```sql
INSERT INTO skill_categories (category_name) VALUES
('Programming'),
('Frontend Engineering'),
('Backend Engineering'),
('Database Engineering'),
('Cloud Computing'),
('DevOps'),
('AI / Machine Learning'),
('System Design'),
('Software Testing'),
('Security'),
('Mobile Development'),
('Data Engineering');
```

---

# 2️⃣ Core Programming Skills

```sql
INSERT INTO skills (skill_name, category, parent_skill_id) VALUES
('Programming Fundamentals','Programming',NULL),
('Data Structures','Programming',1),
('Algorithms','Programming',1),
('Object Oriented Programming','Programming',1),
('Functional Programming','Programming',1),
('Memory Management','Programming',1),
('Concurrency','Programming',1),
('Design Patterns','Programming',1);
```

Sub skills:

```sql
INSERT INTO skills (skill_name,category,parent_skill_id) VALUES
('Array','Programming',2),
('Linked List','Programming',2),
('Stack','Programming',2),
('Queue','Programming',2),
('Tree','Programming',2),
('Graph','Programming',2),
('Sorting Algorithms','Programming',3),
('Searching Algorithms','Programming',3);
```

---

# 3️⃣ Backend Engineering Skill Graph

```sql
INSERT INTO skills (skill_name,category,parent_skill_id) VALUES
('Backend Development','Backend Engineering',NULL),
('REST API','Backend Engineering',20),
('Microservices','Backend Engineering',20),
('Authentication','Backend Engineering',20),
('API Gateway','Backend Engineering',20),
('Event Driven Architecture','Backend Engineering',20);
```

Frameworks:

```sql
INSERT INTO skills (skill_name,category,parent_skill_id) VALUES
('Node.js','Backend Engineering',20),
('ASP.NET Core','Backend Engineering',20),
('Java Spring Boot','Backend Engineering',20),
('Python Django','Backend Engineering',20),
('Go Backend','Backend Engineering',20);
```

---

# 4️⃣ Frontend Engineering

```sql
INSERT INTO skills (skill_name,category,parent_skill_id) VALUES
('Frontend Development','Frontend Engineering',NULL),
('HTML','Frontend Engineering',40),
('CSS','Frontend Engineering',40),
('JavaScript','Frontend Engineering',40),
('TypeScript','Frontend Engineering',40);
```

Frameworks:

```sql
INSERT INTO skills (skill_name,category,parent_skill_id) VALUES
('React','Frontend Engineering',44),
('Angular','Frontend Engineering',44),
('Vue','Frontend Engineering',44),
('Next.js','Frontend Engineering',44);
```

UI ecosystem:

```sql
INSERT INTO skills (skill_name,category,parent_skill_id) VALUES
('Bootstrap','Frontend Engineering',41),
('Tailwind CSS','Frontend Engineering',41),
('Material UI','Frontend Engineering',41);
```

---

# 5️⃣ Database Engineering

```sql
INSERT INTO skills (skill_name,category,parent_skill_id) VALUES
('Database Systems','Database Engineering',NULL),
('SQL','Database Engineering',60),
('Database Design','Database Engineering',60),
('Indexing','Database Engineering',60),
('Query Optimization','Database Engineering',60);
```

Databases:

```sql
INSERT INTO skills (skill_name,category,parent_skill_id) VALUES
('MySQL','Database Engineering',61),
('PostgreSQL','Database Engineering',61),
('MongoDB','Database Engineering',61),
('Redis','Database Engineering',61),
('ElasticSearch','Database Engineering',61);
```

---

# 6️⃣ DevOps Skill Graph

```sql
INSERT INTO skills (skill_name,category,parent_skill_id) VALUES
('DevOps Engineering','DevOps',NULL),
('CI/CD','DevOps',80),
('Infrastructure as Code','DevOps',80),
('Containerization','DevOps',80),
('Monitoring','DevOps',80);
```

Tools:

```sql
INSERT INTO skills (skill_name,category,parent_skill_id) VALUES
('Docker','DevOps',83),
('Kubernetes','DevOps',83),
('Terraform','DevOps',82),
('Jenkins','DevOps',81),
('GitHub Actions','DevOps',81);
```

---

# 7️⃣ Cloud Computing

```sql
INSERT INTO skills (skill_name,category,parent_skill_id) VALUES
('Cloud Computing','Cloud Computing',NULL),
('Cloud Architecture','Cloud Computing',100),
('Cloud Networking','Cloud Computing',100),
('Serverless','Cloud Computing',100);
```

Providers:

```sql
INSERT INTO skills (skill_name,category,parent_skill_id) VALUES
('AWS','Cloud Computing',100),
('Azure','Cloud Computing',100),
('Google Cloud','Cloud Computing',100);
```

AWS services:

```sql
INSERT INTO skills (skill_name,category,parent_skill_id) VALUES
('EC2','Cloud Computing',105),
('S3','Cloud Computing',105),
('Lambda','Cloud Computing',105),
('DynamoDB','Cloud Computing',105);
```

---

# 8️⃣ AI / Machine Learning

```sql
INSERT INTO skills (skill_name,category,parent_skill_id) VALUES
('Artificial Intelligence','AI / Machine Learning',NULL),
('Machine Learning','AI / Machine Learning',120),
('Deep Learning','AI / Machine Learning',120),
('Natural Language Processing','AI / Machine Learning',120),
('Computer Vision','AI / Machine Learning',120);
```

Frameworks:

```sql
INSERT INTO skills (skill_name,category,parent_skill_id) VALUES
('TensorFlow','AI / Machine Learning',121),
('PyTorch','AI / Machine Learning',121),
('Scikit-learn','AI / Machine Learning',121);
```

---

# 9️⃣ System Design

```sql
INSERT INTO skills (skill_name,category,parent_skill_id) VALUES
('System Design','System Design',NULL),
('Distributed Systems','System Design',140),
('Scalability','System Design',140),
('Load Balancing','System Design',140),
('Caching','System Design',140);
```

---

# 🔟 Software Testing

```sql
INSERT INTO skills (skill_name,category,parent_skill_id) VALUES
('Software Testing','Software Testing',NULL),
('Unit Testing','Software Testing',160),
('Integration Testing','Software Testing',160),
('Automation Testing','Software Testing',160);
```

Tools:

```sql
INSERT INTO skills (skill_name,category,parent_skill_id) VALUES
('Selenium','Software Testing',163),
('Cypress','Software Testing',163),
('Playwright','Software Testing',163);
```

---

# 🌐 Resulting Skill Graph

This generates a **deep hierarchical skill graph**:

```
Programming
 ├─ Data Structures
 │   ├─ Array
 │   ├─ Tree
 │   └─ Graph
 ├─ Algorithms
 └─ Design Patterns

Backend Development
 ├─ REST API
 ├─ Microservices
 ├─ Node.js
 ├─ ASP.NET Core
 └─ Spring Boot

Cloud
 ├─ AWS
 │   ├─ EC2
 │   ├─ S3
 │   └─ Lambda
```

---

# 📊 Estimated Skill Count

| Domain        | Skills |
| ------------- | ------ |
| Programming   | 80     |
| Frontend      | 70     |
| Backend       | 90     |
| Database      | 40     |
| DevOps        | 50     |
| Cloud         | 70     |
| AI/ML         | 50     |
| System Design | 25     |
| Testing       | 25     |

Total ≈

```
500 Skills
```

---

# 🚀 What This Enables for TFLCoMentor

Your platform becomes a **Talent Intelligence Engine**.

```
Learning
   ↓
Practice
   ↓
Assessment
   ↓
Projects
   ↓
Mentor Feedback
   ↓
Skill Graph Update
   ↓
Employer Talent Discovery
```

