import React, { useState, useEffect } from 'react';
import QuestionBankService from '../Services/QuestionBankService';

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

  useEffect(() => {
    QuestionBankService.getSubjects()
      .then((data) => setSubjects(data))
      .catch((error) => console.error('Error fetching subjects:', error));
  }, []);

  useEffect(() => {
    if (formData.subjectId) {
      QuestionBankService.getCriteriaBySubject(formData.subjectId)
        .then((data) => setCriterias(data))
        .catch((error) => console.error('Error fetching criteria:', error));
    }
  }, [formData.subjectId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Insert New Question
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Subject */}
          <div>
            <label htmlFor="subjectId" className="block text-gray-700 font-medium">
              Subject:
            </label>
            <select
              id="subjectId"
              name="subjectId"
              value={formData.subjectId}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select Subject</option>
              {subjects.map((subject) => (
                <option key={subject.id} value={subject.id}>
                  {subject.title}
                </option>
              ))}
            </select>
          </div>

          {/* Criteria */}
          <div>
            <label htmlFor="criteriaId" className="block text-gray-700 font-medium">
              Criteria:
            </label>
            <select
              id="criteriaId"
              name="criteriaId"
              value={formData.criteriaId}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select Criteria</option>
              {criterias.map((criteria) => (
                <option key={criteria.id} value={criteria.id}>
                  {criteria.title}
                </option>
              ))}
            </select>
          </div>

          {/* Question */}
          <div>
            <label htmlFor="question" className="block text-gray-700 font-medium">
              Question:
            </label>
            <input
              type="text"
              id="question"
              name="question"
              value={formData.question}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Options */}
          {['A', 'B', 'C', 'D'].map((option) => (
            <div key={option}>
              <label
                htmlFor={`option${option}`}
                className="block text-gray-700 font-medium"
              >
                Option {option}:
              </label>
              <input
                type="text"
                id={`option${option}`}
                name={`option${option}`}
                value={formData[`option${option}`]}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          ))}

          {/* Correct Option */}
          <div>
            <label htmlFor="correctOption" className="block text-gray-700 font-medium">
              Correct Option:
            </label>
            <input
              type="text"
              id="correctOption"
              name="correctOption"
              value={formData.correctOption}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-400"
          >
            Insert Question
          </button>
        </form>
      </div>
    </div>
  );
};

export default InsertQuestion;
