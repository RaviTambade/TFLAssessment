import React, { useEffect, useState } from "react";

interface AssessmentRow {
  srNo: number;
  studentName: string;
  testName: string;
  score: number;
  percentile: number;
  rank: string;
  level: string;
  date: string;
}

interface ApiAssessmentResult {
  fullName: string;
  testTitle: string;
  score: number;
  percentile: number;
  difficulty: string;
  scheduledDate: string;
}

const CandidateTestResult: React.FC = () => {
  const [data, setData] = useState<AssessmentRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5201/api/Result/results")
      .then((res) => res.json())
      .then((result: ApiAssessmentResult[]) => {
        const formatted = result.map((item, index) => ({
          srNo: index + 1,
          studentName: item.fullName || "N/A",
          testName: item.testTitle || "-",
          score: item.score || 0,
          percentile: item.percentile || 0,
          rank: "-",
          level: item.difficulty || "BEGINNER",
          date: item.scheduledDate ? new Date(item.scheduledDate).toLocaleDateString() : "-",
        }));

        setData(formatted);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="ctr-root">
      <div className="ctr-wrap">
        <header className="ctr-header">
          <h1 className="ctr-title">Assessment Result</h1>
          <div className="ctr-underline" />
        </header>

        <section className="ctr-card">
          {loading ? (
            <div className="ctr-loading">Loading...</div>
          ) : (
            <div className="ctr-table-wrap">
              <table className="ctr-table">
                <thead>
                  <tr>
                    <th className="th sr">Sr No</th>
                    <th className="th">Student Name</th>
                    <th className="th">Test Name</th>
                    <th className="th">Score</th>
                    <th className="th">Percentile</th>
                    <th className="th">Rank</th>
                    <th className="th">Level</th>
                    <th className="th">Date</th>
                  </tr>
                </thead>

                <tbody>
                  {data.map((row, index) => (
                    <tr key={index} className={`tr-row ${index % 2 === 0 ? 'even' : 'odd'}`}>
                      <td className="td sr">{row.srNo}</td>
                      <td className="td">{row.studentName}</td>
                      <td className="td">{row.testName}</td>
                      <td className="td center">{row.score.toFixed(2)}</td>
                      <td className="td center">{row.percentile.toFixed(2)}</td>
                      <td className="td center">{row.rank}</td>
                      <td className="td center">
                        <span className={`level-badge level-${row.level}`}>{row.level}</span>
                      </td>
                      <td className="td center date-col">{row.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default CandidateTestResult;