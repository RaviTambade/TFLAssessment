using Microsoft.Extensions.Logging;
using Transflower.TFLAssessment.Repositories.Interfaces;
using Transflower.TFLAssessment.Repositories;
using Transflower.TFLAssessment.Services.Interfaces;
using Transflower.TFLAssessment.Services;
using Microsoft.EntityFrameworkCore; 
using Pomelo.EntityFrameworkCore.MySql.Infrastructure; 

var builder = WebApplication.CreateBuilder(args);

// Configure Logging
builder.Host.ConfigureLogging(logging =>
{
    logging.ClearProviders();
    logging.AddConsole();
    logging.AddFile("logs/catalog-{Date}.json", isJson: true);
});

// Service Configuration
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();
builder.Services.AddControllersWithViews();
builder.Services.AddControllers();
builder.Services.AddRazorPages();

// Dependency Injection Configuration
// builder.Services.AddScoped<IAssessmentRepository, AssessmentRepository>();
builder.Services.AddScoped<IAssessmentRepository, AssessmentDapperRepository>();
builder.Services.AddScoped<IAssessmentService, AssessmentService>();
// builder.Services.AddScoped<IAssessmentRepository, AssessmentEFRepository>();

// Configure MySQL Database Context
builder.Services.AddDbContext<AssessmentDbContext>(options =>
    options.UseMySql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        new MySqlServerVersion(new Version(8, 0, 32)) 
    )
);

var app = builder.Build();

// Middleware Configuration
app.UseCors(options => options.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization();

// Route Mapping
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{controller=Home}/{action=Index}/{id?}"
    );
    endpoints.MapRazorPages();
    endpoints.MapControllers(); // Map API controllers
});

// Development-Specific Middleware
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.Run();
