using backend.Models;
using Microsoft.EntityFrameworkCore;
using backend.Repositories.Interfaces; 
using backend.Repositories.Implementations; 
using backend.Services.Interfaces;
using backend.Services.Implementations;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();


builder.Services.AddEndpointsApiExplorer();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))
    )
);


// Register repositories and services
builder.Services.AddScoped<IAssessmentsService, AssessmentsService>();
builder.Services.AddScoped<IAssessmentRepository, AssessmentRepository>();
builder.Services.AddScoped<ITestService, TestService>();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IQuestionsRepository, QuestionsRepository>();
builder.Services.AddScoped<IQuestionsService, QuestionsService>();

// Configure CORS to allow requests from the frontend
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy =>
        {
            policy.AllowAnyOrigin()
                  .AllowAnyMethod()
                  .AllowAnyHeader();
        });
});

var app = builder.Build();

// Configure the HTTP middleware request pipeline.
app.UseCors("AllowAll");
app.UseAuthorization();
app.MapControllers();

app.Run();