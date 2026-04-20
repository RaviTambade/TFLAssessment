const UpdateUserRolesRequest = require('../dto/UpdateUserRolesRequest');
const UpdateUserRolesResponse = require('../dto/UpdateUserRolesResponse');

class RolesController {
  constructor(service) {
    this.service = service;
  }

  updateUserRoles(req, res, next) {
    const userId = Number(req.params.userId || req.body.user_id);
    const { role_ids } = req.body;

    const requestDto = new UpdateUserRolesRequest(userId, role_ids);

    this.service.updateUserRoles(requestDto, (err, result) => {
      if (err) return next(err);
      res.status(200).json(result);
    });
  }
}

module.exports = RolesController;
