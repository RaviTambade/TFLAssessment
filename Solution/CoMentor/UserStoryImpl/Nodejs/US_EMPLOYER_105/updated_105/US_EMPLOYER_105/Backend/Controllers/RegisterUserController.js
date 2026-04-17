class RegisterUserController{
    constructor(Services){
        this.services = Services;
    }                               

    InsertUser(req,res){
        const user = req.body;  
        this.services.InsertUser(user,(err,result)=>{
            if(err){
                console.error("Error inserting user:", err);    
                res.status(500).json({ error: "Failed to register user" });
            }else{
                res.status(200).json({ message: "User registered successfully" });
            }
        });
    }
}

module.exports = RegisterUserController;