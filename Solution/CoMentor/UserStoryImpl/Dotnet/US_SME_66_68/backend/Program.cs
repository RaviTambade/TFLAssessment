using Backend.Models;
using Backend.Repositories.Interfaces;
using Backend.Repositories.Implementations;
using Microsoft.EntityFrameworkCore;
using Backend.Services.Implementation;
using Backend.Services.Interface;

var builder = WebApplication.CreateBuilder(args);


// Add Controllers
builder.Services.AddControllers();


// CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("ReactPolicy", policy =>
    {
        policy.WithOrigins("http://localhost:5173", "http://localhost:5174")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});


// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


// DB Connection
builder.Services.AddDbContext<AppDbContext>(options =>
{
    var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
    options.UseMySql(connectionString, new MySqlServerVersion(new Version(8, 0, 21)));
});


// Dependency Injection
builder.Services.AddScoped<ITestHistoryRepository, TestHistoryRepository>();
builder.Services.AddScoped<ITestHistoryServices, TestHistoryService>();


var app = builder.Build();


// Swagger
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


// Middleware order matters
app.UseRouting();

app.UseCors("ReactPolicy");

app.UseAuthorization();

app.MapControllers();

app.Run();