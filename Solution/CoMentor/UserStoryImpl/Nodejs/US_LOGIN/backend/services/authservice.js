class AuthenticationService
{
    constructor(userLoginRepo)
    {
        this.userLoginRepo=userLoginRepo;
    }

    validate(credential,callback)
    {
        this.userLoginRepo.userLogin(credential,callback);
    }
}

module.exports = AuthenticationService;