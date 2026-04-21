import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface Question {
  questionId: number;
  description: string;
  questionType: string;
  difficultyLevel: string;
  createdAt: string;
  status: boolean;
}

interface TestDetailsData {
  id: number;
  title: string;
  description: string;
  duration: number;
  difficulty: string;
  createdAt: string;
  status: boolean;
  questions: Question[];
}

const TestDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [testDetails, setTestDetails] = useState<TestDetailsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestDetails = async () => {
      if (!id) return;
      try {
        const response = await fetch(`http://localhost:5300/api/TestHistory/${id}`);
        if (!response.ok) {
          throw new Error(`API error: ${response.status} ${response.statusText}`);
        }
        const data: TestDetailsData = await response.json();
        setTestDetails(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load test details");
      } finally {
        setLoading(false);
      }
    };

    fetchTestDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto p-5">
        <p className="text-gray-600">Loading test details...</p>
      </div>
    );
  }

  if (error || !testDetails) {
    return (
      <div className="max-w-2xl mx-auto p-5">
        <p className="text-red-600">Error: {error || "Test not found"}</p>
      </div>
    );
  }
 
  const handleDetailsClick = (questionId: number) => {
    alert(`Question ID: ${questionId}`);
  };

  return (
    <div className="max-w-2xl mx-auto p-5">
      <h2 className="text-gray-800 mb-5">{testDetails.title}</h2>
      <div className="bg-gray-50 p-4 rounded-md mb-8">
        <p className="my-2"><strong>Description:</strong> {testDetails.description}</p>
        <p className="my-2"><strong>Duration:</strong> {testDetails.duration} minutes</p>
        <p className="my-2"><strong>Difficulty:</strong> {testDetails.difficulty}</p>
        <p className="my-2"><strong>Created At:</strong> {new Date(testDetails.createdAt).toLocaleDateString()}</p>
        <p className="my-2"><strong>Status:</strong> {testDetails.status ? "Active" : "Inactive"}</p>
      </div>

      <h3 className="text-lg font-semibold mb-4">Questions</h3>
      <div className="mt-px">
        {testDetails.questions.length === 0 ? (
          <p>No questions found for this test.</p>
        ) : (
          testDetails.questions.map((question) => (
            <div key={question.questionId} className="flex justify-between items-center p-4 border border-gray-300 rounded-md mb-2.5 bg-white">
              <div className="flex-1">
                <h4 className="m-0 mb-2 text-gray-800 text-base">{question.description}</h4>
                <p className="m-0 text-sm text-gray-600">
                  Type: {question.questionType} | Difficulty: {question.difficultyLevel} | Status: {question.status ? "Active" : "Inactive"}
                </p>
              </div>
              <button
                className="bg-[#ef3f2f] hover:bg-[#d92e1b] text-white font-bold py-2 px-4 rounded"
                onClick={() => handleDetailsClick(question.questionId)}
              >
                Details
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TestDetails;