using DataBaseConnectivities.Entities;
using DataBaseConnectivities.Repositories.ADONET.Connected;
using DataBaseConnectivities.Repositories.Dapper;
using DataBaseConnectivities.Repositories.Interfaces;

IAssessmentRepository dapper = new AssessmentDapperRepository();
/*
Console.WriteLine("Get By ID Using Dappaer");
Assessment assessment = await dapper.GetDetails(2);
Console.WriteLine("Id : " + assessment.Id + "  PassingLevel : " + assessment.PassingLevel);
*/

/*Console.WriteLine("Post Using Dappaer");
bool status = await dapper.AddQuestion(1,16);
Console.WriteLine(status);
*/

/*Console.WriteLine("Delete Using Dappaer");
bool status = await dapper.RemoveQuestion(1, 16);
Console.WriteLine(status);
*/

/*Console.WriteLine("Put Using Dappaer");
bool status = await dapper.Reschedule(1,new DateTime(2024,05,15));
Console.WriteLine(status);
*/




/*Console.WriteLine("Using ADO.NET Connected");
IAssessmentRepository connected = new AssessmentRepository();
Assessment assessment1 = await connected.GetDetails(2);
Console.WriteLine("Id : " + assessment.Id + "  PassingLevel : " + assessment.PassingLevel);
*/
