using backend.Models;
using Microsoft.EntityFrameworkCore;
using backend.Repositories.Interfaces; 
using backend.Repositories.Implementations; 
using backend.Services.Interfaces;
using backend.Services.Implementations;
using backend.Services;
using backend.Repositories;

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
builder.Services.AddScoped<IUserSessionsService, UserSessionsService>();
builder.Services.AddScoped<IUserSessionRepository, UsersessionRepository>();   
builder.Services.AddScoped<IStudentResultService, StudentResultService>();
builder.Services.AddScoped<IStudentResultRepository, StudentResultRepository>();
builder.Services.AddScoped<IUserSessionRepository, UsersessionRepository>();
builder.Services.AddScoped<IQuestionsRepository, QuestionsRepository>();
builder.Services.AddScoped<IQuestionsService, QuestionsService>();
builder.Services.AddScoped<IRuntimesService, RuntimesService>();
builder.Services.AddScoped<IRuntimesRepository, RuntimesRepository>();
builder.Services.AddScoped<ILanguagesService, LanguagesService>();
builder.Services.AddScoped<ILanguagesRepository, LanguagesRepository>();
builder.Services.AddScoped<ILayersService, LayersService>();
builder.Services.AddScoped<ILayersRepository, LayersRepository>();
builder.Services.AddScoped<IStudentsRepository, StudentsRepository>();
builder.Services.AddScoped<IStudentsService, StudentsService>();

builder.Services.AddScoped<IConceptsService, ConceptsService>();
builder.Services.AddScoped<IConceptsRepository, ConceptsRepository>();
builder.Services.AddScoped<ICreateTestService, CreateTestService>();
builder.Services.AddScoped<ICreateTestRepository, CreateTestRepository>();
builder.Services.AddScoped<IScoreService, ScoreService>();
builder.Services.AddScoped<IScoreRepository, ScoreRepository>();

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
Dapper.DefaultTypeMap.MatchNamesWithUnderscores = true;


var app = builder.Build();

// Configure the HTTP middleware request pipeline.
app.UseCors("AllowAll");
app.UseAuthorization();
app.MapControllers();

app.Run();