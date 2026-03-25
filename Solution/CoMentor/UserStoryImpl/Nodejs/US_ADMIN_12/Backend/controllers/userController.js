class UserController {
    constructor(service) {
        this.service = service;
    }

    getAllUsers(req, res) {
        this.service.getAllUsers((err, results) => {
            if (err) {
                console.error("Error fetching users:", err);
                return res.status(500).json({ error: "Internal Server Error" });
            }
            res.json(results);
        });
    }
}
module.exports = UserController;