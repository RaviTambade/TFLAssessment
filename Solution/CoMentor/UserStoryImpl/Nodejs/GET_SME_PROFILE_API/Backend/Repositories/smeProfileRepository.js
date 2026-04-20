// class smeProfileRepository {

//   constructor(db) {
//     this.db = db;
//   }

//   // Check if user has SME role
//   checksmeRole(userId) {

//     return new Promise((resolve, reject) => {

//       const query = `
//         SELECT 1
//         FROM user_roles
//         WHERE user_id = ? AND role_id = z5
//         LIMIT 1
//       `;

//       this.db.query(query, [userId], (err, results) => {

//         if (err) return reject(err);

//         resolve(results.length > 0);

//       });

//     });

//   }


//   // Get complete profile using stored procedure
//   getProfile(userId) {

//     return new Promise((resolve, reject) => {

//       const query = "CALL sp_get_user_complete_profile(?)";

//       this.db.query(query, [userId], (err, results) => {

//         if (err) return reject(err);

//         resolve(results[0]);

//       });

//     });

//   }


//   // Get runtime expertise for SME
//   getSMERuntimeExpertise(userId) {

//     return new Promise((resolve, reject) => {

//       const query = `
//         SELECT 
//             ur.user_id,
//             r.runtime_name
//         FROM user_roles ur
//         JOIN sme_runtimes sr 
//             ON ur.id = sr.user_roles_id
//         JOIN runtimes r 
//             ON sr.runtime_id = r.id
//         WHERE ur.user_id = ?
//       `;

//       this.db.query(query, [userId], (err, results) => {

//         if (err) return reject(err);

//         resolve(results);

//       });

//     });

//   }

// }

// module.exports = smeProfileRepository;


class smeProfileRepository {

    constructor(db) {
        this.db = db;
    }

    // Check if the user has SME role
    checksmeRole(userId) {

        return new Promise((resolve, reject) => {

            const query = `
                SELECT 1
                FROM user_roles
                WHERE user_id = ? 
                AND role_id = 4
                LIMIT 1
            `;

            this.db.query(query, [userId], (err, results) => {

                if (err) {
                    return reject(err);
                }

                resolve(results.length > 0);

            });

        });

    }


    // Get complete user profile using stored procedure
    getProfile(userId) {

        return new Promise((resolve, reject) => {

            const query = "CALL sp_get_user_complete_profile(?)";

            this.db.query(query, [userId], (err, results) => {

                if (err) {
                    return reject(err);
                }

                resolve(results[0]);

            });

        });

    }


    // Get runtime expertise for SME user
    getSMERuntimeExpertise(userId) {

        return new Promise((resolve, reject) => {

            const query = `
                SELECT 
                    ur.user_id,
                    r.runtime_name
                FROM user_roles ur
                JOIN sme_runtimes sr
                    ON ur.id = sr.user_roles_id
                JOIN runtimes r
                    ON sr.runtime_id = r.id
                WHERE ur.user_id = ?
            `;

            this.db.query(query, [userId], (err, results) => {

                if (err) {
                    return reject(err);
                }

                resolve(results);

            });

        });

    }

}

module.exports = smeProfileRepository;