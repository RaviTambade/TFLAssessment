import React, { useState } from "react";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { useScrollAnimation } from "../../../hooks/use-scroll-animation";

interface MCQ {
  question: string;
  options: string[];
  correctIndex: number;
}

const McqManager: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const [mcqs, setMcqs] = useState<MCQ[]>([
    {
      question: "Which is a valid primitive type in Java?",
      options: ["String", "int", "Array", "Object"],
      correctIndex: 1,
    },
    {
      question: "Which keyword declares a variable in JavaScript?",
      options: ["int", "var", "define", "dim"],
      correctIndex: 1,
    },
  ]);

  const [newMcq, setNewMcq] = useState<MCQ>({
    question: "",
    options: ["", "", "", ""],
    correctIndex: 0,
  });

  const handleAddMcq = () => {
    if (!newMcq.question) return alert("Question required");

    setMcqs([...mcqs, newMcq]);

    setNewMcq({
      question: "",
      options: ["", "", "", ""],
      correctIndex: 0,
    });

    alert("MCQ Added 🚀");
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setIsEditing(true);
  };

  const handleSave = () => {
    setEditingIndex(null);
    setIsEditing(false);
    alert("MCQ Updated ✅");
  };

  const handleDelete = (index: number) => {
    const updated = mcqs.filter((_, i) => i !== index);
    setMcqs(updated);
    alert("MCQ Deleted ❌");
  };

  return (
    <section className="py-20 bg-orange-50">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            MCQ <span className="text-orange-600">Manager</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Add, Edit or Remove MCQs
          </p>
        </div>

        {/* Add MCQ */}
        <Card className="mb-10 shadow-lg border border-orange-200">
          <CardContent className="p-8 space-y-6">

            <h3 className="text-2xl font-semibold text-orange-600">
              Add MCQ
            </h3>

            {/* Question */}
            <div>
              <label className="block mb-2 font-semibold">
                Question
              </label>

              <textarea
                className="w-full p-3 border border-gray-300 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter question"
                value={newMcq.question}
                onChange={(e) =>
                  setNewMcq({
                    ...newMcq,
                    question: e.target.value,
                  })
                }
              />
            </div>

            {/* Options */}
            {newMcq.options.map((opt, i) => (
              <div key={i}>
                <label className="block mb-2 font-semibold">
                  Option {String.fromCharCode(65 + i)}
                </label>

                <input
                  className="w-full p-3 border border-gray-300 rounded-md 
                  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={opt}
                  onChange={(e) => {
                    const updated = [...newMcq.options];
                    updated[i] = e.target.value;

                    setNewMcq({
                      ...newMcq,
                      options: updated,
                    });
                  }}
                />
              </div>
            ))}

            {/* Correct Option */}
            <div>
              <label className="block mb-2 font-semibold">
                Correct Option
              </label>

              <select
                className="w-full p-3 border border-gray-300 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                value={newMcq.correctIndex}
                onChange={(e) =>
                  setNewMcq({
                    ...newMcq,
                    correctIndex: Number(e.target.value),
                  })
                }
              >
                <option value={0}>Option A</option>
                <option value={1}>Option B</option>
                <option value={2}>Option C</option>
                <option value={3}>Option D</option>
              </select>
            </div>

            <Button
              className="bg-orange-600 hover:bg-orange-700 text-white"
              onClick={handleAddMcq}
            >
              Add MCQ
            </Button>

          </CardContent>
        </Card>

        {/* Existing MCQs */}
        <div className="grid md:grid-cols-2 gap-8">

          {mcqs.map((mcq, index) => (
            <Card
              key={index}
              ref={ref}
              className={`shadow-lg border border-orange-200 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <CardContent className="p-6 space-y-4">

                {/* Question */}
                <div>
                  <label className="block mb-2 font-semibold">
                    Question
                  </label>

                  <textarea
                    disabled={!isEditing || editingIndex !== index}
                    className="w-full p-3 border border-gray-300 rounded-md 
                    focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    value={mcq.question}
                    onChange={(e) => {
                      const updated = [...mcqs];
                      updated[index].question = e.target.value;
                      setMcqs(updated);
                    }}
                  />
                </div>

                {/* Options */}
                {mcq.options.map((opt, i) => (
                  <div key={i}>
                    <label className="block mb-2 font-semibold">
                      Option {String.fromCharCode(65 + i)}
                    </label>

                    <input
                      disabled={!isEditing || editingIndex !== index}
                      className="w-full p-3 border border-gray-300 rounded-md 
                      focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      value={opt}
                      onChange={(e) => {
                        const updated = [...mcqs];
                        updated[index].options[i] = e.target.value;
                        setMcqs(updated);
                      }}
                    />
                  </div>
                ))}

                {/* Correct Option */}
                <div>
                  <label className="block mb-2 font-semibold">
                    Correct Option
                  </label>

                  <select
                    disabled={!isEditing || editingIndex !== index}
                    className="w-full p-3 border border-gray-300 rounded-md 
                    focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    value={mcq.correctIndex}
                    onChange={(e) => {
                      const updated = [...mcqs];
                      updated[index].correctIndex = Number(e.target.value);
                      setMcqs(updated);
                    }}
                  >
                    <option value={0}>Option A</option>
                    <option value={1}>Option B</option>
                    <option value={2}>Option C</option>
                    <option value={3}>Option D</option>
                  </select>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">

                  {editingIndex === index ? (
                    <>
                      <Button
                        className="bg-orange-600 hover:bg-orange-700 text-white"
                        onClick={handleSave}
                      >
                        Save
                      </Button>

                      <Button
                        variant="outline"
                        onClick={() => setEditingIndex(null)}
                      >
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        className="bg-orange-500 hover:bg-orange-600 text-white"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </Button>

                      <Button
                        variant="destructive"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </Button>
                    </>
                  )}

                </div>

              </CardContent>
            </Card>
          ))}

        </div>

      </div>
    </section>
  );
};

export default McqManager;

