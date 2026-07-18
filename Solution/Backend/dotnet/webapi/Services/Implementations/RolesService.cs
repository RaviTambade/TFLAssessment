using backend.DTO.Responses;
using backend.Repositories.Interfaces;
using backend.Services.Interfaces;

namespace backend.Services.Implementations;

public class RolesService:IRolesService{

    private  readonly IRolesRepository _rolesRepository;

    public RolesService(IRolesRepository rolesRepository){
        _rolesRepository=rolesRepository;
    }

    public async Task<int> GetActiveRolesCount(){
        return await _rolesRepository.GetActiveRolesCount();
    }

    public async Task<List<ActiveRole>> GetActiveRoles(){
        return await _rolesRepository.GetActiveRoles();
    }

    public async Task<List<RoleUser>> GetUsersByRole(long roleId){
        return await _rolesRepository.GetUsersByRole(roleId);
    }

}