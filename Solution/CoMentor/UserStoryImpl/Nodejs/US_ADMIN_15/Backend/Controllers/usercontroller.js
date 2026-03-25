class UserController {

  constructor(service) {
    this.service = service;
  }

  inactivateUser(req, res) {
    const { id} = req.body;
    this.service.inactivateUser(id, (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    });
  }

  blockUser(req, res) {
    const { id} = req.body;
    this.service.blockUser(id, (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    });
  }
  activateUser(req, res){
    const { id} = req.body;
    this.service.activateUser(id, (err, result) => {
      if(err) return res.status(500).json(err);
      res.json(result);
    });
  }

}


module.exports = UserController;