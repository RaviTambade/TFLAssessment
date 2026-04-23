const RoleRequestDto = require("../dtos/requests/RoleRequestDto");
class RolesController{
  constructor(role) {
    this.roleService = role;
  }

  getAllRoles(req, res) {
    this.role.getAllRoles((err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    });
  }

  addNewRole(req, res) {
    const role = new RoleRequestDto(req.body.roleName, req.body.description);
    this.role.addNewRole(role, (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "role added successfully" });
    });
  }

  deleteExistingRole(req, res) {
    const id = req.params.id;
    this.role.deleteExistingRole(id, (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "role deleted successfully" });
    });
  }

  updateExistingRole(req, res) {
    const id = req.params.id;
    const role = new RoleRequestDto(req.body.roleName, req.body.description);
    this.role.updateExistingRole(id, role, (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "role updated successfully" });
    });
  }

  getRoleById(req, res) {
    const id = req.params.id;
    this.role.getRoleById(id, (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    });
  }
}

module.exports = RolesController;
