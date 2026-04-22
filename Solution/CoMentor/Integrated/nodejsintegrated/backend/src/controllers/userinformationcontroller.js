class UserInformationController {
  constructor(service) {
    this.service = service;
  }

  getEmployerProfile(req, res) {
    const userId = parseInt(req.params.id);
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID",
      });
    }
    this.service.getEmployerProfile(userId, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message || "Server error",
        });
      }
      res.json({
        success: true,
        data: result
      });
    });
  }

  getAdminProfile(req, res) {
    const userId = parseInt(req.params.id);
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID",
      });
    }
    this.service.getAdminProfile(userId, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message || "Server error",
        });
      }
      res.json({
        success: true,
        data: result
      });
    });
  }
  getSMEProfile(req, res) {
    const userId = parseInt(req.params.id);
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID",
      });
    }
    this.service.getSMEProfile(userId, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message || "Server error",
        });
      }
      res.json({
        success: true,
        data: result
      });
    });
  }

  updateUserStatus(req, res) {
    const { id, status } = req.body;
    const userId = parseInt(id);

    if (!Number.isInteger(userId) || userId <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID",
      });
    }

    this.service.updateUserStatus(userId, status, (err, result) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: err.message,
        });
      }

      res.json({
        success: true,
        message: "User status updated successfully",
        data: result,
      });
    });
  }


update(req, res) {
  const userId = req.params.user_id;
  const data = this._buildFullProfile(req.body);

  this.service.update(userId, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Update failed",
        error: err.message,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: result,
    });
  });
}

updateUser(req, res) {
  const userId = req.params.user_id;
  const data = this._buildFullProfile(req.body);

  this.service.updateUser(userId, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Update failed",
        error: err.message,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: result,
    });
  });
}

async updateProfile(req, res) {
  const userId = req.params.user_id;
  const data = this._buildFullProfile(req.body);

  return this._handleUpdate(req, res, () =>
    new Promise((resolve, reject) => {
      this.service.updateProfile(userId, data, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    })
  );
}

async updatePersonInformation(req, res) {
  const userId = req.params.user_id;

  const data = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    gender: req.body.gender,
    date_of_birth: req.body.date_of_birth,
    email: req.body.email,
    address: req.body.address,
    pincode: req.body.pincode
  };

  return this._handleUpdate(req, res, () =>
    new Promise((resolve, reject) => {
      this.service.updatePersonInformation(userId, data, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    })
  );
}

async updateProfessionalInformation(req, res) {
  const userId = req.params.user_id;

  const data = {
    company_name: req.body.company_name,
    job_title: req.body.job_title,
    employment_type: req.body.employment_type,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    is_current_job: req.body.is_current_job,
    experience_years: req.body.experience_years,
    location: req.body.location,
    skills: req.body.skills
  };

  return this._handleUpdate(req, res, () =>
    new Promise((resolve, reject) => {
      this.service.updateProfessionalInformation(userId, data, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    })
  );
}

async updateAcademicInformation(req, res) {
  const userId = req.params.user_id;

  const data = {
    stream_name: req.body.stream_name,
    specialization: req.body.specialization,
    enrollment_year: req.body.enrollment_year,
    passing_year: req.body.passing_year,
    percentage: req.body.percentage,
    college_name: req.body.college_name
  };

  return this._handleUpdate(req, res, () =>
    new Promise((resolve, reject) => {
      this.service.updateAcademicInformation(userId, data, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    })
  );
}

  async _handleUpdate(req, res, action) {
    try {
      await action()
      return res.status(200).json({
        success: true,
        message: "Profile updated successfully"
      })
    } catch (err) {
      console.error(err)
      return res.status(500).json({
        success: false,
        message: "Update failed",
        error: err.message
      })
    }
  }
}

  



module.exports = UserInformationController;