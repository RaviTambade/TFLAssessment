class RegisterUserRepository{
    constructor(connection){
        this.connection=connection
    }

        InsertUser(user,callback) {

            console.log(user);

         const query = "call RegisterUser(?,?,?,?)"


        this.connection.query(query,[user.contact,user.first_name,user.last_name,user.email], callback);
    }
}

module.exports = RegisterUserRepository;