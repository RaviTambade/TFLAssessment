const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS so frontend can fetch data
app.use(cors());

// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'assessmentdb'
});

// Connect to MySQL
connection.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database.');
});

// API endpoint to get evaluation criteria percentages
app.get('/api/test-evaluation/:testId', (req, res) => {
  const testId = req.params.testId;

  connection.query('CALL spgettestevaluationcriteriapercentage(?)', [testId], (err, results) => {
    if (err) {
      console.error('Error calling stored procedure:', err.message);
      return res.status(500).json({ error: 'Database error' });
    }

    const output = results[0].map(row => ({
      name: row.TopicName || row.name || row.Title || 'Unknown',
      percentage: parseFloat(row.Percentage || row.percentage || 0)
    }));

    res.json(output);
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
