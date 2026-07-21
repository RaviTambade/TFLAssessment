using backend.DTO.Requests;
using backend.DTO.Responses;

namespace backend.Repositories.Interfaces
{
    public interface ICreateTestRepository
    {
        public Task<List<TestQuestions>> GetQuestionsBySMEAsync(long userId);
        Task<long> CreateTestAsync(CreateTestRequests dto);
        Task<bool> CancelTestAsync(int id);
        Task<List<GetSmeCreatedTestResponse>> GetSmeCreatedTestAsync(long userId);
        Task<List<TestStudentDetails>> GetTestStudentsDetails(long TestId);
        Task<List<TestDetails>> GetTestDetailsForMentor();
        Task<int> GetTestCount();
        Task<int>GetMenteeCount(long userId);

    }
}
