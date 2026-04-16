class userLoginService
{
    constructor(userLoginRepo)
    {
        this.userLoginRepo=userLoginRepo;
    }

    userLogin(username,password,role,callback)
    {
        this.userLoginRepo.userLogin(username,password,role,callback);
    }
}

module.exports = userLoginService;