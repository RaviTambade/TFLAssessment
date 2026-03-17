//Place all the md files here

# 5. Hands-on Table (Hands-on)

Stores hands-on Hands-ons.

## Table: Hands-on

| Field | Description |
|------|-------------|
| id | Primary key |
| learningTrackId | Foreign key referencing Learning Track |
| title | Hands-on title |
| description | Hands-on description |
| duration | Estimated timespan |

---

# 6. Hands-on Submission Table

Stores student Hands-on submissions.

## Table: Hands-on_submission

| Field | Description |
|------|-------------|
| id | Primary key |
| Hands-on_id | Foreign key referencing Hands-on |
| student_id | Foreign key referencing student |
| github_link | GitHub submission link |
| submitted_at | Submission timestamp |

---

# 3. Learning Track Table

Stores learning track information.

## Table: Learning Track

| Field | Description |
|------|-------------|
| learningTrackId | Primary key |
| learningTrackName | Learning track name |
| description | Learning track description |
| language_id | Linked language |
| runtime | Runtime environment |
| technology | Technologies used |
| layer | Layer type |
| technologyMap | Technology combination |
| concepts | Covered concepts |

---

# 4. Student Learning Track Table

Mapping between students and learning tracks.

## Table: student_learning_track

| Field | Description |
|------|-------------|
| id | Primary key |
| studentID | Foreign key referencing Student |
| learningTrackId | Foreign key referencing Learning Track |
| progressId | Progress tracking id |
| enrolledDate | Enrollment date |