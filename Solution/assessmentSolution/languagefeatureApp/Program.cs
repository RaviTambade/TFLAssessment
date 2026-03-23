using upcommingassessments.Repositories;
using upcommingassessments.Models;
using System.ComponentModel;

IAssessmentRepository repository = new AssessmentRepository();

// Example usage
var assessment = new StudentAssessment
{
    StudentId = 1,
    Test = new Assessment
    {
        Title = "Sample Assessment",
        Technology = "C#",
        TotalMarks = 100,
        Duration = 60,
        DueDate = DateTime.Now.AddDays(7),
        Status = "Active"
    },
    AssignedAt = DateTime.Now,
    DueDate = DateTime.Now.AddDays(7),
    Status = "Assigned"
};

repository.AddAssessment(assessment);
List<StudentAssessment> upcomingAssessments = repository.GetUpcomingAssessments(1);
foreach (var a in upcomingAssessments)
{
    Console.WriteLine($"Assessment: {a.Test.Title}, Due: {a.DueDate}");
}



