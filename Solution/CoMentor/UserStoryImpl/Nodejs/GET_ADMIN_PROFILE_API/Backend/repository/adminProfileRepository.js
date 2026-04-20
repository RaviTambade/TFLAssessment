class AdminProfileRepository {
  constructor(db) {
    this.db = db;
  }

  getAdminProfile(userId, callback) {
    const query = `
      SELECT 
        pinfo.user_id,
        pinfo.first_name,
        pinfo.last_name,
        pinfo.full_name,
        pinfo.gender,
        pinfo.date_of_birth,
        pinfo.email,
        pinfo.address,
        pinfo.pincode,
        pi.id AS professional_id,
        pi.company_name,
        pi.job_title,
        pi.employment_type,
        pi.start_date,
        pi.end_date,
        pi.is_current_job,
        pi.experience_years,
        pi.location,
        pi.skills
      FROM personal_informations pinfo
      LEFT JOIN professional_informations pi
        ON pinfo.user_id = pi.user_id
      JOIN user_roles ur
        ON pinfo.user_id = ur.user_id
      WHERE pinfo.user_id = ?
        AND ur.role_id = 1;
    `;

    this.db.query(query, [userId], (error, rows) => {
      if (error) return callback(error, null);
      if (!rows.length) return callback(null, null);

      const firstRow = rows[0];
      const adminProfile = {
        personalInfo: {
          user_id: firstRow.user_id,
          first_name: firstRow.first_name,
          last_name: firstRow.last_name,
          full_name: firstRow.full_name,
          gender: firstRow.gender,
          date_of_birth: firstRow.date_of_birth,
          email: firstRow.email,
          address: firstRow.address,
          pincode: firstRow.pincode,
        },
        professionalInfo: rows
          .filter((row) => row.professional_id !== null)
          .map((row) => ({
            id: row.professional_id,
            company_name: row.company_name,
            job_title: row.job_title,
            employment_type: row.employment_type,
            start_date: row.start_date,
            end_date: row.end_date,
            is_current_job: row.is_current_job,
            experience_years: row.experience_years,
            location: row.location,
            skills: row.skills,
          })),
      };

      callback(null, adminProfile);
    });
  }
}

module.exports = AdminProfileRepository;
