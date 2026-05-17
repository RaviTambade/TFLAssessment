 class Credential{

    //no constructor overloading
    // parameterized constructor

    constructor(username,password,role,roleid)
    {
        //data members;
        this.username=username;
        this.password=password;
        this.role=role;
    }
}

module.exports = Credential;
