const pool = require('../db');
const AssignedMentor = require('../models/AssignedMentor');

class AssignedMentorRepository {
  async getAssignedMentorByStudentId(studentId) {
    const query = `
      SELECT
        m.id AS mentorId,
        m.contact AS mentorContact,
        m.status AS mentorStatus,
        mm.assigned_on AS assignedOn
      FROM mentor_mentees mm
      JOIN users m ON mm.mentor_id = m.id
      WHERE mm.mentee_id = ?
      ORDER BY mm.assigned_on DESC
      LIMIT 1
    `;

    const [rows] = await pool.execute(query, [studentId]);

    if (!rows || rows.length === 0) {
      return null;
    }

    return new AssignedMentor(rows[0]);
  }
}

module.exports = new AssignedMentorRepository();
