const TaskFetchResponseDTO = require("../dtos/response/taskfetchresponsedto");

class TaskAllocationRepo{
    constructor(db) {
        this.db = db;
        console.log("taskallocationrepo constructor");

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

allocate(taskId, assignedBy, assignedTo, assignedOn, status, dueDate, startedOn, completedOn, remark, callback) {

    const query = 'INSERT INTO allocated_tasks (task_id, assigned_by, assigned_to, assigned_on, status, due_date, started_on, completed_on, remark) VALUES (?,?,?,?,?,?,?,?,?)';

    this.db.query(
        query,
        [taskId, assignedBy, assignedTo, assignedOn, status, dueDate, startedOn, completedOn, remark],
        (err, result) => {

            if (err) {
                console.error('Failed to allocate task:', err);
                return callback(err, null);
            }

            callback(null, result);
        }
    );
}

    unallocate(taskId, assignedTo, callback) {
        const query = 'DELETE FROM allocated_tasks WHERE task_id = ? AND assigned_to = ?';
        this.db.query(query, [taskId, assignedTo], (err, result) => {
            if (err) {
                console.error('Failed to unallocate task:', err);
                return callback(err, null);
            }
            callback(null, result);
        });
    }

    getAllocatedTasksById(id, callback) {
        const query = 'SELECT ta.*, t.task_name, t.task_description FROM allocated_tasks ta JOIN master_tasks t ON ta.task_id = t.id WHERE ta.task_id = ?';
        this.db.query(query, [id], (err, result) => {
            if (err) {
                console.error('Failed to fetch allocated tasks by id:', err);
                return callback(err, null);
            }
            callback(null, result);
        });
    }

    getTasksAllocatedByStatus(status, callback) {
        const query = 'SELECT t.id, t.task_name, t.task_description, t.status FROM master_tasks t JOIN allocated_tasks ta ON t.id = ta.task_id WHERE t.status = ?';
        this.db.query(query, [status], (err, result) => {
            if (err) {
                console.error('Failed to fetch tasks allocated by status:', err);
                return callback(err, null);
            }
            callback(null, result);
        });
    }

    getTasksAllocatedToUserByStatus(userId, status, callback) {
        const query = 'SELECT t.id, t.task_name, t.task_description, t.status FROM master_tasks t JOIN allocated_tasks ta ON t.id = ta.task_id WHERE ta.assigned_to = ? AND t.status = ?';
        this.db.query(query, [userId, status], (err, result) => {
            if (err) {
                console.error('Failed to fetch tasks allocated to user by status:', err);
                return callback(err, null);
            }
            callback(null, result);
        });
    }
}

module.exports = TaskAllocationRepo;