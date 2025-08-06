//a Separate responsibility  for  Tasks  HTTP request handling

var Task = require('./taskdal.js');

exports.getAll = function(req, res) {
  console.log("calling controller function");
  Task.getAllTask(function(err, task) {
    if (err)
      res.send(err);
    res.send(task);
  });
};

exports.insert = function(req, res) {
  
  var new_task = new Task(req.body);

  //handles null error 
   if(!new_task.task || !new_task.status){
      res.status(400).send({ error:true, message: 'Please provide task/status' });
    }
   else{
    Task.createTask(new_task, function(err, task) {
      if (err)
      res.send(err);
    res.json(task);
    });
  }
};

exports.getBy = function(req, res) {
  Task.getTaskById(req.params.id, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update = function(req, res) {
  Task.updateById(req.params.id, new Task(req.body), function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.remove = function(req, res) {
  Task.remove( req.params.id, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};