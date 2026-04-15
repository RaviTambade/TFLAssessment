
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

var conn = builder.Configuration.GetConnectionString("DefaultConnection");
Console.WriteLine("🔥 USING DB: " + conn);
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection")),
        mySqlOptions => mySqlOptions.EnableRetryOnFailure(
            maxRetryCount: 3,
            maxRetryDelay: TimeSpan.FromSeconds(5),
            errorNumbersToAdd: null
        )
    )
);


// // ✅ Dependency Injection
builder.Services.AddScoped<IAssessmentRepository, AssessmentRepository>();
builder.Services.AddScoped<IAssessmentService, AssessmentService>();


builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy =>
        {
            policy.AllowAnyOrigin()   // ✅ allow all domains
                  .AllowAnyHeader()   // ✅ allow all headers
                  .AllowAnyMethod();  // ✅ allow GET, POST, PUT, DELETE
        });
});

var app = builder.Build();

// // ✅ Enable Swagger UI
// if (app.Environment.IsDevelopment())
// {
//     app.UseSwagger();
//     app.UseSwaggerUI();
// }




app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();