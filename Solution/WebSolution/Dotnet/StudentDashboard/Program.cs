using StudentDashboard.Entities;
var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

app.UseHttpsRedirection();

app.MapGet("/assessment", () =>
{
    var assessment = new Assessment
    {
        Title = "Web API",
        Score = 72,
        Feedback = "Good REST knowledge, improve error handling"
    };

    return Results.Ok(assessment);
})
.WithName("GetAssessment")
.WithOpenApi();

app.Run();


