import React, { useState, useEffect } from 'react';
import QuestionBankService from '../QuestionBank/services/QuestionBankService';

const FetchQuestions = () => {
  const [subjects, setSubjects] = useState([]);
  const [criterias, setCriterias] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedCriteria, setSelectedCriteria] = useState('');

  useEffect(() => {
    const fetchSubjects = async () => {
      const data = await QuestionBankService.getSubjects();
      setSubjects(data);
    };
    fetchSubjects();
  }, []);

  const handleSubjectChange = async (subjectId) => {
    setSelectedSubject(subjectId);
    const data = await QuestionBankService.getCriteriaBySubject(subjectId);
    setCriterias(data);
  };

  const fetchQuestions = async () => {
    const data = await QuestionBankService.getQuestionsBySubjectAndCriteria(selectedSubject, selectedCriteria);
    setQuestions(data);
  };

  return (
    <div>
      <h3>Fetch Questions</h3>
      <select onChange={(e) => handleSubjectChange(e.target.value)}>
        <option value="">Select Subject</option>
        {subjects.map((subject) => (
          <option key={subject.id} value={subject.id}>
            {subject.title}
          </option>
        ))}
      </select>
      <select onChange={(e) => setSelectedCriteria(e.target.value)}>
        <option value="">Select Criteria</option>
        {criterias.map((criteria) => (
          <option key={criteria.id} value={criteria.id}>
            {criteria.title}
          </option>
        ))}
      </select>
      <button onClick={fetchQuestions}>Fetch</button>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>{question.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchQuestions;
