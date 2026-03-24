class CompanyRepository {
  constructor(connection) {
    this.connection = connection;
  }

  getCompanyById(company_id, callback) {
    const sql = `
      SELECT id, company_name, website, industry, company_type, company_size, description, created_at, updated_at
      FROM companies
      WHERE id = ?
    `;
    this.connection.query(sql, [company_id], callback);
  }
}

module.exports = CompanyRepository;