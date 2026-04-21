const UpdateUserRolesRequest = require('../dtos/requests/updateuserrolesrequest');
const UpdateUserRolesResponse = require('../dtos/responses/UpdateUserRolesResponse');

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
      res.status(200).json({ success: true, message: result.message });
    });
  }
}

module.exports = RolesController;
