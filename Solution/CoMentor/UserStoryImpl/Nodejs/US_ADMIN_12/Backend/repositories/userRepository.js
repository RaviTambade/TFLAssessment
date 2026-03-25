class userRepository {
    constructor(connection) {
        this.connection = connection;
    }

    getAllUsers(callback) {
        const query = "SELECT user_id, CONCAT(personal_informations.first_name, ' ', personal_informations.last_name) AS full_name FROM personal_informations";
        this.connection.query(query, callback);
    }
}
module.exports = userRepository;