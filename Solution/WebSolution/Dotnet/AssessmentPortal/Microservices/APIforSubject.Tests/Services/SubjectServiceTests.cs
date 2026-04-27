// Unit Tests for SubjectService using Moq

using Moq;

using APIforSubject.Services;
using APIforSubject.Entities;
using APIforSubject.Repositories.Interfaces;

namespace APIforSubject.Tests.Services
{
    public class SubjectServiceTests
    {
        [Fact]
        public async Task GetSubjects_ReturnsListOfSubjects()
        {
            // Arrange
            Mock<ISubjectRepository> mockRepo = new Mock<ISubjectRepository>();
            mockRepo = new Mock<ISubjectRepository>();
            mockRepo.Setup(repo => repo.GetAllSubject()).ReturnsAsync(new List<SubjectModel>
            {
                new SubjectModel { Id = 1, Title = "Math" },
                new SubjectModel { Id = 2, Title = "Science" }
            });

            var service = new SubjectService(mockRepo.Object);

            // Act
            var result = await service.GetAllSubject();

            // Assert
            Assert.NotNull(result);
            Assert.Equal(2, result.Count);
            Assert.Equal("Math", result[0].Title);
        }

        [Fact]
        public async Task AddSubject_ReturnsSuccessCode()
        {
            // Arrange
            SubjectModel subject = new SubjectModel { Title = "History" };
            Mock<ISubjectRepository> mockRepo = new Mock<ISubjectRepository>();
            mockRepo.Setup(repo => repo.AddSubject(subject)).ReturnsAsync(1); // Simulate success

            var service = new SubjectService(mockRepo.Object);

            // Act
            var result = await service.AddSubject(subject);

            // Assert
            Assert.Equal(1, result);
        }

        [Fact]
        public async Task DeleteSubject_ReturnsSuccessCode()
        {
            // Arrange
            int subjectId = 42;
            var mockRepo = new Mock<ISubjectRepository>();
            mockRepo.Setup(repo => repo.DeleteSubject(subjectId)).ReturnsAsync(1); // Simulate success

            var service = new SubjectService(mockRepo.Object);

            // Act
            var result = await service.DeleteSubject(subjectId);

            // Assert
            Assert.Equal(1, result);
        }


        [Fact]
        public async Task AddSubject_ReturnsMinusOne_WhenInsertFails()
        {
            // Arrange
            var subject = new SubjectModel { Title = "History" };
            var mockRepo = new Mock<ISubjectRepository>();
            mockRepo.Setup(repo => repo.AddSubject(subject)).ReturnsAsync(-1); // Simulate failure

            var service = new SubjectService(mockRepo.Object);

            // Act
            var result = await service.AddSubject(subject);

            // Assert
            Assert.Equal(-1, result);
        }

        [Fact]
        public async Task DeleteSubject_ReturnsZero_WhenSubjectNotFound()
        {
            // Arrange
            int subjectId = 99;
            var mockRepo = new Mock<ISubjectRepository>();
            mockRepo.Setup(repo => repo.DeleteSubject(subjectId)).ReturnsAsync(0); // Simulate no match
        
            var service = new SubjectService(mockRepo.Object);
        
            // Act
            var result = await service.DeleteSubject(subjectId);
        
            // Assert
            Assert.Equal(0, result);
        }

    }
    
}
