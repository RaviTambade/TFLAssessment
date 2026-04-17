import React, { useState } from "react";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../ui/select";

import { useScrollAnimation } from "../../../hooks/use-scroll-animation";

interface MockQuestion {
  title: string;
  description: string;
  language: string;
  concept: string;
  mockCategory: string;
}

const languages = ["Java", "Python", "C++", "JavaScript", "Go"];

const concepts = [
  "OOP",
  "Exception Handling",
  "Collections",
  "Multithreading",
  "Asynchronous Programming"
];

const MockQuestionManager: React.FC = () => {

  const { ref, isVisible } = useScrollAnimation();

  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const [questions, setQuestions] = useState<MockQuestion[]>([
    {
      title: "Explain Exception Handling",
      description: "Describe try, catch and finally with example.",
      language: "Java",
      concept: "Exception Handling",
      mockCategory: "Technical"
    },
    {
      title: "OOP Principles",
      description: "Explain encapsulation, inheritance and polymorphism.",
      language: "Python",
      concept: "OOP",
      mockCategory: "Conceptual"
    }
  ]);

  const [newQuestion, setNewQuestion] = useState<MockQuestion>({
    title: "",
    description: "",
    language: "",
    concept: "",
    mockCategory: ""
  });

  const handleAddQuestion = () => {

    if (!newQuestion.title) {
      alert("Title required");
      return;
    }

    setQuestions([...questions, newQuestion]);

    setNewQuestion({
      title: "",
      description: "",
      language: "",
      concept: "",
      mockCategory: ""
    });

    alert("Mock Question Added 🚀");
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
  };

  const handleSave = () => {
    setEditingIndex(null);
    alert("Mock Question Updated ✅");
  };

  const handleDelete = (index: number) => {
    const updated = questions.filter((_, i) => i !== index);
    setQuestions(updated);
  };

  return (
    <section className="py-16 sm:py-20 bg-background">

      <div className="container mx-auto px-4 max-w-6xl">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Mock Question <span className="bg-gradient-primary bg-clip-text text-transparent">
              Manager
            </span>
          </h2>
        </div>

        {/* Add Question */}
        <Card className="mb-10 shadow-elegant border-0">

          <CardContent className="p-8 space-y-6">

            <h3 className="text-2xl font-semibold">
              Add Mock Question
            </h3>

            {/* Title */}
            <div>
              <label className="block mb-2 font-semibold">
                Title
              </label>

              <Input
                value={newQuestion.title}
                onChange={(e) =>
                  setNewQuestion({ ...newQuestion, title: e.target.value })
                }
                placeholder="Enter title"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block mb-2 font-semibold">
                Description
              </label>

              <Textarea
                rows={3}
                value={newQuestion.description}
                onChange={(e) =>
                  setNewQuestion({
                    ...newQuestion,
                    description: e.target.value
                  })
                }
                placeholder="Enter description"
              />
            </div>

            {/* Language Dropdown */}
            <div>
              <label className="block mb-2 font-semibold">
                Language
              </label>

              <Select
                value={newQuestion.language}
                onValueChange={(value) =>
                  setNewQuestion({ ...newQuestion, language: value })
                }
              >

                <SelectTrigger>
                  <SelectValue placeholder="Select Language" />
                </SelectTrigger>

                <SelectContent>

                  {languages.map((lang) => (
                    <SelectItem key={lang} value={lang}>
                      {lang}
                    </SelectItem>
                  ))}

                </SelectContent>

              </Select>

            </div>

            {/* Concept Dropdown */}
            <div>
              <label className="block mb-2 font-semibold">
                Concept
              </label>

              <Select
                value={newQuestion.concept}
                onValueChange={(value) =>
                  setNewQuestion({ ...newQuestion, concept: value })
                }
              >

                <SelectTrigger>
                  <SelectValue placeholder="Select Concept" />
                </SelectTrigger>

                <SelectContent>

                  {concepts.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}

                </SelectContent>

              </Select>

            </div>

            {/* Category */}
            <div>
              <label className="block mb-2 font-semibold">
                Mock Category
              </label>

              <Input
                value={newQuestion.mockCategory}
                onChange={(e) =>
                  setNewQuestion({
                    ...newQuestion,
                    mockCategory: e.target.value
                  })
                }
                placeholder="Enter category"
              />

            </div>

            <Button variant="hero" onClick={handleAddQuestion}>
              Add Question
            </Button>

          </CardContent>

        </Card>

        {/* Question List */}

        <div className="grid md:grid-cols-2 gap-8">

          {questions.map((q, index) => (

            <Card
              key={index}
              ref={ref}
              className={`shadow-elegant border-0 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >

              <CardContent className="p-6 space-y-4">

                <Input
                  disabled={editingIndex !== index}
                  value={q.title}
                  onChange={(e) => {
                    const updated = [...questions];
                    updated[index].title = e.target.value;
                    setQuestions(updated);
                  }}
                />

                <Textarea
                  disabled={editingIndex !== index}
                  rows={3}
                  value={q.description}
                  onChange={(e) => {
                    const updated = [...questions];
                    updated[index].description = e.target.value;
                    setQuestions(updated);
                  }}
                />

                <div className="text-sm">
                  <b>Language:</b> {q.language}
                </div>

                <div className="text-sm">
                  <b>Concept:</b> {q.concept}
                </div>

                <div className="text-sm">
                  <b>Category:</b> {q.mockCategory}
                </div>

                <div className="flex gap-3">

                  {editingIndex === index ? (
                    <>
                      <Button variant="hero" onClick={handleSave}>
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
                        variant="secondary"
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

export default MockQuestionManager;