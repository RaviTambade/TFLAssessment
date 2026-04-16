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
  SelectValue,
} from "../../ui/select";

interface Problem {
  title: string;
  description: string;
  runtime: string;
  technology: string;
  concept: string;
  inputFormat: string;
}

const ProblemForm = ({
  problem,
  onSave,
  onCancel,
}: {
  problem: Problem;
  onSave: (p: Problem) => void;
  onCancel: () => void;
}) => {
  const [form, setForm] = useState(problem);

  return (
    <div className="py-20 bg-orange-50">
      <div className="max-w-5xl mx-auto px-4">

        <Card className="border border-orange-200 shadow-lg">
          <CardContent className="p-8 space-y-6">

            <h3 className="text-2xl font-semibold text-orange-600">
              {problem.title ? "Edit Problem Statement" : "Add Problem Statement"}
            </h3>

            <div>
              <label className="block mb-2 font-semibold">Title</label>
              <Input
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Description</label>
              <Textarea
                rows={3}
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">

              <div>
                <label className="block mb-2 font-semibold">Select Runtime</label>
                <Select
                  onValueChange={(v) => setForm({ ...form, runtime: v })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose runtime" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="node">NodeJS Runtime</SelectItem>
                    <SelectItem value="java">Java Runtime</SelectItem>
                    <SelectItem value="python">Python Runtime</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block mb-2 font-semibold">Select Technology</label>
                <Select
                  onValueChange={(v) =>
                    setForm({ ...form, technology: v })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose technology" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="javascript">JavaScript</SelectItem>
                    <SelectItem value="java">Java</SelectItem>
                    <SelectItem value="python">Python</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block mb-2 font-semibold">Select Concept</label>
                <Select
                  onValueChange={(v) =>
                    setForm({ ...form, concept: v })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose concept" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="arrays">Arrays</SelectItem>
                    <SelectItem value="strings">Strings</SelectItem>
                    <SelectItem value="loops">Loops</SelectItem>
                    <SelectItem value="recursion">Recursion</SelectItem>
                  </SelectContent>
                </Select>
              </div>

            </div>

            <div>
              <label className="block mb-2 font-semibold">Input Format</label>
              <Textarea
                rows={2}
                value={form.inputFormat}
                onChange={(e) =>
                  setForm({ ...form, inputFormat: e.target.value })
                }
              />
            </div>

            <div className="flex gap-4">

              <Button
                className="bg-orange-600 text-white"
                onClick={() => onSave(form)}
              >
                Save
              </Button>

              <Button variant="outline" onClick={onCancel}>
                Cancel
              </Button>

            </div>

          </CardContent>
        </Card>

      </div>
    </div>
  );
};

/* ---------------- MAIN COMPONENT ---------------- */

const ProblemStatementManager = () => {

  const emptyProblem: Problem = {
    title: "",
    description: "",
    runtime: "",
    technology: "",
    concept: "",
    inputFormat: "",
  };

  const [mode, setMode] = useState<"list" | "add" | "edit">("list");

  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const [problems, setProblems] = useState<Problem[]>([
    {
      title: "Reverse String",
      description: "Reverse the input string",
      runtime: "node",
      technology: "javascript",
      concept: "strings",
      inputFormat: "Single string input",
    },
  ]);

  /* SAVE */

  const saveProblem = (problem: Problem) => {

    if (mode === "add") {
      setProblems([...problems, problem]);
    }

    if (mode === "edit" && editingIndex !== null) {
      const updated = [...problems];
      updated[editingIndex] = problem;
      setProblems(updated);
    }

    setMode("list");
    setEditingIndex(null);
  };

  /* SWITCH MODES */

  if (mode === "add") {
    return (
      <ProblemForm
        problem={emptyProblem}
        onSave={saveProblem}
        onCancel={() => setMode("list")}
      />
    );
  }

  if (mode === "edit" && editingIndex !== null) {
    return (
      <ProblemForm
        problem={problems[editingIndex]}
        onSave={saveProblem}
        onCancel={() => setMode("list")}
      />
    );
  }

  /* ---------------- LIST VIEW ---------------- */

  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-6xl mx-auto px-4">

        <div className="flex justify-between items-center mb-10">

          <h2 className="text-4xl font-bold">
            Problem <span className="text-orange-600">Statements</span>
          </h2>

          <Button
            className="bg-orange-600 text-white"
            onClick={() => setMode("add")}
          >
            Add Problem
          </Button>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {problems.map((p, index) => (
            <Card key={index} className="border border-orange-200 shadow-lg">
              <CardContent className="p-6 space-y-4">

                <h3 className="text-xl font-semibold">{p.title}</h3>

                <p className="text-gray-600">{p.description}</p>

                <div className="text-sm text-gray-500">
                  {p.runtime} • {p.technology} • {p.concept}
                </div>

                <div className="flex gap-3">

                  <Button
                    className="bg-orange-500 text-white"
                    onClick={() => {
                      setEditingIndex(index);
                      setMode("edit");
                    }}
                  >
                    Edit
                  </Button>

                  <Button variant="destructive">
                    Delete
                  </Button>

                </div>

              </CardContent>
            </Card>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProblemStatementManager;