/**
 * User Profile Model/Entity
 * Represents the structure of user profile data
 * OOPS Concept: Encapsulation - Encapsulates user profile data
 */

class UserProfile {
  constructor(
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
    skills
  ) {
    this.userId = userId;
    this.contact = contact;
    this.status = status;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.dateOfBirth = dateOfBirth;
    this.email = email;
    this.streamName = streamName;
    this.specialization = specialization;
    this.enrollmentYear = enrollmentYear;
    this.passingYear = passingYear;
    this.percentage = percentage;
    this.collegeName = collegeName;
    this.skills = skills;
  }

  /**
   * Get full name by combining first and last name
   * @returns {string} Full name
   */
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  /**
   * Convert object to JSON representation
   * @returns {object} JSON object
   */
  toJSON() {
    return {
      userId: this.userId,
      contact: this.contact,
      status: this.status,
      personalInformation: {
        firstName: this.firstName,
        lastName: this.lastName,
        fullName: this.getFullName(),
        gender: this.gender,
        dateOfBirth: this.dateOfBirth,
        email: this.email,
      },
      academicInformation: {
        streamName: this.streamName,
        specialization: this.specialization,
        enrollmentYear: this.enrollmentYear,
        passingYear: this.passingYear,
        percentage: this.percentage,
        collegeName: this.collegeName,
      },
      professionalInformation: {
        skills: this.skills,
      },
    };
  }
}

module.exports = UserProfile;
