function checkEmployebillity(Readiness)
{
    if(Readiness=="Employable")
    {
        return "🟢 Employable"
    }
    else if(Readiness=="Trainable")
    {
        return "🟡 Trainable"
    }
    else
    {
        return "🔴 Not Ready"
    }
}

function CandidateRanking() {
  const candidateRank = [
    {
      id: 1,
      Candidate: "Amit Patil",
      "Match%": 82,
      "Final%": 86,
      Readiness: "Employable",
      Risk: "Low",
    },
    {
      id: 2,
      Candidate: "Rahul D.",
      "Match%": 78,
      "Final%": 81,
      Readiness: "Employable",
      Risk: "Low",
    },
    {
      id: 3,
      Candidate: "Sneha K.",
      "Match%": 71,
      "Final%": 74,
      Readiness: "Trainable",
      Risk: "Med",
    },
    {
      id: 4,
      Candidate: "Neha S.",
      "Match%": 64,
      "Final%": 66,
      Readiness: "Not Ready",
      Risk: "High",
    },
  ];
  return (
    <>
      <div>
        <table className="CandidateRank" border={1}>
          <tr>
            <th>#</th>
            <th>Candidate</th>
            <th>Match%</th>
            <th>FInal%</th>
            <th>Readiness</th>
            <th>Risk</th>
          </tr>
          {candidateRank.map((rank) => (
            <tr>
              <td>{rank.id}</td>
              <td>{rank.Candidate}</td>
              <td>{rank["Match%"]}</td>
              <td>{rank["Final%"]}</td>
              <td>{checkEmployebillity(rank.Readiness)}</td>
              <td>{rank.Risk}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default CandidateRanking;
