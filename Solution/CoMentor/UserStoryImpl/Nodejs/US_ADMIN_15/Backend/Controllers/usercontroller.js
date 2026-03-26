class UserController {

  constructor(service) {
    this.service = service;
  }

  changeUserStatus(req, res) {
    const { id, status } = req.body;
    this.service.changeUserStatus(id, status, (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    });
  }

}


module.exports = UserController;