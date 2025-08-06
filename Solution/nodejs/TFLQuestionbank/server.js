const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(express.json());

const QUESTIONS_FILE = 'questions.json';

function readQuestions() {
  const data = fs.readFileSync(QUESTIONS_FILE);
  return JSON.parse(data);
}


function writeQuestions(data) {
  fs.writeFileSync(QUESTIONS_FILE, JSON.stringify(data, null, 2));
}

// GET all questions
app.get('/api/questionbank/questions', (req, res) => {
  const questions = readQuestions();
  res.send(questions);
});

// POST new question
app.post('/api/questionbank/questions', (req, res) => {
  const questions = readQuestions();
  const newQuestion = {
    id: questions.length ? questions[questions.length - 1].id + 1 : 1,
    title: req.body.title
  };
  questions.push(newQuestion);
  writeQuestions(questions);
  res.status(201).send(newQuestion);
});

// PUT update question by id
app.put('/api/questionbank/questions/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const questions = readQuestions();
  const index = questions.findIndex(q => q.id === id);
  if (index === -1) return res.status(404).send({ error: "Question not found" });

  questions[index].title = req.body.title;
  writeQuestions(questions);
  res.send(questions[index]);
});

// DELETE question by id
app.delete('/api/questionbank/questions/:id', (req, res) => {
  const id = parseInt(req.params.id);
  let questions = readQuestions();
  const initialLength = questions.length;
  questions = questions.filter(q => q.id !== id);

  if (questions.length === initialLength) return res.status(404).send({ error: "Question not found" });

  writeQuestions(questions);
  res.send({ message: "Question deleted successfully" });
});

app.listen(5172),
  console.log ("server is listening on port 5172");
