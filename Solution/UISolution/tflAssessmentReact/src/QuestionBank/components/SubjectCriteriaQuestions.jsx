
import React, { useEffect, useState } from 'react';
import QuestionService from '../services/questionbankservice';

const SubjectCriteriaQuestions = () => {
  const [subjects, setSubjects] = useState([]);
  const [criterias, setCriterias] = useState([]);
  const [questionsList, setQuestionsList] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedCriteria, setSelectedCriteria] = useState('');

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const data = await QuestionService.getSubjects();
        setSubjects(data);
        if (data.length > 0) {
          setSelectedSubject(data[0].id);
        }
      } catch (error) {
        console.error('Error fetching subjects:', error);
      }
    };
    fetchSubjects();
  }, []);

  useEffect(() => {
    const fetchCriteria = async () => {
      if (selectedSubject) {
        try {
          const data = await QuestionService.getCriteriaBySubject(selectedSubject);
          setCriterias(data);
          if (data.length > 0) {
            setSelectedCriteria(data[0].id);
          }
        } catch (error) {
          console.error('Error fetching criteria:', error);
        }
      }
    };
    fetchCriteria();
  }, [selectedSubject]);

  useEffect(() => {
    const fetchQuestions = async () => {
      if (selectedSubject && selectedCriteria) {
        try {
          const data = await QuestionService.getQuestionsBySubjectAndCriteria(selectedSubject, selectedCriteria);
          setQuestionsList(data);
        } catch (error) {
          console.error('Error fetching questions:', error);
        }
      }
    };
    fetchQuestions();
  }, [selectedSubject, selectedCriteria]);

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
    setCriterias([]); 
    setQuestionsList([]);
  };

  const handleCriteriaChange = (e) => {
    setSelectedCriteria(e.target.value);
  };

  return (
    <div className="container">
      <h3>Transflower Learning Private Limited</h3>
      <hr />
      <label>Select Subject: </label>
      <select id="ddlSubjects" value={selectedSubject} onChange={handleSubjectChange}>
        {subjects.map((subject) => (
          <option key={subject.id} value={subject.id}>
            {subject.title}
          </option>
        ))}
      </select>
      <br />
      <label>Select Evaluation Criteria: </label>
      <select id="ddlCriteria" value={selectedCriteria} onChange={handleCriteriaChange}>
        {criterias.map((criteria) => (
          <option key={criteria.id} value={criteria.id}>
            {criteria.title}
          </option>
        ))}
      </select>
      <hr />

      <div className="jumbotron">
        <div className="questions" id="questions">
          {questionsList.map((question) => (
            <h6 key={question.id}>
              {question.id} {question.question} {question.subject}
            </h6>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectCriteriaQuestions;
