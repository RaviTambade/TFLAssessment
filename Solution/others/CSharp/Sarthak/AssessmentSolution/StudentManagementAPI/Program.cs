
using AssessmentLib.Repositories.Implementation;
using AssessmentLib.Repositories.Interface;
using AssessmentLib.Services.Implementation;
using AssessmentLib.Services.Interface;


var builder = WebApplication.CreateBuilder(args);

builder.Host.ConfigureLogging(logging =>
{
    logging.ClearProviders();
    logging.AddConsole();
   
});
builder.Services.AddControllers();
builder.Services.AddAuthorization();

builder.Services.AddScoped<ISubjectRepository, SubjectRepository>();
builder.Services.AddScoped<ISubjectService, SubjectService>();
builder.Services.AddScoped<IQuestionBankRepository, QuestionBankRepository>();
builder.Services.AddScoped<IQuestionBankService, QuestionBankService>();
var app = builder.Build();

app.UseRouting();
app.UseAuthorization();
app.MapControllers();

app.Run();