using backend.DTO.Requests;
using backend.DTO.Responses;
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

        public async Task<StudentCounts> GetTotalStudents()
        {
            return await _repository.GetTotalStudents();
        }

        public async Task<List<StudentResponse>> GetAllStudents()
        {
             return await _repository.GetAllStudents();
        }

        public async Task<StudentPerformanceResponse?> GetStudentPerformance(long studentId)
        {
            return await _repository.GetStudentPerformance(studentId);
        }
    }
}