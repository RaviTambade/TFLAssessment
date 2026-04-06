require('dotenv').config();
const express = require('express');
const assignedMentorRoutes = require('./routes/assignedMentorRoutes');

const app = express();
app.use(express.json());

app.use('/api', assignedMentorRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'AssignedMentors API is alive' });
});

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`AssignedMentors service running on port ${PORT}`);
});
