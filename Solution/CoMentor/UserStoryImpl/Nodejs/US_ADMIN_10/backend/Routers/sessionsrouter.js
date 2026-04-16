//import express to create the router
const express = require('express');

//takes controller as input 
function SessionsRouter(controller) {
  const router = express.Router(); //new express router

  // Route definitions stay isolated so the controller can focus on request handling.
  router.get(['/', '/logs'], controller.getSessionLogs);

  return router;
  //this returns the configured router so it can be used in index.js
}

//exports the router function so other files can import and use it 
module.exports = SessionsRouter;

