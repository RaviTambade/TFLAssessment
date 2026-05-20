using MySql.Data.MySqlClient;
using backend.Models;
using backend.Repositories.Interfaces;

namespace backend.Repositories.Implementations;

public class ExpertiseRepository : IExpertiseRepository
{
    private readonly AppDbContext _context;

    public ExpertiseRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<int> AddSmeExpertise(Expertise expertize)
    
    {
        string connectionString =
        "server=localhost;port=3306;database=tflcomentor_db;user=root;password=password";

        string query = @"
        INSERT INTO expertise
        (
            user_id,
            runtime,
            framework,
            layer,
            language
        )
        VALUES
        (
            @Userid,
            @Runtime,
            @Framework,
            @Layer,
            @Language
        )";

        using (MySqlConnection con = new MySqlConnection(connectionString))
        {
            await con.OpenAsync();

            MySqlCommand cmd = new MySqlCommand(query, con);

            cmd.Parameters.AddWithValue("@Userid",expertize.user_id);

            cmd.Parameters.AddWithValue("@Runtime",expertize.runtime);

            cmd.Parameters.AddWithValue("@Framework",expertize.framework);

            cmd.Parameters.AddWithValue("@Layer",expertize.layer);

            cmd.Parameters.AddWithValue("@Language",expertize.language);

            int rows =
                await cmd.ExecuteNonQueryAsync();

            await con.CloseAsync();

            return rows;
        }
    }
}