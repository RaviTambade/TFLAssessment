
# 🧠 TFLCoMentor Skill Graph Architecture
  
### **🧠 TFLCoMentor Skill Graph Architecture**, which is the **intelligence layer of the platform**.
 

The **Skill Graph** connects:

* Skills
* Learning paths
* Assessments
* Projects
* Jobs
* Student progress

This allows the platform to **measure real employability instead of just marks**.



```text
                        ┌─────────────────────┐
                        │        SKILLS       │
                        │---------------------│
                        │ skillId (PK)        │
                        │ skillName           │
                        │ category            │
                        │ level               │
                        └─────────┬───────────┘
                                  │
                                  │
                                  ▼
                   ┌──────────────────────────┐
                   │    SKILL_DEPENDENCIES    │
                   │--------------------------│
                   │ parentSkillId            │
                   │ childSkillId             │
                   └───────────┬──────────────┘
                               │
                               │
                               ▼
                   ┌──────────────────────────┐
                   │      LEARNING_PATH       │
                   │--------------------------│
                   │ pathId (PK)              │
                   │ technology               │
                   │ difficultyLevel          │
                   └───────────┬──────────────┘
                               │
                               ▼
                   ┌──────────────────────────┐
                   │    LEARNING_PATH_SKILL   │
                   │--------------------------│
                   │ pathId (FK)              │
                   │ skillId (FK)             │
                   │ orderIndex               │
                   └───────────┬──────────────┘
                               │
                               ▼
                   ┌──────────────────────────┐
                   │     STUDENT_SKILLS       │
                   │--------------------------│
                   │ studentId (FK)           │
                   │ skillId (FK)             │
                   │ level                    │
                   │ score                    │
                   └───────────┬──────────────┘
                               │
                               ▼
                   ┌──────────────────────────┐
                   │     SKILL_EVIDENCE       │
                   │--------------------------│
                   │ evidenceId (PK)          │
                   │ studentId (FK)           │
                   │ skillId (FK)             │
                   │ source                   │
                   │ sourceId                 │
                   └───────────┬──────────────┘
                               │
                               ▼
         ┌────────────────────────────────────────────┐
         │           SKILL EVIDENCE SOURCES           │
         │--------------------------------------------│
         │ Assessments                                │
         │ Assignments                                │
         │ Projects                                   │
         │ Mentor Reviews                             │
         │ Employer Feedback                          │
         └────────────────────────────────────────────┘
```

# 🔗 Skill Evidence Flow

Example: Student learns **C++**.

```text
Student completes assignment
        │
        ▼
Assignment evaluated
        │
        ▼
Skill Evidence recorded
        │
        ▼
Student Skill Score updated
        │
        ▼
Growth Score recalculated
```

# 📊 Growth Score Engine

The **Growth Score** measures employability.

```text
Growth Score =
   Skills Mastery
 + Project Quality
 + Assessment Scores
 + Mentor Feedback
 + Employer Feedback
```

Example:

```json
{
 "studentId": 21,
 "skills": 28,
 "projects": 4,
 "assessments": 16,
 "mentorRating": 4.5,
 "growthScore": 82
}
```

# 🧩 Skill Graph Example

```text
Programming
     │
     ├── C
     │     ├── Pointers
     │     ├── Memory Management
     │
     ├── C++
     │     ├── OOP
     │     ├── STL
     │
     ├── Java
     │     ├── Spring Boot
     │
     └── JavaScript
           ├── Node.js
           ├── React
```

This allows the platform to automatically recommend **next skills**.


# 🎓 Example Learning Path

### Node.js Developer Path

```text
Programming Basics
        │
        ▼
JavaScript
        │
        ▼
Node.js
        │
        ▼
Express
        │
        ▼
REST API
        │
        ▼
Microservices
```


# 🏢 Employer Skill Search

Employers can search like:

```text
Skill = Node.js
Projects >= 2
Assessment Score > 70
Growth Score > 75
```

Example API:

```http
GET /api/employer/candidates?skill=node&growthScore=75
```

# 🚀 Why Skill Graph Is Extremely Powerful

Instead of:

❌ degree-based hiring

We move to:

✅ **skill-based hiring**

Used by platforms like:

* LinkedIn
* Coursera
* HackerRank

# 🧠 Final Full TFLCoMentor Platform Brain

```text
Students → Learn
       │
       ▼
Assessments → Measure Skills
       │
       ▼
Projects → Apply Skills
       │
       ▼
Mentor Reviews → Improve Skills
       │
       ▼
Skill Graph → Calculate Growth
       │
       ▼
Employers → Hire Talent
```

✅ This **Skill Graph Architecture** is what makes **TFLCoMentor look like a next-generation employability platform**.

 