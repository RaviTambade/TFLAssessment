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


// ✅ Dependency Injection
builder.Services.AddScoped<IAssessmentRepository, AssessmentRepository>();
builder.Services.AddScoped<IAssessmentService, AssessmentService>();

// 🔥 ADD THIS LINE
builder.Services.AddScoped<IAssessmentsUpcomingService, AssessmentsUpcomingService>();
builder.Services.AddScoped<IAssessmentUpcomingRepository, AssessmentUpcomingRepository>();
 
builder.Services.AddScoped<IAssessmentAssignRepository, AssessmentAssignRepository>();
builder.Services.AddScoped<IAssessmentAssignService, AssessmentAssignService>();
 builder.Services.AddScoped<IAssessmentRepository, AssessmentRepository>();
 builder.Services.AddScoped<IAssessmentService, AssessmentService>();
 builder.Services.AddScoped<IResultRepository, ResultRepository>();
builder.Services.AddScoped<IResultService, ResultService>();

var app = builder.Build();

// // ✅ Enable Swagger UI
// if (app.Environment.IsDevelopment())
// {
//     app.UseSwagger();
//     app.UseSwaggerUI();
// }

// app.UseHttpsRedirection();
if (!app.Environment.IsDevelopment())
{
    app.UseHttpsRedirection();
}

app.UseAuthorization();

app.MapControllers();

app.Run();