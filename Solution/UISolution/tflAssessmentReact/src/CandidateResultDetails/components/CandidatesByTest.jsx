// CandidatesByTest.js
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CandidateDetailsService from "../services/CandidateDetailsService";
import BarChart from "../../BarCharts/TestResultChart";

const CandidatesByTest = () => {
  const { testId } = useParams();
  const [candidates, setCandidates] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCandidates = async () => {
      if (testId) {
        try {
          const data = await CandidateDetailsService.TestResultDetails(testId);
          setCandidates(data);
          setError(null);
        } catch (error) {
          setError("Failed to fetch candidates");
        }
      }
    };

    fetchCandidates();
  }, [testId]);

  if (error) return <p className="text-red-500">{error}</p>;

  // Prepare data for the bar chart
  const chartData = {
    labels: candidates.map((candidate) => `${candidate.firstName} ${candidate.lastName}`),
    datasets: [
      {
        label: "Scores",
        data: candidates.map((candidate) => candidate.score),
        backgroundColor: "rgba(59, 130, 246, 0.7)", // Tailwind blue
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      <Link
        to="/teacher/assessmentlist"
        className="text-blue-500 hover:underline mb-4 block"
      >
        &larr; Back to Assessments
      </Link>

      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Candidates for Test ID: {testId}
      </h2>

      {candidates.length > 0 ? (
        <>
          <BarChart data={chartData} options={chartOptions} />
          <ol className="list-decimal pl-5 space-y-3 mt-6">
            {candidates.map((candidate) => (
              <li
                key={candidate.id}
                className="p-4 bg-gray-100 rounded-lg shadow-md"
              >
                <p className="font-bold text-lg text-gray-800">
                  {candidate.testName}
                </p>
                <p className="text-gray-700">
                  {candidate.firstName} {candidate.lastName}
                </p>
                <p className="text-gray-600 italic">{candidate.subject}</p>
                <p className="text-blue-600 font-medium">
                  Score: {candidate.score}
                </p>
              </li>
            ))}
          </ol>
        </>
      ) : (
        <p className="text-center text-gray-500">No candidates found</p>
      )}
    </div>
  );
};

export default CandidatesByTest;
