namespace StudentDashboard.Entities;

public class NewProject

{
    public string Name { get; set; }
    public int Completion { get; set; }
   public List<Tasks> Tasks {get; set; }
    public NewProject(string projectName, int completion, List<Tasks> tasks)
    {
        this.Name = projectName;
        this.Completion = completion;
        this.Tasks = tasks;
    }
}