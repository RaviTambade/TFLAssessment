// var builder = WebApplication.CreateBuilder(args);
// var app = builder.Build();

// app.MapGet("/api/student-assessment-status", () =>
// {
//     var data = new List<object>
//     {
//         new
//         {
//             assessmentId = 1,
//             testId = 101,
//             testTitle = "Java Basics Test",
//             studentId = 10,
//             studentName = "Tejas Pawale",
//             status = "Completed",
//             assignedAt = DateTime.Parse("2026-04-10T10:00:00"),
//             scheduledAt = DateTime.Parse("2026-04-11T10:00:00"),
//             result = new
//             {
//                 score = 85,
//                 percentile = 92.5,
//                 timeTakenMinutes = 45
//             }
//         }
//     };
//     Console.WriteLine("Returning student assessment status data...");
//     Console.WriteLine(System.Text.Json.JsonSerializer.Serialize(data));
//     return Results.Ok(data);
// });

// app.Run();



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

// Add Controllers
builder.Services.AddControllers();

var app = builder.Build();

// Map Controllers
app.MapControllers();

app.Run();