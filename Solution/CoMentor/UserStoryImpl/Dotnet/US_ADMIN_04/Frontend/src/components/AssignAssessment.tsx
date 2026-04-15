import { useEffect, useState } from "react";

export default function AssignAssessment() {

  const [students, setStudents] = useState<any[]>([]);
  const [tests, setTests] = useState<any[]>([]);

  const [status, setStatus] = useState("");
  const [searchStudent, setSearchStudent] = useState("");
  const [searchTest, setSearchTest] = useState("");

  // ✅ CHANGED: multiple students
  const [selectedStudents, setSelectedStudents] = useState<number[]>([]);

  const [selectedTest, setSelectedTest] = useState<number | null>(null);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [step, setStep] = useState(0);

  /* ================= FETCH ================= */

  useEffect(() => {
    fetchStudents();
    fetchTests();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await fetch("http://localhost:5091/api/AssessmentAssign/students");
      const data = await res.json();
      setStudents(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Student API error", err);
      setStudents([]);
    }
  };

  const fetchTests = async () => {
    try {
      const res = await fetch("http://localhost:5091/api/AssessmentAssign/tests");
      const data = await res.json();
      setTests(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Test API error", err);
      setTests([]);
    }
  };

  /* ================= TOGGLE STUDENTS (NEW) ================= */

  const toggleStudent = (id: number) => {
    setSelectedStudents(prev =>
      prev.includes(id)
        ? prev.filter(x => x !== id)
        : [...prev, id]
    );
  };

  /* ================= FILTER ================= */

  const filteredStudents = students.filter(s =>
    (s?.fullName ?? "").toLowerCase().includes(searchStudent.toLowerCase())
  );

  const filteredTests = tests.filter(t =>
    (t?.title ?? "").toLowerCase().includes(searchTest.toLowerCase())
  );

  /* ================= SUBMIT ================= */

  const handleAssign = async () => {
    try {
      if (selectedStudents.length === 0 || !selectedTest) {
        alert("Please select students and test");
        return;
      }

      const dto = {
        studentIds: selectedStudents,   // ✅ CHANGED
        testId: selectedTest,
        scheduledAt: new Date(`${date}T${time}:00`).toISOString(),
        status
      };

      const res = await fetch(
        "http://localhost:5091/api/AssessmentAssign/assigned",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dto)
        }
      );

      const text = await res.text();

      if (!res.ok) throw new Error(text);

      alert("Assessment Assigned Successfully");
      reset();

    } catch (err: any) {
      console.error("Assign Error:", err.message);
      alert(err.message);
    }
  };

  /* ================= RESET ================= */

  const reset = () => {
    setStep(0);
    setStatus("");
    setSearchStudent("");
    setSearchTest("");
    setSelectedStudents([]); // ✅ CHANGED
    setSelectedTest(null);
    setDate("");
    setTime("");
  };

  /* ================= UI ================= */

  return (
    <div className="min-h-screen bg-orange-50 flex justify-center p-6">
      <div className="w-full max-w-2xl">

        <h1 className="text-3xl font-bold mb-6 text-orange-600">
          Assign Assessment
        </h1>

        {/* START */}
        {step === 0 && (
          <button
            onClick={() => setStep(1)}
            className="bg-orange-600 text-white px-6 py-3 rounded shadow"
          >
            + Assign Assessment
          </button>
        )}

        {/* STEP 1 */}
        {step === 1 && (
          <div className="bg-white p-5 rounded shadow border border-orange-200">
            <h2 className="font-bold mb-3">Select Status</h2>

            <div className="flex gap-3 mb-4">
              {["Created", "Assigned", "Cancelled"].map(s => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  className={`px-4 py-2 rounded-full border ${
                    status === s ? "bg-orange-600 text-white" : ""
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={!status}
              className="bg-orange-600 text-white w-full py-2 rounded disabled:bg-gray-300"
            >
              Next
            </button>
          </div>
        )}

        {/* STEP 2 - STUDENTS (MULTI SELECT) */}
        {step === 2 && (
          <div className="bg-white p-5 mt-4 rounded shadow border border-orange-200">

            <h2 className="font-bold mb-2">Select Students</h2>

            <input
              placeholder="Search students..."
              className="border p-2 w-full mb-3"
              value={searchStudent}
              onChange={(e) => setSearchStudent(e.target.value)}
            />

            <div className="max-h-60 overflow-y-auto">
              {filteredStudents.map(s => (
                <label key={s.id} className="flex gap-2 border p-2 mb-2 rounded">
                  <input
                    type="checkbox"   // ✅ CHANGED
                    checked={selectedStudents.includes(s.id)}
                    onChange={() => toggleStudent(s.id)}
                  />
                  {s.fullName}
                </label>
              ))}
            </div>

            <button
              onClick={() => setStep(3)}
              disabled={selectedStudents.length === 0} // ✅ CHANGED
              className="bg-orange-600 text-white w-full mt-3 py-2 rounded"
            >
              Next
            </button>
          </div>
        )}

        {/* STEP 3 - TEST */}
        {step === 3 && (
          <div className="bg-white p-5 mt-4 rounded shadow border border-orange-200">

            <h2 className="font-bold mb-2">Select Test</h2>

            <input
              placeholder="Search tests..."
              className="border p-2 w-full mb-3"
              value={searchTest}
              onChange={(e) => setSearchTest(e.target.value)}
            />

            <div className="max-h-60 overflow-y-auto">
              {filteredTests.map(t => (
                <label key={t.id} className="flex gap-2 border p-2 mb-2 rounded">
                  <input
                    type="radio"
                    name="test"
                    checked={selectedTest === t.id}
                    onChange={() => setSelectedTest(t.id)}
                  />
                  {t.title} ({t.duration} min)
                </label>
              ))}
            </div>

            <button
              onClick={() => setStep(4)}
              disabled={!selectedTest}
              className="bg-orange-600 text-white w-full mt-3 py-2 rounded"
            >
              Next
            </button>
          </div>
        )}

        {/* STEP 4 - SCHEDULE */}
        {step === 4 && (
          <div className="bg-white p-5 mt-4 rounded shadow border border-orange-200">

            <h2 className="font-bold mb-3">Schedule</h2>

            <input
              type="date"
              className="border p-2 w-full mb-2"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <input
              type="time"
              className="border p-2 w-full"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />

            <button
              onClick={() => setStep(5)}
              disabled={!date || !time}
              className="bg-orange-600 text-white w-full mt-3 py-2 rounded"
            >
              Next
            </button>
          </div>
        )}

        {/* STEP 5 - SUMMARY */}
        {step === 5 && (
          <div className="bg-white p-5 mt-4 rounded shadow border border-orange-200">

            <h2 className="text-xl font-bold text-orange-600 mb-3">
              Summary
            </h2>

            <p><b>Status:</b> {status}</p>
            <p><b>Date:</b> {date}</p>
            <p><b>Time:</b> {time}</p>

            <p className="mt-3 font-semibold">Students:</p>
            <p>
              {students
                .filter(s => selectedStudents.includes(s.id))
                .map(s => s.fullName)
                .join(", ")}
            </p>

            <p className="mt-3 font-semibold">Test:</p>
            <p>{tests.find(t => t.id === selectedTest)?.title}</p>

            <div className="flex gap-2 mt-5">
              <button
                onClick={handleAssign}
                className="bg-orange-600 text-white w-full py-2 rounded"
              >
                Assign Assessment
              </button>

              <button
                onClick={reset}
                className="border w-full py-2 rounded"
              >
                Cancel
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}