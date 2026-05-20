using MySql.Data.MySqlClient;
using backend.Models;
using backend.Repositories.Interfaces;

namespace backend.Repositories.Implementations;

public class ExpertiseRepository : IExpertiseRepository
{
    private readonly IConfiguration _configuration;

    public ExpertiseRepository(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public async Task<int> AddSmeExpertise(Expertise expertise)
    {
        string connectionString =
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new InvalidOperationException("DefaultConnection is not configured.");

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
            @UserId,
            @Runtime,
            @Framework,
            @Layer,
            @Language
        )";

        using (MySqlConnection con = new MySqlConnection(connectionString))
        {
            await con.OpenAsync();

            using (MySqlCommand cmd = new MySqlCommand(query, con))
            {
                cmd.Parameters.AddWithValue("@UserId", expertise.User_Id);

                cmd.Parameters.AddWithValue("@Runtime", expertise.Runtime);

                cmd.Parameters.AddWithValue("@Framework", expertise.Framework);

                cmd.Parameters.AddWithValue("@Layer", expertise.Layer);

                cmd.Parameters.AddWithValue("@Language", expertise.Language);

                int rows = await cmd.ExecuteNonQueryAsync();

                return rows;
            }
        }
    }

    public async Task SeedExpertiseAsync()
    {
        // Only seed if table is empty
        string connectionString =
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new InvalidOperationException("DefaultConnection is not configured.");
        string countQuery = "SELECT COUNT(*) FROM expertise";
        using (MySqlConnection con = new MySqlConnection(connectionString))
        {
            await con.OpenAsync();
            using (MySqlCommand countCmd = new MySqlCommand(countQuery, con))
            {
                object? countResult = await countCmd.ExecuteScalarAsync();
                long count = Convert.ToInt64(countResult);
                if (count == 0)
                {
                    string insertQuery = @"
                    INSERT INTO expertise (user_id, runtime, framework, layer, language)
                    VALUES (1, 'Node.js', 'Express', 'Backend', 'JavaScript');
                ";
                    using (MySqlCommand insertCmd = new MySqlCommand(insertQuery, con))
                    {
                        await insertCmd.ExecuteNonQueryAsync();
                    }
                }
            }
        }
    }
}
