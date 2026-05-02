class RequestTaskDto {
    
    constructor(task_name, task_description, created_by, parent_task_id){
        this.task_name = task_name;
        this.task_description = task_description;
        this.created_by = created_by;
        this.parent_task_id = parent_task_id;
    }
}

module.exports = RequestTaskDto;