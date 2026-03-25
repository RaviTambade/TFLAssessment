const repo = require("../Repositorys/rolesrepository");

exports.getAllRoles = (result) => {
    repo.getAllRoles(result);
};

exports.insertRoles = (role_name, description, result) => {
    repo.insertRoles(role_name, description, result);
};
exports.deleteRoles = (id, result) => {
    repo.deleteRoles(id, result);
};

exports.updateRoles = (id, role_name, description, result) => {
    repo.updateRoles(id, role_name, description, result);
};

exports.getRoleByID = ( id, result) => {
    repo.getRoleByID(id, result);
};
