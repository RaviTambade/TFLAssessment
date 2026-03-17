//Place all the md files here
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


# 37. Company_Alumni Table
## Original Schema

| Column Name | Description |
|------------|------------|
| company_id | Reference to company |
| alumni_id | Reference to alumni |
| name | Alumni name |
| added_at | Timestamp of association |

## Proposed Changes
| Column Name | Change |
|------------|--------|
| company_id | No change |
| alumni_id | No change |
| added_at | Retained |
| name | Removed (redundant) |

---


# 38. Referral Table

| Column Name | Description |
|------------|------------|
| referral_id | Unique referral ID |
| company_id | Company reference |
| candidate_name | Name of candidate |
| email | Candidate email |
| referred_at | Timestamp |

## Proposed Changes
| Column Name | Change |
|------------|--------|
| referral_id | No change |
| company_id | No change |
| candidate_name | Retained |
| email | Retained |
| referred_from | Added (alumni_id reference) |
| referred_at | Retained |

---

# 39. Employer Table

| Column Name | Description |
|------------|------------|
| employer_id | Unique employer ID |
| company_id | Company reference |
| first_name | First name |
| last_name | Last name |
| email | Email |
| phone | Contact number |
| profile_pic_url | Profile image |
| designation | Job title |
| created_at | Created timestamp |
| updated_at | Updated timestamp |

## Proposed Changes
| Column Name | Change |
|------------|--------|
| employer_id | No change |
| company_id | No change |
| first_name | No change |
| last_name | No change |
| email | No change |
| phone | No change |
| profile_pic_url | No change |
| designation | No change |
| created_at | No change |
| updated_at | No change |

---

# 40. Job_Description Table

| Column Name | Description |
|------------|------------|
| job_id | Unique job ID |
| employer_id | Employer reference |
| title | Job title |
| description | Job description |
| location | Job location |
| job_type | Full-time/Part-time |
| salary_min | Minimum salary |
| salary_max | Maximum salary |

## Proposed Schema Changes
| Column Name | Change |
|------------|--------|
| job_id | No change |
| employer_id | No change |
| title | No change |
| description | No change |
| location | No change |
| job_type | No change |
| salary_min | Structured |
| salary_max | Structured |
---

