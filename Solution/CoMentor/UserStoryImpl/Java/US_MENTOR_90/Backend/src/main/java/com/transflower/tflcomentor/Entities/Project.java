package com.transflower.tflcomentor.Entities;

public class Project {

    private long project_id;
    private long mentor_id;
    private String project_name;
    private String description;
    private String repository_url;
    private String status;
    private String created_at;

    

    public Project()
    {

    }

    public Project(long project_id,long mentor_id,String project_name,String description,String repository_url,String status,String created_at)
    {
        this.project_id=project_id;
        this.mentor_id=mentor_id;
        this.project_name=project_name;
        this.description=description;
        this.repository_url=repository_url;
        this.status=status;
        this.created_at=created_at;

    }
   
    public long getProject_id() {
        return project_id;
    }

    public void setProject_id(long project_id) {
        this.project_id = project_id;
    }

    public long getMentor_id() {
        return mentor_id;
    }

    public void setMentor_id(long mentor_id) {
        this.mentor_id = mentor_id;
    }

    public String getProject_name() {
        return project_name;
    }

    public void setProject_name(String project_name) {
        this.project_name = project_name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getRepository_url() {
        return repository_url;
    }

    public void setRepository_url(String repository_url) {
        this.repository_url = repository_url;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCreated_at() {
        return created_at;
    }

    public void setCreated_at(String created_at) {
        this.created_at = created_at;
    }

    @Override
    public String toString() 
    {
            return "Project{" +
            "project_id=" + project_id +
            ", mentor_id=" + mentor_id +
            ", project_name='" + project_name + '\'' +
            ", description='" + description + '\'' +
            ", repository_url='" + repository_url + '\'' +
            ", status='" + status + '\'' +
            ", created_at='" + created_at + '\'' +
            '}';
    }

    @Override
    public boolean equals(Object obj) 
    {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;

        Project project = (Project) obj;

        return project_id == project.project_id;
    }

    @Override
     public int hashCode() {
    return Long.hashCode(project_id);
}

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone(); // shallow copy
    }

    @Override
    protected void finalize() throws Throwable
    {
        try {
        System.out.println("Project object is being garbage collected");
         } finally {
        super.finalize();
    }
}

    

}


