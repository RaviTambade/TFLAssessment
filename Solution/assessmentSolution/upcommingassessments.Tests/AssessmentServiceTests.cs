using Moq;
using upcommingassessments.Models;
using upcommingassessments.Repositories;
using upcommingassessments.Services;

namespace upcommingassessments.Tests;

public class AssessmentServiceTests
{
    private readonly Mock<AssessmentRepository> _mockRepository;
    private readonly AssessmentService _assessmentService;

    public AssessmentServiceTests()
    {
        _mockRepository = new Mock<AssessmentRepository>();
        _assessmentService = new AssessmentService(_mockRepository.Object);
    }

    [Fact]
    public async Task GetUpcomingAssessmentsAsync_ValidStudentId_ReturnsFilteredAndSortedAssessments()
    {
        // Arrange
        var studentId = 1;
        var now = DateTime.Now;
        var mockAssessments = new List<StudentAssessment>
        {
            new StudentAssessment
            {
                AssessmentAssignmentId = 1,
                StudentId = studentId,
                Test = new Assessment { TestId = 1, Title = "Test 1" },
                DueDate = now.AddDays(1),
                Status = "Assigned"
            },
            new StudentAssessment
            {
                AssessmentAssignmentId = 2,
                StudentId = studentId,
                Test = new Assessment { TestId = 2, Title = "Test 2" },
                DueDate = now.AddDays(-1), // Past due date
                Status = "Assigned"
            },
            new StudentAssessment
            {
                AssessmentAssignmentId = 3,
                StudentId = studentId,
                Test = new Assessment { TestId = 3, Title = "Test 3" },
                DueDate = now.AddDays(3),
                Status = "Assigned"
            }
        };

        _mockRepository.Setup(r => r.GetUpcomingAssessmentsAsync(studentId))
            .ReturnsAsync(mockAssessments);

        // Act
        var result = await _assessmentService.GetUpcomingAssessmentsAsync(studentId);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(2, result.Count); // Only future assessments
        Assert.Equal(now.AddDays(1), result[0].DueDate); // Should be sorted by due date
        Assert.Equal(now.AddDays(3), result[1].DueDate);
    }

    [Fact]
    public async Task GetUpcomingAssessmentsAsync_InvalidStudentId_ThrowsArgumentException()
    {
        // Arrange
        var invalidStudentId = 0;

        // Act & Assert
        var exception = await Assert.ThrowsAsync<ArgumentException>(
            () => _assessmentService.GetUpcomingAssessmentsAsync(invalidStudentId));

        Assert.Equal("Invalid student ID", exception.Message);
        Assert.Equal("studentId", exception.ParamName);
    }

    [Fact]
    public async Task GetUpcomingAssessmentsAsync_NegativeStudentId_ThrowsArgumentException()
    {
        // Arrange
        var invalidStudentId = -1;

        // Act & Assert
        var exception = await Assert.ThrowsAsync<ArgumentException>(
            () => _assessmentService.GetUpcomingAssessmentsAsync(invalidStudentId));

        Assert.Equal("Invalid student ID", exception.Message);
        Assert.Equal("studentId", exception.ParamName);
    }

    [Fact]
    public async Task GetUpcomingAssessmentsAsync_NoUpcomingAssessments_ReturnsEmptyList()
    {
        // Arrange
        var studentId = 1;
        var now = DateTime.Now;
        var mockAssessments = new List<StudentAssessment>
        {
            new StudentAssessment
            {
                AssessmentAssignmentId = 1,
                StudentId = studentId,
                Test = new Assessment { TestId = 1, Title = "Test 1" },
                DueDate = now.AddDays(-1), // Past due date
                Status = "Assigned"
            }
        };

        _mockRepository.Setup(r => r.GetUpcomingAssessmentsAsync(studentId))
            .ReturnsAsync(mockAssessments);

        // Act
        var result = await _assessmentService.GetUpcomingAssessmentsAsync(studentId);

        // Assert
        Assert.NotNull(result);
        Assert.Empty(result);
    }

    [Fact]
    public async Task GetAssessmentDetailsAsync_ValidIds_ReturnsAssessment()
    {
        // Arrange
        var studentId = 1;
        var assessmentId = 1;
        var expectedAssessment = new StudentAssessment
        {
            AssessmentAssignmentId = assessmentId,
            StudentId = studentId,
            Test = new Assessment { TestId = 1, Title = "Test Assessment" },
            DueDate = DateTime.Now.AddDays(7),
            Status = "Assigned"
        };

        _mockRepository.Setup(r => r.GetAssessmentByIdAsync(studentId, assessmentId))
            .ReturnsAsync(expectedAssessment);

        // Act
        var result = await _assessmentService.GetAssessmentDetailsAsync(studentId, assessmentId);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(expectedAssessment.AssessmentAssignmentId, result.AssessmentAssignmentId);
        Assert.Equal(expectedAssessment.StudentId, result.StudentId);
        Assert.Equal(expectedAssessment.Test.Title, result.Test.Title);
    }

    [Fact]
    public async Task GetAssessmentDetailsAsync_InvalidStudentId_ThrowsArgumentException()
    {
        // Arrange
        var invalidStudentId = 0;
        var assessmentId = 1;

        // Act & Assert
        var exception = await Assert.ThrowsAsync<ArgumentException>(
            () => _assessmentService.GetAssessmentDetailsAsync(invalidStudentId, assessmentId));

        Assert.Equal("Invalid student ID", exception.Message);
        Assert.Equal("studentId", exception.ParamName);
    }

    [Fact]
    public async Task GetAssessmentDetailsAsync_InvalidAssessmentId_ThrowsArgumentException()
    {
        // Arrange
        var studentId = 1;
        var invalidAssessmentId = 0;

        // Act & Assert
        var exception = await Assert.ThrowsAsync<ArgumentException>(
            () => _assessmentService.GetAssessmentDetailsAsync(studentId, invalidAssessmentId));

        Assert.Equal("Invalid assessment ID", exception.Message);
        Assert.Equal("assessmentId", exception.ParamName);
    }

    [Fact]
    public async Task GetAssessmentDetailsAsync_AssessmentNotFound_ReturnsNull()
    {
        // Arrange
        var studentId = 1;
        var assessmentId = 999; // Non-existent

        _mockRepository.Setup(r => r.GetAssessmentByIdAsync(studentId, assessmentId))
            .ReturnsAsync((StudentAssessment?)null);

        // Act
        var result = await _assessmentService.GetAssessmentDetailsAsync(studentId, assessmentId);

        // Assert
        Assert.Null(result);
    }

    [Fact]
    public async Task GetUpcomingAssessmentsAsync_RepositoryThrowsException_PropagatesException()
    {
        // Arrange
        var studentId = 1;
        _mockRepository.Setup(r => r.GetUpcomingAssessmentsAsync(studentId))
            .ThrowsAsync(new Exception("Database error"));

        // Act & Assert
        await Assert.ThrowsAsync<Exception>(
            () => _assessmentService.GetUpcomingAssessmentsAsync(studentId));
    }

    [Fact]
    public async Task GetAssessmentDetailsAsync_RepositoryThrowsException_PropagatesException()
    {
        // Arrange
        var studentId = 1;
        var assessmentId = 1;
        _mockRepository.Setup(r => r.GetAssessmentByIdAsync(studentId, assessmentId))
            .ThrowsAsync(new Exception("Database error"));

        // Act & Assert
        await Assert.ThrowsAsync<Exception>(
            () => _assessmentService.GetAssessmentDetailsAsync(studentId, assessmentId));
    }
}