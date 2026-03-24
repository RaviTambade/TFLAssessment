class CompanyController {
  constructor(service) {
    this.service = service;
  }

  getCompanyProfile(req, res) {
    const company_id = parseInt(req.params.company_id);

    if (!company_id) {
      return res.status(400).json({ message: "company_id is required" });
    }

    this.service.getCompanyProfile(company_id, (err, result) => {
      if (err) return res.status(500).json(err);

      if (!result || result.length === 0) {
        return res.status(404).json({ message: "Company not found" });
      }

      res.status(200).json({
        success: true,
        data: result[0],
      });
    });
  }
}

module.exports = CompanyController;