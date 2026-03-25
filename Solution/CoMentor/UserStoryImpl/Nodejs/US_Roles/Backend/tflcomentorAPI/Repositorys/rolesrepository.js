const connection = require("../connectivity/db");

exports.getAllRoles = (result) => {
    const sql = "select * from roles";
    connection.query(sql, result);
};

exports.insertRoles = (role_name, description, result) => {
    const sql = "insert into roles(role_name,description) values(?,?)";
    connection.query(sql, [role_name, description], result);
};

exports.deleteRoles = (id, result) => {
    const sql = "DELETE FROM roles WHERE role_id=?";
    connection.query(sql, [id], result);
};

exports.updateRoles = (id, role_name, description, result) => {
    const sql = "UPDATE roles SET role_name=?, description=? WHERE role_id=?";
    connection.query(sql, [role_name, description, id], result);
};

exports.getRoleByID = (id, result) => {
    const sql = "select * from roles where role_id =?";
    connection.query(sql, [id], result);
};