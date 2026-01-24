import React from 'react';
import Header from '../../layout/student/StudentHeader';
import AssessmentSummary from '../../dashboard/student/AssessmentSummary';

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