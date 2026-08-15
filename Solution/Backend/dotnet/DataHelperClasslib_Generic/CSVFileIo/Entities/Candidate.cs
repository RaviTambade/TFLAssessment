namespace CSVFileIO.Entity
{
    public class Candidate
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public string AppliedPosition { get; set; }

        public int SkillsMatch { get; set; }

        public string ExperienceLevel { get; set; }

        public int AssessmentScore { get; set; }

        public string InterviewStatus { get; set; }

        public DateTime ApplicationDate { get; set; }


        public override string ToString()
        {
            return Id + "," +
                   Name + "," +
                   Email + "," +
                   AppliedPosition + "," +
                   SkillsMatch + "," +
                   ExperienceLevel + "," +
                   AssessmentScore + "," +
                   InterviewStatus + "," +
                   ApplicationDate.ToString("yyyy-MM-dd");
        }
    }

    
}