import { useState } from "react";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { Code, Trash2, Edit, Plus } from "lucide-react";

const CodeSnippet = () => {

  const languages = ["Java", "JavaScript", "Python", "C#", "SQL"];

  const [snippets, setSnippets] = useState([
    {
      id: 1,
      language: "Java",
      starter_code: `public class Solution {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`
    }
  ]);

  const [language, setLanguage] = useState("Java");
  const [starterCode, setStarterCode] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  const [showForm, setShowForm] = useState(false);

  const handleSave = () => {

    if (editId !== null) {

      setSnippets(
        snippets.map((s) =>
          s.id === editId ? { ...s, language, starter_code: starterCode } : s
        )
      );

    } else {

      const newSnippet = {
        id: Date.now(),
        language,
        starter_code: starterCode
      };

      setSnippets([...snippets, newSnippet]);

    }

    setStarterCode("");
    setLanguage("Java");
    setEditId(null);
    setShowForm(false);
  };

  const handleEdit = (snippet: any) => {
    setLanguage(snippet.language);
    setStarterCode(snippet.starter_code);
    setEditId(snippet.id);
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    setSnippets(snippets.filter((s) => s.id !== id));
  };

  return (
    <section className="py-16 sm:py-24 bg-background min-h-screen">

      <div className="container mx-auto px-4 max-w-5xl">

        <Card className="border-0 shadow-elegant overflow-hidden">

          <div className="bg-gradient-hero p-6 sm:p-10">

            <CardContent className="space-y-8">

              {/* Heading */}
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">
                  <Code className="w-7 h-7 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">
                    Code Snippet Manager
                  </h2>
                </div>

                {!showForm && (
                  <Button onClick={() => setShowForm(true)}>
                    <Plus className="w-4 h-4 mr-1" />
                    Add Snippet
                  </Button>
                )}

              </div>

              {/* FORM VIEW */}
              {showForm && (

                <div className="space-y-6">

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Select Language
                    </label>

                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="w-full h-11 px-4 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary"
                    >
                      {languages.map((lang) => (
                        <option key={lang}>{lang}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Starter Code
                    </label>

                    <textarea
                      rows={10}
                      value={starterCode}
                      onChange={(e) => setStarterCode(e.target.value)}
                      className="w-full p-4 rounded-lg border border-border bg-background font-mono text-sm focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="flex gap-4 justify-center pt-4">

                    <Button variant="hero" size="lg" onClick={handleSave}>
                      {editId ? "Update Snippet" : "Save Snippet"}
                    </Button>

                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => {
                        setShowForm(false);
                        setEditId(null);
                        setStarterCode("");
                      }}
                    >
                      Cancel
                    </Button>

                  </div>

                </div>

              )}

              {/* LIST VIEW */}
              {!showForm && (

                <div className="space-y-6">

                  <h3 className="text-xl font-semibold text-foreground">
                    Saved Code Snippets
                  </h3>

                  {snippets.map((snippet, index) => (

                    <Card
                      key={snippet.id}
                      className="border border-border bg-background shadow-sm"
                    >

                      <CardContent className="p-5 space-y-3">

                        <p className="font-semibold text-foreground">
                          Snippet {index + 1} ({snippet.language})
                        </p>

                        <pre className="bg-muted p-3 rounded-md text-sm overflow-auto">
{snippet.starter_code}
                        </pre>

                        <div className="flex gap-3">

                          <Button
                            size="sm"
                            onClick={() => handleEdit(snippet)}
                          >
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </Button>

                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleDelete(snippet.id)}
                          >
                            <Trash2 className="w-4 h-4 mr-1" />
                            Delete
                          </Button>

                        </div>

                      </CardContent>

                    </Card>

                  ))}

                </div>

              )}

            </CardContent>

          </div>

        </Card>

      </div>

    </section>
  );
};

export default CodeSnippet;