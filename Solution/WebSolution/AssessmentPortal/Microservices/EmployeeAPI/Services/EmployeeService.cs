using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
namespace Transflower.TFLAssessment.Services;
using Transflower.TFLAssessment.Services.Interfaces;

public class EmployeeService : IEmployeeService
{
   private readonly IEmployeeService _repository;
   public EmployeeService(IEmployeeRepository repository)
   {
      _repository = repository;

   }
   public async Task<Employee> GetDetails(int userId)
   {
      return await _repository.GetDetails(userId);
   }
}