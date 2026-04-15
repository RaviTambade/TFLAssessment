using backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Cors;

var builder = WebApplication.CreateBuilder(args);

// Controllers
builder.Services.AddControllers();

// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// ✅ Database Connection
builder.Services.AddDbContext<AppDbContext>(options =>
    {
        var conn = builder.Configuration.GetConnectionString("DefaultConnection");
        // Try to auto-detect server version (requires DB reachable). If it fails
        // fall back to a reasonable default MySQL version so the app can start in
        // development even when the database is temporarily unreachable.
        ServerVersion serverVersion;
        try
        {
            serverVersion = ServerVersion.AutoDetect(conn);
        }
        catch
        {
            // Fallback: change this string to match your MySQL server version if known.
            serverVersion = ServerVersion.Parse("8.0.33-mysql");
        }

        options.UseMySql(conn, serverVersion);
    });

// Dependency Injection
builder.Services.AddScoped<IResultRepository, ResultRepository>();
builder.Services.AddScoped<IResultService, ResultService>();

// CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact", policy =>
    {
    policy.WithOrigins(
        "http://localhost:5173",
        "https://localhost:5173",
        "http://localhost:5174",
        "https://localhost:5174"
        )
          .AllowAnyHeader()
          .AllowAnyMethod();
    });
});

var app = builder.Build();

// Swagger UI
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();

    // In development serve HTTP as well to avoid HTTPS redirection breaking
    // CORS preflight/requests from the React dev server which may call http://localhost:5201
}
else
{
    // Enforce HTTPS in non-development environments
    app.UseHttpsRedirection();
}

app.UseCors("AllowReact");

app.UseAuthorization();

app.MapControllers();

app.Run();