
# SQL statements found in TFLComentor Java repositories

### `evaluationcontentmanagement.repository.impl.QuestionsRepositoryImpl`

- `SELECT * FROM questions WHERE question_id = ?`
  - Retrieves a single question by its primary key `question_id`.
- `SELECT * FROM questions`
  - Returns every question row from the `questions` table.
- `SELECT * FROM questions WHERE difficulty_level = ?`
  - Filters questions by the requested difficulty level.
- `SELECT question_id, question_type, description FROM questions WHERE question_type = ? ORDER BY question_id`
  - Retrieves IDs, types, and descriptions for questions of one type, sorted by question ID.
- `INSERT INTO questions(description, question_type, difficulty_level, status, created_at) VALUES (?, ?, ?, 'DRAFT', NOW())`
  - Inserts a new question with draft status and current timestamp.
- `INSERT INTO mcq_options(option_a, option_b, option_c, option_d, correct_answer, question_id) VALUES (?, ?, ?, ?, ?, ?)`
  - Stores MCQ answer options linked to the question ID.
- `SELECT * FROM questions WHERE status='DRAFT'`
  - Returns only questions that are currently in the draft state.
- `UPDATE questions SET status='APPROVED' WHERE question_id=?`
  - Changes one question's status to approved.
- `UPDATE questions SET status='INACTIVE' WHERE question_id=?`
  - Marks one question as inactive/rejected.
- `UPDATE questions SET status='APPROVED' WHERE status='DRAFT'`
  - Approves all questions that are currently drafts.
- `UPDATE questions SET status='INACTIVE' WHERE status='DRAFT'`
  - Rejects or deactivates all draft questions.
- `SELECT * FROM questions where status='DRAFT' AND created_at >= NOW() - INTERVAL 2 DAY ORDER BY created_at DESC`
  - Fetches draft questions created in the last 2 days, newest first.
- `SELECT question_id, description FROM questions WHERE status='DRAFT'`
  - Returns only IDs and descriptions for draft questions.
- `SELECT question_id, description FROM questions WHERE created_at >= NOW() - INTERVAL 2 DAY ORDER BY created_at DESC`
  - Returns recent questions created within 2 days, newest first.
- `SELECT * FROM mcq_options WHERE question_id=?`
  - Loads MCQ option details for a specific question ID.
- `UPDATE questions SET description=?, question_type=?, difficulty_level=? WHERE question_id=?`
  - Updates the text, type, and difficulty level of a specific question.
- `UPDATE mcq_options SET option_a=?, option_b=?, option_c=?, option_d=?, correct_answer=? WHERE question_id=?`
  - Updates the MCQ options for a specific question.

### `skilltaxonomy.repository.impl.ConceptsRepository`

- `SELECT  DISTINCT c.id, c.name, c.description FROM concepts c`
  - Returns all distinct concepts with their ID, name, and description.
- `SELECT  DISTINCT r.id, r.runtime_name FROM runtimes r`
  - Returns all distinct runtime entries with ID and runtime name.
- `SELECT DISTINCT l.id, l.language, l.runtime_id FROM languages l WHERE l.runtime_id=?`
  - Retrieves languages tied to a specific runtime.
- `SELECT DISTINCT l.id, l.layers from layers l `
  - Returns all distinct layer records.
- `SELECT DISTINCT f.id, f.name from frameworks f WHERE f.language_id = ? AND f.layer_id = ?`
  - Retrieves frameworks filtered by a specific language and layer.
- `SELECT DISTINCT c.id, c.name, c.description from concepts c JOIN framework_concepts fc ON fc.concept_id=c.id JOIN frameworks f ON f.id=fc.framework_id WHERE f.name=?`
  - Fetches concepts associated with a given framework name.
- `SELECT * FROM concepts WHERE id = ?`
  - Retrieves a concept by its ID.
- `SELECT q.question_id, q.description, q.question_type FROM questions q JOIN question_framework_concepts qfc ON q.question_id = qfc.question_id JOIN framework_concepts fc ON qfc.framework_concepts_id = fc.id WHERE fc.concept_id = ?;`
  - Loads questions linked to a specific concept through framework-concept relationships.

### `skilltaxonomy.repository.impl.RuntimesRepositoryImpl`

- `SELECT runtime_name FROM runtimes`
  - Returns the runtime names stored in the `runtimes` table.
- `insert into runtimes (runtime_name) values(?)`
  - Inserts a new runtime entry with the provided runtime name.

