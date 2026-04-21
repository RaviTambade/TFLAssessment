const UserRequest = require("../dtos/requests/userrequest");

class AuthenticationController{
    constructor(AuthenticationService){
        this.AuthenticationService = AuthenticationService;
    }                               

    InsertUser(req,res){
        const user = new UserRequest(
            req.body.firstName,
            req.body.lastName,
            req.body.email,
            req.body.password,
            req.body.contact
        );
        this.AuthenticationService .InsertUser(user,(err,result)=>{
            if(err){
                console.error("Error inserting user:", err);    
                res.status(500).json({ error: "Failed to register user" });
            }else{
                res.status(200).json({ message: "User registered successfully" });
            }
        });
    }
}

module.exports = AuthenticationController;
