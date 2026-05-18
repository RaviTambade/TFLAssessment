const RoleRequestDto = require("../dtos/requests/roledetails");
const ResponseGenerator = require("../helpers/responseGenerator");

class RolesController {
  constructor(roleService) {
    this.service = roleService;
  }

  getAllRoles(req, res) {
    const responseGenerator = new ResponseGenerator();

    const result = this.service.getAllRoles((err, result) => {
      var successMessage = "failed to retrive Roles";
      var errorMessage = "Retrive roles successful";
      responseGenerator.generateResponse(res, err, result, successMessage, errorMessage);
    });
  }

  insert(req, res) {
    const responseGenerator = new ResponseGenerator();
    const role = new RoleRequestDto(req.body.roleName, req.body.description);

    const result = this.service.insert(
      role,
      (err, result) => {
        var successMessage = "failed to add Role";
        var errorMessage = "role added successfully";
        responseGenerator.generateResponse(res, err, result, successMessage, errorMessage);
      },
    );
  }

  update(req, res) {
    const responseGenerator = new ResponseGenerator();
    const role = new RoleRequestDto(req.body.roleName, req.body.description);

    const result = this.service.update(
      req.params.id,
      role,
      (err, result) => {
        var successMessage = "failed to update Role";
        var errorMessage = "role updated successfully";
        responseGenerator.generateResponse(res, err, result, successMessage, errorMessage);
      },
    );
  }

  getUserRolesByUserId(req, res) {
    const responseGenerator = new ResponseGenerator();

    const result = this.service.getUserRolesByUserId(
      req.params.userId,
      (err, result) => {
        var successMessage = "Failed to get user's roles";
        var errorMessage = "User's roles retrieved successfully";
        responseGenerator.generateResponse(res, err, result, successMessage, errorMessage);
      },
    );
  }

  getUsersByRoleId(req, res) {
    console.log("IN getUsersByRoleId", req.params);

    const responseGenerator = new ResponseGenerator();

    const result = this.service.getUsersByRoleId(
      req.params.roleId,
      (err, result) => {
        var successMessage = "Failed to get users by role";
        var errorMessage = "Users retrieved successfully";
        responseGenerator.generateResponse(res, err, result, successMessage, errorMessage);
      },
    );
  }

  assignRole(req, res) {
    const responseGenerator = new ResponseGenerator();

    const result = this.service.assignRole(
      req.params.userId,
      req.params.roleId,
      (err, result) => {
        var successMessage = "Failed to assign role";
        var errorMessage = "Role assigned successfully";
        responseGenerator.generateResponse(res, err, result, successMessage, errorMessage);
      },
    );
  }

  unAssignRole(req, res) {
    const responseGenerator = new ResponseGenerator();

    const result = this.service.unAssignRole(
      req.params.userId,
      req.params.roleId,
      (err, result) => {
        var successMessage = "Failed to unassign role";
        var errorMessage = "Role unassigned successfully";
        responseGenerator.generateResponse(res, err, result, successMessage, errorMessage);
      },
    );
  }
}

module.exports = RolesController;