class AuthenticationService{
    constructor(Repository){
        this.repository = Repository;
    }

    InsertUser(user,callback){
        this.repository.InsertUser(user,callback);
    }
}

module.exports = AuthenticationService;