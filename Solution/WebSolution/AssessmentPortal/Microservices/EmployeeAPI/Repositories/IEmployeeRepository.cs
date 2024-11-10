using  Transflower.TFLAssessment.Entities;
namespace Transflower.TFLAssessment.Repositories.Interfaces;

public interface IEmployeeRepository
{
  public Task <Employee> GetDetails(int UserId);
}