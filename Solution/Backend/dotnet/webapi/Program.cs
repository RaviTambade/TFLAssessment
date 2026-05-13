using backend.Models;
using Microsoft.EntityFrameworkCore;
using backend.Repositories.Interfaces; 
using backend.Repositories.Implementations; 
using backend.Services.Interfaces;
using backend.Services.Implementations;
using backend.Services;
using backend.Repositories;


//Entry Point of the application: Main method in Program.cs

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();


//Service and Repository registrations for Dependency Injection

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))
    )
);

builder.Services.AddMemoryCache();


//Registering services and repositories for Dependency Injection

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

builder.Services.AddScoped<IPasswordService, PasswordService>();
builder.Services.AddScoped<IEmailService, EmailService>();


//CORs configuration
// to allow cross-origin requests from any domain, which is useful for development and testing purposes.

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

//Database connectivity: ado.net and Entity framework
//Dapper:library that provides a simple and efficient way 
//to execute SQL queries and map results to C# objects,'
// often used for performance-critical scenarios or when you want more control over the SQL being executed.


//Dapper:

Dapper.DefaultTypeMap.MatchNamesWithUnderscores = true;


var app = builder.Build();


//Middleware configuration: CORS, Authorization, and routing for controllers
app.UseCors("AllowAll");


app.UseAuthorization();
app.MapControllers();


app.Run();