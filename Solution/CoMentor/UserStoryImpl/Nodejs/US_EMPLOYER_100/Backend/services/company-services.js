class CompanyService {
  constructor(repo) {
    this.repo = repo;
  }

  getCompanyProfile(company_id, callback) {
    this.repo.getCompanyById(company_id, callback);
  }
}

module.exports = CompanyService;