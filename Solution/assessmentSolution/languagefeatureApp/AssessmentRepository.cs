using upcommingassessments.Models;

namespace upcommingassessments.Repositories;

public class AssessmentRepository : IAssessmentRepository
{
    // CRUD operations for Assessment entities
    // In-memory data for demonstration - in real app, this would be a database

    private static  List<StudentAssessment> _studentAssessments = new()
    {
        new StudentAssessment
        {
            AssessmentAssignmentId = 1,
            StudentId = 1,
            Test = new Assessment
            {
                TestId = 1,
                Title = "C# Fundamentals Assessment",
                Technology = "C#",
                TotalMarks = 100,
                Duration = 60,
                DueDate = DateTime.Now.AddDays(7),
                Status = "Active"
            },
            AssignedAt = DateTime.Now.AddDays(-1),
            DueDate = DateTime.Now.AddDays(7),
            Status = "Assigned"
        },
        new StudentAssessment
        {
            AssessmentAssignmentId = 2,
            StudentId = 1,
            Test = new Assessment
            {
                TestId = 2,
                Title = "ASP.NET Core Web API",
                Technology = "ASP.NET Core",
                TotalMarks = 100,
                Duration = 90,
                DueDate = DateTime.Now.AddDays(14),
                Status = "Active"
            },
            AssignedAt = DateTime.Now.AddDays(-2),
            DueDate = DateTime.Now.AddDays(14),
            Status = "Assigned"
        }
    };

    public bool AddAssessment(StudentAssessment assessment)
    {
        if (assessment == null)
            return false;

        if (_studentAssessments.Any(a => a.AssessmentAssignmentId == assessment.AssessmentAssignmentId))
            return false;

        if (assessment.AssessmentAssignmentId <= 0)
            assessment.AssessmentAssignmentId = _studentAssessments.Any() ? _studentAssessments.Max(a => a.AssessmentAssignmentId) + 1 : 1;

        _studentAssessments.Add(assessment);
        return true;
    }

    public bool UpdateAssessment(StudentAssessment assessment)
    {
        if (assessment == null)
            return false;

        var existing = _studentAssessments.FirstOrDefault(a => a.AssessmentAssignmentId == assessment.AssessmentAssignmentId);
        if (existing == null)
            return false;

        existing.StudentId = assessment.StudentId;
        existing.Test = assessment.Test ?? existing.Test;
        existing.AssignedAt = assessment.AssignedAt;
        existing.DueDate = assessment.DueDate;
        existing.Status = assessment.Status;

        return true;
    }

    public bool DeleteAssessment(int assessmentId)
    {
        var existing = _studentAssessments.FirstOrDefault(a => a.AssessmentAssignmentId == assessmentId);
        if (existing == null)
            return false;

        return _studentAssessments.Remove(existing);
    }

    public List<StudentAssessment> GetUpcomingAssessments(int studentId)
    {
        return _studentAssessments
            .Where(sa => sa.StudentId == studentId && sa.DueDate > DateTime.Now && sa.Status == "Assigned")
            .OrderBy(sa => sa.DueDate)
            .ToList();
    }

    public StudentAssessment? GetAssessmentById(int studentId, int assessmentId)
    {
        return _studentAssessments
            .FirstOrDefault(sa => sa.StudentId == studentId && sa.AssessmentAssignmentId == assessmentId);
    }
} 