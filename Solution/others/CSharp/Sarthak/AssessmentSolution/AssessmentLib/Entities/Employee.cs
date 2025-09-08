using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AssessmentLib.Entities
{
    public class Employee
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public  string LastName { get; set; }
        public int UserId { get; set; }
        public string Email { get; set; }
        public int Contact { get; set; }
        public string Role { get; set; }

    }
}
