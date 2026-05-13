
class AuthRepository {

  constructor(connection) {
    this.connection = connection;
  }

  validate(credential, callback) {
    const sql = `SELECT u.id, p.first_name, p.last_name, r.role_name from users u
                  JOIN user_roles ur ON u.id= ur.user_id 
                  JOIN roles r ON r.role_id = ur.role_id
                  JOIN personal_informations p on p.user_id = u.id
                    WHERE u.contact=? AND u.password=? AND u.status="ACTIVE" AND r.role_name=?;`;
    this.connection.query(sql, [credential.username, credential.password, credential.role],
      (err, results) => {
        if (err) { return callback(err, null); }

        const isValidUser = results && results.length > 0;
        const userId = isValidUser ? results[0].id : null;
        if (isValidUser) {
          callback(null, results);
        }
        else {
          callback(err, null);
        }
      },
    );
  }

  register(user, callback) {
    const query = "CALL RegisterUser(?,?,?,?,?)";
    this.connection.query(query, [user.contact, user.firstName, user.lastName, user.email, user.password], callback
    );
  }


changePassword(data, callback) {
  const query = `
    UPDATE users 
    SET password = ? 
    WHERE id = ?
  `;

  this.connection.query(
    query,
    [data.newPassword, data.id],
    (err, result) => {
      if (err) return callback(err, null);

      if (result.affectedRows === 0) {
        return callback(null, null);
      }

      callback(null, result);
    }
  );
}
}

module.exports = AuthRepository;