class StudentController {
  constructor(service) {
    this.service = service;
  }

  changePassword(req, res) {
    const { id, oldPassword, newPassword } = req.body;

    if (!id || !oldPassword || !newPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    this.service.changePassword(id, oldPassword, newPassword, (err, result) => {
      if (err) return res.status(500).json(err);

      res.status(result.status).json({ message: result.message });
    });
  }
}

module.exports = StudentController;