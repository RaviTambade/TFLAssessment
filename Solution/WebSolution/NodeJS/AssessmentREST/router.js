//request mapping with operations

//request mapping with operations

'use strict';
module.exports = function(app) {
    var questionController = require('./controller');

    app.route('/questionbank')
    .get(questionController.getAll)
    .post(questionController.insert); 

    app.route('/questionbank/:id')
    .get(questionController.getById)

    .put(questionController.update)
   .delete(questionController.remove);
};
