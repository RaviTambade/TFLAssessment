const services = require("../Services/rolesservices");

exports.getAllRoles = (req,res) => {
    services.getAllRoles((err, result) => {
        if(err)
            return res.status(500).json(err);
        res.json(result)
    }
    )
};

exports.insertRoles = (req,res) => {
    const {role_name, description} = req.body;
    services.insertRoles(role_name, description, (err, result) => {
        if(err)
            return res.status(500).json(err);
        res.json({message:'data added successfully'});
    }
    )
};

exports.deleteRoles = (req,res) => {
    const id = req.params.id;
    services.deleteRoles(id, (err, result) => {
        if(err)
            return res.status(500).json(err);
        res.json({message:'data deleted successfully'});
    }
    )
};

exports.updateRoles = (req,res) => {
    const id = req.params.id;
    const {role_name, description} = req.body;
    services.updateRoles(id, role_name, description, (err, result) => {
        if(err)
            return res.status(500).json(err);
        res.json({message:'data updated successfully'});
    }
    )
};

exports.getRoleByID = (req,res) => {
    const id = req.params.id;
    services.getRoleByID(id, (err, result) => {
        if(err)
            return res.status(500).json(err);
        res.json(result);
    }
    )
};
