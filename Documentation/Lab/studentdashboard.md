# 🌱 Transflower TAP Hands‑On Lab

## Building a Student Dashboard (React + Bootstrap)


## 🎯 Lab Purpose (Why this lab exists)

In Transflower TAP, **coding is not the goal — capability is**.

This lab helps learners:

* Think like **product engineers**, not tutorial followers
* Translate **learning theory into working UI**
* Understand how **dashboards reflect learning maturity**
* Build confidence by assembling a **real, industry‑style React application**

> *By the end of this lab, a student should be able to say:*
> **“I can design and build a learning dashboard the way a real company would.”**


## 🧠 TAP Alignment

| TAP Dimension | How this Lab Supports It               |
| ------------- | -------------------------------------- |
| Thinking      | Breaks a large problem into components |
| Application   | React + Bootstrap used practically     |
| Proof         | Running dashboard, not screenshots     |
| Confidence    | Clear ownership of code & structure    |

## 🕒 Lab Duration

**Total Time:** 6 Hours (1 Day)

| Phase                     | Duration |
| ------------------------- | -------- |
| Understanding the Problem | 45 min   |
| UI Decomposition          | 45 min   |
| Component Development     | 2.5 hrs  |
| Routing & Navigation      | 1 hr     |
| Review & Reflection       | 45 min   |

## 📦 Problem Statement (Given to Students)

> You are part of the **Transflower Learning Platform team**.
> Your task is to build a **Student Dashboard** that helps learners:
>
> * See their skill health
> * Track project progress
> * Understand mentor feedback
> * Know exactly what to do next
>
> The dashboard must be:
>
> * Component‑based
> * Route‑driven
> * Clean and readable


## 🧩 Expected Features

### Dashboard must include:

* Sidebar navigation
* Student header (identity + goal)
* Skill health snapshot
* Project progress
* Learning path timeline
* Assessment summary
* Confidence meter
* Next actions panel

## 🗂️ Expected Folder Structure

```text
src/
├── components/
│   ├── layout/
│   └── dashboard/
├── pages/
├── App.jsx
└── index.js
```

> ⚠️ No single‑file dashboards allowed.


## 🛠️ Lab Tasks (Step‑by‑Step)

### 🔹 Task 1: Project Setup (30 min)

* Create React app
* Install Bootstrap
* Run application successfully

**Checkpoint:** App runs without errors


### 🔹 Task 2: Layout Components (60 min)

Create:

* `Sidebar` component
* `Header` component

Focus on:

* Readability
* Proper Bootstrap usage

**Checkpoint:** Static layout visible


### 🔹 Task 3: Dashboard Widgets (90 min)

Create separate components:

* SkillHealthCard
* ProjectProgressCard
* LearningPathTimeline
* AssessmentSummary
* ConfidenceMeter
* NextActions

**Rules:**

* Each component in its own file
* No inline JSX overload


### 🔹 Task 4: Page Composition (30 min)

* Create `StudentDashboard` page
* Assemble all components
* Use Bootstrap grid

**Checkpoint:** Dashboard visually balanced


### 🔹 Task 5: Routing (60 min)

* Install `react-router-dom`
* Configure routes:

  * `/dashboard`
  * `/projects`
  * `/assessments`
* Sidebar navigation using `<Link>`

**Checkpoint:** Navigation without page reload


## 🧪 Evaluation Criteria (Mentor View)

| Criteria   | What Mentor Looks For               |
| ---------- | ----------------------------------- |
| Structure  | Clean folders, logical grouping     |
| Ownership  | Student can explain every component |
| Thinking   | Reason for splitting components     |
| UI Sense   | Readable, not flashy                |
| Confidence | Can modify without fear             |

> ❌ Marks are NOT the primary metric.


## 🧠 Reflection Questions (Mandatory)

Students must answer:

1. Why did you split the dashboard into components?
2. Which component was hardest and why?
3. How does routing improve user experience?
4. How would this dashboard help an employer?


## 🚀 Extension Tasks (Optional)

* Convert static data to JSON
* Pass data via props
* Add Mentor Dashboard using same data
* Add Employer projection view

## 🧑‍🏫 Mentor Closing Note

> *“This dashboard is not for display.*
> *It is a mirror — showing where you are and where you must grow.”*

## ✅ Lab Outcome

After this lab, a learner:

* Thinks in components
* Understands dashboards as **decision tools**
* Feels ready to build **real applications**

🌱 **This is Transflower TAP in action.**

# 🌱 Transflower TAP Hands-On Lab Solution

## Student Dashboard (React + Bootstrap)



## Step-by-Step Solution

### 1️⃣ Project Setup

```bash
npx create-react-app tlf-student-dashboard
cd tlf-student-dashboard
npm install bootstrap react-router-dom
npm start
```

Check that the app runs successfully.


### 2️⃣ Folder Structure

```
src/
├── components/
│   ├── layout/Sidebar.jsx
│   ├── layout/Header.jsx
│   ├── dashboard/SkillHealthCard.jsx
│   ├── dashboard/ProjectProgressCard.jsx
│   ├── dashboard/LearningPathTimeline.jsx
│   ├── dashboard/AssessmentSummary.jsx
│   ├── dashboard/ConfidenceMeter.jsx
│   └── dashboard/NextActions.jsx
├── pages/StudentDashboard.jsx
├── pages/Projects.jsx
├── pages/Assessments.jsx
├── App.jsx
└── index.js
```

> This ensures **component-based architecture**.


### 3️⃣ Layout Components

#### Sidebar.jsx

```jsx
import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <div className="col-md-2 bg-dark text-white min-vh-100 p-3">
      <h5>Transflower</h5>
      <ul className="nav flex-column mt-4">
        <li className="nav-item"><Link className="nav-link text-white" to="/dashboard">Dashboard</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to="/projects">Projects</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to="/assessments">Assessments</Link></li>
      </ul>
    </div>
  );
}
```

#### Header.jsx

```jsx
export default function Header() {
  return (
    <div className="card mb-3">
      <div className="card-body d-flex justify-content-between">
        <div>
          <h5>Student Name</h5>
          <small>Target Role: Full Stack Developer</small>
        </div>
        <div>
          <span className="badge bg-success me-2">Readiness: 68%</span>
          <span className="badge bg-warning text-dark">Confidence: Medium</span>
        </div>
      </div>
    </div>
  );
}
```


### 4️⃣ Dashboard Components

#### SkillHealthCard.jsx

```jsx
export default function SkillHealthCard() {
  const skills = [
    { name: 'C#', val: 80 },
    { name: 'OOP', val: 65 },
    { name: 'ASP.NET Core', val: 55 },
    { name: 'SQL', val: 75 },
    { name: 'Git', val: 60 },
    { name: 'Cloud', val: 40 },
  ];
  return (
    <div className="card mb-3">
      <div className="card-header">Skill Health</div>
      <div className="card-body">
        {skills.map(skill => (
          <div key={skill.name} className="mb-2">
            <small>{skill.name}</small>
            <div className="progress">
              <div className="progress-bar" style={{ width: skill.val + '%' }}>{skill.val}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

#### ProjectProgressCard.jsx

```jsx
export default function ProjectProgressCard() {
  return (
    <div className="card mb-3">
      <div className="card-header">Project Progress</div>
      <div className="card-body">
        <h6>E-Commerce API (65%)</h6>
        <ul>
          <li>✔ API Design</li>
          <li>✔ Database Schema</li>
          <li>✔ Authentication</li>
          <li>⏳ Exception Handling</li>
          <li>⏳ Deployment</li>
        </ul>
      </div>
    </div>
  );
}
```

#### LearningPathTimeline.jsx

```jsx
export default function LearningPathTimeline() {
  return (
    <div className="card mb-3">
      <div className="card-header">Learning Path</div>
      <div className="card-body">
        <ul>
          <li>✔ C# & OOP</li>
          <li>✔ Web API</li>
          <li>⏳ Integration</li>
          <li>🔒 Cloud & DevOps</li>
        </ul>
      </div>
    </div>
  );
}
```

#### AssessmentSummary.jsx

```jsx
export default function AssessmentSummary() {
  return (
    <div className="card mb-3">
      <div className="card-header">Assessment Summary</div>
      <div className="card-body">
        <p>Last Assessment: Web API</p>
        <p>Score: 72%</p>
        <ul>
          <li>✔ REST understanding</li>
          <li>⚠ Improve error handling</li>
        </ul>
      </div>
    </div>
  );
}
```

#### ConfidenceMeter.jsx

```jsx
export default function ConfidenceMeter() {
  const confidence = [
    { name: 'Concepts', val: 70 },
    { name: 'Coding', val: 60 },
    { name: 'Debugging', val: 65 },
    { name: 'Interview', val: 40 },
  ];
  return (
    <div className="card mb-3">
      <div className="card-header">Confidence Meter</div>
      <div className="card-body">
        {confidence.map(c => (
          <div key={c.name} className="mb-2">
            <small>{c.name}</small>
            <div className="progress">
              <div className="progress-bar bg-info" style={{ width: c.val + '%' }}>{c.val}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

#### NextActions.jsx

```jsx
export default function NextActions() {
  return (
    <div className="card mb-3">
      <div className="card-header">Next Actions</div>
      <div className="card-body">
        <ul>
          <li>Complete Exception Handling Lab</li>
          <li>Refactor APIs</li>
          <li>Practice Interview Questions</li>
          <li>Push code to GitHub</li>
        </ul>
      </div>
    </div>
  );
}
```


### 5️⃣ Page Composition

#### StudentDashboard.jsx

```jsx
import Header from '../components/layout/Header';
import SkillHealthCard from '../components/dashboard/SkillHealthCard';
import ProjectProgressCard from '../components/dashboard/ProjectProgressCard';
import LearningPathTimeline from '../components/dashboard/LearningPathTimeline';
import AssessmentSummary from '../components/dashboard/AssessmentSummary';
import ConfidenceMeter from '../components/dashboard/ConfidenceMeter';
import NextActions from '../components/dashboard/NextActions';

export default function StudentDashboard() {
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-md-6">
          <SkillHealthCard />
          <ProjectProgressCard />
          <AssessmentSummary />
        </div>
        <div className="col-md-6">
          <LearningPathTimeline />
          <ConfidenceMeter />
          <NextActions />
        </div>
      </div>
    </>
  );
}
```


### 6️⃣ Routing Setup

#### App.jsx

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import StudentDashboard from './pages/StudentDashboard';
import Projects from './pages/Projects';
import Assessments from './pages/Assessments';

export default function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-md-10 p-4">
            <Routes>
              <Route path='/' element={<StudentDashboard />} />
              <Route path='/dashboard' element={<StudentDashboard />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/assessments' element={<Assessments />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
```

> Projects.jsx and Assessments.jsx can initially render placeholder content like `<h3>Projects Page</h3>`


### ✅ Lab Outcome

* Fully componentized Student Dashboard
* Sidebar and Header layout implemented
* Six dashboard widgets created
* Routing working for `/dashboard`, `/projects`, `/assessments`
* Ready for API integration
* Students can now explain **component logic, props, and routing**

 