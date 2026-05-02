class TasksService {

    constructor(tasksRepo){
        this.tasksRepo = tasksRepo;
                console.log("tasksservice constructor");

    }

    createTask(task, callback){
        this.tasksRepo.createTask(task, callback);
    }

    getAllTasks(callback){
        
        console.log("Invoking Service Method");
        this.tasksRepo.getAllTasks(callback);
    }

    getTaskById(id, callback){
        this.tasksRepo.getTaskById(id, callback);
    }

    getTaskByCreator(user_id, callback){
        this.tasksRepo.getTaskByCreator(user_id, callback);
    }

    getTasksByDate(fromDate, toDate, callback){
        this.tasksRepo.getTaskByDate(fromDate, toDate, callback);
    }

    getParentTask(id, callback){
        this.tasksRepo.getParentTask(id, callback);
    }

    updateTask(id, task, callback){
        this.tasksRepo.updateTask(id, task, callback);
    }

    deleteTask(id, callback){
        this.tasksRepo.deleteTask(id, callback);
    }

    getAllocatedTasksByStudentId(id, callback){
        this.tasksRepo.getAllocatedTasksByStudentId(id, callback);
    }
}
module.exports=TasksService;