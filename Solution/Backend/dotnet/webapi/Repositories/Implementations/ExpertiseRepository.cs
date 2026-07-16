using MySql.Data.MySqlClient;
using backend.Models;
using backend.Repositories.Interfaces;
using Backend.DTO.Responses;

namespace backend.Repositories.Implementations;

public class ExpertiseRepository : IExpertiseRepository
{
    private readonly IConfiguration _configuration;

    public ExpertiseRepository(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public async Task<int> AddSmeExpertise(Expertise expertize)

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
                cmd.Parameters.AddWithValue("@UserId", expertize.User_Id);

                cmd.Parameters.AddWithValue("@Runtime", expertize.Runtime);


                cmd.Parameters.AddWithValue("@Framework", expertize.Framework);

                cmd.Parameters.AddWithValue("@Layer", expertize.Layer);

                cmd.Parameters.AddWithValue("@Language", expertize.Language);

                int rows = await cmd.ExecuteNonQueryAsync();

                return rows;
            }
        }
    }
    
    public async Task<ExpertiseOptions> GetExpertiseOptions()
{
    ExpertiseOptions expertise = new ExpertiseOptions();

    HashSet<string> runtimes = new HashSet<string>();
    HashSet<string> frameworks = new HashSet<string>();
    HashSet<string> layers = new HashSet<string>();
    HashSet<string> languages = new HashSet<string>();
    
     string connectionString =
            _configuration.GetConnectionString("DefaultConnection")
            ?? throw new InvalidOperationException("DefaultConnection is not configured.");


    using (MySqlConnection con = new MySqlConnection(connectionString))
    {
        await con.OpenAsync();

        string query = @"SELECT runtime, framework, layer, language
                         FROM questions";

        using (MySqlCommand cmd = new MySqlCommand(query, con))
        {
            using (MySqlDataReader reader = (MySqlDataReader)await cmd.ExecuteReaderAsync())
            {
                while (await reader.ReadAsync())
                {
                    if (!reader.IsDBNull(0))
                        runtimes.Add(reader.GetString(0));

                    if (!reader.IsDBNull(1))
                        frameworks.Add(reader.GetString(1));

                    if (!reader.IsDBNull(2))
                        layers.Add(reader.GetString(2));

                    if (!reader.IsDBNull(3))
                        languages.Add(reader.GetString(3));
                }
            }
        }
    }

    expertise.Runtime = runtimes.OrderBy(x => x).ToList();
    expertise.Framework = frameworks.OrderBy(x => x).ToList();
    expertise.Layer = layers.OrderBy(x => x).ToList();
    expertise.Language = languages.OrderBy(x => x).ToList();

    return expertise;
}

    // public async Task SeedExpertiseAsync()
    // {
    //     // Only seed if table is empty
    //     string connectionString =
    //         _configuration.GetConnectionString("DefaultConnection")
    //         ?? throw new InvalidOperationException("DefaultConnection is not configured.");
    //     string countQuery = "SELECT COUNT(*) FROM expertise";
    //     using (MySqlConnection con = new MySqlConnection(connectionString))
    //     {
    //         await con.OpenAsync();
    //         using (MySqlCommand countCmd = new MySqlCommand(countQuery, con))
    //         {
    //             object? countResult = await countCmd.ExecuteScalarAsync();
    //             long count = Convert.ToInt64(countResult);
    //             if (count == 0)
    //             {
    //                 string insertQuery = @"
    //                 INSERT INTO expertise (user_id, runtime, framework, layer, language)
    //                 VALUES (1, 'Node.js', 'Express', 'Backend', 'JavaScript');
    //             ";
    //                 using (MySqlCommand insertCmd = new MySqlCommand(insertQuery, con))
    //                 {
    //                     await insertCmd.ExecuteNonQueryAsync();
    //                 }
    //             }
    //         }
    //     }
    //}
}
