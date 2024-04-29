using Microsoft.Extensions.Logging;
using QuestionBankEntities; //-----------------------dll
using QuestionBankInterfaces;//-----------------------dll
using QuestionBankServices;
//using Serilog;
//using System.Security.Policy;

var builder = WebApplication.CreateBuilder(args);

builder.Host.ConfigureLogging(logging =>
{
    logging.ClearProviders();
    logging.AddConsole();
    //logging.AddFile("logs/catalog-{Date}.json", isJson: true);
});


//Service configuration

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();
builder.Services.AddControllersWithViews();
builder.Services.AddRazorPages();

builder.Services.AddControllers();

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