
const UserNameRequest=require("../dtos/requests/UserNameRequest")
class ProfileController {
  constructor(profileservice) {
    this.profileservice = profileservice;
  }

  getProfileName = (req, res) => {
    const userid = new UserNameRequest(req.params.userid);
    this.profileservice.getProfileName(userid, (err, result) => {
      if (result) {
        console.log(result);

        return res.status(200).json( result );
      } else {
        console.log(result);
        return res.status(500).json({ message: "username not found" });
      }
    });
  };
}

module.exports = ProfileController;