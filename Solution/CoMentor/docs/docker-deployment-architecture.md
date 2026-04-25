# 🐳 TFL CoMentor – Docker Deployment Architecture

Now we move from **logical architecture** to **deployment architecture** — this is where students start thinking like DevOps engineers.


## 🖥 Single VM / Single Server Deployment (Docker Compose Model)

```ascii
                                 ┌─────────────────────────────┐
                                 │         Client Layer        │
                                 │  Browser / Mobile / Postman │
                                 └──────────────┬──────────────┘
                                                │
                                                ▼
                               ┌────────────────────────────────┐
                               │        NGINX Container         │
                               │  (Reverse Proxy / API Gateway) │
                               │  Port: 80 / 443                │
                               └──────────────┬─────────────────┘
                                              │
      ────────────────────────────────────────┼───────────────────────────────────────
                                              │
                                              ▼

 ┌────────────────────────────────────────────────────────────────────────────────────┐
 │                               DOCKER NETWORK (tfl-network)                         │
 │                                                                                    │
 │  ┌──────────────────────────┐      ┌────────────────────────────┐                  │
 │  │ Skill Taxonomy Service   │      │ Evaluation Content Service │                  │
 │  │  (Java - Spring Boot)    │      │  (Java - Spring Boot)      │                  │
 │  │  Container: taxonomy     │      │  Container: content        │                  │
 │  │  Port: 8081              │      │  Port: 8082                │                  │
 │  └──────────────┬───────────┘      └──────────────┬─────────────┘                  │
 │                 │                                  │                               │
 │  ┌──────────────▼───────────┐      ┌──────────────▼─────────────┐                  │
 │  │ MySQL Container          │      │ MySQL Container             │                 │
 │  │ skill_taxonomy_db        │      │ evaluation_content_db       │                 │
 │  │ Port: 3307               │      │ Port: 3308                  │                 │
 │  └──────────────────────────┘      └────────────────────────────┘                  │
 │                                                                                    │
 │  ┌──────────────────────────┐      ┌────────────────────────────┐                  │
 │  │ Assessment Orchestrator  │      │ Evaluation Service         │                  │
 │  │ (.NET Core API)          │      │ (Node.js + Express)        │                  │
 │  │ Container: orchestrator  │      │ Container: evaluation      │                  │
 │  │ Port: 5001               │      │ Port: 3001                 │                  │
 │  └──────────────┬───────────┘      └──────────────┬─────────────┘                  │
 │                 │                                 │                                │
 │  ┌──────────────▼───────────┐      ┌──────────────▼─────────────┐                  │
 │  │ MySQL Container          │      │ MySQL Container            │                  │
 │  │ assessment_db            │      │ evaluation_service_db      │                  │
 │  │ Port: 3309               │      │ Port: 3310                 │                  │
 │  └──────────────────────────┘      └────────────────────────────┘                  │
 │                                                                                    │
 │  ┌──────────────────────────┐      ┌────────────────────────────┐                  │
 │  │ Membership Service       │      │ Insight Core (Future)      │                  │
 │  │ (Java + Security)        │      │ (.NET Analytics API)       │                  │
 │  │ Port: 8083               │      │ Port: 5002                 │                  │
 │  └──────────────┬───────────┘      └──────────────┬─────────────┘                  │
 │                 │                                  │                               │
 │  ┌──────────────▼───────────┐      ┌──────────────▼─────────────┐                  │
 │  │ MySQL Container          │      │ MySQL Container             │                 │
 │  │ membership_db            │      │ insight_core_db             │                 │
 │  │ Port: 3311               │      │ Port: 3312                  │                 │
 │  └──────────────────────────┘      └────────────────────────────┘                  │
 │                                                                                    │
 │  ┌──────────────────────────┐                                                      │
 │  │ Growth Engine (Future)   │                                                      │
 │  │ (Python + FastAPI)       │                                                      │
 │  │ Port: 8001               │                                                      │
 │  └──────────────┬───────────┘                                                      │
 │                 │                                                                  │
 │  ┌──────────────▼───────────┐                                                      │
 │  │ growth_engine_db         │                                                      │
 │  │ MySQL Container          │                                                      │
 │  │ Port: 3313               │                                                      │
 │  └──────────────────────────┘                                                      │
 │                                                                                    │
 └────────────────────────────────────────────────────────────────────────────────────┘
```


# 🔐 Key Docker Concepts To Teach Students

## 1️⃣ Each Microservice → Separate Container

* Independent runtime
* Independent scaling
* Language agnostic
* Fault isolation



## 2️⃣ Each Service Has Its Own Database Container

This enforces:

- ✔ Database per service pattern
- ✔ No cross DB joins
- ✔ True microservice discipline



## 3️⃣ Shared Docker Network

All containers connect via:

```
docker network create tfl-network
```

Services communicate using container names:

```
http://taxonomy:8081
http://orchestrator:5001
```

 

## 4️⃣ Docker Volumes (Persistent Storage)

Each MySQL container uses:

```
volumes:
  - taxonomy_data:/var/lib/mysql
```

So data survives container restart.

 

# 🧠 How To Explain This To Students (Mentor Mode)

### 🏢 Real World Analogy

| Component      | Analogy                     |
| -------------- | --------------------------- |
| Docker Host    | College Campus              |
| Containers     | Departments                 |
| Docker Network | Internal communication road |
| MySQL Volume   | Department filing cabinet   |
| NGINX          | Main gate security          |


# 🚀 Production Upgrade Path 

After this, you can learn:

1. Docker Compose file
2. Environment variables (.env)
3. Multi-stage builds
4. Container health checks
5. Centralized logging (ELK)
6. Redis caching
7. RabbitMQ async communication
8. Kubernetes deployment

