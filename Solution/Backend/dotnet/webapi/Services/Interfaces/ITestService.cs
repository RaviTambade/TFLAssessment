using backend.DTO.Requests;
using backend.DTO.Responses;
using backend.Models;

namespace backend.Services.Interfaces
{
    public interface ICreateTestService
    {
        Task<List<TestQuestions>> GetQuestionsBySMEAsync(long userId);
        Task<long> CreateTestAsync(CreateTestRequests dto);
        Task<bool> CancelTestAsync(int id);
        Task<List<GetSmeCreatedTestResponse>> GetSmeCreatedTestAsync(long userId);
        Task<List<TestDetails>> GetTestDetailsForMentor();
        Task<int> GetTestCount();
        Task<int>GetMenteeCount(long userId);

        Task<List<TestStudentDetails>> GetTestStudentsDetails(long TestId);
    }
}
