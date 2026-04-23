
 

const generateResponse = (err, result, errorMessage, sucessMessage) => {
    if (err) {
        res.status(500).json({ error: errorMessage });
    } else {
    res.status(200).json({ message: sucessMessage });
    }
}
 
module.exports = {
    generateResponse
};


 