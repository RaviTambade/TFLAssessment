namespace StudentDashboard.Entities;

public class Tasks

{
    public string taskName { get; set; }
    public Tasks(string name)
    {
        this.taskName = name;
    }
}