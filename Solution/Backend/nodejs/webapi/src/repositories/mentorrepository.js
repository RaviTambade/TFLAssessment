class MentorRepository {
  constructor(connection) {
    this.connection = connection;
  }

  getMenteeCount(id, callback) {
    const query = `
      SELECT COUNT(*) AS menteeCount
FROM mentor_mentees
WHERE mentor_id = 1;
   `;

    this.connection.query(query, [id], callback);
  }

  getMentees(id, callback) {
    const query = `
          SELECT
          u.id,
          pi.full_name AS mentee_name,
          p.project_name AS allocated_project,
          u.contact,
          u.status,
          mm.assigned_on
      FROM mentor_mentees mm
      JOIN users u
          ON mm.mentee_id = u.id
      JOIN user_roles ur
          ON ur.user_id = u.id
      JOIN personal_informations pi
          ON pi.user_id = u.id
      LEFT JOIN project_allocations pa
          ON pa.student_id = u.id
      LEFT JOIN projects p
          ON p.project_id = pa.project_id
      WHERE mm.mentor_id = ?
        AND ur.role_id = 2;
        `;

    this.connection.query(query, [id], callback);
  }
}

module.exports = MentorRepository;
