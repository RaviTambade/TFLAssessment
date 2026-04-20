using System;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql;
using AssessmentAnswer.Repositories.Implementations;
using AssessmentAnswer.Services.Implementations;
using AssessmentAnswer.Services.Interfaces;
using AssessmentAnswer.Repositories.Interfaces;
using AssessmentAnswer.Data;

var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

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

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

builder.Services.AddScoped<IAssessmentRepository, AssessmentRepository>();
builder.Services.AddScoped<IAssessmentService, AssessmentService>();

var app = builder.Build();
app.UseCors("AllowAll");
app.MapControllers();

app.Run();


