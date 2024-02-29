using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MyRezorPagesApp.Pages;

public class TFLPortal : PageModel
{
    private readonly ILogger<PrivacyModel> _logger;

    public TFLPortal(ILogger<PrivacyModel> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {
    }
}

