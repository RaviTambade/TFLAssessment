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
       u.contact,
       u.status,
       mm.assigned_on
    FROM mentor_mentees mm
    JOIN users u
       ON mm.mentee_id = u.id
    JOIN user_roles ur
       ON u.id = ur.user_id
    WHERE mm.mentor_id = ?
    AND ur.role_id = 2
  `;

    this.connection.query(query, [id], callback);
  }
}

module.exports = MentorRepository;
