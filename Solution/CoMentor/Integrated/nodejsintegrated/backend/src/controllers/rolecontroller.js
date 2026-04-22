const RoleRequestDto = require("../dtos/requests/RoleRequestDto");
class RoleController {
  constructor(roleService) {
    this.roleService = roleService;
  }

  getAllRoles(req, res) {
    this.roleService.getAllRoles((err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    });
  }

  addNewRole(req, res) {
    const role = new RoleRequestDto(req.body.roleName, req.body.description);
    this.roleService.addNewRole(role, (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "role added successfully" });
    });
  }

  deleteExistingRole(req, res) {
    const id = req.params.id;
    this.roleService.deleteExistingRole(id, (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "role deleted successfully" });
    });
  }

  updateExistingRole(req, res) {
    const id = req.params.id;
    const role = new RoleRequestDto(req.body.roleName, req.body.description);
    this.roleService.updateExistingRole(id, role, (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "role updated successfully" });
    });
  }

  getRoleById(req, res) {
    const id = req.params.id;
    this.roleService.getRoleById(id, (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    });
  }
}

module.exports = RoleController;
