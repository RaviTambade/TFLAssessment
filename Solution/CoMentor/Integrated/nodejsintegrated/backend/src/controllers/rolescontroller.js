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
    
      const userId = req.params.userId ;
 const responseGenerator = new ResponseGenerator();
      if (!userId) {
        return responseGenerator.sendError(res, "UserId is required", 400);
      }

      this.service.unAssignRoles(userId, (err, result) => {
      responseGenerator.generateResponse(
          res,
          err,
          result,
          "Failed to unassign roles",
          "Roles unassigned successfully",
        );
      });
    } 

  assignRoles(req, res) {
  const userId = req.params.userId;
  const roleIds = req.body.roleIds;
  const responseGenerator = new ResponseGenerator();

  if (
    !userId ||
    !Array.isArray(roleIds) ||
    roleIds.length === 0
  ) {
    return responseGenerator.sendError(
      res,
      "UserId and roleIds (non-empty array) are required",
      400
    );
  }

  this.service.assignRoles(userId, roleIds, (err, result) => {
    if (err) {
      console.error(err);
      return responseGenerator.sendError(res,err,500, "Database error");
    }

    return responseGenerator.sendSuccess(res, result,200, "Roles assigned successfully");
  });
}
  getUserByRole(req, res) {
    const userId = req.params.userId;
    const responseGenerator = new ResponseGenerator();
    this.service.getUserByRole(userId, (err, result) => {
      responseGenerator.generateResponse(res, err, result, "Failed to get user by role", "User retrieved successfully")
    });
  }

    unAssignRole(req, res) {
      const userId = req.params.userId;
      const roleId = req.params.roleId;
      const responseGenerator = new ResponseGenerator();
      this.service.unAssignRole(userId, roleId, (err, result) => {
        responseGenerator.generateResponse(res, err, result, "Failed to unassign role", "Role unassigned successfully")
      });

    
    }
    assignRole(req, res) {
      const userId = req.params.userId;
      const roleId = req.params.roleId;
      const responseGenerator = new ResponseGenerator();
      this.service.assignRole(userId, roleId, (err, result) => {
        responseGenerator.generateResponse(res, err, result, "Failed to assign role", "Role assigned successfully")
      });
    }
  }


module.exports = RolesController;
