using StudentDashboard.Entities;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseHttpsRedirection();
app.UseCors();

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



app.MapGet("/api/projectprogesscard", () =>
{
    List<NewProject> allProjects = new List<NewProject>();

    List<Tasks> taskOfProject1 = new List<Tasks>();
    List<Tasks> taskOfProject2 = new List<Tasks>();

    NewProject project1 = new NewProject("E-Commerce App", 55, taskOfProject1);
    NewProject project2 = new NewProject("Chatbot App", 77, taskOfProject2);


    Tasks task1 = new Tasks("API Design");
    Tasks task2 = new Tasks("DB Setup");
    Tasks task3 = new Tasks("Exception Handling");
    Tasks task4 = new Tasks("Deployment");
    Tasks task5 = new Tasks("NLP Design");
    Tasks task6 = new Tasks("Integration");
    Tasks task7 = new Tasks("Testing");

    taskOfProject1.Add(task1);
    taskOfProject1.Add(task2);
    taskOfProject1.Add(task3);
    taskOfProject1.Add(task4);

    taskOfProject2.Add(task5);
    taskOfProject2.Add(task6);
    taskOfProject2.Add(task7);

    allProjects.Add(project1);
    allProjects.Add(project2);
    return Results.Ok(allProjects);
});



app.MapGet("/api/skillhealthcard", () =>
{
    List<Skills> skills = new List<Skills>();

    Skills skills1= new Skills("C#",80);
    Skills skills2= new Skills("OOP",65);
    Skills skills3= new Skills("ASP.NET",55);
    Skills skills4= new Skills("SQL",75);
    Skills skills5= new Skills("Cloud Basics",40);



    skills.Add(skills1);
    skills.Add(skills2);
    skills.Add(skills3);
    skills.Add(skills4);
    skills.Add(skills5);

    return Results.Ok(skills);
});


app.Run();
