using Transflower.Assessment.WebAPI.AssessmentIntelligenceAPI.Repositories.Interfaces;
using Transflower.Assessment.WebAPI.AssessmentIntelligenceAPI.Repositories;
using Transflower.Assessment.WebAPI.AssessmentIntelligenceAPI.Services.Interfaces;
using Transflower.Assessment.WebAPI.AssessmentIntelligenceAPI.Services;

var builder = WebApplication.CreateBuilder(args);


//Service configuration
//Essential Web Compoenents needed to run asp.net web api application

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();
builder.Services.AddControllersWithViews();
builder.Services.AddRazorPages();
builder.Services.AddControllers();

//Essential custom serviceds needed at runtime by Controllers

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