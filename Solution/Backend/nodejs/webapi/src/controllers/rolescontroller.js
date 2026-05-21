const RoleRequestDto = require("../dtos/requests/roledetails");
const ResponseGenerator = require("../helpers/responseGenerator");

class RolesController {
  constructor(roleService) {
    this.service = roleService;
  }

  getAllRoles(req, res) {
    const responseGenerator = new ResponseGenerator();

    this.service.getAllRoles((err, result) => {
      var errorMessage = "failed to retrive Roles";
      var successMessage = "Retrive roles successful";
      responseGenerator.generateResponse(res, err, result,);
    });
  }

  insert(req, res) {
    const responseGenerator = new ResponseGenerator();
    const role = new RoleRequestDto(req.body.roleName, req.body.description);

    this.service.insert(role, (err, result) => {
      var errorMessage = "failed to add Role";
      var successMessage = "role added successfully";
      responseGenerator.generateResponse(res, err, result, errorMessage, successMessage);
    },
    );
  }

  update(req, res) {
    const responseGenerator = new ResponseGenerator();
    const role = new RoleRequestDto(req.body.roleName, req.body.description);

    this.service.update(req.params.id, role, (err, result) => {
      var errorMessage = "failed to update Role";
      var successMessage = "role updated successfully";
      responseGenerator.generateResponse(res, err, result, errorMessage, successMessage);
    },
    );
  }

  getUserRolesByUserId(req, res) {
    const responseGenerator = new ResponseGenerator();

    this.service.getUserRolesByUserId(req.params.userId, (err, result) => {
      var errorMessage = "Failed to get user's roles";
      var successMessage = "User's roles retrieved successfully";
      responseGenerator.generateResponse(res, err, result, errorMessage, successMessage);
    },
    );
  }

  getUsersByRoleId(req, res) {
    console.log("IN getUsersByRoleId", req.params);

    const responseGenerator = new ResponseGenerator();

    this.service.getUsersByRoleId(req.params.roleId, (err, result) => {
      var errorMessage = "Failed to get users by role";
      var successMessage = "Users retrieved successfully";
      responseGenerator.generateResponse(res, err, result, errorMessage, successMessage);
    },
    );
  }

  assignRole(req, res) {
    const responseGenerator = new ResponseGenerator();

    this.service.assignRole(req.params.userId, req.params.roleId, (err, result) => {
      var errorMessage = "Failed to assign role";
      var successMessage = "Role assigned successfully";
      responseGenerator.generateResponse(res, err, result, errorMessage, successMessage);
    },
    );
  }

  unAssignRole(req, res) {
    const responseGenerator = new ResponseGenerator();

    this.service.unAssignRole(req.params.userId, req.params.roleId, (err, result) => {
      var errorMessage = "Failed to unassign role";
      var successMessage = "Role unassigned successfully";
      responseGenerator.generateResponse(res, err, result, errorMessage, successMessage);
    },
    );
  }
}

module.exports = RolesController;