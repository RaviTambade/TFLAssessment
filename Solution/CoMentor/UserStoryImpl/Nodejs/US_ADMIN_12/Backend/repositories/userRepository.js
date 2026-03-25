class userRepository {
    constructor(connection) {
        this.connection = connection;
    }

    getAllUsers(callback) {
        const query = "call GetUserlistWithRole();";
        this.connection.query(query, callback);
    }
}
module.exports = userRepository;