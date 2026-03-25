class UserLogService
{
    constructor(repository)
    {
        this.repository = repository;
    }

    GetUserLogById(id,callback)
    {
        this.repository.GetUserLogById(id, callback);
    }
}

module.exports =UserLogService;