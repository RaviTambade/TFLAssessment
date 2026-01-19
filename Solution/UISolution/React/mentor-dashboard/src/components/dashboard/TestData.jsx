function TestData() {
  const testData = {
    ActiveTest: 6,
    PendingReview: 12,
    SkillGap: 18,
    Alert: 3,
  };

  return (
    <div className="container mt-4">
      <h5 className="fw-bold mb-3">Test Data</h5>

      <div className="row g-3">
        <div className="col-md-3 col-sm-6">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h6 className="text-muted">Active Tests</h6>
              <h3 className="fw-bold">{testData.ActiveTest}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h6 className="text-muted">Pending Review</h6>
              <h3 className="fw-bold">{testData.PendingReview}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h6 className="text-muted">Skill Gap</h6>
              <h3 className="fw-bold">{testData.SkillGap}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h6 className="text-muted">Alert</h6>
              <h3 className="fw-bold text-danger">{testData.Alert}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestData;
