const TaskFetchResponseDTO = require("../dtos/response/taskfetchresponsedto");

class TasksRepo{
    constructor(db) {
        this.db = db;
        console.log("tasksrepo constructor");

    }

    createTask(task, callback) {
        const query = `
            INSERT INTO master_tasks 
            (task_name, task_description, created_by, parent_task_id) 
            VALUES (?, ?, ?, ?)`;

        const values = [
            task.task_name,
            task.task_description,
            task.created_by,
            task.parent_task_id
        ];

        this.db.query(query, values, callback);
    }

    getAllTasks(callback){
        const query = `SELECT * FROM master_tasks`;
        this.db.query(query, (err,result)=>{
            if(err) return callback(err,null);
            else
            {
                console.log(result);
               callback(null, result);
        }
           
        });
    }

    getTaskById(id,callback){
        const query = `SELECT * FROM master_tasks WHERE id = ?`;
        this.db.query(query, [id], (err,result)=>{
            if(err) return callback(err,null);
            if(result.length === 0) return callback(new Error("Task not found"), null);
            const task = result[0];
            const taskDTO = new TaskFetchResponseDTO(task.id, task.task_name, task.task_description, task.created_by, task.created_on, task.parent_task_id, task.status);
            callback(null, taskDTO);
        });
    }

    getTaskByCreator(user_id, callback){
        const query = `SELECT * FROM master_tasks WHERE created_by = ?`;
        this.db.query(query, [user_id],(err,result)=>{
            if(err) return callback(err,null);
            const taskList=  result.map(task => {
                return new TaskFetchResponseDTO(task.id, task.task_name, task.task_description, task.created_by, task.created_on, task.parent_task_id, task.status);
            });
            callback(null, taskList);
        })
    }

    getTaskByDate(fromDate, toDate, callback) {
        const query = `SELECT * FROM master_tasks WHERE created_on BETWEEN ? AND ?`;
        this.db.query(query, [fromDate, toDate],(err,result)=>{
            if(err) return callback(err, null);
            const taskList = result.map(task => {
                return new TaskFetchResponseDTO(task.id, task.task_name, task.task_description, task.created_by, task.created_on, task.parent_task_id, task.status);
            });
            callback(null, taskList);
        })
  
    }

    getParentTask(id, callback){
        const query = `SELECT parent_task_id FROM master_tasks WHERE id = ?`;
        this.db.query(query, [id], (err,result)=>{
            if(err) return callback(err,null);
            if(result.length === 0) return callback(new Error("Parent task not found"), null);
            const task = result[0];
            const taskDTO = new TaskFetchResponseDTO(task.id, task.task_name, task.task_description, task.created_by, task.created_on, task.parent_task_id, task.status);
            callback(null, taskDTO);
        });
    }

    updateTask(id, task, callback) {
        const query = 'UPDATE master_tasks SET task_name = ?, task_description = ?, created_by = ?, parent_task_id = ? WHERE id = ?';
        const values = [task.task_name, task.task_description, task.created_by, task.parent_task_id, id];
        this.db.query(query, values, (err, result) => {
            if (err) {
                console.error('Failed to update task:', err);
                return callback(err, null);
            }
            callback(null, result);
        });
    }

    deleteTask(id, callback) {
        const query = 'UPDATE master_tasks SET status = "INACTIVE" WHERE id = ?';
        this.db.query(query, [id], (err, result) => {
            if (err) {
                console.error('Failed to delete task:', err);
                return callback(err, null);
            }
            callback(null, result);
        });
    }

    getAllocatedTasksByStudentId(id, callback) {
        const query = 'SELECT t.id, t.task_name, t.task_description FROM master_tasks t JOIN allocated_tasks ta on t.id = ta.task_id WHERE ta.assigned_to = ?';
        this.db.query(query, [id], (err, result) => {
            if (err) {
                console.error('Failed to fetch allocated tasks:', err);
                return callback(err, null);
            }
            callback(null, result);
        });
    }

}

module.exports = TasksRepo;