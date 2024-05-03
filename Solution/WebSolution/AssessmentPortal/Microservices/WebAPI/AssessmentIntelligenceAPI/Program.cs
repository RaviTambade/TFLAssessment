using Microsoft.Extensions.Logging;
using Transflower.AssessmentIntelligenceAPI.Repositories.Interfaces;
using Transflower.AssessmentIntelligenceAPI.Repositories;
using Transflower.AssessmentIntelligenceAPI.Services.Interfaces;
using Transflower.AssessmentIntelligenceAPI.Services;

var builder = WebApplication.CreateBuilder(args);


//Service configuration

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

builder.Services.AddControllers();
builder.Services.AddScoped<IAssessmentIntelligenceRepository, AssessmentIntelligenceRepository>();
builder.Services.AddScoped<IAssessmentIntelligenceService, AssessmentIntelligenceService>();
var app = builder.Build();


//ASP.NET middleware configuration

app.UseCors(options => options.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization();

//Controller Route mapping

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{controller=Home}/{action=Index}/{id?}");
    endpoints.MapRazorPages();
    endpoints.MapControllers(); // Map Minimal Web API endpoints
});


//Middleware Pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
 
app.Run();