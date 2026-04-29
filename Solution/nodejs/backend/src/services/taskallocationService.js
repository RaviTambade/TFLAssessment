 
class TaskAllocationService {
   
  constructor(taskAllocationRepository) {
    if (!taskAllocationRepository) {
      throw new Error('TaskAllocationRepository is required for TaskAllocationService');
    }
    this.taskAllocationRepository = taskAllocationRepository;
  }

  
  async allocateTaskToUser(taskId, userId) {
    try {
     
      if (!taskId || !userId) {
        throw new Error('Task ID and User ID are required');
      }

      // Check if task is already allocated to user
      const allocationStatus = await this.getTaskAllocationStatus(userId, taskId);
      if (allocationStatus) {
        throw new Error('Task is already allocated to this user');
      }

      // Allocate the task
      const result = await this.taskAllocationRepository.allocateTask(taskId, userId);
      return {
        success: true,
        message: 'Task allocated successfully',
        data: result
      };
    } catch (error) {
      throw new Error(`Error allocating task: ${error.message}`);
    }
  }

   
  async deallocateTaskFromUser(taskId, userId) {
    try {
      // Validate inputs
      if (!taskId || !userId) {
        throw new Error('Task ID and User ID are required');
      }

      // Deallocate the task
      const result = await this.taskAllocationRepository.deallocateTask(taskId, userId);
      return {
        success: true,
        message: 'Task deallocated successfully',
        data: result
      };
    } catch (error) {
      throw new Error(`Error deallocating task: ${error.message}`);
    }
  }

   
  async getUserAllocatedTasks(userId) {
    try {
      // Validate input
      if (!userId) {
        throw new Error('User ID is required');
      }

      const tasks = await this.taskAllocationRepository.getAllocatedTasks(userId);
      return {
        success: true,
        count: tasks ? tasks.length : 0,
        data: tasks
      };
    } catch (error) {
      throw new Error(`Error retrieving allocated tasks: ${error.message}`);
    }
  }

  
  async getTaskAllocationStatus(userId, taskId) {
    try {
      // Validate inputs
      if (!userId || !taskId) {
        throw new Error('User ID and Task ID are required');
      }

      const status = await this.taskAllocationRepository.getTaskAllocationStatus(userId, taskId);
      return status;
    } catch (error) {
      throw new Error(`Error retrieving allocation status: ${error.message}`);
    }
  }

  async getTasksAssignedByUser(userId) {
    try {
      // Validate input
      if (!userId) {
        throw new Error('User ID is required');
      }

      const tasks = await this.taskAllocationRepository.gettasksAssignedby(userId);
      return {
        success: true,
        count: tasks ? tasks.length : 0,
        data: tasks
      };
    } catch (error) {
      throw new Error(`Error retrieving assigned tasks: ${error.message}`);
    }
  }

  
  async getTasksAssignedToUser(userId) {
    try {
      // Validate input
      if (!userId) {
        throw new Error('User ID is required');
      }

      const tasks = await this.taskAllocationRepository.getTasksAssignedTo(userId);
      return {
        success: true,
        count: tasks ? tasks.length : 0,
        data: tasks
      };
    } catch (error) {
      throw new Error(`Error retrieving tasks assigned to user: ${error.message}`);
    }
  }

 
  async getTasksInDateRange(startDate, endDate) {
    try {
      // Validate inputs
      if (!startDate || !endDate) {
        throw new Error('Start date and end date are required');
      }

      // Validate date format
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (!dateRegex.test(startDate) || !dateRegex.test(endDate)) {
        throw new Error('Invalid date format. Use YYYY-MM-DD');
      }

      // Validate date range
      if (new Date(startDate) > new Date(endDate)) {
        throw new Error('Start date must be before end date');
      }

      const tasks = await this.taskAllocationRepository.getAllTasksInbetween(startDate, endDate);
      return {
        success: true,
        count: tasks ? tasks.length : 0,
        data: tasks
      };
    } catch (error) {
      throw new Error(`Error retrieving tasks in date range: ${error.message}`);
    }
  }

  async getUserTasksInDateRange(userId, startDate, endDate) {
    try {
      // Validate inputs
      if (!userId || !startDate || !endDate) {
        throw new Error('User ID, start date, and end date are required');
      }

      // Validate date format
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (!dateRegex.test(startDate) || !dateRegex.test(endDate)) {
        throw new Error('Invalid date format. Use YYYY-MM-DD');
      }

      // Validate date range
      if (new Date(startDate) > new Date(endDate)) {
        throw new Error('Start date must be before end date');
      }

      const tasks = await this.taskAllocationRepository.getAllTasksAssignedtoInbetween(
        userId,
        startDate,
        endDate
      );
      return {
        success: true,
        count: tasks ? tasks.length : 0,
        data: tasks
      };
    } catch (error) {
      throw new Error(`Error retrieving user tasks in date range: ${error.message}`);
    }
  }

 
  async getUserAllocationStats(userId) {
    try {
      // Validate input
      if (!userId) {
        throw new Error('User ID is required');
      }

      const allocatedTasks = await this.taskAllocationRepository.getAllocatedTasks(userId);
      const tasksAssignedBy = await this.taskAllocationRepository.gettasksAssignedby(userId);
      const tasksAssignedTo = await this.taskAllocationRepository.getTasksAssignedTo(userId);

      return {
        success: true,
        stats: {
          totalAllocatedTasks: allocatedTasks ? allocatedTasks.length : 0,
          totalTasksAssignedByUser: tasksAssignedBy ? tasksAssignedBy.length : 0,
          totalTasksAssignedToUser: tasksAssignedTo ? tasksAssignedTo.length : 0
        }
      };
    } catch (error) {
      throw new Error(`Error retrieving allocation statistics: ${error.message}`);
    }
  }
}

module.exports = TaskAllocationService;
