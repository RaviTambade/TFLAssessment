// repository-level integration test

using Xunit;
using Microsoft.Extensions.Configuration;
using APIforSubject.Entities;
using APIforSubject.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace APIforSubject.Tests.Repositories
{
    public class SubjectRepositoryTests
    {
        private readonly SubjectRepository _repository;

        public SubjectRepositoryTests()
        {
            // Build configuration from appsettings.Development.json or similar
            var config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.Test.json") // you must create this
                .Build();

            _repository = new SubjectRepository(config);
        }

        [Fact]
        public async Task GetAllSubject_ReturnsData()
        {
            // Act
            List<SubjectModel> subjects = await _repository.GetAllSubject();

            // Assert
            Assert.NotNull(subjects);
            Assert.True(subjects.Count >= 0); // Could be 0 if DB is empty
        }

        [Fact]
        public async Task AddSubject_InsertsRecord()
        {
            SubjectModel newSubject = new SubjectModel
            {
                Title = "IntegrationT"
            };

            int result = await _repository.AddSubject(newSubject);

            Assert.Equal(1, result); // 1 row should be inserted
        }

        [Fact]
        public async Task DeleteSubject_DeletesRecord()
        {
            // Insert first
            var subject = new SubjectModel { Title = "DeletesRecord" };
            await _repository.AddSubject(subject);

            // Get inserted record (assuming it's the last)
            var allSubjects = await _repository.GetAllSubject();
            var inserted = allSubjects.FindLast(s => s.Title == "DeletesRecord");

            Assert.NotNull(inserted);

            // Delete
            int deleteResult = await _repository.DeleteSubject(inserted.Id);
            Assert.Equal(1, deleteResult);
        }

        [Fact]
        public async Task AddSubject_ReturnsMinusOne_WhenConnectionFails()
        {
            // Use an invalid connection string
            var fakeConfig = new ConfigurationBuilder()
                .AddInMemoryCollection(new Dictionary<string, string>
                {
                    { "ConnectionStrings:DefaultConnection", "Server=invalid;Database=none;Uid=wrong;Pwd=wrong;" }
                })
                .Build();

            var badRepository = new SubjectRepository(fakeConfig);
            var subject = new SubjectModel { Title = "WillFail" };

            int result = await badRepository.AddSubject(subject);

            Assert.Equal(-1, result); // Connection should fail, and method should return -1
        }

        [Fact]
        public async Task DeleteSubject_ReturnsZero_WhenIdDoesNotExist()
        {
            int nonExistentId = -999; // unlikely to exist

            int result = await _repository.DeleteSubject(nonExistentId);

            Assert.Equal(0, result); // No rows should be affected
        }

        [Fact]
        public async Task AddSubject_ReturnsMinusOne_WhenTitleIsNull()
        {
            var newSubject = new SubjectModel
            {
                Title = null! // or string.Empty if your DB allows NULL but not empty
            };
        
            int result = await _repository.AddSubject(newSubject);
        
            Assert.Equal(-1, result); // Your method should catch the exception and return -1
        }

    }
}
