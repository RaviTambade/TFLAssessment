class AuthenticationRepository
{
    constructor(connection)
    {
        this.connection=connection;
    }

    userLogin(username,password,role,callback)
    {
        const sql = `select u.id, u.contact, u.password ,r.role_name
                    from users u
                    join user_roles ur on u.id= ur.user_id
                    join roles r on r.role_id = ur.role_id
                    where u.contact=? AND u.password=? AND u.status="ACTIVE" AND r.role_name=?;`;
        this.connection.query(sql,[username,password,role],callback)
    }
}

module.exports = AuthenticationRepository;