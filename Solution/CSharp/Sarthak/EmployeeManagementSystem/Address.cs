namespace HR
{
    public class Address
    {
        private String city;
        private String state;
        private String zip;

        public Address(String city, String state, String zip)
        {
            this.city = city;
            this.state = state;
            this.zip = zip;
        }
        public String City
        {
            get { return city; }
            set { city = value; }
        }

        public String State
        {
            get { return state; }
            set { state = value; }
        }

        public String Zip
        {
            get { return zip; }
            set { zip = value; }
        }

        
        public void Display()
        {
            Console.WriteLine("City: " + city + ", State: " + state + ", Zip: " + zip);
        }
    }
}