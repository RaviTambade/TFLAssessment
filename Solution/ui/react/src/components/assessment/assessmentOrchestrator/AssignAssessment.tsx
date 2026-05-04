import { useEffect, useState } from "react";
import { WEBAPI_DOTNET_URL } from "@/lib/utils";

export default function AssignAssessment() {

  const [students, setStudents] = useState<any[]>([]);
  const [tests, setTests] = useState<any[]>([]);

  const [status, setStatus] = useState("");
  const [searchStudent, setSearchStudent] = useState("");
  const [searchTest, setSearchTest] = useState("");

  const [selectedStudents, setSelectedStudents] = useState<number[]>([]);
  const [selectedTest, setSelectedTest] = useState<number | null>(null);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

 
  useEffect(() => {
    const now = new Date();
    const isoDate = now.toISOString().split("T")[0];
    const isoTime = now.toTimeString().slice(0,5);

    setDate(isoDate);
    setTime(isoTime);
  }, []);

  const [step, setStep] = useState(0);

  useEffect(() => {
    fetchStudents();
    fetchTests();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await fetch("${WEBAPI_DOTNET_URL}/Assessment/students");
      const data = await res.json();
      setStudents(Array.isArray(data) ? data : []);
    } catch {
      setStudents([]);
    }
  };

  const fetchTests = async () => {
    try {
      const res = await fetch("${WEBAPI_DOTNET_URL}/Assessment/tests");
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
      if (selectedStudents.length === 0 || !selectedTest) {
        alert("Please select students and test");
        return;
      }

      const dto = {
        studentIds: selectedStudents,
        testId: selectedTest,
        scheduledAt: new Date(`${date}T${time}:00`).toISOString(),
        status
      };

      const res = await fetch(
        `${WEBAPI_DOTNET_URL}/Assessment/assigned`,
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
      alert(err.message);
    }
  };

  const reset = () => {
    setStep(0);
    setStatus("");
    setSearchStudent("");
    setSearchTest("");
    setSelectedStudents([]);
    setSelectedTest(null);
    setDate("");
    setTime("");
  };

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

        {/*STATUS */}
        {step === 1 && (
          <div className="bg-white p-5 rounded shadow border border-orange-200">
            <h2 className="font-bold mb-3">Select Status</h2>

            <div className="flex gap-3 mb-4">
              {["Pending", "Assigned", "Completed", "Cancelled"].map(s => (
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
              className="bg-orange-600 text-white w-full py-2 rounded"
            >
              Next
            </button>
          </div>
        )}

        {/*TEST */}
        {step === 2 && (
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
                <label key={t.id} className="flex flex-col border p-3 mb-2 rounded">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="test"
                      checked={selectedTest === t.id}
                      onChange={() => setSelectedTest(t.id)}
                    />
                    <span className="font-semibold">{t.title}</span>
                  </div>

                  <div className="text-sm text-gray-600 ml-6 mt-1">
                    ⏱ Duration: {t.duration} min
                  </div>

                  {t.difficulty && (
                    <div className="text-sm ml-6">
                      🎯 Difficulty: <span className="font-medium">{t.difficulty}</span>
                    </div>
                  )}

                  {t.description && (
                    <div className="text-sm text-gray-500 ml-6 mt-1">
                      {t.description}
                    </div>
                  )}
                </label>
              ))}
            </div>

            <button
              onClick={() => setStep(3)}
              disabled={!selectedTest}
              className="bg-orange-600 text-white w-full mt-3 py-2 rounded"
            >
              Next
            </button>
          </div>
        )}

        {/*STUDENTS */}
        {step === 3 && (
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
                    type="checkbox"
                    checked={selectedStudents.includes(s.id)}
                    onChange={() => toggleStudent(s.id)}
                  />
                  {s.fullName}
                </label>
              ))}
            </div>

            <button
              onClick={() => setStep(4)}
              disabled={selectedStudents.length === 0}
              className="bg-orange-600 text-white w-full mt-3 py-2 rounded"
            >
              Next
            </button>
          </div>
        )}

        {/*SCHEDULE */}
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

        {/*SUMMARY */}
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
