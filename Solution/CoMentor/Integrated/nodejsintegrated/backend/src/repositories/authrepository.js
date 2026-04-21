const LoginStatus = require("../dtos/responses/LoginStatus");
class AuthRepository {
  constructor(connection) {
    this.connection = connection;
  }

  validate(credential, callback) {
    const sql = `select u.id
                    from users u
                    join user_roles ur on u.id= ur.user_id
                    join roles r on r.role_id = ur.role_id
                    where u.contact=? AND u.password=? AND u.status="ACTIVE" AND r.role_name=?;`;
    this.connection.query(
      sql,
      [credential.username, credential.password, credential.role],
      (err, results) => {
        if (err) {
          return callback(err, null);
        }

        //
        const isValidUser = results && results.length > 0;
        const userId = isValidUser ? results[0].id : null;

        const loginStatus = new LoginStatus(
          isValidUser ? true : false,
          isValidUser ? "Login successful" : "Invalid credentials",
          userId,
        );

        callback(null, loginStatus);
      },
    );
  }

  register(user, callback) {
    console.log(user);

    const query = "call RegisterUser(?,?,?,?,?)";

    this.connection.query(
      query,
      [user.contact, user.firstName, user.lastName, user.email, user.password],
      callback,
    );
  }

 
}

module.exports = AuthRepository;
