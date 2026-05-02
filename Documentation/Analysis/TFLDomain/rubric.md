# **Transflower-style Student Assessment Rubric** focused on **Layered Architecture mastery**.
It is designed for **interns, final-year students, and freshers**, and aligns directly with the **Transflower Learning Framework (TFL)**.

You can use this for:

* Intern evaluations
* Finishing school assessments
* Project reviews
* Mentor dashboards

## 🎓 Transflower Student Assessment Rubric

### Topic: Layered Architecture (ASP.NET / Backend Systems)

> **Assessment philosophy:**
> *“We don’t measure how much code a student writes —
> we measure how well they think, structure, and explain.”*


## 🔶 Assessment Levels (Common Across All Criteria)

```
Level 1 – Awareness        → Knows terms, lacks clarity
Level 2 – Understanding   → Explains concepts correctly
Level 3 – Application     → Implements with guidance
Level 4 – Ownership       → Implements independently & explains impact
```

## 1️⃣ Separation of Concerns

**(TLF Stage: Understanding)**

| Level                 | Observable Student Behavior                               |
| --------------------- | --------------------------------------------------------- |
| **1 – Awareness**     | Knows UI, Business, Data terms but mixes logic            |
| **2 – Understanding** | Explains responsibilities of each layer correctly         |
| **3 – Application**   | Writes separate projects/layers with minimal leakage      |
| **4 – Ownership**     | Enforces boundaries and explains why violations are risky |

### Mentor Checkpoints

- ✔ UI contains no business rules
- ✔ Business layer is framework-agnostic
- ✔ Data logic isolated

## 2️⃣ Code Organization & Project Structure

**(TLF Stage: Application)**

| Level                 | Observable Student Behavior                |
| --------------------- | ------------------------------------------ |
| **1 – Awareness**     | Single project, folders mixed              |
| **2 – Understanding** | Multiple projects but unclear dependencies |
| **3 – Application**   | Clean solution structure with references   |
| **4 – Ownership**     | Explains dependency direction confidently  |

### Expected Structure

```
Web → Application → Domain ← Infrastructure
```

## 3️⃣ Testing & Debugging Approach

**(TLF Stage: Application)**

| Level                 | Observable Student Behavior                |
| --------------------- | ------------------------------------------ |
| **1 – Awareness**     | Relies on console logs                     |
| **2 – Understanding** | Can explain unit vs integration tests      |
| **3 – Application**   | Writes tests for business logic            |
| **4 – Ownership**     | Uses mocks, isolates layers during testing |

### Mentor Question

> “If DB is down, which part can still be tested?”


## 4️⃣ Business Logic Quality

**(TLF Stage: Integration)**

| Level                 | Observable Student Behavior             |
| --------------------- | --------------------------------------- |
| **1 – Awareness**     | Business rules scattered                |
| **2 – Understanding** | Knows rules should be centralized       |
| **3 – Application**   | Implements services with validations    |
| **4 – Ownership**     | Explains rule placement & future impact |

- ✔ Rules live in **Business / Domain Layer**
- ❌ Controllers are thin

## 5️⃣ Scalability & Maintainability Thinking

**(TLF Stage: Integration)**

| Level                 | Observable Student Behavior           |
| --------------------- | ------------------------------------- |
| **1 – Awareness**     | Thinks only about current requirement |
| **2 – Understanding** | Talks about future changes abstractly |
| **3 – Application**   | Designs reusable services             |
| **4 – Ownership**     | Anticipates changes & isolates impact |

### Mentor Scenario

> “If tomorrow a mobile app is added — what changes?”


## 6️⃣ Independent Development Readiness

**(TLF Stage: Ownership)**

| Level                 | Observable Student Behavior        |
| --------------------- | ---------------------------------- |
| **1 – Awareness**     | Needs step-by-step guidance        |
| **2 – Understanding** | Works with mentor checkpoints      |
| **3 – Application**   | Completes layer independently      |
| **4 – Ownership**     | Acts as layer owner, mentors peers |

## 7️⃣ Communication & Explanation Skill

**(TLF Stage: Ownership)**

| Level                 | Observable Student Behavior     |
| --------------------- | ------------------------------- |
| **1 – Awareness**     | Struggles to explain code       |
| **2 – Understanding** | Explains with prompts           |
| **3 – Application**   | Explains flow clearly           |
| **4 – Ownership**     | Explains trade-offs & decisions |

### Key Transflower Rule

> *If you can’t explain your layer, you don’t own it.*

## 🧠 Overall Scoring Matrix (Mentor View)

```
+-------------------------------+-------+
| Criteria                      | Score |
+-------------------------------+-------+
| Separation of Concerns        | /4    |
| Project Structure             | /4    |
| Testing & Debugging           | /4    |
| Business Logic Design         | /4    |
| Scalability Thinking          | /4    |
| Independent Development       | /4    |
| Communication                 | /4    |
+-------------------------------+-------+
| TOTAL                         | /28   |
```

## 🎯 Interpretation of Scores

| Score Range | Transflower Readiness   |
| ----------- | ----------------------- |
| **0–10**    | Needs Foundation        |
| **11–18**   | Trainable Intern        |
| **19–24**   | Industry-Ready Junior   |
| **25–28**   | Mentor-in-the-Making 🌱 |


## 🌱 Mentor’s Closing Note

> “This rubric does not punish mistakes.
> It rewards **clarity, structure, and responsibility**.”

Students evaluated this way:

* Stop memorizing frameworks
* Start thinking like engineers
* Become **employable, not just certified**


If you want next:

* 🔹 Convert this into **Google Sheet / LMS format**
* 🔹 Create **auto-evaluation checklist for students**
* 🔹 Design **mentor dashboard widgets**
* 🔹 Add **real interview mapping**

Just guide me 👍