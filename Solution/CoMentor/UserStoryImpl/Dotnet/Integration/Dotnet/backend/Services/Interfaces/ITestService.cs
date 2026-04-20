using backend.DTOs;
using backend.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace backend.Services.Interfaces;

public interface ITestService
{
    Task<List<TestDto>> GetAllTestsBySMEIdAsync(long smeId);
    Task<List<TestDto>> GetAllTestsByLanguageAsync(int languageId);
    Task<List<TestDto>> GetAllTestsByAssessmentIdAsync(long assessmentId);
    Task<List<TestDto>> GetAllTestsByFrameworkAsync(int frameworkId);
    Task<List<TestDto>> GetAllTestsByRuntimeAsync(int runtimeId);
    Task<object> GetTestDetailsAsync(long testId);
}
