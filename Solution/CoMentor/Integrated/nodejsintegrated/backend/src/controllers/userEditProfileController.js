class UserProfileController {


  constructor(profileService) {
    this.profileService = profileService

    this.updateProfile = this.updateProfile.bind(this)
    this.update = this.update.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.updatePersonInformation = this.updatePersonInformation.bind(this)
    this.updateProfessionalInformation = this.updateProfessionalInformation.bind(this)
    this.updateProfessinalInformation = this.updateProfessinalInformation.bind(this)
    this.updateAcademicInformation = this.updateAcademicInformation.bind(this)
  }

  async updateProfile(req, res) {
    const userId = req.params.user_id
    const data = this._buildFullProfile(req.body)
    return this._handleUpdate(req, res, () => this.profileService.updateProfile(userId, data))
  }

  async update(req, res) {
    const userId = req.params.user_id
    const data = this._buildFullProfile(req.body)
    return this._handleUpdate(req, res, () => this.profileService.update(userId, data))
  }

  async updateUser(req, res) {
    const userId = req.params.user_id
    const data = this._buildFullProfile(req.body)
    return this._handleUpdate(req, res, () => this.profileService.updateUser(userId, data))
  }

  async updatePersonInformation(req, res) {
    const userId = req.params.user_id
    const data = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      gender: req.body.gender,
      date_of_birth: req.body.date_of_birth,
      email: req.body.email,
      address: req.body.address,
      pincode: req.body.pincode
    }
    return this._handleUpdate(req, res, () => this.profileService.updatePersonInformation(userId, data))
  }

  async updateProfessionalInformation(req, res) {
    const userId = req.params.user_id
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
    }
    return this._handleUpdate(req, res, () => this.profileService.updateProfessionalInformation(userId, data))
  }

  async updateProfessinalInformation(req, res) {
    return this.updateProfessionalInformation(req, res)
  }

  async updateAcademicInformation(req, res) {
    const userId = req.params.user_id
    const data = {
      stream_name: req.body.stream_name,
      specialization: req.body.specialization,
      enrollment_year: req.body.enrollment_year,
      passing_year: req.body.passing_year,
      percentage: req.body.percentage,
      college_name: req.body.college_name
    }
    return this._handleUpdate(req, res, () => this.profileService.updateAcademicInformation(userId, data))
  }

  _buildFullProfile(body) {
    return {
      // Personal
      first_name: body.first_name,
      last_name: body.last_name,
      gender: body.gender,
      date_of_birth: body.date_of_birth,
      email: body.email,
      address: body.address,
      pincode: body.pincode,

      // Professional
      company_name: body.company_name,
      job_title: body.job_title,
      employment_type: body.employment_type,
      start_date: body.start_date,
      end_date: body.end_date,
      is_current_job: body.is_current_job,
      experience_years: body.experience_years,
      location: body.location,
      skills: body.skills,

      // Academic
      stream_name: body.stream_name,
      specialization: body.specialization,
      enrollment_year: body.enrollment_year,
      passing_year: body.passing_year,
      percentage: body.percentage,
      college_name: body.college_name
    }
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

module.exports = UserProfileController