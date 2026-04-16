using Microsoft.EntityFrameworkCore;
using backend.Models;

var builder = WebApplication.CreateBuilder(args);

// DB
builder.Services.AddDbContext<AppDbContext>(options =>
options.UseMySql(
    builder.Configuration.GetConnectionString("DefaultConnection"),
    new MySqlServerVersion(new Version(8, 0, 36))

    )
);

// ✅ Register repo
builder.Services.AddScoped<StudentResultRepository>();

// CORS
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseHttpsRedirection();
app.UseCors();


// ✅ API ENDPOINT (IMPORTANT)
app.MapGet("/student-results", async (StudentResultRepository repo) =>
{
    var data = await repo.GetResults();
    return Results.Ok(data);
});

app.Run();