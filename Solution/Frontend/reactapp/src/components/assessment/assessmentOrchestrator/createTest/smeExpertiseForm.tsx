import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";
import { Button } from "../../../ui/button";
import { WEBAPI_DOTNET_URL } from "@/lib/utils";
 
const options = {
  runtime: ["Node.js", "JVM", ".NET", "Python Runtime", "Go"],
  framework: ["React", "Angular", "Spring Boot", "Express"],
  layer: ["Frontend", "Backend", "Database", "DevOps"],
  language: ["JavaScript", "TypeScript", "Java", "Python", "C#"],
};
 
const sections = [
  { key: "runtime", title: "Select Runtime" },
  { key: "framework", title: "Select Framework" },
  { key: "layer", title: "Select Layer" },
  { key: "language", title: "Select Language" },
];
 
const SMEExpertiseForm = () => {
 
  const [form, setForm] = useState({
    runtime: "Node.js",
    framework: "Angular",
    layer: "Frontend",
    language: "TypeScript",
  });
 
  // =========================
  // HANDLE CHANGE
  // =========================
  const handleChange = (
    field: string,
    value: string
  ) => {
 
    const updatedForm = {
      ...form,
      [field]: value,
    };
 
    setForm(updatedForm);
 
    console.log(
      "Updated SME expertise form:",
      updatedForm
    );
  };
 
  // =========================
  // SAVE API
  // =========================
  const handleSave = async () => {
 
    try {
 
      const smeId =
        localStorage.getItem("smeId");
 
      const payload = {
        user_roles_id: Number(smeId),
        runtime: form.runtime,
        framework: form.framework,
        layer: form.layer,
        language: form.language,
      };
 
      console.log(
        "Sending Payload:",
        payload
      );
 
      const response = await fetch(`${WEBAPI_DOTNET_URL}/Expertise/expertise`,
        {
          method: "POST",
 
          headers: {
            "Content-Type":
              "application/json",
          },
 
          body: JSON.stringify(payload),
        }
      );
 
      const data = await response.json();
 
      console.log(
        "API Response:",
        data
      );
 
      alert(
        "Expertise Saved Successfully"
      );
 
    } catch (error) {
 
      console.error(
        "Save Error:",
        error
      );
 
      alert("Failed To Save");
    }
  };
 
  return (
    <div className="w-full max-w-8xl mx-auto p-6">
 
      <Card className="border-0 shadow-soft ring-1 ring-slate-200 griditem-4">
 
        <CardHeader className="border-b border-slate-100 bg-slate-50/50">
 
          <CardTitle className="text-2xl font-bold text-slate-900">
            SME Expertise Selection
          </CardTitle>
 
        </CardHeader>
 
        <CardContent className="p-8">
 
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
 
            {sections.map(({ key, title }) => (
 
              <div
                key={key}
                className="space-y-4"
              >
 
                <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                  {title}
                </h3>
 
                <div className="grid grid-cols-1 gap-2">
 
                  {options[
                    key as keyof typeof options
                  ].map((option) => (
 
                    <label
                      key={option}
                      className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                        form[
                          key as keyof typeof form
                        ] === option
                          ? "bg-red-50 border-red-200 ring-1 ring-red-200"
                          : "bg-white border-slate-200 hover:border-red-200 hover:bg-slate-50"
                      }`}
                    >
 
                      <input
                        type="radio"
                        name={key}
                        value={option}
                        checked={
                          form[
                            key as keyof typeof form
                          ] === option
                        }
                        onChange={(e) =>
                          handleChange(
                            key,
                            e.target.value
                          )
                        }
                        className="h-4 w-4 accent-red-600"
                      />
 
                      <span className="text-slate-700 font-medium">
                        {option}
                      </span>
 
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
 
          <div className="mt-10 pt-6 border-t border-slate-100 flex gap-4">
 
            <Button
              className="flex-1 bg-red-600 hover:bg-red-700 text-white py-6 text-lg"
              onClick={handleSave}
            >
              Save Expertise
            </Button>
 
            <Button
              variant="outline"
              className="flex-1 py-6 text-lg"
              onClick={() =>
                setForm({
                  runtime: "",
                  framework: "",
                  layer: "",
                  language: "",
                })
              }
            >
              Reset
            </Button>
 
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
 
export default SMEExpertiseForm;
 