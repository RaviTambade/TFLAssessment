using Microsoft.EntityFrameworkCore;
using US_Admin_01.Data;
using US_Admin_01.Repositories.Implementation;
using US_Admin_01.Repositories.Interfaces;
using US_Admin_01.Services.Implementation;
using US_Admin_01.Services.Interfaces;



var builder = WebApplication.CreateBuilder(args);

// ✅ Add Controllers
builder.Services.AddControllers();

// ✅ Add Swagger (for testing)
builder.Services.AddEndpointsApiExplorer();


// =========================
// ✅ CORS CONFIGURATION
// =========================

// Allow all (for development)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});

// 🔒 (Optional for production - restrict frontend URL)

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy
            .WithOrigins("http://localhost:5173") // React app
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});



// =========================
// ✅ DATABASE CONFIGURATION (MySQL)
// =========================

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));


// =========================
// ✅ DEPENDENCY INJECTION
// =========================

builder.Services.AddScoped<IDashboardRepository, DashboardRepository>();
builder.Services.AddScoped<IDashboardService, DashboardService>();


// =========================
// ✅ BUILD APP
// =========================

var app = builder.Build();


// =========================
// ✅ MIDDLEWARE PIPELINE
// =========================


// Enable HTTPS (optional)
app.UseHttpsRedirection();

// ✅ Enable CORS
app.UseCors("AllowAll");  
// or use: app.UseCors("AllowFrontend");

app.UseAuthorization();

app.MapControllers();

app.Run();






