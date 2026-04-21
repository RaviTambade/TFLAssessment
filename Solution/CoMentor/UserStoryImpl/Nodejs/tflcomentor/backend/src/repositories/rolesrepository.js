class RolesRepository {
    
  constructor(connection) {
    this.connection = connection;
  }

  getAllRoles(callback) {
    const sql = "select * from roles";
    this.connection.query(sql, callback);
  }

  insertRoles(role_name, description, callback) {
    const sql = "insert into roles(role_name,description) values(?,?)";
    this.connection.query(sql, [role_name, description], callback);
  }

  deleteRoles(id, callback) {
    const sql = "DELETE FROM roles WHERE role_id=?";
    this.connection.query(sql, [id], callback);
  }

  updateRoles(id, role_name, description, callback) {
    const sql = "UPDATE roles SET role_name=?, description=? WHERE role_id=?";
    this.connection.query(sql, [role_name, description, id], callback);
  }

  getRoleByID(id, callback) {
    const sql = "select * from roles where role_id =?";
    this.connection.query(sql, [id], callback);
  }
}

module.exports = RolesRepository;