
var users = [
    { id: 1, name: "Ravi", email: "ravi@example.com" },
    { id: 2, name: "Sita", email: "sita@example.com" },
    { id: 3, name: "Gita", email: "gita@example.com" }
];


class UsersController {

    // no dependency injection for simplicity,
    // in real application we would inject a service or repository 
    // to handle data operations
    constructor() {
        
    }
 
    getAllUsers(req, res) {
        res.json(users);
    }

    getUserById(req, res) {
        const id = parseInt(req.params.id);
        const user = users.find(u => u.id === id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    }

    createUser(req, res) {
        const { name, email } = req.body;
        const newUser = {
            id: users.length + 1,
            name,
            email
        };
        users.push(newUser);
        res.status(201).json(newUser);
    }   

    updateUser(req, res) {
        const id = parseInt(req.params.id);
        const user = users.find(u => u.id === id);
        if (user) {
            const { name, email } = req.body;
            user.name = name || user.name;
            user.email = email || user.email;
            res.json(user);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    }

    deleteUser(req, res) {
        const id = parseInt(req.params.id);
        const userIndex = users.findIndex(u => u.id === id);
        if (userIndex !== -1) {
            users.splice(userIndex, 1);
            res.json({ message: "User deleted successfully" });
        } else {
            res.status(404).json({ error: "User not found" });
        }
}
}
module.exports = UsersController;