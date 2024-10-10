import React, { useEffect, useState } from 'react';
import QuestionService from '../services/questionbankservice';

const SubjectCriteriaQuestions = () => {
  const [subjects, setSubjects] = useState([]);
  const [criterias, setCriterias] = useState([]);
  const [questionsList, setQuestionsList] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedCriteria, setSelectedCriteria] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubjects = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await QuestionService.getSubjects();
        setSubjects(data);
        if (data.length > 0) {
          setSelectedSubject(data[0].id); 
        }
      } catch (error) {
        setError('Error fetching subjects.');
      } finally {
        setLoading(false);
      }
    };
    fetchSubjects();
  }, []);

  useEffect(() => {
    if (!selectedSubject) return; 

    const fetchCriteria = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await QuestionService.getCriteriaBySubject(selectedSubject);
        setCriterias(data);
        if (data.length > 0) {
          setSelectedCriteria(data[0].id); 
        }
      } catch (error) {
        setError('Error fetching criteria.');
      } finally {
        setLoading(false);
      }
    };
    fetchCriteria();
  }, [selectedSubject]);

  useEffect(() => {
    if (!selectedSubject || !selectedCriteria) return;

    const fetchQuestions = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await QuestionService.getQuestionsBySubjectAndCriteria(selectedSubject, selectedCriteria);
        setQuestionsList(data);
      } catch (error) {
        setError('Error fetching questions.');
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [selectedSubject, selectedCriteria]);

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
    setCriterias([]); 
    setQuestionsList([]); 
    setSelectedCriteria(''); 
  };

  const handleCriteriaChange = (e) => {
    setSelectedCriteria(e.target.value);
  };

  return (
    <div className="container">
      <h3>Transflower Learning Private Limited</h3>
      <hr />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

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
          {questionsList.length === 0 ? (
            <p>No questions found.</p>
          ) : (
            questionsList.map((question) => (
              <h6 key={question.id}>
                {question.id}. {question.question} ({question.subject})
              </h6>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SubjectCriteriaQuestions;
