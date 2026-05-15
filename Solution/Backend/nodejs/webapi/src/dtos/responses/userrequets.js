class UserRequest{
    constructor(firstName,lastName,email,password,contact,age)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.contact=contact;
        this.password=password;
        this.age=age;
    }
}

module.exports = UserRequest;