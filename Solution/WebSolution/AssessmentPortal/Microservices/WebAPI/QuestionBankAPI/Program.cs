<<<<<<< HEAD
=======
//WebApp Builder Infrastrcture
>>>>>>> fbcef57c99024e81eb481cf2f7332d67f984628e
using QuestionBankEntity; //-----------------------dll
using QuestionBankInterfaces;//-----------------------dll
using QuestionBankServices;//------------------------dll

<<<<<<< HEAD

=======
>>>>>>> fbcef57c99024e81eb481cf2f7332d67f984628e
var builder = WebApplication.CreateBuilder(args);


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