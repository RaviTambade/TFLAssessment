class RolesController {

  //parameterized constructor to inject services dependency
  constructor(service) {
    this.service = service;
  }


  updateUserRoles(req, res) {
    const { user_id, role_ids } = req.body;
    this.service.updateUserRoles(user_id, role_ids, (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    });
  }

}

module.exports = RolesController;
