using Microsoft.EntityFrameworkCore;
using Assessment_result.Data;
using Assessment_result.Repositories;
using Assessment_result.Services;
using Pomelo.EntityFrameworkCore.MySql;

var builder = WebApplication.CreateBuilder(args);

// ✅ Add Controllers
builder.Services.AddControllers();

// ✅ Add Swagger (for testing API)
builder.Services.AddEndpointsApiExplorer();

// ✅ Configure Database (MySQL example)
builder.Services.AddDbContext<AssessmentResultDbContext>(options =>
    options.UseMySql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))
    )
);

// ✅ Register Repository
builder.Services.AddScoped<IAssessmentResultRepository, AssessmentResultRepository>();

// ✅ Register Service
builder.Services.AddScoped<IAssessmentResultService, AssessmentResultService>();

var app = builder.Build();

// ✅ Middleware pipeline
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();