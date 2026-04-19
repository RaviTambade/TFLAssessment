using backend.Repositories.Interfaces;
using backend.Repositories.Implementations;
using backend.Services.Interfaces;
using backend.Services.Implementations;

using backend.Models;

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
builder.Services.AddScoped<IQuestionDetailsRepository, QuestionDetailsRepository>();
builder.Services.AddScoped<IQuestionDetailsService, QuestionDetailsService>();


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

app.UseCors("AllowAll");
app.UseAuthorization();

app.MapControllers();

app.Run();