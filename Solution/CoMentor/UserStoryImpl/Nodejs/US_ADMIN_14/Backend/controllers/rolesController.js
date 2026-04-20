class RolesController {
  constructor(service) {
    this.service = service;
  }

  updateUserRoles(req, res, next) {
    const userId = Number(req.params.userId || req.body.user_id);
    const { role_ids } = req.body;

    this.service.updateUserRoles(userId, role_ids, (err, result) => {
      if (err) return next(err);
      res.status(200).json(result);
    });
  }
}

module.exports = RolesController;
