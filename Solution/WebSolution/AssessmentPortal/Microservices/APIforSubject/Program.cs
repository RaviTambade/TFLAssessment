//using Microsoft.Extensions.Logging;

using Transflower.SubjectAPI.Repositories.Interfaces;
using Transflower.SubjectAPI.Services;
using Transflower.SubjectAPI.Services.Interfaces;
using Transflower.SubjectAPI.Repositories;

var builder = WebApplication.CreateBuilder(args);

/*builder.Host.ConfigureLogging(logging =>
{
    logging.ClearProviders();
    logging.AddConsole();
    logging.AddFile("logs/catalog-{Date}.json", isJson: true);
});*/


//Service configuration

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddCors();
//builder.Services.UseCors(options => options.WithOrigins("http://localhost:5173")).AllowAnyHeader().AllowAnyMethod();
        
/*builder.Services.UseCors(builder => builder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials());*/
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
//Register services
builder.Services.AddTransient<ISubjectRepository,SubjectRepository>();
builder.Services.AddTransient<ISubjectService,SubjectService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
