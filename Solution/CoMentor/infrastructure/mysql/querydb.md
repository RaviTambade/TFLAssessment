## SQL statements with explanations

### `evaluationcontentmanagement.repository.impl.QuestionsRepositoryImpl`

- `SELECT * FROM questions WHERE question_id = ?`
  - Retrieves a single question row by its primary key `question_id`.

- `SELECT * FROM questions`
  - Returns all questions in the `questions` table.

- `SELECT * FROM questions WHERE difficulty_level = ?`
  - Returns questions filtered by the given difficulty level.

- `SELECT question_id, question_type, description FROM questions WHERE question_type = ? ORDER BY question_id`
  - Retrieves question ID, type, and description for questions of a specific type, ordered by ID.

- `INSERT INTO questions(description, question_type, difficulty_level, status, created_at) VALUES (?, ?, ?, 'DRAFT', NOW())`
  - Inserts a new question record with draft status and current timestamp.

- `INSERT INTO mcq_options(option_a, option_b, option_c, option_d, correct_answer, question_id) VALUES (?, ?, ?, ?, ?, ?)`
  - Inserts multiple-choice answer options for a question, linked by `question_id`.

- `SELECT * FROM questions WHERE status='DRAFT'`
  - Fetches all questions whose status is currently `DRAFT`.

- `UPDATE questions SET status='APPROVED' WHERE question_id=?`
  - Marks a specific question as approved.

- `UPDATE questions SET status='INACTIVE' WHERE question_id=?`
  - Marks a specific question as inactive/rejected.

- `UPDATE questions SET status='APPROVED' WHERE status='DRAFT'`
  - Approves all draft questions in bulk.

- `UPDATE questions SET status='INACTIVE' WHERE status='DRAFT'`
  - Rejects/inactivates all draft questions in bulk.

- `SELECT * FROM questions where status='DRAFT' AND created_at >= NOW() - INTERVAL 2 DAY ORDER BY created_at DESC`
  - Gets draft questions created within the last 2 days, newest first.

- `SELECT question_id, description FROM questions WHERE status='DRAFT'`
  - Returns only ID and description for draft questions.

- `SELECT question_id, description FROM questions WHERE created_at >= NOW() - INTERVAL 2 DAY ORDER BY created_at DESC`
  - Returns recent questions created in the last 2 days with ID and description, newest first.

- `SELECT * FROM mcq_options WHERE question_id=?`
  - Loads the multiple-choice options for a specific question.

- `UPDATE questions SET description=?, question_type=?, difficulty_level=? WHERE question_id=?`
  - Updates the text, type, and difficulty of a specific question.

- `UPDATE mcq_options SET option_a=?, option_b=?, option_c=?, option_d=?, correct_answer=? WHERE question_id=?`
  - Updates the MCQ option values for a specific question.

---

### `skilltaxonomy.repository.impl.ConceptsRepository`

- `SELECT  DISTINCT c.id, c.name, c.description FROM concepts c`
  - Returns all distinct concepts with their ID, name, and description.

- `SELECT  DISTINCT r.id, r.runtime_name FROM runtimes r`
  - Returns all distinct runtimes with their ID and name.

- `SELECT DISTINCT l.id, l.language, l.runtime_id FROM languages l WHERE l.runtime_id=?`
  - Returns languages associated with a specific runtime.

- `SELECT DISTINCT l.id, l.layers from layers l `
  - Returns all distinct layer records.

- `SELECT DISTINCT f.id, f.name from frameworks f WHERE f.language_id = ? AND f.layer_id = ?`
  - Returns frameworks filtered by a specific language and layer.

- `SELECT DISTINCT c.id, c.name, c.description from concepts c JOIN framework_concepts fc ON fc.concept_id=c.id JOIN frameworks f ON f.id=fc.framework_id WHERE f.name=?`
  - Fetches concepts linked to a specific framework name through the join table.

- `SELECT * FROM concepts WHERE id = ?`
  - Retrieves a concept row by its ID.

- `SELECT q.question_id, q.description, q.question_type FROM questions q JOIN question_framework_concepts qfc ON q.question_id = qfc.question_id JOIN framework_concepts fc ON qfc.framework_concepts_id = fc.id WHERE fc.concept_id = ?;`
  - Returns questions associated with a given concept via framework-concept relationships.

---

### `skilltaxonomy.repository.impl.RuntimesRepositoryImpl`

- `SELECT runtime_name FROM runtimes`
  - Returns names of all runtimes available in the runtimes table.

- `insert into runtimes (runtime_name) values(?)`
  - Adds a new runtime record with the provided name.