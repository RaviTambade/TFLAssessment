const assignedMentorRepository = require('../repository/AssignedMentorRepository');

class AssignedMentorController {
  async getAssignedMentor(req, res, next) {
    try {
      const studentId = Number(req.params.studentId);
      if (!studentId || Number.isNaN(studentId)) {
        return res.status(400).json({ message: 'Invalid studentId parameter' });
      }

      const assignedMentor = await assignedMentorRepository.getAssignedMentorByStudentId(studentId);
      if (!assignedMentor) {
        return res.status(404).json({ message: 'No mentor assigned to this student yet.' });
      }

      return res.json(assignedMentor);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new AssignedMentorController();
