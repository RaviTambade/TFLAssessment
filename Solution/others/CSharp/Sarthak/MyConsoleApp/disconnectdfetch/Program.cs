// See https://aka.ms/new-console-template for more information
using System.Data;
using System.Data.SqlClient;

// Replace with your connection string
string connectionString = "your_connection_string_here";
string query = "SELECT * FROM YourTable";

DataSet ds = new DataSet();

using (SqlConnection conn = new SqlConnection(connectionString))
{
    // Create DataAdapter and command
    SqlDataAdapter adapter = new SqlDataAdapter(query, conn);

    // Fetch data into DataSet (disconnected)
    adapter.Fill(ds);

    // Now you can use ds.Tables with the fetched data; connection is closed!
    foreach (DataRow row in ds.Tables.Rows)
    {
        Console.WriteLine(row["YourColumnName"]);
    }
}

