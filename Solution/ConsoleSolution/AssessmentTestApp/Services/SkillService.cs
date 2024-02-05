using HR.Entities;
using HR.Services.Interfaces;
using HR.Repositories.Interfaces;
using HR.Repositories.Managers.Dbs;
    
namespace HR.Services;

class SkillService : ISkillService{
     public List<Skill> GetAll(){
        List<Skill> skill=new List<Skill>();
        ISkill skl=new MySqlDbSkill();
        skill=skl.GetAll();
        return skill;
    }
}