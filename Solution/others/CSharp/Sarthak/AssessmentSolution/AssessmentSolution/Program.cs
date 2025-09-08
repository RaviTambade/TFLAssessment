
//using AssessmentLib.Repositories.Implementation;
//using AssessmentLib.Repositories.Interface;
//using AssessmentLib.Services.Implementation;
//using AssessmentLib.Services.Interface;
//using Google.Protobuf.WellKnownTypes;


//var builder = WebApplication.CreateBuilder(args);

//builder.Host.ConfigureLogging(logging =>
//{
//    logging.ClearProviders();
//    logging.AddConsole();
//    // logging.AddFile("logs/catalog-{Date}.json", isJson: true);
//});
//builder.Services.AddAuthorization();

//builder.Services.AddScoped<ISubjectRepository, SubjectRepository>();  
//builder.Services.AddScoped<ISubjectService, SubjectService>();

//builder.Services.AddScoped<IQuestionBankRepository, QuestionBankRepository>();
//builder.Services.AddScoped<IQuestionBankService, QuestionBankService>();

//app.UseAuthorization();
//app.Run();