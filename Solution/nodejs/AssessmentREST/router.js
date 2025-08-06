//request mapping with operations

'use strict';
module.exports = function(app) {
    var taskController = require('./controller');

    app.route('/tasks')
    .get(taskController.getAll)
    .post(taskController.insert);

    app.route('/tasks/:taskId')
    .get(taskController.getBy)
    .put(taskController.update)
    .delete(taskController.remove);
};