import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getAssessmentSummary } from '../../services/student/AssessmentSummaryService';
function AssessmentSummary() {
  // const assessments = [
  //   {
  //     title: 'Web API',
  //     score: 72,
  //     feedback: 'Good REST knowledge, improve error handling',
  //   },
  //   {
  //     title: 'OOP Concepts',
  //     score: 70,
  //     feedback: 'Focus on inheritance and polymorphism',
  //   },
  // ];
   const [assessments,setAssessments]=useState([]);
  
    useEffect(()=>
    {
      getAssessmentSummary().then((data)=>
      {
        setAssessments(data);
      });
      
    });
  return (
    <div>
      {assessments.map((assessment, idx) => (
        <div key={idx} className="card mb-3">
          <div className="card-header">{assessment.title}</div>
          <div className="card-body">
            <p>Score: {assessment.score}%</p>
            <p>Feedback: {assessment.feedback}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AssessmentSummary;