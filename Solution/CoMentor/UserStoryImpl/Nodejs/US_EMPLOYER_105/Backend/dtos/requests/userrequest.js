class UserRequest{
    constructor(firstName,lastName,email,password,contact)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.contact=contact;
        this.password=password;
    }
}

module.exports = UserRequest;
