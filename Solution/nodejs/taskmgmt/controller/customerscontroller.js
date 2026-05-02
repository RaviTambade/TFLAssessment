 const fs = require('fs');
 const customers = JSON.parse(fs.readFileSync('./data/customers.json', 'utf8'));

class CustomersController {

    constructor(repo) {
        this.customersRepo = repo;
    }
 
    getAllCustomers(req, res) {
        this.customersRepo.getAllCustomers((err, customers) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json(customers);
            }
        });
    }

    getCustomerById(req, res) {
        const id = parseInt(req.params.id);
        this.customersRepo.getCustomerById(id, (err, customer) => {
            if (err) {
                res.status(404).json({ error: err.message });
            } else {
                res.json(customer);
            }
        });
    }

    createCustomer(req, res) {
        const { name, email } = req.body;
        const newCustomer = {
            id: customers.length + 1,
            name,
            email
        };
        this.customersRepo.insertCustomer(newCustomer, (err, insertedCustomer) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(201).json(insertedCustomer);
            }
        });
    }

    updateCustomer(req, res) {
        const id = parseInt(req.params.id);
        const { name, email } = req.body;
        this.customersRepo.updateCustomer(id, { name, email }, (err, updatedCustomer) => {
            if (err) {
                res.status(404).json({ error: err.message });
            } else {
                res.json(updatedCustomer);
            }
        });
    }

    deleteCustomer(req, res) {
        const id = parseInt(req.params.id);
        this.customersRepo.deleteCustomer(id, (err, result) => {
            if (err) {
                res.status(404).json({ error: err.message });
            } else {
                res.json(result);
            }
        });
    }
}

module.exports = CustomersController;