const RoleRequestDto = require("../dtos/requests/RoleRequestDto");
const ResponseGenerator = require("../helpers/ResponseGenerator");

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

  addNewRole(req, res) {
    const responseGenerator = new ResponseGenerator();

    const role = new RoleRequestDto(req.body.roleName, req.body.description);

    this.service.addNewRole(role, (err, result) => {
      responseGenerator.generateResponse(
        res,
        err,
        result,
        "failed to add Role",
        "role added successfully",
      );
    });
  }

  updateExistingRole(req, res) {
    const id = req.params.id;
    const responseGenerator = new ResponseGenerator();

    const role = new RoleRequestDto(req.body.roleName, req.body.description);

    this.service.updateExistingRole(id, role, (err, result) => {
      responseGenerator.generateResponse(
        res,
        err,
        result,
        "failed to update Role",
        "role updated successfully",
      );
    });
  }

  getRoleById(req, res) {
    const id = req.params.id;
    const responseGenerator = new ResponseGenerator();

    this.service.getRoleById(id, (err, result) => {
      responseGenerator.generateResponse(res, err, result, "", "");
    });
  }

  unAssignRoles(req, res) {
    try {
      const userId = req.params.userId || req.body.userId;

      if (!userId) {
        return this.responseGenerator.sendError(res, "UserId is required", 400);
      }

      this.service.unAssignRoles(userId, (err, result) => {
        this.responseGenerator.generateResponse(
          res,
          err,
          result,
          "Failed to unassign roles",
          "Roles unassigned successfully",
        );
      });
    } catch (error) {
      return this.responseGenerator.sendError(
        res,
        "Internal Server Error",
        500,
        error,
      );
    }
  }

  assignRoles(req, res) {
    try {
      const userId = req.body.userId || req.params.userId;
      const roleIds = req.body.roleIds;

      // 🔹 Validation
      if (
        !userId ||
        !roleIds ||
        !Array.isArray(roleIds) ||
        roleIds.length === 0
      ) {
        return this.responseGenerator.sendError(
          res,
          "UserId and roleIds (non-empty array) are required",
          400,
        );
      }

      // 🔹 Call service
      this.service.assignRoles(userId, roleIds, (err, result) => {
        this.responseGenerator.generateResponse(
          res,
          err,
          result,
          "Failed to assign roles",
          "Roles assigned successfully",
        );
      });
    } catch (error) {
      return this.responseGenerator.sendError(
        res,
        "Internal Server Error",
        500,
        error,
      );
    }
  }
}

module.exports = RolesController;
