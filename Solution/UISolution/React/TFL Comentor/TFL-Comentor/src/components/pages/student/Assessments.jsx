import React from 'react';
import Header from '../components/layout/Header';
import AssessmentSummary from '../components/dashboard/AssessmentSummary';

function Assessments() {
  return (
    <div>
      <Header/>
      <h3>Assessments</h3>
     <AssessmentSummary/>
    </div>
  );
}

export default Assessments;