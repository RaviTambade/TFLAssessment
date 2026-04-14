class SmeController {
  constructor(service) {
    this.service = service;
  }

  getFailedStudents(req, res) {
    this.service.getStudentsNeedingImprovement((err, data) => {
      if (err) {
        console.error("Controller Error:", err);

        return res.status(500).json({
          success: false,
          message: "Error retrieving student data",
        });
      }

      res.status(200).json({
        success: true,
        count: data.length,
        data: data,
      });
    });
  }
}

module.exports = SmeController;