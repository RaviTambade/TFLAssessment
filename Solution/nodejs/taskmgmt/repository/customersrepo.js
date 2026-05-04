const fs = require('fs');

const customersFilePath = './data/customers.json';  
class CustomersRepo {
    constructor() {    }

    getAllCustomers(callback) {   
        let customers = JSON.parse(fs.readFileSync(customersFilePath, 'utf8'));
        callback(null, customers);
    }

    getCustomerById(id, callback) {    
        let customers = JSON.parse(fs.readFileSync(customersFilePath, 'utf8'));
        const customer = customers.find(c => c.id === id);
        if (customer) {
            callback(null, customer);
        } else {
            callback(new Error("Customer not found"), null);
        }
        
    }
    insertCustomer(customer, callback) {
        let customers = JSON.parse(fs.readFileSync(customersFilePath, 'utf8'));
        customer.id = customers.length + 1;
        customers.push(customer);
        fs.writeFileSync(customersFilePath, JSON.stringify(customers, null, 2));
        callback(null, customer);
    }
    
    updateCustomer(id, updatedCustomer, callback) {
        let customers = JSON.parse(fs.readFileSync(customersFilePath, 'utf8'));
        const index = customers.findIndex(c => c.id === id);
        if (index !== -1) {
            customers[index] = { ...customers[index], ...updatedCustomer };
            fs.writeFileSync(customersFilePath, JSON.stringify(customers, null, 2));
            callback(null, customers[index]);
        } else {
            callback(new Error("Customer not found"), null);
        }
    }


    deleteCustomer(id, callback) {
        let customers = JSON.parse(fs.readFileSync(customersFilePath, 'utf8'));
        const index = customers.findIndex(c => c.id === id);    
        if (index !== -1) {
            customers.splice(index, 1);
            fs.writeFileSync(customersFilePath, JSON.stringify(customers, null, 2));
            callback(null, { message: "Customer deleted successfully" });
        } else {
            callback(new Error("Customer not found"), null);
        }
    }
    }



module.exports = CustomersRepo;