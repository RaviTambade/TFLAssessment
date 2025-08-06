//logic for handling HTTP request types///GET, POST, PUT, DELETE ETC

'use strict';
var Task = require('./dal');

exports.getAll = function(req, res) {
    
    Task.getAllTask(function(err,task){
        if(err)
            res.send(err);
        res.send(task);
    });
};

exports.insert = function(req, res) {
     var new_task = new Task(req.body);

     //handles null error
     if (!new_task.task || !new_task.status){
        res.status(400).send({error:true,message:'Please provide task/status'});
     }else{
        Task.createTask(new_task,function(err,task){
             if(err)
                res.send(err);
            res.json(task);
        });
     }
};

exports.getBy = function(req, res) {
    Task.getTaskById(req.params.taskId,function(err,task) {
        if(err)
            res.send(err);
        res.json(task);
    });
};

exports.update = function(req, res) {
    Task.updateById(req.params.taskId,new Task(req.body),function(err,task) {
        if(err)
            res.send(err);
        res.json(task);
    });
};

exports.remove = function(req, res) {
    Task.remove(req.params.taskId,function(err,task) {
        if(err)
            res.send(err);
        res.json({message:'Task successfully deleted'});
    });
};