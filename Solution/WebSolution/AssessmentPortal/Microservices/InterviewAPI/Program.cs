using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Transflower.TFLAssessment.Data;
using Transflower.TFLAssessment.Repositories.Interfaces;
using Transflower.TFLAssessment.Repositories;
using Transflower.TFLAssessment.Services.Interfaces;
using Transflower.TFLAssessment.Services;

var builder = WebApplication.CreateBuilder(args);

// Add EF Core and Database Connection
builder.Services.AddDbContext<TFLAssessmentDbContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"),
        new MySqlServerVersion(new Version(8, 0, 30))));

// Service configuration
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();
builder.Services.AddControllersWithViews();
builder.Services.AddRazorPages();
builder.Host.ConfigureLogging(logging =>
{
    logging.ClearProviders();
    logging.AddConsole();
    logging.AddFile("logs/catalog-{Date}.json", isJson: true);
});

builder.Services.AddScoped<IInterviewRepository, InterviewEFCoreRepository>();
builder.Services.AddScoped<IInterviewService, InterviewService>();

var app = builder.Build();

// Middleware Pipeline Configuration
app.UseCors(options => options.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization();

// ASP.NET Middleware for Routing and Swagger
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{controller=Home}/{action=Index}/{id?}");
    endpoints.MapRazorPages();
    endpoints.MapControllers(); // Map Web API endpoints
});

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.Run();
