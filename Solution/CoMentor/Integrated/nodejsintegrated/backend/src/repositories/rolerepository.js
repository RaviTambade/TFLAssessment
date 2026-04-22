class RoleRepository {
    
  constructor(connection) {
    this.connection = connection;
  }

  getAllRoles(callback) {
    const sql = "select * from roles";
    this.connection.query(sql, callback);
  }


  addNewRole(role, callback) {
    const sql = "insert into roles(role_name,description) values(?,?)";
    this.connection.query(sql, [role.roleName, role.description], callback);
  }

  deleteExistingRole(id, callback) {
    const sql = "DELETE FROM roles WHERE role_id=?";
    this.connection.query(sql, [id], callback);
  }

  updateExistingRole(id, role, callback) {
    const sql = "UPDATE roles SET role_name=?, description=? WHERE role_id=?";
    this.connection.query(sql, [role.roleName, role.description, id], callback);
  }

  getRoleById(id, callback) {
    const sql = "select * from roles where role_id =?";
    this.connection.query(sql, [id], callback);
  }
}

module.exports = RoleRepository;