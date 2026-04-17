using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add DbContext
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))
    ));

// Dependency Injection
builder.Services.AddScoped<IStudentAssessmentRepository, StudentAssessmentRepository>();
builder.Services.AddScoped<IStudentAssessmentService, StudentAssessmentService>();

// Add CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Add Controllers
builder.Services.AddControllers();

var app = builder.Build();

// CORS must come before MapControllers
app.UseCors("AllowReactApp");

// Map Controllers
app.MapControllers();

app.Run();