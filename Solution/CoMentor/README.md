# 🚀 TFL CoMentor Platform

> A Mentor-Driven, Microservices-Based Learning & Evaluation Ecosystem

TFL CoMentor is a production-style, multi-technology microservices platform designed to help students learn by **building, failing, improving, and evolving** — not by mugging solutions.

This platform simulates a real-world software ecosystem used for:

- Skill taxonomy management
- Question bank & evaluation content
- Test orchestration
- Auto evaluation
- Performance analytics
- AI-driven growth tracking
- Role-based membership management


# 🏗 Architecture Overview

TFL CoMentor follows **Microservices Architecture** with:

- ✅ Database per service
- ✅ API-based communication
- ✅ Technology diversity
- ✅ Dockerized deployment
- ✅ Event-driven ready design

Each service owns its database and communicates via REST APIs (event bus integration planned for future).



# 🧠 Core Philosophy

> Learn by Developing.  
> Learn by Integrating.  
> Learn by Solving Real Architecture Problems.

This platform is intentionally designed to teach:

- Distributed system thinking
- Clean architecture
- Database isolation
- API contracts
- DevOps fundamentals
- Cross-team collaboration

# 🛠 Tech Stack

| Layer | Technology |
|------------------------------|-----------------------------|
| Skill & Membership Services  | Java (Spring Boot)          |
| Assessment & Insight         | .NET Core Web API           |
| Evaluation Engine            | Node.js (Express)           |
| Growth Engine                | Python (FastAPI)            |
| Databases                    | MySQL 8                     |
| Containerization             | Docker & Docker Compose     |
| Messaging (Future)           | RabbitMQ                    |
| API Gateway (Optional)       | Spring Cloud Gateway / YARP |

# 📦 Repository Structure

```

tfl-platform/
│
├── services/
│   ├── skill-taxonomy-service
│   ├── evaluation-content-service
│   ├── assessment-orchestrator-service
│   ├── evaluation-service
│   ├── insight-core-service
│   ├── growth-engine-service
│   └── membership-service
│
├── infrastructure/
│   ├── mysql-init-scripts
│   ├── rabbitmq
│   └── nginx
│
├── docker-compose.yml
└── README.md

````


# 🧩 Microservices Overview

## 🧠 1. Skill Taxonomy Service (Java)

**Purpose:**  
Manages subjects, concepts, skill levels, and prerequisites.

**Database:** `skill_taxonomy_db`



## 📚 2. Evaluation Content Service (Java)

**Purpose:**  
Manages question bank, coding problems, projects, and concept mapping.

**Database:** `evaluation_content_db`



## 🧪 3. Assessment Orchestrator (.NET)

**Purpose:**  
Creates tests, schedules assessments, manages candidate attempts.

**Database:** `assessment_orchestrator_db`



## ⚙️ 4. Evaluation Service (Node.js)

**Purpose:**  
Processes candidate submissions and auto-grading.

**Database:** `evaluation_service_db`



## 📊 5. Insight Core (.NET – Future Phase)

**Purpose:**  
Performance tracking, ranking, analytics dashboards.

**Database:** `insight_core_db`


## 🚀 6. Growth Engine (Python – Future Phase)

**Purpose:**  
AI-driven recommendations and concept improvement tracking.

**Database:** `growth_engine_db`



## 👥 7. Membership & Roles Service (Java)

**Purpose:**  
User authentication, authorization, mentor & SME governance.

**Database:** `membership_db`



# 🐳 How to Run the Platform

## Prerequisites

- Docker
- Docker Compose

## Run All Services

```bash
docker-compose up --build
````

Services will start on:

| Service            | Port |
| ------------------ | ---- |
| Skill Taxonomy     | 8081 |
| Evaluation Content | 8082 |
| Assessment         | 8083 |
| Evaluation Engine  | 8084 |
| Membership         | 8085 |



# 🗄 Database Design Principles

* No cross-database joins
* No shared schemas
* Only external IDs across services
* Event-driven ready
* Scalable & cloud-friendly





Students learn:

* How microservices collaborate
* How APIs integrate
* How to debug containerized systems
* How real-world deployments work
* How multi-language ecosystems coexist

Each team can own a service and work independently — just like industry.



# 🧪 Sample Learning Activities

* Write SQL joins on Skill DB
* Create new question in Evaluation Service
* Publish a test from Assessment Service
* Submit answer via Evaluation Engine
* Generate ranking via Insight Core
* Build recommendation via Growth Engine



# 🔐 Security (Planned)

* JWT Authentication
* Role-Based Access Control (RBAC)
* API Gateway integration
* Service-to-service authentication



# 📡 Future Enhancements

* Event-driven architecture (RabbitMQ)
* Kubernetes deployment
* CI/CD using GitHub Actions
* Monitoring with Prometheus & Grafana
* AI performance prediction models



# 🏫 Designed For

* Engineering Students
* Campus Mentoring Programs
* Full-Stack Training
* Industry-Ready Skill Development
* Architecture-Level Thinking



# 💡 Vision

TFL CoMentor is not just a project.

It is a:

> Learning Operating System
> For Mentors.
> For Students.
> For Real Industry Preparation.



# 👨‍🏫 Mentor

Designed and Architected by
**Ravi Tambade**
Mentor | Architect | Industry Trainer



# 📜 License

Educational & Research Purpose Only

```



Changes suggested by RT