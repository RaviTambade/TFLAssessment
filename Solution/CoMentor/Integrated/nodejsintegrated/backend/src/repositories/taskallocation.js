
class TaskAllocationRepository {
  constructor(db) {
    this.db = db;
  }

    allocateTask(taskId, userId, callback) {}
    deallocateTask(taskId, userId, callback) {}
    getAllocatedTasks(userId, callback) {}
    getTaskAllocationStatus(userid,taskId, callback) {}

    gettasksAssignedby(userId, callback) {

    }

    getTasksAssignedTo(userId, callback) {
    }
    getAllTasksInbetween(startDate, endDate, callback) {
    }
    getAllTasksAssignedtoInbetween(userId, startDate, endDate, callback) {

    }

    

}
