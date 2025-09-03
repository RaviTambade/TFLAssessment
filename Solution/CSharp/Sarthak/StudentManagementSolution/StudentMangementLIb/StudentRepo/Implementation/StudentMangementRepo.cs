using StudentMangementLIb.StudentEntity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentMangementLIb.StudentRepo.Implementation
{
    public class StudentMangementRepo
    {
        public class Dbmanager
        {
            string connectionString = "Server=localhost;Port=3306;Database=school;User=root;Password=password";
            public void AddStudent(Student student)
            {
                using (MySqlConnection connection = new MySqlConnection(connectionString))
                {
                    try
                    {
                        connection.Open();
                        string query = "INSERT INTO studentprofile (Id, Name, Age, Department) VALUES (@Id, @Name, @Age, @Department)";
                        using (MySqlCommand command = new MySqlCommand(query, connection))
                        {
                            command.Parameters.AddWithValue("@Id", student.Id);
                            command.Parameters.AddWithValue("@Name", student.Name);
                            command.Parameters.AddWithValue("@Age", student.Age);
                            command.Parameters.AddWithValue("@Department", student.Department);
                            command.ExecuteNonQuery();
                        }
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine($"Error: {ex.Message}");
                    }
                }
            }

            public Student SearchStudent(int id)
            {
                using (MySqlConnection connection = new MySqlConnection(connectionString))
                {
                    try
                    {
                        connection.Open();
                        string query = "SELECT * FROM studentprofile WHERE Id = @Id";
                        using (MySqlCommand command = new MySqlCommand(query, connection))
                        {
                            command.Parameters.AddWithValue("@Id", id);
                            using (MySqlDataReader reader = command.ExecuteReader())
                            {
                                if (reader.Read())
                                {
                                    return new Student
                                    {
                                        Id = reader.GetInt32("Id"),
                                        Name = reader.GetString("Name"),
                                        Age = reader.GetInt32("Age"),
                                        Department = reader.GetString("Department")
                                    };
                                }
                            }
                        }
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine($"Error: {ex.Message}");
                    }
                }
                return null;
            }

            public void DeleteStudent(int id)
            {
                using (MySqlConnection connection = new MySqlConnection(connectionString))
                {
                    try
                    {
                        connection.Open();
                        string query = "DELETE FROM studentprofile WHERE Id = @Id";
                        using (MySqlCommand command = new MySqlCommand(query, connection))
                        {
                            command.Parameters.AddWithValue("@Id", id);
                            command.ExecuteNonQuery();
                        }
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine($"Error: {ex.Message}");
                    }
                }
            }

            public void UpdateStudent(Student student)
            {
                using (MySqlConnection connection = new MySqlConnection(connectionString))
                {
                    try
                    {
                        connection.Open();
                        string query = "UPDATE studentprofile SET Name = @Name, Age = @Age, Department = @Department WHERE Id = @Id";
                        using (MySqlCommand command = new MySqlCommand(query, connection))
                        {
                            command.Parameters.AddWithValue("@Id", student.Id);
                            command.Parameters.AddWithValue("@Name", student.Name);
                            command.Parameters.AddWithValue("@Age", student.Age);
                            command.Parameters.AddWithValue("@Department", student.Department);
                            command.ExecuteNonQuery();
                        }
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine($"Error: {ex.Message}");
                    }

                }
            }
            public void ViewStudents()
            {
                using (MySqlConnection connection = new MySqlConnection(connectionString))
                {
                    try
                    {
                        connection.Open();
                        string query = "SELECT * FROM studentprofile";
                        using (MySqlCommand command = new MySqlCommand(query, connection))
                        {
                            using (MySqlDataReader reader = command.ExecuteReader())
                            {
                                while (reader.Read())
                                {
                                    Console.WriteLine($"Id: {reader.GetInt32("Id")}, Name: {reader.GetString("Name")}, Age: {reader.GetInt32("Age")}, Department: {reader.GetString("Department")}");
                                }
                            }
                        }
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine($"Error: {ex.Message}");
                    }

                }
            }
        }
    }
}
    // class directconnectivity {

    //             static void Main()
    //             {
    //                 string connectionString = "Server=localhost;Port=3306;Database=sample;User=root;Password=password;";
    //                 MySqlConnection connection = new MySqlConnection(connectionString);
    //                 try
    //                 {
    //                     connection.Open();
    //                     Console.WriteLine("Connected to MySQL!");
    //                     string createTableSql = "CREATE TABLE IF NOT EXISTS users(" +
    //                                             "id INT AUTO_INCREMENT PRIMARY KEY," +
    //                                              "name VARCHAR(255) NOT NULL," +
    //                                              "email VARCHAR(255) NOT NULL)";

    //                     using (MySqlCommand createTableCmd = new MySqlCommand(createTableSql, connection))
    //                     {
    //                         createTableCmd.ExecuteNonQuery();
    //                     }
    //                     string insertSql = "INSERT INTO users (name, email) VALUES (@name, @email)";
    //                     using (MySqlCommand insertCommand = new MySqlCommand(insertSql, connection))
    //                     {
    //                         insertCommand.Parameters.AddWithValue("@name", "Shital Patil");
    //                         insertCommand.Parameters.AddWithValue("@email", "shital@tfl.com");

    //                         int rowsAffected = insertCommand.ExecuteNonQuery();
    //                         Console.WriteLine($"Inserted {rowsAffected} row(s) into the users table.");
    //                     }
    //                 }
    //                 catch (Exception ex)
    //                 {
    //                     Console.WriteLine($"Error: {ex.Message}");
    //                 }
    //                 finally
    //                 {
    //                     connection.Close();
    //                 }
    //             }
    //         } 
}
}
