import { useEffect, useState } from "react";
import { WEBAPI_DOTNET_URL } from "@/lib/utils";
import Student from "./entities/Student";
import Test from "./entities/Test";


export default function AssignAssessment() {

  const [students, setStudents] = useState<Student[]>([]);
  const [tests, setTests] = useState<Test[]>([]);

  const [status, setStatus] = useState("");
  const [searchStudent, setSearchStudent] = useState("");
  const [searchTest, setSearchTest] = useState("");

  const [selectedStudents, setSelectedStudents] = useState<number[]>([]);
  const [selectedTest, setSelectedTest] = useState<number | null>(null);
  const [isStudentListOpen, setIsStudentListOpen] = useState(false);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const getCurrentSchedule = () => {
    const now = new Date();
    return {
      date: now.toISOString().split("T")[0],
      time: now.toTimeString().slice(0, 5)
    };
  };
 
  useEffect(() => {
    const currentSchedule = getCurrentSchedule();

    setDate(currentSchedule.date);
    setTime(currentSchedule.time);
  }, []);

  const [step, setStep] = useState(0);

  useEffect(() => {
    fetchStudents();
    fetchTests();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await fetch(`${WEBAPI_DOTNET_URL}/Assessment/students`);
      const data = await res.json();
      setStudents(Array.isArray(data) ? data : []);
    } catch {
      setStudents([]);
    }
  };

  const fetchTests = async () => {
    try {
      const res = await fetch(`${WEBAPI_DOTNET_URL}/Assessment/tests`);
      const data = await res.json();
      setTests(Array.isArray(data) ? data : []);
    } catch {
      setTests([]);
    }
  };

  const toggleStudent = (id: number) => {
    setSelectedStudents(prev =>
      prev.includes(id)
        ? prev.filter(x => x !== id)
        : [...prev, id]
    );
  };

  const filteredStudents = students.filter(s =>
    (s?.fullName ?? "").toLowerCase().includes(searchStudent.toLowerCase())
  );

  const filteredTests = tests.filter(t =>
    (t?.title ?? "").toLowerCase().includes(searchTest.toLowerCase())
  );

  const handleAssign = async () => {
    try {
      if (!selectedTest) {
        alert("Please select test");
        return;
      }

      if (status !== "Cancelled" && selectedStudents.length === 0) {
        alert("Please select students and test");
        return;
      }

      if (status === "Cancelled") {
        const res = await fetch(
          `${WEBAPI_DOTNET_URL}/Assessment/cancel/test/${selectedTest}`,
          { method: "POST" }
        );

        if (!res.ok) {
          const errorData = await res.text();
          let message = "Failed to cancel assessment";
          try {
            const jsonErr = JSON.parse(errorData);
            message = jsonErr.message || message;
          } catch {
            message = errorData || message;
          }
          throw new Error(message);
        }

        const result = await res.json();
        const cancelledCount = Number(result.cancelledCount ?? 0);
        alert(result.message || `Assessment cancellation successfully done. ${cancelledCount} record(s) updated.`);
        reset();
        return;
      }

      // Ensure property names match the backend DTO (camelCase vs PascalCase)
      const dto = {
        StudentIds: selectedStudents,
        TestId: selectedTest,
        ScheduledAt: new Date(`${date}T${time}:00`).toISOString(),
        Status: status
      };

      const res = await fetch(
        `${WEBAPI_DOTNET_URL}/Assessment/assigned`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dto)
        }
      );
      
      if (!res.ok) {
        const errorData = await res.text();
        let message = "Failed to assign assessment";
        try {
          const jsonErr = JSON.parse(errorData);
          message = jsonErr.message || "Server Error";
        } catch {
          message = errorData || message;
        }
        throw new Error(message);
      }

      alert("Assessment Assigned Successfully");
      reset();

    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : "Failed to assign assessment");
    }
  };

  const reset = () => {
    setStep(0);
    setStatus("");
    setSearchStudent("");
    setSearchTest("");
    setSelectedStudents([]);
    setSelectedTest(null);
    const currentSchedule = getCurrentSchedule();
    setDate(currentSchedule.date);
    setTime(currentSchedule.time);
  };

  return (
    <div className="h-screen bg-orange-50 flex justify-center p-6 overflow-hidden">
      <div className="w-full max-w-4xl">

        <h1 className="text-3xl font-bold mb-6 text-orange-600">
          Assign Assessment
        </h1>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-orange-200 space-y-6">
          {/* TEST SELECTION */}
          <section>
            <h2 className="text-lg font-bold mb-3 text-gray-800">1. Select Test</h2>
            <input
              placeholder="Search tests..."
              className="border p-2 w-full mb-3 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
              value={searchTest}
              onChange={(e) => setSearchTest(e.target.value)}
            />
            <div className="max-h-48 overflow-y-auto border rounded-md p-2">
              {filteredTests.map(t => (
                <label key={t.id} className={`flex items-center gap-3 p-3 mb-2 rounded-lg cursor-pointer transition ${selectedTest === t.id ? 'bg-orange-100 border-orange-400 border' : 'bg-gray-50 border border-transparent hover:bg-gray-100'}`}>
                  <input
                    type="radio"
                    name="test"
                    className="accent-orange-600"
                    checked={selectedTest === t.id}
                    onChange={() => setSelectedTest(t.id)}
                  />
                  <div>
                    <span className="font-semibold block">{t.title}</span>
                    <span className="text-xs text-gray-500">⏱ {t.duration} min | 🎯 {t.difficulty}</span>
                  </div>
                </label>
              ))}
            </div>
          </section>

          {/* STUDENT SELECTION */}
          <section className={status === "Cancelled" ? "opacity-50 pointer-events-none" : ""}>
            <h2 className="text-lg font-bold mb-3 text-gray-800">2. Select Students</h2>
            <div className="relative">
              <div 
                onClick={() => setIsStudentListOpen(!isStudentListOpen)}
                className="border p-2 w-full rounded-md bg-white flex flex-wrap gap-2 min-h-[42px] cursor-pointer focus-within:ring-2 focus-within:ring-orange-500"
              >
                {selectedStudents.length === 0 && (
                  <span className="text-gray-400">
                    {status === "Cancelled" ? "Students are not required for cancellation" : "Select Students..."}
                  </span>
                )}
                {selectedStudents.map(id => (
                  <span key={id} className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                    {students.find(s => s.id === id)?.fullName}
                    <button onClick={(e) => { e.stopPropagation(); toggleStudent(id); }} className="hover:text-orange-900 ml-1">×</button>
                  </span>
                ))}
              </div>
              {isStudentListOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-xl max-h-48 overflow-y-auto">
                {students.map(s => (
                  <div 
                    key={s.id} 
                    onClick={() => toggleStudent(s.id)}
                    className={`p-2 hover:bg-orange-50 cursor-pointer flex items-center gap-2 ${selectedStudents.includes(s.id) ? 'bg-orange-50 font-bold' : ''}`}
                  >
                    <input type="checkbox" checked={selectedStudents.includes(s.id)} readOnly className="accent-orange-600" />
                    <span className="text-sm">{s.fullName}</span>
                  </div>
                ))}
              </div>
              )}
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* STATUS SELECTION */}
            <section>
              <h2 className="text-lg font-bold mb-3 text-gray-800">3. Status</h2>
              <div className="flex gap-3">
                {["Assigned", "Cancelled"].map(s => (
                  <button
                    key={s}
                    onClick={() => setStatus(s)}
                    className={`flex-1 py-2 rounded-md border font-medium transition ${
                      status === s ? "bg-orange-600 text-white border-orange-600" : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </section>

            {/* SCHEDULE SELECTION */}
            <section>
              <h2 className="text-lg font-bold mb-3 text-gray-800">4. Schedule</h2>
              <div className="flex gap-2">
                <input
                  type="date"
                  className="border p-2 flex-1 rounded-md outline-none focus:ring-2 focus:ring-orange-500"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="time"
                  className="border p-2 flex-1 rounded-md outline-none focus:ring-2 focus:ring-orange-500"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </section>
          </div>

          {/* ACTION BUTTONS */}
          <div className="pt-6 border-t flex gap-4">
            <button
              onClick={handleAssign}
              disabled={!selectedTest || !status || (status !== "Cancelled" && selectedStudents.length === 0) || !date || !time}
              className="flex-[2] bg-orange-600 text-white py-3 rounded-lg font-bold text-lg shadow-md hover:bg-orange-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "Cancelled" ? "Confirm Cancellation" : "Assign Assessment"}
            </button>
            <button
              onClick={reset}
              className="flex-1 border-2 border-gray-300 text-gray-600 py-3 rounded-lg font-bold hover:bg-gray-50 transition"
            >
              Reset
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
