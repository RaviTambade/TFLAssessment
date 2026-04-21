const smeProfileService = require("../services/smeProfileService");

// Log when controller file is loaded
console.log("SME Profile Controller loaded");

// Controller function to handle SME profile request
exports.getSMEProfile = (req, res) => {

    // Get user_id from request parameters
    const user_id = req.params.user_id;

    console.log("API called for user_id:", user_id);

    // Call service layer to fetch SME profile
    smeProfileService.getSMEProfile(user_id, (err, result) => {

        // If error occurs
        if (err) {
            console.error("Error:", err);
            res.status(500).json(err);
        } 
        // If data fetched successfully
        else {
            console.log("Result:", result);
            res.json(result);
        }

    });

};