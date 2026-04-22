class TaskRepository {
  constructor(db) {
    this.db = db;
  }

  //task table: mastertask
  //fields: id, title, description, status, created_by, created_at, updated_at

   
  async createTask(taskData) {
    // Database: INSERT INTO mastertask (title, description, status, created_by, created_at, updated_at)
    // Values: (taskData.title, taskData.description, taskData.status, taskData.created_by, NOW(), NOW())
    try {
      const query = `INSERT INTO mastertask (title, description, status, created_by, created_at, updated_at) 
                     VALUES (?, ?, ?, ?, NOW(), NOW())`;
      const [result] = await this.db.execute(query, [
        taskData.title,
        taskData.description,
        taskData.status,
        taskData.created_by
      ]);
      return { id: result.insertId, ...taskData };
    } catch (error) {
      throw new Error(`Error creating task: ${error.message}`);
    }
  }

  async getAllTasks() {
    // Database: SELECT * FROM mastertask ORDER BY created_at DESC
    try {
      const query = `SELECT id, title, description, status, created_by, created_at, updated_at 
                     FROM mastertask ORDER BY created_at DESC`;
      const [tasks] = await this.db.execute(query);
      return tasks;
    } catch (error) {
      throw new Error(`Error retrieving all tasks: ${error.message}`);
    }
  }
 
  async getTaskById(taskId) {
    // Database: SELECT * FROM mastertask WHERE id = ?
    try {
      const query = `SELECT id, title, description, status, created_by, created_at, updated_at 
                     FROM mastertask WHERE id = ?`;
      const [tasks] = await this.db.execute(query, [taskId]);
      return tasks.length > 0 ? tasks[0] : null;
    } catch (error) {
      throw new Error(`Error retrieving task by ID: ${error.message}`);
    }
  }
 
  async getTasksByStatus(status) {
    // Database: SELECT * FROM mastertask WHERE status = ? ORDER BY created_at DESC
    try {
      const query = `SELECT id, title, description, status, created_by, created_at, updated_at 
                     FROM mastertask WHERE status = ? ORDER BY created_at DESC`;
      const [tasks] = await this.db.execute(query, [status]);
      return tasks;
    } catch (error) {
      throw new Error(`Error retrieving tasks by status: ${error.message}`);
    }
  }
 
  async getTasksByCreator(userId) {
    // Database: SELECT * FROM mastertask WHERE created_by = ? ORDER BY created_at DESC
    try {
      const query = `SELECT id, title, description, status, created_by, created_at, updated_at 
                     FROM mastertask WHERE created_by = ? ORDER BY created_at DESC`;
      const [tasks] = await this.db.execute(query, [userId]);
      return tasks;
    } catch (error) {
      throw new Error(`Error retrieving tasks by creator: ${error.message}`);
    }
  }

  async updateTask(taskId, updateData) {
    // Database: UPDATE mastertask SET title = ?, description = ?, status = ?, updated_at = NOW() WHERE id = ?
    try {
      const fields = [];
      const values = [];
      
      if (updateData.title !== undefined) {
        fields.push('title = ?');
        values.push(updateData.title);
      }
      if (updateData.description !== undefined) {
        fields.push('description = ?');
        values.push(updateData.description);
      }
      if (updateData.status !== undefined) {
        fields.push('status = ?');
        values.push(updateData.status);
      }
      
      fields.push('updated_at = NOW()');
      values.push(taskId);

      const query = `UPDATE mastertask SET ${fields.join(', ')} WHERE id = ?`;
      await this.db.execute(query, values);
      
      return this.getTaskById(taskId);
    } catch (error) {
      throw new Error(`Error updating task: ${error.message}`);
    }
  }
 
  async updateTaskStatus(taskId, status) {
    // Database: UPDATE mastertask SET status = ?, updated_at = NOW() WHERE id = ?
    try {
      const query = `UPDATE mastertask SET status = ?, updated_at = NOW() WHERE id = ?`;
      await this.db.execute(query, [status, taskId]);
      
      return this.getTaskById(taskId);
    } catch (error) {
      throw new Error(`Error updating task status: ${error.message}`);
    }
  }

   
  async deleteTask(taskId) {
    // Database: DELETE FROM mastertask WHERE id = ?
    try {
      const query = `DELETE FROM mastertask WHERE id = ?`;
      const [result] = await this.db.execute(query, [taskId]);
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error(`Error deleting task: ${error.message}`);
    }
  }

 
  async taskExists(taskId) {
    // Database: SELECT COUNT(*) FROM mastertask WHERE id = ?
    try {
      const query = `SELECT COUNT(*) as count FROM mastertask WHERE id = ?`;
      const [result] = await this.db.execute(query, [taskId]);
      return result[0].count > 0;
    } catch (error) {
      throw new Error(`Error checking task existence: ${error.message}`);
    }
  }
 
  async getTaskCount() {
    // Database: SELECT COUNT(*) FROM mastertask
    try {
      const query = `SELECT COUNT(*) as count FROM mastertask`;
      const [result] = await this.db.execute(query);
      return result[0].count;
    } catch (error) {
      throw new Error(`Error getting task count: ${error.message}`);
    }
  }

  
  async getTasksPaginated(page = 1, limit = 10) {
    // Database: SELECT * FROM mastertask ORDER BY created_at DESC LIMIT ? OFFSET ?
    try {
      const offset = (page - 1) * limit;
      const query = `SELECT id, title, description, status, created_by, created_at, updated_at 
                     FROM mastertask ORDER BY created_at DESC LIMIT ? OFFSET ?`;
      const [tasks] = await this.db.execute(query, [limit, offset]);
      
      const countQuery = `SELECT COUNT(*) as total FROM mastertask`;
      const [countResult] = await this.db.execute(countQuery);
      
      return {
        data: tasks,
        pagination: {
          page,
          limit,
          total: countResult[0].total,
          pages: Math.ceil(countResult[0].total / limit)
        }
      };
    } catch (error) {
      throw new Error(`Error retrieving paginated tasks: ${error.message}`);
    }
  }


  async searchTasks(searchTerm) {
    // Database: SELECT * FROM mastertask WHERE title LIKE ? OR description LIKE ? ORDER BY created_at DESC
    try {
      const query = `SELECT id, title, description, status, created_by, created_at, updated_at 
                     FROM mastertask WHERE title LIKE ? OR description LIKE ? ORDER BY created_at DESC`;
      const searchPattern = `%${searchTerm}%`;
      const [tasks] = await this.db.execute(query, [searchPattern, searchPattern]);
      return tasks;
    } catch (error) {
      throw new Error(`Error searching tasks: ${error.message}`);
    }
  }

}

module.exports = TaskRepository;