class RegisterUserRepository{
    constructor(connection){
        this.connection=connection
    }

        InsertUser(user,callback) {

            console.log(user);

         const query = "call RegisterUser(?,?,?,?,?,?,?,?,?)"


        this.connection.query(query,[user.contact,user.password,user.first_name,user.last_name,user.gender,user.data_of_birth,user.email,user.address,user.pin_code], callback);
    }
}

module.exports = RegisterUserRepository;