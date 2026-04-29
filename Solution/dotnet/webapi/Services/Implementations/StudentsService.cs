using backend.DTOs;
using backend.Repositories.Interfaces;
using backend.Services.Interfaces;
using System.Threading.Tasks;

namespace backend.Services.Implementations
{
    public class StudentsService : IStudentsService
    {
        private readonly IStudentsRepository _repository;

        public StudentsService(IStudentsRepository repository)
        {
            _repository = repository;
        }

        public async Task<StudentCountDto> GetTotalStudents()
        {
            return await _repository.GetTotalStudents();
        }
    }
}