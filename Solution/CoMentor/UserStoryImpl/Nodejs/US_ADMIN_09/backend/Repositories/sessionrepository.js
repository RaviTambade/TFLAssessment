class SessionRepository {
    constructor(connection) {
        this.connection = connection;
    }

    // 1️⃣ Total Logins in last 24 hrs
    getLoginsLast24Hrs() {
        const query = `
            SELECT COUNT(*) AS totalLogins24h
            FROM user_logs
            WHERE login_time >= NOW() - INTERVAL 1 DAY
        `;
        return this.connection.promise().query(query);
    }

    // 2️⃣ Average Session Time
    getAvgSessionTime() {
        const query = `
            SELECT AVG(TIMESTAMPDIFF(SECOND, login_time, logout_time)) AS avgSessionTime
            FROM (
                SELECT login_time, logout_time
                FROM user_logs
                WHERE logout_time IS NOT NULL
                ORDER BY login_time DESC
                LIMIT 20
            ) AS last20
        `;
        return this.connection.promise().query(query);
    }

    // 3️⃣ Active Sessions Count
    getActiveSessionsCount() {
        const query = `
            SELECT COUNT(*) AS activeSessions
            FROM user_logs
            WHERE logout_time IS NULL
        `;
        return this.connection.promise().query(query);
    }

    // 4️⃣ Active Users List (with full_name)
    getActiveUsers() {
        const query = `
            SELECT 
                p.full_name,
                l.login_time,
                TIMESTAMPDIFF(SECOND, l.login_time, NOW()) AS active_seconds,
                'ACTIVE' AS status
            FROM user_logs l
            JOIN personal_informations p 
                ON l.user_id = p.user_id
            WHERE l.logout_time IS NULL
        `;
        return this.connection.promise().query(query);
    }
}

module.exports = SessionRepository;