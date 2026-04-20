const db = require("../config/db");
const SmeProfileRepository = require("../Repositories/smeProfileRepository");

const smeProfileRepo = new SmeProfileRepository(db);

exports.getSMEProfile = async (user_id, callback) => {

    try {
        // Step 1: Check SME role
        const isSME = await smeProfileRepo.checksmeRole(user_id);

        if (!isSME) {
            return callback({ message: "User is not SME" });
        }

        // Step 2: Get complete profile
        const profile = await smeProfileRepo.getProfile(user_id);

        // Step 3: Get runtime expertise
        const expertise = await smeProfileRepo.getSMERuntimeExpertise(user_id);

        // Combine profile and expertise
        const result = {
            ...(profile[0] || {}),
            expertise: expertise.map(e => e.runtime_name)
        };

        callback(null, result);

    } catch (err) {
        callback(err);
    }

};
