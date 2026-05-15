const RoleRequestDto = require("../dtos/requests/RoleRequestDto");
const ResponseGenerator = require("../helpers/responseGenerator");

class RolesController {
  constructor(roleService) {
    this.service = roleService;
  }

  getAllRoles(req, res) {
    const responseGenerator = new ResponseGenerator();
    this.service.getAllRoles((err, result) => {
      responseGenerator.generateResponse(
        res,
        err,
        result,
        "failed to retrive Roles",
        "Retrive roles successful",
      );
    });
  }

  insert(req, res) {
    const responseGenerator = new ResponseGenerator();
    const role = new RoleRequestDto(req.body.roleName, req.body.description);
    this.service.insert(role, (err, result) => {
      responseGenerator.generateResponse(
        res,
        err,
        result,
        "failed to add Role",
        "role added successfully",
      );
    });
  }

  update(req, res) {
    const id = req.params.id;
    const responseGenerator = new ResponseGenerator();
    const role = new RoleRequestDto(req.body.roleName, req.body.description);
    this.service.update(id, role, (err, result) => {
      responseGenerator.generateResponse(
        res,
        err,
        result,
        "failed to update Role",
        "role updated successfully",
      );
    });
  }
  
  getUserRolesByUserId(req, res) {
    const id = req.params.userId;
    const responseGenerator = new ResponseGenerator();
    this.service.getUserRolesByUserId(id, (err, result) => {
      responseGenerator.generateResponse(
        res, 
        err, 
        result, 
        "Failed to get user's roles", 
        "User's roles retrieved successfully");
    });
  }

  getUsersByRoleId(req, res) {
    console.log("IN getUsersByRoleId", req.params);
    const roleId = req.params.roleId;
    const responseGenerator = new ResponseGenerator();
    this.service.getUsersByRoleId(roleId, (err, result) => {
      responseGenerator.generateResponse(
        res,
        err,
        result,
        "Failed to get users by role",
        "Users retrieved successfully",
      );
    });
  }

  assignRole(req, res) {
    const userId = req.params.userId;
    const roleId = req.params.roleId;
    const responseGenerator = new ResponseGenerator();
    this.service.assignRole(userId, roleId, (err, result) => {
      responseGenerator.generateResponse(
        res,
        err,
        result,
        "Failed to assign role",
        "Role assigned successfully",
      );
    });
  }

  unAssignRole(req, res) {
    const userId = req.params.userId;
    const roleId = req.params.roleId;
    const responseGenerator = new ResponseGenerator();
    this.service.unAssignRole(userId, roleId, (err, result) => {
      responseGenerator.generateResponse(
        res,
        err,
        result,
        "Failed to unassign role",
        "Role unassigned successfully",
      );
    });
  }

}

module.exports = RolesController;
