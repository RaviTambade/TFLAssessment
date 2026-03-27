class UserLogRepository
{
    constructor(connection)
    {
        this.connection = connection;
    }

    GetUserLogById(id,callback)
    {
        const sql =
          "select user_id,login_time,logout_time from user_logs where user_id=?";
        this.connection.query(sql,[id],callback)
    }
}

module.exports=UserLogRepository