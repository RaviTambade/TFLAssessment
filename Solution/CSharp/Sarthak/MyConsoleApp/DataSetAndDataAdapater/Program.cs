// See https://aka.ms/new-console-template for more information
using System.Data;
using System;
using Microsoft.Data.SqlClient;


class program
{
    static void main(string[] args)
    {
        string connectionString = "Data Source=localhost;Initial Catalog=sample;Integrated Security=True";
        
        using (SqlConnection connection = new SqlConnection(connectionString))
        {
            try
            {
                connection.Open();
                Console.WriteLine("Connection Opened Successfully");

                SqlCommand cmd = new SqlCommand("SELECT * FROM sample.customers", connectionString);
                SqlDataAdapter dataAdapter = new SqlDataAdapter(cmd);
                
                DataSet dataset = new DataSet();
                dataAdapter.fill(dataset, "customers");

                foreach (DataRow row in dataset.Tables["customers"].Rows)
                {
                    Console.WriteLine($"Id :{row["Id"]}, Name :{row["Name"]}, Age :{row["Age"]}, Department :{row["Department"]} ");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
            }
            finally
            {
                connection.Close();
                Console.WriteLine("Connection Closed Successfully");
            }
        }  
    }
}
