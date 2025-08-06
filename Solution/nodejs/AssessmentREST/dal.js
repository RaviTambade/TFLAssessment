//mysql database CRUD operations functionality
//insert, update, delete, etc  


'user strict';
var sql = require('./mysqlconnect');

//define model
var Task = function(task) {
    this.task = task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.createTask = function(newTask,result) {
    sql.query("INSERT INTO tasks set ?",newTask, function(err, res) {
        if (err) {
            console.log("error:",err);
            result(err, null);
        }else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Task.getTaskById = function(TaskId,result) {
    sql.query("select task from tasks where id = ?",TaskId, function(err, res) {
        if (err) {
            console.log("error:",err);
            result(err, null);
        }else {
            result(null, res);
        }
    });
};

Task.updateById= function(id,task,result) {
    sql.query("UPDATE tasks SET task = ? WHERE id = ?", [task.task,id],
        function(err,res) {
        if (err) {
            console.log("error:",err);
            result(null, err);
        }else {
            result(null, res);
        }
    });
};

Task.remove = function(id,task,result) {
    sql.query("DELETE FROM  tasks WHERE id = ?",[id],function(err,res) {
        if (err) {
            console.log("error:",err);
            result(null, err);
        }else {
            result(null, res);
        }
    });
};
module.exports = Task;