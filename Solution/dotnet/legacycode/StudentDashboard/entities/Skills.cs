using Microsoft.Net.Http.Headers;

namespace StudentDashboard.Entities;

public class Skills

{
    public string Name { get; set; }
    public int Value { get; set; }
    public Skills(string name, int value)
    {
        this.Name = name;
        this.Value = value;
    }
}