using Xunit;
using Moq;
using System.Collections.Generic;
using System.Threading.Tasks;
// using APIforSubject.Entities;
// using APIforSubject.Repositories;
// using APIforSubject.Services;

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
            var mockRepo = new Mock<ISubjectRepository>();
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
    }
}
