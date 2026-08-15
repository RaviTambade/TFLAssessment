namespace CSVFileIO.Entity
{
    public class SkillRequirement
    {
        public string Skill { get; set; }

        public string RequiredLevel { get; set; }

        public int CandidatesCovered { get; set; }

        public int TotalRequired { get; set; }

        public int FillPercentage { get; set; }

        public override string ToString()
        {
            return "\"" + Skill + "\"," +
                   RequiredLevel + "," +
                   CandidatesCovered + "," +
                   TotalRequired + "," +
                   FillPercentage;
        }
    }
}