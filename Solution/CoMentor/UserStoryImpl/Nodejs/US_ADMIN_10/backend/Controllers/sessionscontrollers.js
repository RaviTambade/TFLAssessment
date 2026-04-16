//Bussiness logic for session related requests is handled here
class SessionsController { //class for session related requests
  constructor(service) { //saves service object inside controller to use service methods
    this.service = service;
  }

  getSessionLogs = (req, res) => { //handles incoming API request
    const name = req.query.name || null; //reads name value from the query if not provided it uses null

    this.service.getAllSessionLogs(name, (err, logs) => { //calls service layer to get session logs, filtered by name
      if (err) return res.status(500).json({ success: false, message: err.message || 'Unable to fetch session logs' });// Checks for an error and sends a 500 response if there is one
      if (name && logs.length === 0) { //this checks if a name is entered and also means the result is empty
        return res.status(404).json({ success: false, message: 'NOT FOUND' });// If no logs are found for the given name, it sends a 404 response with a "NOT FOUND" message
      }
      res.status(200).json({ success: true, data: logs });// If logs are found, it sends a 200 response with the logs
    });
  };
}

module.exports = SessionsController;//Exports controller class so it can be imported
