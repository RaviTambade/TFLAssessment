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
var app = builder.Build();

app.UseHttpsRedirection();
app.UseCors();

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



app.MapGet("/api/projectprogesscard", () =>
{
    List<NewProject> allProjects = new List<NewProject>();

    List<Tasks> taskOfProject1 = new List<Tasks>();
    List<Tasks> taskOfProject2 = new List<Tasks>();

    NewProject project1 = new NewProject("E-Commerce App", 5, taskOfProject1);
    NewProject project2 = new NewProject("Chatbot App", 5, taskOfProject2);


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


