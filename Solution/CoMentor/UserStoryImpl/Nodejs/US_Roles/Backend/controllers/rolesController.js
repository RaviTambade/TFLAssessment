class RolesController {

  //parameterized constructor to inject services dependency
  constructor(service) {
    this.service = service;
  }



  getAllRoles(req, res) {
    this.service.getAllRoles((err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    });
  }

  insertRoles(req, res) {
    const { role_name, description } = req.body;
    this.service.insertRoles(role_name, description, (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'data added successfully' });
    });
  }

  deleteRoles(req, res) {
    const id = req.params.id;
    this.service.deleteRoles(id, (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'data deleted successfully' });
    });
  }

  updateRoles(req, res) {
    const id = req.params.id;
    const { role_name, description } = req.body;
    this.service.updateRoles(id, role_name, description, (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'data updated successfully' });
    });
  }

  getRoleByID(req, res) {
    const id = req.params.id;
    this.service.getRoleByID(id, (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    });
  }
}

module.exports = RolesController;
