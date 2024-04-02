using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace Assessment.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CompaniesController : ControllerBase
{
    [HttpGet]
    public ActionResult<IEnumerable<string>> Get()
    {
        //return null;
       return new string[] { "seed", "transflower" };
    }

    // Other API endpoints...
}
