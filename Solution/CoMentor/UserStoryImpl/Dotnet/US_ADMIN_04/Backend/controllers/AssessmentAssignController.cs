using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class AssessmentAssignController : ControllerBase
{
    private readonly IAssessmentAssignService _service;

    public AssessmentAssignController(IAssessmentAssignService service)
    {
        _service = service;
    }

    [HttpGet("tests")]
    public async Task<IActionResult> GetTestsAsync()
    {
<<<<<<< HEAD:Solution/CoMentor/UserStoryImpl/Dotnet/US_ADMIN_04/Backend/components/AssessmentAssignController.cs
        var tests = await _service.GetTests();
        return Ok(tests);
=======
        var data = await _service.GetTestsAsync();
        return Ok(data);
>>>>>>> 69610ca5 (changes in us 4):Solution/CoMentor/UserStoryImpl/Dotnet/US_ADMIN_04/Backend/controllers/AssessmentAssignController.cs
    }

    [HttpGet("students")]
    public async Task<IActionResult> GetStudentsAsync()
    {
<<<<<<< HEAD:Solution/CoMentor/UserStoryImpl/Dotnet/US_ADMIN_04/Backend/components/AssessmentAssignController.cs
        var students = await _service.GetStudents();
        return Ok(students);
=======
        var data = await _service.GetStudentsAsync();
        return Ok(data);
>>>>>>> 69610ca5 (changes in us 4):Solution/CoMentor/UserStoryImpl/Dotnet/US_ADMIN_04/Backend/controllers/AssessmentAssignController.cs
    }

    [HttpPost ("assigned")]
    public async Task<IActionResult> AssignAssessmentAsync(AssignAssessmentDto dto)
    {
        await _service.AssignAssessmentAsync(dto);
        return Ok("Assessment Assigned Successfully");
    }

   
}