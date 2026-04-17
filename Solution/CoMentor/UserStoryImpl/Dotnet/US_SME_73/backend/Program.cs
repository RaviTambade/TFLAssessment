using backend.Models;
using backend.Repositories.Interfaces;
using backend.Repositories.Implementations;
using backend.Services.Interfaces;
using backend.Services.Implementations;

using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// ✅ Add Controllers
builder.Services.AddControllers();

// ✅ Add Swagger / OpenAPI
builder.Services.AddEndpointsApiExplorer();
// builder.Services.AddSwaggerGen();

// ✅ Database Connection
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))
    )
);


// ✅ Dependency Injection


builder.Services.AddScoped<IQuestionTypeRepository, QuestionTypeRepository>();
builder.Services.AddScoped<IQuestionTypeService, QuestionTypeService>();
 

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy =>
        {
            policy.AllowAnyOrigin()
                  .AllowAnyMethod()
                  .AllowAnyHeader();
        });
});
var app = builder.Build();

// // ✅ Enable Swagger UI
// if (app.Environment.IsDevelopment())
// {
//     app.UseSwagger();
//     app.UseSwaggerUI();
// }

// app.UseHttpsRedirection();
// if (!app.Environment.IsDevelopment())
// {
//     app.UseHttpsRedirection();
// }
app.UseCors("AllowAll");
app.UseAuthorization();

app.MapControllers();

app.Run();