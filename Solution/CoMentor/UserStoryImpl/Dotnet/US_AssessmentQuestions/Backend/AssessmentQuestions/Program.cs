
using Microsoft.EntityFrameworkCore;
using AssessmentQuestions.Repositories;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});
// 1. Data Context
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))
    ));;
// 2. Register Repository
builder.Services.AddScoped<IAssessmentQuestionRepository, AssessmentQuestionRepository>();
// 3. Register Service
builder.Services.AddScoped<IAssessmentQuestionService, AssessmentQuestionService>();
var app = builder.Build();

app.UseCors("AllowAll");
app.MapControllers();

app.Run();

