using Microsoft.EntityFrameworkCore;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();

// ✅ Register DbContext
builder.Services.AddDbContext<TflDbContext>(options =>
    options.UseMySql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))
    ));
//CORS convertion
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy =>
        {
            policy.WithOrigins("http://localhost:5173") // Your React URL
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});
// ✅ Register Repository + Service
builder.Services.AddScoped<IAssessmentStatisticsRepository, AssessmentStatisticsRepository>();
builder.Services.AddScoped<IAssessmentStatisticsService, AssessmentStatisticsService>();

var app = builder.Build();

// Configure middleware
app.UseCors("AllowReactApp");
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();