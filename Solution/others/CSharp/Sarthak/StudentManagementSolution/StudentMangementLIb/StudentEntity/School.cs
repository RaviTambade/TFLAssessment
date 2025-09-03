using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentMangementLIb.StudentEntity
{
        public class Student
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public int Age { get; set; }
            public string Department { get; set; }

            public Student()
            {

            }
            public Student(int id, string name, int age, string department)
            {
                Id = id;
                Name = name;
                Age = age;
                Department = department;
            }
            public void Display()
            {
            Console.WriteLine("Id:" + Id);
            Console.WriteLine("Name:" + Name);
            Console.WriteLine("Age:" + Age);
            Console.WriteLine("Department:" + Department);
            }

        }

    


}
