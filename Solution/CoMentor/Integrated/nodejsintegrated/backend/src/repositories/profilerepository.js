const UserNameResponse = require("../dtos/responses/UserNameResponse");

class ProfileRepository {
  constructor(connection) {
    this.connection = connection;
  }

  getProfileName(userNameRequest, callback) {
    const sql =
      "select first_name,last_name from personal_informations where user_id=? limit 1;";

    this.connection.query(sql, [userNameRequest.userid], (err, result) => {
      const username = new UserNameResponse(
        result[0].first_name,
        result[0].last_name,
      );

      callback(null, username);
    });
  }
}

module.exports = ProfileRepository;