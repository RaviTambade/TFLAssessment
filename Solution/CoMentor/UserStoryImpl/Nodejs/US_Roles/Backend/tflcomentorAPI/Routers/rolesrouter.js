const controller = require("../Controllers/rolescontroller");
const express = require('express');
const router = express.Router();

router.get('/getAllRoles',controller.getAllRoles);
router.post('/insertRoles',controller.insertRoles);
router.delete('/deleteRoles/:id',controller.deleteRoles);
router.put('/updateRoles/:id',controller.updateRoles);
router.get('/getRoleByID/:id',controller.getRoleByID);

module.exports = router;
