const RequestTaskDto = require('../dtos/requests/requesttaskdto');

class TasksMasterController {
    //Dependency injection of service for
    // better separation of concerns and testability
    constructor(svc){
        this.tasksService = svc;
        console.log("taskscontroller constructor");
    }

    createTask(req, res){
        const task = new RequestTaskDto(req.body.task_name, req.body.task_description, req.body.created_by, req.body.parent_task_id);
        this.tasksService.createTask(task, (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({message: "Task added successfully"});
        })
    }

    getAllTasks(req, res){
        console.log("Invoking Controller GetAllTasks method");
        
        this.tasksService.getAllTasks((err, result) => {
            //if (err) return res.status(500).json(err);
            res.json(result);
        });
    }

    getTaskById(req, res){
        const id = req.params.id;
        this.tasksService.getTaskById(id, (err, result) => {
            if (err) {
                if (err.message === "Task not found") {
                    return res.status(404).json({error: err.message});
                }
                return res.status(500).json(err);
            }
            res.json(result);
        });
    }

    getTaskByCreator(req, res){
        const user_id = req.params.user_id;
        this.tasksService.getTaskByCreator(user_id, (err, result) => {
            if (err) return res.status(500).json(err);
            res.json(result);
        });
    }

    getTasksByDate(req, res){
        const fromDate = req.params.fromDate;
        const toDate = req.params.toDate;
        this.tasksService.getTasksByDate(fromDate, toDate, (err, result) => {
            if (err) return res.status(500).json(err);
            res.json(result);
        });
    }   

    getParentTask(req, res){
        const id = req.params.id;
        this.tasksService.getParentTask(id, (err, result) => {
            if (err) return res.status(500).json(err);
            res.json(result);
        });
    }

    updateTask(req, res){
        const id = req.params.id;
        const task = new RequestTaskDto(req.body.task_name, req.body.task_description, req.body.created_by, req.body.parent_task_id);
        this.tasksService.updateTask(id, task, (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({message: "Task updated successfully"});
        });
    }

    deleteTask(req, res) {
        const id = req.params.id;
        this.tasksService.deleteTask(id, (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({message: "Task deleted successfully"});
        });
    }

    getAllocatedTasksByStudentId(req, res){
        const id = req.params.id;
        this.tasksService.getAllocatedTasksByStudentId(id, (err, result) => {
            if (err) return res.status(500).json(err);
            res.json(result);
        });
    }
}
module.exports = TasksMasterController;