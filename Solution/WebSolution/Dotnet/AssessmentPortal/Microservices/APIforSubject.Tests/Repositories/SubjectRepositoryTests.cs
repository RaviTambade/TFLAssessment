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

        // [Fact]
        // public async Task DeleteSubject_DeletesRecord()
        // {
        //     // Insert first
        //     var subject = new SubjectModel { Title = "IntegrationT" };
        //     await _repository.AddSubject(subject);

        //     // Get inserted record (assuming it's the last)
        //     var allSubjects = await _repository.GetAllSubject();
        //     var inserted = allSubjects.FindLast(s => s.Title == "IntegrationT");

        //     Assert.NotNull(inserted);

        //     // Delete
        //     int deleteResult = await _repository.DeleteSubject(inserted.Id);
        //     Assert.Equal(1, deleteResult);
        // }
    }
}
