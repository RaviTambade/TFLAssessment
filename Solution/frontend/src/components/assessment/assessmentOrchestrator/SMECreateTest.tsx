import { useEffect, useState } from "react";

interface Question {
  id: string;
  title: string;
  type: string;
  difficulty: "Easy" | "Medium" | "Hard";
  concept: string;
}

const SMECreateTest = () => {

  const [testName, setTestName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]);
  const [showQuestionList, setShowQuestionList] = useState(false);
  const [selectedConcept, setSelectedConcept] = useState<string>("all");


  //Add radio buttons for language selection (JavaScript, Python, Java, C#, etc.)
  // Available concepts
  const concepts = [
    { id: "all", name: "All Concepts" },
    { id: "reflection", name: "reflection" },
    { id: "javascript", name: "JavaScript" },
    { id: "design", name: "System Design" },
    { id: "dsa", name: "Data Structures & Algorithms" },
    { id: "api", name: "REST APIs" },
  ];

  // Mock questions list - Replace with API call
  const availableQuestions: Question[] = [
    { id: "q1", title: "What is reflection?", type: "Multiple Choice", difficulty: "Easy", concept: "reflection" },
    { id: "q2", title: "Explain JavaScript closures", type: "Short Answer", difficulty: "Medium", concept: "javascript" },
    { id: "q3", title: "Design a scalable architecture", type: "Essay", difficulty: "Hard", concept: "design" },
    { id: "q4", title: "What are hooks in reflection?", type: "Multiple Choice", difficulty: "Easy", concept: "reflection" },
    { id: "q5", title: "Implement a binary search tree", type: "Coding", difficulty: "Hard", concept: "dsa" },
    { id: "q6", title: "Explain REST APIs", type: "Short Answer", difficulty: "Medium", concept: "api" },
    { id: "q7", title: "What is async/await?", type: "Multiple Choice", difficulty: "Medium", concept: "javascript" },
    { id: "q8", title: "Design a caching system", type: "Essay", difficulty: "Hard", concept: "design" },
  ];

  // Filter questions based on selected concept
  const filteredQuestions = selectedConcept === "all"
    ? availableQuestions
    : availableQuestions.filter((q) => q.concept === selectedConcept);

  const toggleQuestion = (questionId: string) => {
    setSelectedQuestions((prev) => prev.includes(questionId) ? prev.filter((id) => id !== questionId) : [...prev, questionId]
    );
  };

  const removeQuestion = (questionId: string) => {
    setSelectedQuestions((prev) => prev.filter((id) => id !== questionId));
  };

  const selectedQuestionsData = availableQuestions.filter((q) =>selectedQuestions.includes(q.id)
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ testName, description,duration,selectedQuestions: selectedQuestionsData   });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Create New Test</h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Test Name */}
        <div className="flex flex-col">
          <label htmlFor="testName" className="block text-sm font-medium text-gray-700 mb-2">Test Name</label> 
          <input 
            type="text" 
            id="testName" 
            name="testName" 
            value={testName}
            onChange={(e) => setTestName(e.target.value)}
            required 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea 
            id="description" 
            name="description" 
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
          ></textarea>
        </div>

        {/* Duration */}
        <div className="flex flex-col">
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">Duration (minutes)</label>
          <input 
            type="number" 
            id="duration" 
            name="duration" 
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        {/* Concept Selection */}
        <div className="flex flex-col border-t pt-6">
          <label className="block text-sm font-medium text-gray-700 mb-4">Filter Questions by Concept</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {concepts.map((concept) => (
              <div key={concept.id} className="flex items-center">
                <input
                  type="radio"
                  id={concept.id}
                  name="concept"
                  value={concept.id}
                  checked={selectedConcept === concept.id}
                  onChange={(e) => setSelectedConcept(e.target.value)}
                  className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                />
                <label htmlFor={concept.id} className="ml-2 text-sm font-medium text-gray-700 cursor-pointer">
                  {concept.name}
                </label>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Showing {filteredQuestions.length} question(s) for "{concepts.find((c) => c.id === selectedConcept)?.name}"
          </p>
        </div>

        {/* Questions Selection */}
        <div className="flex flex-col border-t pt-6">
          <div className="flex justify-between items-center mb-4">
            <label className="block text-sm font-medium text-gray-700">Select Questions</label>
            <button
              type="button"
              onClick={() => setShowQuestionList(!showQuestionList)}
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition"
            >
              {showQuestionList ? "Hide" : "Browse"} Questions
            </button>
          </div>

          {/* Available Questions List */}
          {showQuestionList && (
            <div className="border border-gray-200 rounded-md p-4 bg-gray-50 mb-6 max-h-80 overflow-y-auto">
              {filteredQuestions.length > 0 ? (
                filteredQuestions.map((question) => (
                  <div key={question.id} className="flex items-center p-3 border-b border-gray-200 last:border-b-0 hover:bg-gray-100 rounded transition">
                    <input
                      type="checkbox"
                      id={question.id}
                      checked={selectedQuestions.includes(question.id)}
                      onChange={() => toggleQuestion(question.id)}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    />
                    <label htmlFor={question.id} className="flex-1 ml-3 cursor-pointer">
                      <div className="font-medium text-gray-900">{question.title}</div>
                      <div className="text-sm text-gray-500">
                        <span className="inline-block mr-3">{question.type}</span>
                        <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                          question.difficulty === "Easy" ? "bg-green-100 text-green-800" :
                          question.difficulty === "Medium" ? "bg-yellow-100 text-yellow-800" :
                          "bg-red-100 text-red-800"
                        }`}>
                          {question.difficulty}
                        </span>
                      </div>
                    </label>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-sm italic text-center py-4">No questions available for this concept.</p>
              )}
            </div>
          )}

          {/* Selected Questions */}
          <div className="flex flex-col">
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Selected Questions ({selectedQuestions.length})
            </h3>
            {selectedQuestionsData.length > 0 ? (
              <div className="space-y-2">
                {selectedQuestionsData.map((question) => (
                  <div
                    key={question.id}
                    className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-md"
                  >
                    <div>
                      <div className="font-medium text-gray-900">{question.title}</div>
                      <div className="text-sm text-gray-600">{question.type} • {question.difficulty}</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeQuestion(question.id)}
                      className="text-red-600 hover:text-red-800 font-medium transition"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-sm italic">No questions selected yet. Click "Browse Questions" to add questions.</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex gap-4 pt-6 border-t">
          <button
            type="submit"
            className="flex-1 px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition"
          >
            Create Test
          </button>
          <button
            type="reset"
            className="flex-1 px-6 py-3 bg-gray-300 text-gray-800 font-medium rounded-md hover:bg-gray-400 transition"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
    
}
export default SMECreateTest;
