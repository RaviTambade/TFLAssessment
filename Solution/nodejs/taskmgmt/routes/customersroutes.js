const express = require('express');

module.exports = (controller) => {
    const router = express.Router();

    router.post('/createTask', controller.createTask.bind(controller));
   router.get('/getAllCustomers', controller.getAllCustomers.bind(controller));
    router.get('/getCustomerById/:id', controller.getCustomerById.bind(controller));
    router.post('/createCustomer/:user_id', controller.createCustomer.bind(controller));
    router.put('/updateCustomer/:fromDate/:toDate', controller.updateCustomer.bind(controller));
    router.delete('/deleteCustomer/:id', controller.deleteCustomer.bind(controller));
    
    return router;
}