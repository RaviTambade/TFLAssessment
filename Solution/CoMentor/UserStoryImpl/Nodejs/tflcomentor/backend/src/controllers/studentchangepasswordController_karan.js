//class
//data members
//member functions
class StudentController {

  constructor(service) {
     //member variable
    this.service = service;
  }
    //member functions 
  changePassword(req, res) {
    const { id, oldPassword, newPassword } = req.body;

    if (!id || !oldPassword || !newPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    this.service.changePassword(id, oldPassword, newPassword, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "Server error" });
      }

      return res.status(result.status).json({ message: result.message });
    });
  }
}

module.exports = StudentController;