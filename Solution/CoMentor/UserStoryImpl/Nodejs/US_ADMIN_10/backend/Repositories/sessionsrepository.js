class SessionsRepository { //class session repo which talks to database
  constructor(connection) { //constructor takes database connection as an argument and saves it to use connection for database queries
    this.connection = connection;
  }

  getAllSessionLogs(name, callback) { //function to get session logs from database, name to filter using name and callback to send result back to service
    // Keep data access in the repository and return a DB-friendly shape to the service.
    let sql = `
      SELECT
        us.id AS session_id,
        us.user_id,
        p.full_name AS full_name,
        r.role_name AS role,
        us.login_time,
        us.logout_time,
        TIMESTAMPDIFF(MINUTE, us.login_time, COALESCE(us.logout_time, NOW())) AS session_duration_minutes 
      FROM tflcomentor_db.user_logs us
      LEFT JOIN users u ON us.user_id = u.id
      LEFT JOIN personal_informations p ON us.user_id = p.user_id
      LEFT JOIN user_roles ur ON u.id = ur.user_id
      LEFT JOIN roles r ON ur.role_id = r.role_id
    `;
    //TIMESTAMPDIFF calculates session duration in mins, COALESCE handles null logout_time for active sessions
    
    // If a name filter is provided, we add a WHERE clause to the SQL query and use a parameterized query to prevent SQL injection.
    const params = [];  //array to hold query parameters for parameterized query
    if (name) { //if name is provided then we add where clause to sql query and push name parameter to params array
      sql += ` WHERE p.full_name LIKE ? `; //we use LIKE operator for partial matching and ? is a placeholder for parameterized query
      params.push(`%${name}%`); //we push the name parameter to params array with % wildcards for partial matching, this allows us to search for names
    }
    
    sql += ` ORDER BY us.login_time DESC `; //we order the results by login time in descending order so that the most recent sessions appear first

    this.connection.query(sql, params, (err, results) => { //we execute the SQL query with the provided parameters, and a callback function to handle the results
      if (err) return callback(err);//if error occurs send to backend
      callback(null, results);//if query is successful we send the results back to service
    });
  }
}

module.exports = SessionsRepository;
