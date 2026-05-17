using Backend.Tap;
using MySql.Data.MySqlClient;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();


// =========================
// ADD CORS HERE
// =========================
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy =>
        {
            policy
                .AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

var app = builder.Build();


// =========================
// USE CORS HERE
// =========================
app.UseCors("AllowReactApp");



app.MapPost("/api/smeexpertize", (expertise expertize) =>
{
    string connectionString =
    "server=192.168.1.149;port=3306;database=tflcomentor_db;user=root;password=password";

    string query = @"
    INSERT INTO expertise
    (
        user_roles_id,
        runtime,
        framework,
        layer,
        language
    )
    VALUES
    (
        @UserRoleId,
        @Runtime,
        @Framework,
        @Layer,
        @Language
    )";

    using (MySqlConnection con =
           new MySqlConnection(connectionString))
    {
        con.Open();

        MySqlCommand cmd = new MySqlCommand(query, con);
        cmd.Parameters.AddWithValue("@UserRoleId",47);

        cmd.Parameters.AddWithValue(
            "@Runtime",
            expertize.runtime
        );

        cmd.Parameters.AddWithValue(
            "@Framework",
            expertize.framework
        );

        cmd.Parameters.AddWithValue(
            "@Layer",
            expertize.layer
        );

        cmd.Parameters.AddWithValue(
            "@Language",
            expertize.language
        );

        cmd.ExecuteNonQuery();

        con.Close();
    }

    return Results.Ok(new
    {
        message = "SME expertise added successfully",
        data = expertize
    });
});

app.Run();