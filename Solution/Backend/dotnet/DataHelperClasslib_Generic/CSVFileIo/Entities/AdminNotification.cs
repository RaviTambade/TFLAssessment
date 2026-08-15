namespace CSVFileIO.Entity
{
    public class AdminNotification
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Message { get; set; }

        public string Type { get; set; }

        public string Timestamp { get; set; }

        public bool Read { get; set; }

        public override string ToString()
        {
            return Id + "," +
                   Title + "," +
                   Message + "," +
                   Type + "," +
                   Timestamp + "," +
                   Read;
        }
    }
}