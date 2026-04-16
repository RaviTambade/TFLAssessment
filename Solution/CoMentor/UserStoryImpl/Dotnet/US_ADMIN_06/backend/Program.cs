using Microsoft.EntityFrameworkCore;
using backend.Data;
using backend.Dtos;

var builder = WebApplication.CreateBuilder(args);

// MySQL
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))
    ));

// CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors("AllowFrontend");

// API
app.MapGet("/api/assessment/summary", async (AppDbContext db) =>
{
    try
    {
        var data = await (
            from a in db.Assessments

            join t in db.Tests on a.TestId equals t.Id into tg
            from t in tg.DefaultIfEmpty()

            join pi in db.PersonalInformations on a.StudentId equals pi.UserId into pg
            from pi in pg.DefaultIfEmpty()

            join sar in db.StudentAssessmentResults on a.Id equals sar.AssessmentId into sg
            from sar in sg.DefaultIfEmpty()

            select new AssessmentSummaryDto
            {
                AssessmentId = a.Id,
                AssessmentTitle = t != null ? t.Title! : "No Test",

                Student = new StudentDto
                {
                    Id = a.StudentId ?? 0,
                    Name = pi != null ? pi.FullName! : "Unknown"
                },

              Status = a.Status,

Score = sar != null ? sar.Score ?? 0 : 0,

Percentile = sar != null ? sar.Percentile ?? 0 : 0,

TimeTakenMinutes = sar != null ? sar.TimeTakenMinutes ?? 0 : 0,

                TotalQuestions = 10,
                CorrectAnswers = 8,
                WrongAnswers = 2
            }
        ).FirstOrDefaultAsync();

        return data is not null ? Results.Ok(data) : Results.NotFound();
    }
    catch (Exception ex)
    {
        return Results.Problem(ex.Message);
    }
});

app.Run();