class AuthenticationService
{
    constructor(userLoginRepo)
    {
        this.userLoginRepo=userLoginRepo;
    }

    validate(credential,callback)
    {
        this.userLoginRepo.userLogin(credential.username,credential.password,credential.role,callback);
    }
}

module.exports = AuthenticationService;