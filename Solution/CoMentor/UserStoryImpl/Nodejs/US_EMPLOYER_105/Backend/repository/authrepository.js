class AuthRepository{
    constructor(connection){
        this.connection=connection
    }

        InsertUser(user,callback) {

            console.log(user);

         const query = "call RegisterUser(?,?,?,?,?)"


        this.connection.query(
            query,
            [user.contact, user.firstName, user.lastName, user.email, user.password],
            callback
        );
    }
}

module.exports = AuthRepository;
