// See https://aka.ms/new-console-template for more information

using CSVFileIO.Entity;
using DataHelper.Repository.Implementation;
using DataHelper.Repository.Interface;

#region   File Io CSV for Candidate
// ---------------------------------------------------------------------------------------------------------
// --------------------------- File Io CSV for Candidate---------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
FileIoRepository<Candidate> fileIoRepository = new FileIoRepository<Candidate>();
FileIoService<Candidate> fileIoService = new FileIoService<Candidate>(fileIoRepository);

List<Candidate> candidates = fileIoService.ReadDataFromCSV("./Data/CSV/users/candidates.csv", columns => new Candidate
{
    Id = int.Parse(columns[0]),
    Name = columns[1],
    Email = columns[2],
    AppliedPosition = columns[3],
    SkillsMatch = int.Parse(columns[4]),
    ExperienceLevel = columns[5],
    AssessmentScore = int.Parse(columns[6]),
    InterviewStatus = columns[7],
    ApplicationDate = DateTime.Parse(columns[8])
});


candidates.Add(new Candidate
{
    Id = 5,
    Name = "Sneha Kulkarni",
    Email = "sneha.kulkarni@transflower.in",
    AppliedPosition = "Software Engineer",
    SkillsMatch = 90,
    ExperienceLevel = "junior",
    AssessmentScore = 87,
    InterviewStatus = "pending",
    ApplicationDate = new DateTime(2026, 3, 25)
});

fileIoService.WriteDataToCSV("./Data/CSV/users/candidates.csv",candidates);
foreach (Candidate candidate in candidates)
{
    Console.WriteLine(candidate.ToString());
}

Console.WriteLine("");
Console.WriteLine("");


#endregion


#region  File Io CSV for Admin NOtifications
// ---------------------------------------------------------------------------------------------------------
// --------------------------- File Io CSV for Admin NOtifications------------------------------------------
// ---------------------------------------------------------------------------------------------------------
FileIoRepository<AdminNotification> fileIoAdminNotificationRepository = new FileIoRepository<AdminNotification>();
FileIoService<AdminNotification> fileIoAdminNotificationService = new FileIoService<AdminNotification>(fileIoAdminNotificationRepository);

List<AdminNotification> adminNotifications = fileIoAdminNotificationService.ReadDataFromCSV("./Data/CSV/notifications/adminNotifications.csv", columns => new AdminNotification
{
    Id = int.Parse(columns[0]),
    Title = columns[1],
    Message = columns[2],
    Type = columns[3],
    Timestamp =columns[4],
    Read=bool.Parse(columns[5])
});


adminNotifications.Add(new AdminNotification
{
    Id = 5,
    Title = "New Assessment Available",
    Message = "A new assessment has been assigned to 8 candidates. Please review the assessment details.",
    Type = "info",
    Timestamp = "Just now",
    Read = false
});

fileIoAdminNotificationService.WriteDataToCSV("./Data/CSV/notifications/adminNotifications.csv", adminNotifications);
foreach (AdminNotification adminNotification in adminNotifications)
{
    Console.WriteLine(adminNotification.ToString());
}

Console.WriteLine("");
Console.WriteLine("");

#endregion


#region  File Io Json for Skill Requirement
// ---------------------------------------------------------------------------------------------------------
// --------------------------- File Io Json for Skill Requirement-------------------------------------------
// ---------------------------------------------------------------------------------------------------------
FileIoRepository<SkillRequirement> fileIoSkillRequirementRepository = new FileIoRepository<SkillRequirement>();
FileIoService<SkillRequirement> fileIoSkillRequirementService = new FileIoService<SkillRequirement>(fileIoSkillRequirementRepository);

List<SkillRequirement> skillRequirements = fileIoSkillRequirementRepository.ReadDataFromJSON("./Data/JSON/skills/skillrequirements.json");


skillRequirements.Add( new SkillRequirement
 {
     Skill = "Machine Learning",
     RequiredLevel = "advanced",
     CandidatesCovered = 2,
     TotalRequired = 4,
     FillPercentage = 50
 });

fileIoSkillRequirementRepository.WriteDataToJSON("./Data/JSON/skills/skillrequirements.json", skillRequirements);
foreach (SkillRequirement skillRequirement in skillRequirements)
{
    Console.WriteLine(skillRequirement.ToString());
}

Console.WriteLine("");
Console.WriteLine("");


#endregion 
