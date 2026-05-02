class TaskFetchResponseDTO {
    constructor(id, task_name, task_description, created_by, created_on, updated_on, parent_task_id, status){ {
        this.id = id;
        this.task_name = task_name;
        this.task_description = task_description;
        this.created_by = created_by;
        this.created_on = created_on;
        this.updated_on = updated_on;
        this.parent_task_id = parent_task_id;
        this.status = status;
    }
}
}

module.exports = TaskFetchResponseDTO;