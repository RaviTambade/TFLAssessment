using HR.Entities;
using HR.Repositories.Interfaces;
using MySql.Data.MySqlClient;
namespace HR.Repositories.Managers.Dbs;

public class MySqlDbSkill:ISkill{
    public string connectionString = "server= localhost; port = 3306; user = root; password = root; database = assesmentdb";

    public List<Skill> GetAll(){
        List<Skill> skills = new List<Skill>();

        MySqlConnection connection = new MySqlConnection(connectionString);
        try{
            string query = "select * from skill";
            MySqlCommand command = new MySqlCommand(query, connection);
            connection.Open();
            MySqlDataReader reader = command.ExecuteReader();
            while(reader.Read()){
                int skillId = int.Parse(reader["skillId"].ToString());
                string title = reader["Title"].ToString();
                Skill skl = new Skill();
                skl.SkillId = skillId;
                skl.Title = title;
                skills.Add(skl);
            }
            reader.Close();
        }
        catch(Exception e ){
            Console.WriteLine(e.Message);
        }
        finally{connection.Close();}
        return skills;
    }
}