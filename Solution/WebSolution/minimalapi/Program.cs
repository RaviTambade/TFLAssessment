var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World!");
app.MapGet("/transflower",()=>"Welcome to Transflower Learning Pvt. Ltd.");
app.MapGet("/microsoft",()=>"Welcome to Microsoft India Pvt. Ltd.");

app.Run();
git pul