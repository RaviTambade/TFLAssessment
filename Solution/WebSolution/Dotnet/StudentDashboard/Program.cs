using StudentDashboard.Entities;

var builder = WebApplication.CreateBuilder(args);

// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseHttpsRedirection();

// Swagger UI
app.UseSwagger();
app.UseSwaggerUI();

// Assessment Summary API
app.MapGet("/api/AssessmentSummary", () =>
{
    var assessment = new Assessment
    {
        Title = "Web API",
        Score = 72,
        Feedback = "Good REST knowledge, improve error handling"
    };

    return Results.Ok(assessment);
})
.WithName("GetAssessmentSummary")
.WithOpenApi();

// Confidence Meter API
app.MapGet("/api/ConfidenceMeter", () =>
{
    var metrics = new List<ConfidenceMetric>
    {
        new ConfidenceMetric { Name = "Concept Understanding", Value = 70 },
        new ConfidenceMetric { Name = "Coding Comfort", Value = 60 },
        new ConfidenceMetric { Name = "Debugging Skills", Value = 65 },
        new ConfidenceMetric { Name = "Interview Readiness", Value = 40 }
    };

    return Results.Ok(metrics);
})
.WithName("GetConfidenceMeter")
.WithOpenApi();

app.Run();
