function CandidateTable({ rankings }) {
  return (
    <div className="Dashboard-Table">
      <h3>Candidate Ranking</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rankings.map((candidate, index) => (
            <tr key={index}>
              <td>{candidate.name}</td>
              <td>{candidate.score}</td>
              <td>{candidate.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CandidateTable;
