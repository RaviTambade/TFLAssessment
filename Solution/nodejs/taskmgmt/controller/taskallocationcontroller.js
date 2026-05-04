const TaskAllocationRepo = require('../repository/taskallocationrepo');

class TaskAllocationController {

    constructor(repo) {
        this.taskAllocationRepo = repo;
    }

    getAllocatedTasksByStudentId(req, res) {
        const id = req.params.id;
        this.taskAllocationRepo.getAllocatedTasksByStudentId(id, (err, result) => {
            if (err) return res.status(500).json(err);
            res.json(result);
        });
    }

    allocate(req, res) {
        const {
    taskId,
    assignedBy,
    assignedTo,
    assignedOn,
    status,
    dueDate,
    startedOn,
    completedOn,
    remark
} = req.body;

this.taskAllocationRepo.allocate(
    taskId,
    assignedBy,
    assignedTo,
    assignedOn,
    status,
    dueDate,
    startedOn,
    completedOn,
    remark,
    (err, result) => {
        if (err) return res.status(500).json(err);

        res.json({
            message: "Task allocated successfully",
            data: result
        });
    }
);
    }

    unallocate(req, res) {
        const { taskId, assignedTo } = req.body;
        this.taskAllocationRepo.unallocate(taskId, assignedTo, (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({ message: "Task unallocated successfully" });
        });
    }

    getAllocatedTasksById(req, res) {
        const id = req.params.id;
        this.taskAllocationRepo.getAllocatedTasksById(id, (err, result) => {
            if (err) return res.status(500).json(err);
            res.json(result);
        });
    }

    getTasksAllocatedByStatus(req, res) {
        const status = req.params.status;
        this.taskAllocationRepo.getTasksAllocatedByStatus(status, (err, result) => {
            if (err) return res.status(500).json(err);
            res.json(result);
        });
    }

    getTasksAllocatedToUserByStatus(req, res) {
        const userId = req.params.userId;
        const status = req.params.status;
        this.taskAllocationRepo.getTasksAllocatedToUserByStatus(userId, status, (err, result) => {
            if (err) return res.status(500).json(err);
            res.json(result);
        });
    }
}



module.exports = TaskAllocationController;