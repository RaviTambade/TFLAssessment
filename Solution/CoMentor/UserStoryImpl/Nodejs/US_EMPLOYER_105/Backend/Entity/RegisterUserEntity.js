class User{
    constructor(contact , password, first_name, last_name, gender , data_of_birth, email , address , pin_code){
        this.contact = contact;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.gender = gender;
        this.data_of_birth = data_of_birth;
        this.email = email;             
        this.address = address;
        this.pin_code = pin_code;
    }
}

module.exports = User;