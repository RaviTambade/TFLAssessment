class UserProfileResponseDto {
  constructor({
    userId,
    contact,
    status,
    firstName,
    lastName,
    gender,
    dateOfBirth,
    email,
    streamName,
    specialization,
    enrollmentYear,
    passingYear,
    percentage,
    collegeName,
    skills,
  }) {
    this.userId = userId;
    this.contact = contact;
    this.status = status;
    this.personalInformation = {
      firstName,
      lastName,
      fullName: `${firstName} ${lastName}`.trim(),
      gender,
      dateOfBirth,
      email,
    };
    this.academicInformation = {
      streamName,
      specialization,
      enrollmentYear,
      passingYear,
      percentage,
      collegeName,
    };
    this.professionalInformation = {
      skills,
    };
  }

  static fromDbRow(row) {
    if (!row) return null;

    return new UserProfileResponseDto({
      userId: row.userId || row.user_id,
      contact: row.contact,
      status: row.status,
      firstName: row.first_name || row.firstName,
      lastName: row.last_name || row.lastName,
      gender: row.gender,
      dateOfBirth: row.date_of_birth || row.dateOfBirth,
      email: row.email,
      streamName: row.stream_name || row.streamName,
      specialization: row.specialization,
      enrollmentYear: row.enrollment_year || row.enrollmentYear,
      passingYear: row.passing_year || row.passingYear,
      percentage: row.percentage,
      collegeName: row.college_name || row.collegeName,
      skills: row.skills,
    });
  }
}

module.exports = UserProfileResponseDto;