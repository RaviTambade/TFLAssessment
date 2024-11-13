// src/components/InsertQuestion.js
import React, { useState, useEffect } from 'react';
import QuestionBankService from '../services/questionbankservice';

const InsertQuestion = () => {
  const [subjects, setSubjects] = useState([]);
  const [criterias, setCriterias] = useState([]);
  const [formData, setFormData] = useState({
    subjectId: '',
    criteriaId: '',
    question: '',
    optionA: '',
    optionB: '',
    optionC: '',
    optionD: '',
    correctOption: ''
  });

  // Load subjects on component mount
  useEffect(() => {
    QuestionBankService.getSubjects()
      .then((data) => setSubjects(data))
      .catch((error) => console.error('Error fetching subjects:', error));
  }, []);

  // Load criteria whenever the subject changes
  useEffect(() => {
    if (formData.subjectId) {
      QuestionBankService.getCriteriaBySubject(formData.subjectId)
        .then((data) => setCriterias(data))
        .catch((error) => console.error('Error fetching criteria:', error));
    }
  }, [formData.subjectId]);

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Insert question when form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();

    const newQuestion = {
      subjectId: formData.subjectId,
      title: formData.question,
      a: formData.optionA,
      b: formData.optionB,
      c: formData.optionC,
      d: formData.optionD,
      answerKey: formData.correctOption,
      evaluationCriteriaId: formData.criteriaId
    };

    QuestionBankService.insertQuestion(newQuestion)
      .then((data) => console.log('Question inserted:', data))
      .catch((error) => console.error('Error inserting question:', error));
  };

  return (
    <div className="container">
      <h3>Insert New Question</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="subjectId">Subject:</label>
          <select
            id="subjectId"
            name="subjectId"
            value={formData.subjectId}
            onChange={handleChange}
          >
            <option value="">Select Subject</option>
            {subjects.map((subject) => (
              <option key={subject.id} value={subject.id}>
                {subject.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="criteriaId">Criteria:</label>
          <select
            id="criteriaId"
            name="criteriaId"
            value={formData.criteriaId}
            onChange={handleChange}
          >
            <option value="">Select Criteria</option>
            {criterias.map((criteria) => (
              <option key={criteria.id} value={criteria.id}>
                {criteria.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="question">Question:</label>
          <input
            type="text"
            id="question"
            name="question"
            value={formData.question}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="optionA">Option A:</label>
          <input
            type="text"
            id="optionA"
            name="optionA"
            value={formData.optionA}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="optionB">Option B:</label>
          <input
            type="text"
            id="optionB"
            name="optionB"
            value={formData.optionB}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="optionC">Option C:</label>
          <input
            type="text"
            id="optionC"
            name="optionC"
            value={formData.optionC}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="optionD">Option D:</label>
          <input
            type="text"
            id="optionD"
            name="optionD"
            value={formData.optionD}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="correctOption">Correct Option:</label>
          <input
            type="text"
            id="correctOption"
            name="correctOption"
            value={formData.correctOption}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Insert Question</button>
      </form>
    </div>
  );
};

export default InsertQuestion;
