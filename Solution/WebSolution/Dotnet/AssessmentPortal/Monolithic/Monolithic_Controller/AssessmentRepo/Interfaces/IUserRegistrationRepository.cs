using  Transflower.TFLAssessment.Entities;
namespace Transflower.TFLAssessment.Repositories.Interfaces;

public interface IUserRegistrationRepository
{
             Task<bool> AddUser(User user);

}