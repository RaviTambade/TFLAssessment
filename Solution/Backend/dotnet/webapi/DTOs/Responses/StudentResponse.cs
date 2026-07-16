namespace backend.DTO.Responses
{
    public class StudentResponse
    {
        public long Id { get; set; }
        public string FullName { get; set; } = "";
        public string Contact { get; set; } = "";
        public string Status { get; set; } = "";
    }
}